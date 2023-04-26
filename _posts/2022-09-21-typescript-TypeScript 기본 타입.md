---
title: "TypeScript 함수 타입"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["type", "함수"]
last_modified_at: 2022-09-21T08:06:00-05:00
---

## 📄 TS 함수 타입

타입 스크립트는 함수에 타입을 정의할 수 있습니다.

### ▪ 함수의 파라미터 타입을 정의하는 방식

```ts
// 함수 `sum`의 파라미터의 타입을 `number`로 지정

function sum(a: number, b: number) {
  return a + b;
}

sum(10, 20);
```

### ▪ 함수의 반환 값에 타입을 정의하는 방식

```ts
// 함수 `add`의 반환 값을 `number`타입으로 지정

function add(): number {
  return 10;
}
```

## 📄 파라미터를 제한하는 특성

Type Script는 추가 인자를 받지 않습니다.

그리고 인자 수가 적어도 에러가 발생합니다.

```ts
function sum2(a: number, b: number): number {
  return a + b;
}

sum(10, 20, 30, 40, 50); // Expected 2 arguments, but got 5.
```

## 📄 함수의 옵셔널 파라미터

함수의 옵셔널 파라미터를 사용하면 파라미터를 선택적으로 사용할 수 있습니다.

```ts
function log(a: string, b?: string, c?: string) {}

log("hello world");
log("hello ts", "abc");
```

## 출처

- [캡틴 판교-타입스크립트 입문 강의](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8/dashboard)
