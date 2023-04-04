---
title: "🚨 setStateAction 타입에러"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["에러", "setStateAction"]
header:
  teaser: assets\image\TS-logo.jpg
last_modified_at: 2023-02-27T08:06:00-05:00
---

## 🚨 에러 발생

todolist를 만드는데 궁금한 점이 생겼다.

```ts
const [createInput, setCreateInput] = useState("");

const onChangeCreateInput = (e: ChangeEvent<HTMLInputElement>) => {
  const value = e.target;
  setCreateInput(value);
  // Error: Argument of type 'EventTarget & HTMLInputElement' is not assignable to parameter of type 'SetStateAction<string>'.ts(2345)
};
```

`value`의 중괄호의 의미가 궁금해졌다.

중괄호를 사용하여 객체로 선언했을때는 에러가 안나는데 중괄호를 없애니까 에러가 발생했다.

해결을 위해 okky에 질문해보았다.

## ❔ 에러 원인

EventTarget & HTMLInputElement 타입의 전달 인자(호출할 때)는 SetStateAction<string>의 타입의 파라미터(정의할 때)에 할당할 수 없다.

즉, 이벤트 객체인 `e`의 타입과 `setCreateInput`의 파라미터의 타입이 다르다는 것이다.

에러가 발생한 부분의 코드에서

`e.target`의 타입을 받은 `value`의 타입은 EventTarget & HTMLInputElement인데,

사용하는 상태 변경 함수 `setCreateInput`의 타입이 `SetStateAction<string>` 즉, string이기 때문에 타입에러가 발생한 것이다.

## 🔨 에러 해결

`const{ value } = e.target`은 `const value = e.target.value`와 같은 의미이다.

타입을 맞춰 쓰기 위해서는 객체 구조 분해 할당 문법을 사용하여 이벤트 객체 안의 값을 꺼내서 써야 한다.

## 출처

[OKKY](https://okky.kr/articles/1351793#note-1569940)
