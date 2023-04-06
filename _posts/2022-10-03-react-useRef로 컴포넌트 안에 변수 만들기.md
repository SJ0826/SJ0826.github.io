---
title: "[React-React Hooks] useRef"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["React Hooks", "useRef", "성능 최적화"]
last_modified_at: 2022-10-03T08:06:00-05:00
---

## 📄 useRef로 특정 DOM 선택하기

리액트로 코드를 작성하다 보면 직접 DOM요소에 접근해야하는 경우가 있습니다.

`useRef`를 사용하며 특정 DOM요소에 접근할 수 있습니다.

```js
const nameInput = useRef(); // DOM 접근
```

변수 혹은 상수에 `useRef`를 호출하면 특정 객체가 생성됩니다.

```js
<input
  name="name"
  placeholder="이름"
  onChange={onChange}
  value={name}
  ref={nameInput} // useRef
/>
```

원하는 곳에 `useRef`를 호출해 변수를 지정합니다.

```js
const onReset = () => {
  // 초기화 기능
  setInputs({
    name: "",
    nickname: "",
  });
  nameInput.current.focus();
};
```

`onReset`함수를 호출하면 `nameInput`을 지정한 DOM요소에 접근하여 `focus`기능을 호출합니다.

## 📄 useRef로 컴포넌트 안의 변수 만들기

`useRef`는 DOM요소에 접근할 때도 사용하지만 어떤 값을 계속 기억하고 싶을 때도 사용합니다.

`useRef`로 만든 컴포넌트안의 변수는 변경되어도 리렌더링 되지 않습니다.

```js
function App() {
  ...

  const nextId = useRef(4);

  const onCreate = () => {

    console.log(nextId.current); // 4
    nextId.current += 1;
  }

  ...
}
```

`nextId`의 값이 변경되어도 컴포넌트가 리렌더링되지 않는다.

## 출처

- 패스트캠퍼스 for velopert
