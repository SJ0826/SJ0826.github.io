---
title: "객체(Object)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "객체"]
last_modified_at: 2022-08-01T08:06:00-05:00
---

## 📄 객체란 무엇인가?

객체는 이름과 값으로 구성된 프로퍼티의 정렬되지 않은 집합체입니다.

객체를 생성할 때는 함수나 클래스를 이용할 수 있습니다.

쉽게 말해 함수나 클래스를 큰 틀로 생각하고 하나하나 찍어내는 것을 각각 객체라고 생각하면 됩니다.

이 객체는 인스턴스라고 부르기도 합니다.

`new`라는 키워드를 통해 객체를 생성합니다.

```js
function A() {}

const a = new A(); // new를 통해서 함수 A의 객체가 만들어져 변수 a에 할당된다.
console.log(a, typeof a);
console.log(A());
```

## 📄 객체에 속성(프로퍼티)추가하기

함수에서 프로퍼티를 만들어 객체에 할당할 수 있습니다.

프로퍼티를 설정하면 각각의 성질을 가지는 속성을 만들게 됩니다.

```js
function A(name) {
  this.name = name;
}

const a = new A("Mark");
console.log(a);
```

### 함수를 속성으로 넣기

함수를 프로퍼티로 넣는 것또한 가능합니다.

```js
function B() {
  this.hello = function () {
    console.log("hello");
  };
}

new B().hello();
```

> 함수B의 프로퍼티 hello에 'hello'를 출력하는 함수를 설정함.

## 📄 객체 리터럴

객체 리터럴은 중괄호 안에 프로퍼티를 정의하여 객체를 생성하는 방식입니다.

프로퍼티는 쉼표(`,`)로 구분합니다.

```js
const b = {
  name: "Mark", // name이라는 프로퍼티에 'Mark'라는 값 할당
};

console.log(b, typeof b);
```

결과

```js
{
  name: "Mark";
}
object;
```

프로퍼티에 함수도 할당할 수 있습니다.

```js
const c = {
  name: "Mark",
  hello1() {
    console.log("hello1", this.name);
  },
  hello2: function () {
    console.log("hello2", this.name);
  },
  hello3: () => {
    console.log("hello3", this);
  },
};

c.hello1();
c.hello2();
c.hello3();
```

결과

```js
hello1 Mark
hello2 Mark
hello3 {}
```
