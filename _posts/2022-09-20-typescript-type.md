---
title: "TypeScript 기본 타입"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["type"]
last_modified_at: 2023-03-27T08:06:00-05:00
---

## 📄 TS 기본 타입

타입이란 자바스크립트에서 다루는 값의 형태에 대한 설명입니다.<br/>
타입스크립트에서의 가장 기본적인 타입은 자바스크립트의 7가지 기본 원시타입과 동일합니다.

- null
- undefined
- boolean
- string
- number
- bigint
- symbol

## 📄 타입 애너테이션 (type annotation)

타입 애너테이션은 변수에 초깃값을 할당하지 않고도 변수의 타입을 설정할 수 있는 방법입니다.<br/>
변수에 초깃값을 할당한다면, 타입스크립트는 자동으로 타입을 추론합니다.

```ts
let user = "sujin";
```

이 코드에서 타입을 직접 알려주지 않아도 타입스크립트는 타입 시스템을 통해 `user`가 `string`타입이라는 것을 추론할 수 있습니다.<br/>
하지만, 초깃값이 없는 경우에는 타입을 추론할 수 없어 자동으로 `any`타입으로 간주합니다.<br/>
이렇게 초기에 타입을 유추할 수 없는 변수를 **진화하는 any**라고 부릅니다.

```ts
let user; // 타입: any
user = "sujin";

user.toUpperCase(); // ok

user = 28; // 타입: number로 진화!
user.toPrecision(1); // ok

user.toUpperCase(); // Error. 'toUpperCase' does not exist on type 'number'.
```

`user`의 타입이 `any` - `string` - `number`로 진화했습니다.<br/>
마지막으로 진화된 타입이 `number`이기 때문에 `toUpperCase`메소드를 호출하면 에러를 내뱉습니다.<br/>
이렇게 타입이 계속 변화하면 해당 변수가 어떤 타입을 가지고 있는지 확정지을 수 없고, 에러를 유발해 타입스크립트를 사용하는 이유를 손상케합니다.

타입 애너테이션은 변수의 초깃값을 할당하지 않았을 때, 타입을 확정지을 수 있게 합니다.

```ts
let user: string;
user: "sujin";
```

📌 타입 애너테이션은 타입스크립트에만 존재하며 컴파일 되었을 때 자바스크립트로 복사되지 않아 자바스크립트에 아무 영향을 주지 않습니다.

📌 타입을 즉시 유추할 수 있는 변수에 타입 애너테이션을 설정하면 중복 설정입니다.

```ts
let user: string = "sujin";
```

## 출처

- [캡틴 판교-타입스크립트 입문 강의](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8/dashboard)

* Learning Typescript
