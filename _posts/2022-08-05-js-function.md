---
title: "함수"
excerpt: "JavaScript 함수"
toc: true
toc_sticky: true

categories:
  - JavaScript
tags:
  - ["JavaScript", "함수"]
last_modified_at: 2022-08-05T08:06:00-05:00
---

## 📄 함수

함수는 특정코드를 하나의 명령으로 실행할 수 있게 해주는 기능입니다.

함수는 파라미터가 주어졌을 때 파라미터를 처리해서 결과를 만듭니다.

## 📄 선언방법

함수를 선언할 때는 `functions`이라는 키워드를 사용합니다.

함수의 결과 값을 나타낼 때는 `return`이라는 키워드를 사용합니다.

`return`되는 순간 함수는 종료됩니다.

```js
functions add(a,b) { // add라는 이름의 함수에 파라미터값으로 a와 b를 받아서, a + b의 결과값을 return시키는 함수.
    return a + b;
}
```

## 📄 선언적 함수

선언적 함수는 함수에 이름을 붙여서 선언합니다.<br>

```js
function hello1() {
  // 함수 선언
  console.log("hello1");
}

hello1(); //함수 호출
```

결과<br>
![function1](https://user-images.githubusercontent.com/56298540/182019797-18e22be2-0b8b-4963-a122-8adfb8f7d885.PNG)

## 📄 익명함수

함수의 이름을 만들어주지 않고 특정 변수에 함수를 할당하는 방식입니다.

```js
const hello1 = function () {
  console.log("hello1");
};
```

결과<br>
![function1](https://user-images.githubusercontent.com/56298540/182019797-18e22be2-0b8b-4963-a122-8adfb8f7d885.PNG)

## 📄 선언적 함수와 익명함수의 차이점

선언적 함수는 호출이 먼저 나와있어도 문제없이 실행되지만,<br>
익명함수는 호출이 먼저 나오면 에러가 발생합니다.

```js
hello1(); // 선언적 함수는 호출이 먼저 나와있어도 문제없이 실행.
hello2(); // 익명함수는 호출이 먼저나오면 문제 발생
function hello1() {
  //선언적 함수
  console.log("hello1");
}

var hello2 = function () {
  console.log("hello2");
};
```

결과<br>
![function3](https://user-images.githubusercontent.com/56298540/182019952-beeb8889-0e9b-459f-a61c-b566579249c5.PNG)

## 📄 리턴

리턴은 함수를 실행하면 얻는 값입니다.

```js
const hello3 = function (name) {
  return `hello ${name}`;
};
```

작은따옴표(')가 아닌 백틱(`)를 써야 합니다.

### 함수 안에서 함수를 만들어 리턴

리턴값으로 함수를 지정하여 리턴할 수 있습니다.<br>

```js
function plus(base) {
  return function (num) {
    return base + num;
  };
}

const plus5 = plus(5);
console.log(plus5(10));
```

## 📄 인자로 함수를 사용

함수를 호출하는 경우 인자로 함수를 사용할 수 있습니다.<br>

```js
function hello(c) {
  console.log("hello");
  c();
}

hello(function () {
  console.log("콜백");
});
```

결과

```js
hello;
콜백;
```

## 출처

- 패스트캠퍼스 프론트엔드 강의
