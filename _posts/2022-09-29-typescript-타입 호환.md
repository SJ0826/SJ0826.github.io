---
title: "[TypeScript] 타입 호환(Type Compatibility)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["타입 호환"]
last_modified_at: 2022-09-29T08:06:00-05:00
---

## 📄 타입 호환(Type Compatibility)

타입 호환은 타입스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는지 알려주는 특징입니다.

```ts
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

var developer: Developer;
var person: Person;

developer = person; // Error
person = developer;
```

타입 호환은 부분 집합 개념으로 접근하면 이해하기 쉽습니다.

에러가 난 이유는 `developer`(왼쪽)가 더 많은 타입을 가지고 있기 때문입니다.

오른쪽의 타입이 더 많아야 타입 호환이 이루어질 수 있습니다.

## 출처

- [캡틴 판교-타입스크립트 입문 강의](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8/dashboard)
