---
title: "immer 라이브러리를 통해 불변성 유지하기"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["immer", "불변성"]
last_modified_at: 2022-10-06T08:06:00-05:00
---

## 📄 immer

: 불변성을 해치는 코드를 작성해도 대신 **불변성 유지**를 해주는 라이브러리

`immer` 라이브러리를 사용하면 불변성을 유지하면서 새로운 객체를 만들 수 있습니다.

## 📄 React의 불변성

그렇다면 불변성은 무엇을 뜻하는 것일까요?

리액트에서 불변성은 **메모리 영역에서 값을 변경할 수 없다**는 뜻입니다.

자바스크립트는 원시타입과 참조타입의 값 저장방식이 다릅니다.

- **원시타입**( Boolean, String, Number, null, undefined, Symbol)
  - 콜스택의 value에 변수 값 저장
  - 변수 값이 변경되면 새로운 메모리 영역을 생성해 변경된 값 저장 (불변성 유지 o)
- **참조 타입** (Object, Array)
  - 콜스택의 value에 메모리 힙의 주소를 저장
  - 변수 값이 변경되면 새로운 메모리 영역을 생성하지 않고 (콜스택 변화 x), 메모리 힙의 value값만 변경 (불변성 유지 x)
  * 기존의 변수를 변경한 새로운 변수를 반환하는 경우(map, filter, spread operator...)에는 새로운 메모리 영역 생성 (불변성 유지 o)

리액트의 불변성을 지키면 어떤 것이 좋을까요?

리액트는 콜스택의 주소 값을 통해 상태 변화를 감지 하는 **얕은 비교**를 합니다.

- 원시타입은 불변성을 유지해 값이 변경되는 경우, 상태의 변화를 감지할 수 있습니다.
- 참조타입은 불변성이 유지되지 않는 경우, 리액트가 상태 변화를 감지할 수 없어 재렌더링되지 않습니다.

이렇게 보니 불변성을 유지하는 것은 꼭 필요해 보이네요.

## 📄 immer 사용하기

1. 커맨드창 혹은 터미널에서 `yarn add immer`를 입력해 라이브러리를 설치합니다.

2. `App.js`에 `import produce from 'immer'`를 입력해 해당 라이브러리를 `import`한다.

## 📄 immer 구조

```ts
const 변수 = produce(바꾸고 싶은 값, draft => {
  ...
});
```

- `draft`: 어떻게 바꿀지 알려주는 함수

## 📄 예시

```ts
import produce from "immer";

const state = {
  number: 1,
  donChangeMe: 2,
};

const nextState = produce(state, (draft) => {
  draft.number += 1;
});

nextState();
```

불변성을 지키지 않으면서 코드를 작성(참조 타입 사용)했지만 `produce`함수가 불변성을 유지해주고 있습니다.

## 참고

- 패스트캠퍼스 for velopert
