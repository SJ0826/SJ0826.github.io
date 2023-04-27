---
title: "[TypeScript] 인터페이스"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["인터페이스"]
last_modified_at: 2022-09-23T08:06:00-05:00
---

## 📄 인터페이스

인터페이스는 **상호 간에 정의한 약속 혹은 규칙**을 쓰도록 규격을 정해놓은 것 입니다.

### ▪ 변수에 인터페이스 활용한 경우

- `User`라는 인터페이스를 정의해서 `age`와 `name`의 데이터 타입을 규칙으로 정했다.

```ts
interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: "세호",
};
```

변수로 선언한 `seho`는 `User`라는 인터페이스를 지정받았기 때문에 `age`와 `name`을 정해진 데이터 타입에 맞춰 꼭 선언해야 하고 하나라도 빠지면 에러를 발생시킵니다.

### ▪ 함수에 인터페이스 활용

- 함수의 인자에 `User`인터페이스를 적용시켰다.

```ts
function getUser(user: User) {
  console.log(user);
}
const capt = {
  age: 27,
  name: "캡틴",
};
getUser(capt);
```

### ▪ 함수의 스펙(구조)에 인터페이스 활용

- 인터페이스 `SumFunction`에 함수의 인자와 반환값에 데이터 타입을 정의했다.

```ts
interface SumFunction {
  (a: number, b: number): number; // 인자와 반환 타입 정의
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};
```

## 📄 인덱싱

인덱싱은 인터페이스에 **배열의 데이터타입**을 정의한 것입니다.

- `StringArray`는 인덱스를 숫자로 받고 배열의 값을 `string`으로 정의했다.

```ts
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ["a", "b", "c"];
//arr[0] = 10; // Error
```

## 📄 딕셔너리 패턴

딕셔너리의 `key`와 `value`의 타입을 지정하면 생성된 인터페이스를 사용해 만든 객체는 정해진 `key`와 `value`의 값만 입력받아야 합니다.

```ts
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  sth: /abc/,
  cssFile: /\.css$/, // css 확장자를 가진 모든 파일을 가져온다는 정규식.
  jsFile: /\.js$/, // js 확장자를 가진 모든 파일을 가져온다는 정규식.
};

Object.keys(obj).forEach(function (value) {});
```

## 📄 인터페이스 확장

`extend`키워드를 사용해서 기존의 인터페이스를 상속받을 수 있습니다.

```ts
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var cap: Developer = {
  name: "캡틴",
  age: 100,
  language: "ts",
};
```

## 출처

- [캡틴 판교-타입스크립트 입문 강의](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8/dashboard)
