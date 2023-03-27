---
title: "타입 별칭"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["타입 별칭"]
last_modified_at: 2023-03-27T08:06:00-05:00
---

## 📄 타입 별칭

<h3>: 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수</h3>

타입 별칭은 재사용하는 타입에 더 쉬운 이름을 할당하는 방법입니다.<br/>
`type`이라는 키워들를 사용해 선언합니다.

```ts
type Person = {
  name: string;
  age: number;
};

var seho: Person = {
  name: "sujin",
  age: 28,
};
```

### 📌 타입 별칭과 인터페이스의 차이점

인터페이스는 확장이 가능하지만 타입 별칭은 확장이 불가능합니다.

계속 타입을 확장할 필요가 있는 경우에는 타입 별칭보다는 인터페이스로 선언해서 필요할 때 마다 확장하는 것이 좋습니다.

## 출처

- [캡틴 판교-타입스크립트 입문 강의](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8/dashboard)
