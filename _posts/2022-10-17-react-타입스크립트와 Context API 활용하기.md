---
title: "[React with TypeScript] 타입스크립트와 Context API 활용하기"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["React", "TypeScript", "Context API", "null checking"]
last_modified_at: 2022-10-17T08:06:00-05:00
---

## 📄 타입스크립트와 Context API 활용하기

Context API를 사용할 때 `state`를 위한 Context와 `dispatch`를 위한 Context를 따로 만들어 줍니다.

이때 `dispatch`를 위한 타입을 설정하면 `dispatch`에서 리액트를 불러올 수 있습니다.

액션들의 타입을 `dispatch`의 `Generics`로 설정했습니다.

```ts
// 예시
type SampleDispatch = Dispatch<Action>;
```

```tsx
// src/SampleContext.tsx

import React, { useReducer, useContext, createContext, Dispatch } from "react";

// 필요한 타입들을 미리 선언

type Color = "red" | "orange" | "yellow";

// 상태를 위한 타입
type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

// 모든 액션들을 위한 타입
type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD" };

// 디스패치를 위한 타입 (Dispatch 를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch 의 Generics로 설정
type SampleDispatch = Dispatch<Action>;

// Context 만들기
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

// 리듀서
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.count, // count가 자동완성되며, number 타입인걸 알 수 있습니다.
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.text, // text가 자동완성되며, string 타입인걸 알 수 있습니다.
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.color, // color 가 자동완성되며 color 가 Color 타입인걸 알 수 있습니다.
      };
    case "TOGGLE_GOOD":
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error("Unhandled action");
  }
}

// SampleProvider 에서 useReduer를 사용하고
// SampleStateContext.Provider 와 SampleDispatchContext.Provider 로 children 을 감싸서 반환합니다.
export function SampleProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "hello",
    color: "red",
    isGood: true,
  });

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function useSampleState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error("Cannot find SampleProvider"); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error("Cannot find SampleProvider"); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
```

null체킹을 해주는 커스텀 훅을 만드는 것은 큰 의미가 있습니다.

null체킹을 하지 않으면 `useSampleState`의 결과값의 타입은 `State | null`이 됩니다.

하지만 커스텀 훅을 통해 null체킹을 해준다면 유효한 코드의 타입을 보장할 수 있습니다.

Context API에 타입스크립트를 적용하면
Context 안에 들어있는 상태를 조회할 때, 새로운 액션을 디스패치해야 할 때 자동완성이되어
개발 생산성을 높여줄 수 있습니다.

## 출처

- 패스트캠퍼스 for velopert
