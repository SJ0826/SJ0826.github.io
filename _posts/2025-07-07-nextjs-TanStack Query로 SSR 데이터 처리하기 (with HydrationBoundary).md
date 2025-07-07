---
title: "[Next.js 15] TanStack Query로 SSR 데이터 처리하기 (with HydrationBoundary)"
excerpt: "Next.js App Router + TanStack Query(TanStack) + Axios 조합으로 SSR과 클라이언트 캐시를 사용해보자!"
toc: true
toc_sticky: true
sidebar:
nav: "docs"

categories:
  - Nextjs
tags:
  - [
      "SSR",
      "서버 컴포넌트",
      "TanStack Query",
      "HydrationBoundary",
      "Axios"
    ]
last_modified_at: 2025-07-07T08:06:00-05:00
---
# ◾ 목표

이 포스팅은 Next.js App Router 환경에서 TanStack Query의 HydrationBoundary를 이용해 SSR 데이터를 처리하는 전체 흐름을 소개합니다. <br />
클라이언트 렌더링만 사용하던 기존 방식에서 벗어나, <span class="highlight-orange">서버에서 데이터를 미리 가져오고 클라이언트는 이를 캐싱하여 바로 렌더링</span>하는 구조를 만들어봅니다.
<br />
<br />

# ◾ 기술 스택
•	Next.js 14 (App Router 기반) <br />
•	Axios  <br />
•	TanStack Query (@tanstack/react-query)  <br />
•	TypeScript  <br />

<br />

# ◾ HydrationBoundary가 왜 필요할까?

React Query는 <span class="highlight-orange">클라이언트에서 동일한 데이터를 다시 요청하지 않고,</span> 서버에서 미리 패치한 데이터를 <span class="highlight-orange">캐시에 미리 넣어주는 작업</span>이 필요합니다. <br />
그 역할을 하는 것이 HydrationBoundary 입니다.

## 📌️ 작동방식 요약
1. 서버에서 queryClient.prefetchQuery() 로 데이터 요청
2. dehydrate()로 클라이언트로 전달할 상태 객체 생성
3. HydrationBoundary가 해당 상태를 클라이언트의 캐시에 주입
4. 클라이언트에서는 useQuery() 호출 시 이미 캐시된 데이터 반환 -> 네트워크 요청 X


<br />

# ◾️ HydrationBoundary를 사용해야 하는 상황

1. SSR에서 데이터를 미리 패치하고 싶을 때
   * 페이지가 서버에서 렌더링 되기 전에 데이터를 미리 불러오고 싶을 때
   * 서버에서 prefetchQuery() -> 클라이언트에선 useQuery() 호출 시 <span class="highlight-orange">자동 캐시 활용</span>
   * ex) 검색 결과 페이지, 뉴스 목록, 블로그 글 등 SEO가 중요한 콘텐츠
2. CSR 컴포넌트와 SSR 데이터를 함께 쓰고 싶을 때
   * 페이지 전체는 서버에서 렌더링 하되, 일부 컴포넌트는 CSR('use client')로 만들어야 하는 경우
   * 이때 HydrationBoundary로 데이터를 감싸면 클라이언트 컴포넌트에서도 서버에서 받아온 데이터를 그대로 재사용 가능
   * CSR 컴포넌트가 클라이언트에서 <span class="highlight-orange">불필요한 API 재호출 없이 즉시 렌더링</span>
3. 네트워크 요청을 줄이고 싶을 때
   * CSR에서는 useQuery()가 매번 실행되므로, 네트워크 요청이 많아질 수 있음
   * 서버에서 한번 요청하고 클라이언트에 하이드레이션하면 <span class="highlight-orange">중복 요청 방지</span>

<br />

# ◾ 장점 요약
* 퍼포먼스: CSR에서 API 요청하지 않아도 됨 (빠른 렌더링)
* SEO 최적화: SSR로 HTML에 데이터 포함되어 전송
* 코드 분리: 데이터 fetch는 서버, 화면 렌더링은 클라이언트로 분리 가능
* 캐시 공유: SSR -> CSR로 TanStack Query 캐시 자동 연결



<br />

# ◾ 직접 구현하기

## 1. QueryClient Provider.tsx 구성

React Query는 내부적으로 Context API를 기반으로 작동하며, `QueryClient`라는 객체를 통해 모든 쿼리 상태(데이터, 캐시, 로딩)를 관리합니다. <br />
따라서 이 `QueryClient`를 `QueryClientProvider`로 전역에 주입해줘야만 TanStack Query 기능들을 사용할 수 있습니다.

### QueryClient 생성 함수

```ts
function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 캐시 유효 시간: 1분
        refetchOnWindowFocus: false,  // ✅ 브라우저 탭 포커스 시 refetch 비활성화
        refetchOnReconnect: false,    // ✅ 네트워크 복구 시 refetch 비활성화
      },
    },
  });
}
```
<br />

**🔍 ️왜 기본 옵션을 비활성화할까?**

* refetchOnWindowFocus: 브라우저 탭 포커스 시 자동 재요청
  * UX 깜빡임 방지 및 불필요한 네트워크 요청 줄이기
* refetchOnReconnect: 네트워크 복구 시 자동 재요청
  * 불안정한 네트워크에서 반복 호출 방지

<br />

### CSR과 SSR 구분해서 QueryClient 가져오기

```ts
let browserQueryClient: QueryClient | null = null;

function getQueryClient() {
  if (isServer) {
    return createQueryClient(); // SSR에서는 항상 새로운 인스턴스를 생성
  }

  // CSR에서는 싱글톤으로 QueryClient 재사용
  if (!browserQueryClient) {
    browserQueryClient = createQueryClient();
  }

  return browserQueryClient;
}
```
<br />

**🔍 ️싱글톤(Singleton) 패턴이란?**
* <span class="highlight-orange">한번만 생성하고, 재사용하는 객체 생성 방식</span>
* CSR 환경에서는 싱글톤을 사용해야 <span class="highlight-orange">QueryClient 인스턴스가 공유</span>되어 React Query의 캐시가 유지됩니다.
* 새로 생성하면 캐시가 날아가므로 성능과 UX에 악영향을 줍니다.

<br />

### ReactQueryClientProvider 정의

```ts
export default function ReactQueryClientProvider({ children }: PropsWithChildren) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

<br />

### 최종 파일 
```ts
// src/providers/query-client.provider.tsx
'use client';

import { QueryClient, QueryClientProvider, isServer } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  });
}

let browserQueryClient: QueryClient | null = null;

function getQueryClient() {
  if (isServer) return createQueryClient();
  if (!browserQueryClient) browserQueryClient = createQueryClient();
  return browserQueryClient;
}

export default function ReactQueryClientProvider({ children }: PropsWithChildren) {
  const queryClient = getQueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
```

<br />

## 2. layout.tsx에서 Provider로 등록

```ts
// src/app/layout.tsx

import './globals.css';
import ReactQueryClientProvider from '@/providers/query-client.provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
```

<br />

## 3. Axios API 함수 작성
```ts
// src/services/use-get-posts.ts
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export interface IPostModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = async (): Promise<IPostModel[]> => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

export const useGetPosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    staleTime: 10 * 60 * 1000, // posts 데이터는 자주 바뀌지 않기 때문에 더 오래 캐시를 유지
  });
};
```
<br />

**🔍 staleTime이란?** 
* staleTime은 데이터가 신선한 상태(fresh)로 유지되는 시간입니다.
* staleTime이 지나면 해당 쿼리는 **stale(오래된 상태)**가 되며, 이후 이벤트(예: 리페치, 리포커스 등)에 따라 다시 fetch될 수 있습니다.

<br />

## 4. 클라이언트 컴포넌트 생성
```ts
// src/components/posts.tsx
'use client';

import { useGetPosts } from '@/services/use-get-posts';

export function Posts() {
  const { data: posts, isLoading } = useGetPosts();

  if (isLoading) return <p>로딩 중...</p>;

  return (
    <div>
      {posts?.map((post) => (
        <p key={post.id}>
          {post.id}) {post.title}
        </p>
      ))}
    </div>
  );
}
```
<br />

## 5. 서버 컴포넌트에서 HydrationBoundary 적용
```ts
// src/app/posts/page.tsx
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPosts } from '@/services/use-get-posts';
import { Posts } from '@/components/posts';

export default async function PostsPage() {
  const queryClient = new QueryClient(); 

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Posts />
    </HydrationBoundary>
  );
}
```

<br />

# ◾ 마무리

React Query의 HydrationBoundary를 활용하면, 서버에서 데이터를 미리 받아온 후 클라이언트에서 바로 렌더링하고, 중복 요청 없이 캐시를 활용할 수 있습니다.
Next.js App Router의 Server Component와 매우 잘 어울리는 방식이니, 성능 최적화나 SEO가 중요한 페이지라면 도입해서 사용하는 것을 추천드립니다.

# ◾ 참고
* [creating-server-components-with-tanstack-query-axios](https://medium.com/@efefurkankarakaya/creating-server-components-with-tanstack-query-axios-9abe88c0ca87)