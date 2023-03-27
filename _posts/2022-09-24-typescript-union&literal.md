---
title: "유니언(Union)과 리터럴(literal)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["유니언 타입", "리터럴 타입"]
last_modified_at: 2023-03-27T08:06:00-05:00
---

## 📄 유니언 타입 (Union Type)

<h3>: 자바스크립트의 OR 연산자(||)와 같이 A이거나 B이다 라는 의미의 타입</h3>

유니온 타입은 값이 정확히 어떤 타입인지 모르나 두개 이상의 타입 중 하나라는 것을 알고 있는 경우에 사용합니다.

키워드 : `|`

```
let sujin: string | number | boolean;
```

### ▪ 타입 애너테이션으로 유니언타입을 명시적으로 표시하는 방법

변수에 초깃값이 있더라도 타입이 변경될 가능성이 있을 때, 타입 애너테이션으로 유니언타입을 표시할 수 있습니다.

```ts
let sujin: string | null = "null";

if (Math.random() > 0.5) {
  sujin = "dreamer";
}
```

초깃값으로 `null`을 할당했지만 타입 애너테이션으로 `string`타입이 올 수 있다는 것을 명시했습니다.

## 📄 유니온 타입 특징

<h3>1. 유니온 타입은 타입 가드가 가능하다. </h3>

**타입 가드(type guard)**는 타입을 좁히는 것에 사용할 수 있는 논리적 검사를 뜻합니다.<br/>
이런 타입 가드를 통해 이전에 유추된 타입보다 더 구체적인 타입을 유추하는 과정을 **내로잉**이라고 합니다.

<h4>✔ 값 할당을 통한 내로잉</h4>

`admiral`변수는 초기에 `number`와 `string`타입으로 선언되었지만, `"Grace Hopper"`라는 값을 할당하므로써 `string`타입으로 타입이 구체화되었습니다.

```ts
let admiral: number | string;

admiral: "Grace Hopper";

admiral.toUpperCase();

admiral.toFixed(); // Error: Property 'toFixed' does not exist on type 'string'
```

<h4>✔ 조건 검사를 통한 내로잉</h4>

```ts
function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}
logMessage("hello");
logMessage(100);
```

<h3>2. 유니온 타입은 인터페이스 두개를 연결했을 때 공통된 속성만 제공한다.</h3>

유니온 타입은 `OR`연산자와 의미가 비슷합니다.<br/>
따라서 설정한 타입이 모두 공통적으로 가지고 있는 속성만 사용할 수 있습니다.

```ts
let pysicist = Math.random() > 0.5 ? "Sujin" : 28;

pysicist.toString(); // ok

pysicist.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'string' | 'number'
```

`pysicist`는 'string' 타입과 'number' 타입으로 추론됩니다.<br/>
`toString`메소드는 `string`과 `number`타입에 모두 사용할 수 있지만,<br/>
`toUpperCase`메소드는 `string`타입에만 사용할 수 있기 때문에 에러를 내뱉습니다.

## 📄 유니온 타입(Union Type)과 인터셉션(Intersection)

인터셉션은 공통된 속성만 제공하는 유니온 타입과는 달리 설정한 **타입의 모든 속성을 제공**합니다.

따라서 인터페이스를 모두 합친 하나의 타입이라고 정의할 수 있습니다.

실무에서는 상대적으로 유니온 타입을 더 많이 사용한다고 합니다.

```ts
function askSomeone(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}
```

인터셉션은 정의한 타입의 속성을 모두 넘겨야 하는 특징이 있습니다.

```ts
askSomeone({ name: "디벨로퍼", skill: "웹 개발", age: 34 });
```

## 📄 리터럴 타입 (Literal Type)

<h3>: 원시 타입 값 중 어떤 것이 아닌 특정 원싯값으로 알려진 타입</h3>

저는 리터럴 타입의 개념을 커스텀 타입으로 이해했습니다.<br />
`string`이나 `number`같은 원시 타입이 아닌 사용자가 설정하고 싶은 값을 타입으로 지정할 수 있기 때문입니다.

```ts
const philosopher = "Hypatia";
```

이렇게 const로 선언한 변수에 문자열로 된 `Hypatia`라는 값을 할당하면 타입스크립트는 해당 값을 리터럴 타입으로 설정합니다.

![image](https://user-images.githubusercontent.com/56298540/227869228-7a6e68b1-6fc0-4ec4-a8ef-267dc0dc757c.png)

여기서 const를 let으로 바꾼다면, 해당 타입의 가능한 모든 리터럴 값의 집합이 되는 원시 타입으로 설정하게 됩니다.

```ts
let philosopher = "Hypatia";
```

![image](https://user-images.githubusercontent.com/56298540/227870489-85d31a79-5947-48ee-9165-ac027698b137.png)

## 출처

- [캡틴 판교-타입스크립트 입문 강의](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8/dashboard)

* [Learning TypeScript](http://www.yes24.com/Product/Goods/116585556)
