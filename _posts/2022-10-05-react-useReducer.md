---
title: "[React-React Hooks] useReducer"
excerpt: "리액트 내장 훅으로 state 관리하기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["React Hooks", "useReducer", "성능 최적화"]
last_modified_at: 2022-10-05T08:06:00-05:00
---

## 📄 useReducer

useReducer는 useState처럼 **State를 관리하고 업데이트 할 수 있는 Hook**입니다.

`useReducer`를 사용하면 컴포넌트 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있습니다.

## 📄 useReducer 구조
 
```js
const [number, dispath] = useReducer(reducer, initialState, init);

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
```

`action`이라는 객체를 기반으로 상태를 업데이트 한다.

- `dispath`: `reducer`함수를 실행시키고 `action`을 발생시킨다.
- `action`: 업데이트를 위한 정보를 가지고 있다.

## 출처

- 패스트캠퍼스 for velopert
