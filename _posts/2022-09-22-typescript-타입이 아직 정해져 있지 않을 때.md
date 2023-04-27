---
title: "[TypeScript] 타입이 아직 정해져 있지 않을 때"
excerpt: "any와 void의 쓸모"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["any", "void", "unknown"]
last_modified_at: 2022-09-22T08:06:00-05:00
---

## 📄 any

`any`는 모든 데이터 타입을 통칭한 타입입니다.

처음 타입을 정의할 때 `any`로 모든 데이터 타입을 지정하고 코드를 작성하면서 타입을 차근차근 적용하는 것도 정석적인 방법 중 하나입니다.

```json
//tsconfig.json
"noImplicitAny": true // 데이터 타입을 비워놓지 말고 any라도 붙여라
```

```ts
let todoItems: any;
```

### ⭐ any 대신 unknown을 사용하자

`any`는 정말 유용해보이지만 치명적인 문제점이 있습니다.

`any`는 해당 값에 대한 할당 가능성과 멤버에 대한 타입 검사를 수행하지 않도록 지시하기 때문입니다.

만약 숫자에 `toUpperCase()` 함수를 사용한다면 에러가 발생할 것입니다.

하지만 런타임 에러일뿐 타입 에러는 아닙니다.

이런 일을 방지하기 위해 `unknown`을 사용할 수 있습니다.

타입스크립트는 `unknown`타입 값을 훨 씬 더 제한적으로 취급합니다.

```ts
// 타입이 any인 경우
function greetComedian(name: any) {
  console.log(`Announcing ${name.toUpperCase()}!`); // 에러 x
}

// 타입이 unknown인 경우
function greetComedian(name: unknown) {
  console.log(`Announcing ${name.toUpperCase()}!`); // Error: Object is of type 'unknown'
}
```

## 📄 void

함수의 리턴타입을 정의해야 하는데 만약 반환타입이 정해지지 않았다면 `void`로 정의해주는 것이 좋습니다.

```ts
function addTodo(todo): void {
  todoItems.push(todo);
}
```

## 출처

- [캡틴 판교-타입스크립트 입문 강의](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8/dashboard)

* 러닝타입스크립트(책)
