---
title: "[React] 리액트에서 컴포넌트 동적으로 불러오기 with React.lazy"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["React.lazy"]
last_modified_at: 2023-01-01T08:06:00-05:00
---

## 📄 React.lazy

**React.lazy**는 React에서 동적으로 컴포넌트 파일을 불러올 때 사용합니다.

규모가 큰 프로젝트의 경우 한 페이지에 수많은 컴포넌트를 `import`합니다.

정적으로 컴포넌트를 `import`한다면 첫 페이지를 로드하는 즉시 대규모 단일 Javascript번들이 사용자에게 전송됩니다.

따라서 동적으로 `import`하여 필요할때만 컴포넌트를 로드하는 작업을 할 수 있습니다.

## 📄 사용법

### ▪ React.lazy()

```js
const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));
```

- 불러오는 파일은 React 컴포넌트를 포함해야 합니다.
- `default export`를 가진 컴포넌트여야 합니다.

### ▪ Suspense

```js
const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);
```

- `fallback`: 컴포넌트가 로드될 때까지 기다리는 동안 보여줄 React 엘리먼트입니다.
- 하나의 `Suspense` 컴포넌트가 여러개의 `lazy`컴포넌트를 감쌀 수 있습니다.

> 이를 시작하기 좋은 장소는 라우트입니다. 웹 페이지를 불러오는 시간은 페이지 전환에 어느 정도 발생하며 대부분 페이지를 한번에 렌더링하기 때문에 사용자가 페이지를 렌더링하는 동안 다른 요소와 상호작용하지 않습니다.

## 출처

- [리액트 공식문서 - 코드 분할](https://ko.reactjs.org/docs/code-splitting.html)
