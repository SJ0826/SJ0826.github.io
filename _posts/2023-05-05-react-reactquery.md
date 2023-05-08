---
title: "[React-Query 01] 쿼리 생성 및 로딩/에러 상태 관리하기"
excerpt: "유데미 리액트 쿼리 인강 듣고 정리한 기록"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["react-query"]
last_modified_at: 2023-05-05T08:06:00-05:00
---

![image](https://user-images.githubusercontent.com/56298540/236417752-b3d3dad8-8f8d-472b-b553-9254d4ff4ddc.png)

## 📄 리액트 쿼리 공부를 시작한 이유

프로젝트를 진행할 때, 상태관리를 위해 redux를 사용하는데 서버 데이터를 위한 로직이 과도하게 커져 상태를 관리하기가 어려웠습니다.

Redux-thunk를 사용하긴 했지만 이또한 store가 비대해져 한번에 관리하는게 맞는지 의문이 들었습니다.

그래서 리액트 쿼리를 이용해 서버에서 오는 데이터는 따로 관리해보고자 공부를 시작하게 되었습니다.

## 📄 리액트 쿼리란?

- 역할: **서버의 상태를 관리**하는 리액트 라이브러리

* 특징
  - 서버에서 오는 데이터 전송 결과에 따라 비동기 처리 로직이 가능하다.
  - 서버의 데이터에 변경이 생기면 클라이언트가 다시 데이터를 가져오지 않아도 알아서 업데이트 된다.
  * 데이터를 캐시해서 전달할 수 있다.
  - 데이터에 만료시간을 정할 수 있다. -> 만료되지 않은 데이터는 refetching해도 변경이 적용되지 않을 수 있게 설정할 수 있다.

## 📄 리액트 쿼리 개발자 도구 사용하기

- 방법: `QueryClientProvider`태그 안에 `ReactQueryDevtools`를 작성한다.

```js
function App() {
  return (
    // provide React Query client to App
    <QueryClientProvider client={qeuryClient}>
      <div className="App">
        <h1>Blog Posts</h1>
        <Posts />
      </div>
      <ReactQueryDevtools /> // 🎉
    </QueryClientProvider>
  );
}
```

`ReactQueryDevtools`를 추가하면 해당 태그가 있는 페이지의 위치에 리액트 쿼리 개발자 도구가 생성됩니다.

![image](https://user-images.githubusercontent.com/56298540/236421070-48da8913-b162-4769-8bae-7ea6a2b7e876.png)

개발자 도구를 통해 데이터가 서버로부터 로딩중인지, 만료된 데이터인지 등등 다양한 정보를 제공받고, Actions 탭에서는 데이터관련 작업을 실행할 수 있습니다.

## 📄 리액트 쿼리 시작하기

리액트 쿼리를 사용하기 위해서는 여느 상태관리 라이브러리처럼 최상단 컴포넌트인 App.jsx에서 Provider 컴포넌트를 설정해야 합니다.

- QueryClient: 캐싱기능과 기본 옵션을 자녀 컴포넌트에서도 사용할 수 있게 해준다.

```js
const qeuryClient = new QueryClient();

function App() {
  return (
    // provide React Query client to App
    <QueryClientProvider client={qeuryClient}>
      <div className="App">
        <h1>Blog Posts</h1>
        <Posts />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
```

## 📄 stale Time?

- 뜻: 리액트 쿼리가 가져오는 데이터의 만료 시간 (기본 값: 0)

🎲 key point | 데이터는 만료되었을 때만 리페칭이 가능하다.

리액트 쿼리는 만료 시간을 기본 값으로 0을 설정해 클라이언트가 만료된 데이터를 제공받을 가능성을 낮추어 줍니다.

만약 데이터의 만료시간을 5초로 설정했을 경우, 처음 데이터를 fetching 한 후 5초안에 데이터를 refetching했을 때 만료시간이 다 되지 않았으므로 데이터는 update되지 않습니다.

## 📄 로딩 상태와 에러상태 처리하기

리액트 쿼리로 서버의 데이터를 가져오기 위해 `useQeury`라는 키워드를 사용합니다.

- 인자 1: 쿼리 키 (`post`): 서버에서 가져오는 데이터에 이름을 부여
- 인자 2: 쿼리 함수 (`fetchPosts`): 서버에서 데이터를 가져오는 로직을 작성 (비동기)
- 인자 3: 옵션 (`{ staleTime: 2000}`): 만료시간을 2초로 설정

```js
const { data, isError, error, isLoading } = useQuery("posts", fetchPosts, {
  staleTime: 2000,
});
```

<h3>▪ 로딩 상태 처리하기</h3>

useQuery로 가져온 쿼리 데이터 posts를 구조분해해서 나온 isLoading을 활용하여 로딩이 되는 중이라면, `Loading...`을 화면에 보여줍니다.

```js
if (isLoading) return <h3>Loading...</h3>;
```

<h4>📌 isLoading과 isFetching의 차이점</h4>

- isFetching: 비동기 쿼리 함수가 해결되지 않았을 때 (데이터를 가져오는 중일 때)
- isLoading: 비동기 쿼리 함수가 해결되지 않았을 때 (데이터를 가져오는 중일 때) + 쿼리에 대해 캐시된 데이터가 없을 때 (isFetching의 하위 집합)

<h3>▪ 에러 상태 처리하기</h3>

리액트 쿼리는 데이터를 가져올 때 fetching이 성공될 때까지 **세번의 로딩 시도**후 안되면 에러라고 판단합니다.

```js
if (isError)
  return (
    <>
      <h3>Oops, something went wrong</h3>
      <p>{error.toString()}</p>
    </>
  );
```

## 참고

- [udemy - React Query: React로 서버 상태 관리하기](https://www.udemy.com/course/react-query-react/)
