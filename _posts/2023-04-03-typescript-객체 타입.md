---
title: "객체 타입"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["객체 타입", "구조적 타이핑", "선택적 속성", "교차타입", "never"]
last_modified_at: 2023-04-03T08:06:00-05:00
---

## 📄 객체 타입

객체 타입이란 타입스크립트에서 `{속성명: 타입 명}`형식으로 이루어진 타입입니다.

```ts
type Poet = {
  // 별칭 객체 타입
  born: number;
  name: string;
};

let poetLater: Poet;

poetLater = {
  born: 1935,
  name: "Mary Oliver",
};

poetLater = "Sappho";
// Error: Type 'string' is not assignable to type '{born: numner; name: string;}
```

## 📄 구조적 타이핑

구조적 타이핑은 **실제 구조와 정의에 의해 결정되는 타입 시스템**입니다.

런타임에 타입을 결정하는 자바스크립트의 덕 타이핑과 달리, 타입스크립트는 구조적으로 타입화합니다.

> 덕 타이핑이란? 동적 타이핑의 한 종류로 객체의 변수 및 메서드의 집합이 객체의 타입을 결정하는 것

### ▪ 초과 속성 검사

초과 속성 검사는 **객체 타입 속성을 검사하는 과정**입니다.

초과 속성 검사에는 중요한 조건이 있습니다.

**"객체 리터럴을 변수에 집적 할당하는 경우에만"**초과 속성 검사가 진행된다는 것입니다.

다음과 같은 예시에서는 객체 리터럴 `Poet`을 변수 `extraPerson`에 직접 할당했기 때문에 초과 속성 검사가 진행되어 타입 에러를 뱉습니다.

```js
type Person = {
  name: string,
  age: number,
};

// ok. Person필드와 일치
const Sujin: Person = {
  name: "sujin",
  age: 28,
};

const extraPerson: Person = {
  name: "sujin",
  age: 28,
  nickName: "masuri", // Error!
};
```

이번에는 중간에 변수를 거쳐서 객체리터럴를 대입해보겠습니다.

```ts
const exisitingObject = {
  name: "sujin",
  age: 28,
  nickName: "masuri",
};

const extraPerson: Person = existingObject; // ok
```

객체를 다른 변수에 할당했더니, 변수 `existingObject`는 초과 속성 검사를 받지 않았기 때문에 에러가 발생하지 않습니다.

### ▪ 선택적 속성

선택적 속성은 에너테이션(`:`)앞에 `?`를 추가해서 선택적으로 속성을 허용할 때 사용합니다.

타입을 `undefined`로 선언한경우, 그 값이 `undefined`일지라도 반드시 그 값이 존재해야합니다.

반면, 선택적으로 선언된 속성은 존재하지 않아도 됩니다.

```ts
type Writer = {
  author: string | undefined;
  editor?: string;
};

const hasRequired: Writer = {
  author: undefined;
}

const missingRequired: Writer = {};
// Error: Property 'author' is missing in type '{}' but required in type 'Writers'.
```

## 📄 교차 타입

교차 타입은 합집합의 개념으로 이해할 수 있습니다.

유니언 타입이 이거 또는 저거의 개념으로 주어진 타입 중 하나의 타입만 선택하게 되는 반면에,

교차 타입은 서로 다른 타입이 하나의 타입으로 만들어져 여러 타입을 동시에 나타낼 수 있습니다.

교차 타입은 유니언 타입과 결합하여 사용할 수 있습니다.

```ts
type ShortPoem = {
  author: string;
} & ({ kigo: string; type: "haiku" } | { meter: number; type: "villanelle" });

// type:
// {author: string;  kigo: string; type: "haiku"}
// 또는
// {author: string; meter: number; type: "villanelle" }
```

### ▪ never

원시타입에 교차타입을 적용하는 것은 무의미한 일입니다.

원시타입에 교차타입을 적용하면 **never**라는 타입이 되는데, 이는 **비어있는 타입**을 뜻합니다.

```ts
let notNumber: number & string = 0;
// Error: Type 'number'is not assignable to type 'never'
```

## 참고

- learning TypeScript
- [InPa-Dev - 타입스크립트 잉여 속성 검사 원리 이해하기](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9D%EC%B2%B4-%ED%83%80%EC%9E%85-%EC%B2%B4%ED%82%B9-%EC%9B%90%EB%A6%AC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
