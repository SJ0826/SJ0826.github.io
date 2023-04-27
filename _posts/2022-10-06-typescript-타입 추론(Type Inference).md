---
title: "[TypeScript] 타입 추론(Type Inference)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["타입 추론"]
last_modified_at: 2022-10-06T08:06:00-05:00
---

## 📄 타입 추론(Type Inference)

타입 추론은 **타입 스크립트가 코드를 해석해 나가는 동작**을 뜻합니다.

```ts
let x = 3;
```

타입 스크립트는 `x`에 타입을 지정하지 않아도 `number`라는 타입을 추론합니다.

변수를 선언하거나 속성, 인자의 기본 값, 함수의 반환 값 등을 설정할 때도 타입 추론이 일어납니다.

## 📄 인터페이스와 제네릭을 이용한 타입 추론

```ts
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DertailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedItem: DertailedDropdown<string> = {
  title: "abc",
  description: "ab",
  value: "a",
  tag: "a",
};
```

## 📄 Best Common Type 추론 방식

타입 스크립트가 추론하는 가장 근접한 타입을 Best Common Type이라고 합니다.

```ts
let arr = [0, 1, null];
// type: number | null
```

타입스크립트는 추론되는 타입들을 유니온으로 지정합니다.

## 출처

- [캡틴 판교-타입스크립트 입문 강의](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8/dashboard)
