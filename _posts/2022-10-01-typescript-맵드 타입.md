---
title: "[TypeScript] 맵드 타입(Mapped Type)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["맵드 타입"]
last_modified_at: 2022-10-01T08:06:00-05:00
---

## 📄 맵드 타입(Mapped Type)

맵드 타입은 기존에 정의되어 있는 타입을 **새로운 타입으로 변환**해 주는 문법입니다.

자바스크립트 `map()` API 함수를 타입에 적용한 것과 같은 효과를 가집니다.

## 📄 맵드 타입 기본 문법

```ts
{ [ P in  K ] : T }
{ [ P in  K ] ? : T }
{ readonly [ P in  K ] : T }
{ readonly [ P in  K ] ? : T }
```

## 📄 맵드 타입 예제

- `Heroes` 는 `Hulk`, `Capt`, `Thor`라는 키를 유니온 타입으로 가진다.
- `HeroAges`에 `Heroes`의 키의 타입을 `number`로 바꾸는 맵드 타입 문법을 적용했다.
- 상수 `ages`는 키값이 `number`인 `HeroAges`를 타입으로 가진다.

```ts
type Heroes = "Hulk" | "Capt" | "Thor";
type HeroAges = { [K in Heroes]: number };
const ages: HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
};
```

## 출처

- [캡틴 판교-타입스크립트 입문 강의](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8/dashboard)
