---
title: "[JS] MSW(Mock Service Worker, v 2.0) - API Mocking 하기 "
excerpt: "프론트 작업을 완료했는데 백엔드 API 작업이 늦어질 때"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["MSW", "Mock"]
last_modified_at: 2024-06-24T08:06:00-05:00
---

## 📄 MSW란?

[MSW](https://mswjs.io/)는 Mock Service Worker의 약자로 **API 모킹**을 위한 자바스크립트 라이브러리 입니다.

다음과 같은 상황에서 사용할 수 있습니다.

- 백엔드 API가 미완성일 경우 미리 로직을 구성해야할 때
- 특정 에러를 발생시켜 에러 핸들링 테스트 할 때 

MSW는 **Service Worker API**를 사용하여 브라우저에서 발생하는 네트워크 요청을 가로챕니다. 실제 서버 대신 가짜 응답을 만들어 프론트엔드 개발자가 API 테스트를 할 수 있는 환경을 만들어줍니다.

사내 프로젝트에서 API 전달이 늦어지며 프론트엔드에서 API 요청 로직을 미리 구현하고 테스트하기 위해 MSW를 도입했습니다. 미리 DTO를 전달받으면 추후 실제 API를 전달받았을 때 큰 공수없이 바로 API를 연결 할 수 있었습니다. 다만, 리액트 쿼리처럼 전역으로 설정을 해 예상치 못한 네트워크를 가로채는 상황을 피하기 위해 개발 환경에서만 사용하고 실제 릴리즈되는 브랜치에서는 사용하지 않았습니다.

<br />

## 📄MSW 설치 (Next.js App Router 환경 기준)

Next.js에서 MSW를 사용할 경우 클라이언트/서버 환경 모두 요구되는데, 글 작성 시점 기준 서버 사이드에서 msw과 매끄럽게 호환하는 방법이 없어 node 서버와 함께 사용합니다.

<div style="border-left: 5px solid #3498db; padding: 10px; background: #f0f8ff;">
<strong>ℹ️ Notice:</strong> Next.js에서 MSW를 사용할 경우 클라이언트/서버 환경 모두 요구되는데, 글 작성 시점 기준 서버 사이드에서 msw과 매끄럽게 호환하는 방법이 없어 node 서버와 함께 사용합니다.
</div>

### 1. 설치하기
```ts
$ npm install msw@latest --save-dev
```

### 2. public 폴더에 초기화
```ts
$ npx msw init public/ --save
```
- public 폴더에 설치
- **mockServiceWorker.js** 가 자동으로 생성
  - http 요청을 가로채 서버와의 통신을 모방한다.
- `--save` : package.json 에 등록되어 msw를 업데이트 할 때마다 자동으로 업데이트

<br />

## 📄 MSW 세팅

### 💾 src/mocks/browser.ts
```ts
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// This configures a Service Worker with the given request handlers.
const worker = setupWorker(...handlers);

export default worker;
```
- CSR 네트워크 요청용
- serviceWorker가 가로챈 브라우저 요청을 전달받는다.

### 💾 src/mocks/http.ts
```ts
import { createMiddleware } from '@mswjs/http-middleware';
import express from 'express';
import cors from 'cors';
import { handlers } from './handlers';

const app = express();
const port = 9090; // 서버 포트

app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200, credentials: true }));
app.use(express.json());
app.use(createMiddleware(...handlers));
app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
```
- SSR 네트워크 요청용 =  서버 컴포넌트에서 사용
- CSR만 사용할 경우 필수는 아님

### 💾 src/mocks/handler.ts
```ts
import {http, HttpResponse, StrictResponse} from 'msw'
import {faker} from "@faker-js/faker";

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}
const User = [
  {id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg'},
  {id: 'zerohch0', nickname: '제로초', image: '/5Udwvqim.jpg'},
  {id: 'leoturtle', nickname: '레오', image: faker.image.avatar()},
]
const Posts = [];

export const handlers = [
  http.post('/api/login', () => {
    console.log('로그인');
    return HttpResponse.json(User[1], {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
      }
    })
  }),
  http.post('/api/logout', () => {
    console.log('로그아웃');
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0'
      }
    })
  }),
// ...
];
```
* API 요청과 응답 정의

### 쿼리 파라미터 처리하기
```ts
 http.get('/test/search', async ({ request, params }) => {
        const url = new URL(request.url);
        const keword = url.searchParams.get('keyword');
        const page = Number(url.searchParams.get('page'));
        const size = Number(url.searchParams.get('size'));
        const totalCount = searchParams.length;
        const totalPages = Math.round(totalCount / size);


        return HttpResponse.json({
            result: 'SUCCESS',
            resultCode: 200,
            message: '성공',
            contents: test.slice(page * size, (page + 1) * size),
            pageNumber: page,
            pageSize: size,
            totalPages,
            totalCount,
            isLastPage: totalPages <= page,
            isFirstPage: page === 0,
        });

    })
```
* url 객체 생성 후 searchParams을 통해 처리합니다.

<br />

## 📄 MSW 서버 실행

### 1. package.json 스크립트 추가
```ts
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "mock": "npx tsx watch ./src/mocks/http.ts"
},
```
* watch : 서버 코드가 수정되면 자동으로 재시작

### 2. 실행
```ts
$ npm run mock
```
<br />

## 📄 MSW 사용 분기처리

### 💾 src\app\_component\MSWCoponent.tsx
```ts
"use client";
import { useEffect } from "react";

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
			 worker.start({ onUnhandledRequest: "bypass" }); // msw 핸들러로 요청하지 않은 request는 무시. console 경고를 없앨 수 있다
      }
    }
  }, []);

  return null;
};
```
* MSW는 개발환경에서만 사용한다

### 💾 env.local
```ts
NEXT_PUBLIC_API_MOCKING=enabled 
```
- 로컬 환경에서만 돌아가는 환경변수 파일
- 개발 환경에서만 읽어올 수 있는 브라우저 환경 변수를 설정하여 배포환경일때는 MSW를 사용하지 않는다.

### 💾 src\app\layout.tsx

```ts
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <MSWComponent /> // ✅
          {children}
        </div>
      </body>
    </html>
  );
}
```

## 출처

- Next.js + ReactQuery로 SNS 서비스 만들기 (인프런) 
