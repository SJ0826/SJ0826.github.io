---
title: "[클래스] 정적 메서드와 정적 프로퍼티"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "정적메서드", "정적프로퍼티"]
last_modified_at: 2022-09-05T08:06:00-05:00
---

## 📄 정적 메서드(static method)

정적 메서드는 프로토타입이 아닌 **클래스 함수 자체에 설정되어 있는 메서드**이다.<br>
클래스 안에서 `static`이라는 키워드를 사용해서 설정한다.

```js
class User {
  static staticMethod() {...}
}
```

### 정적 메서드의 this는 무엇을 가리킬까?

클래스의 메서드가 호출될 때<br>
`this`의 값은 **클래스 생성자** 그자체가 된다.<br>

### 정적 메서드는 언제 사용할까?

정적 메서드는 어떤 특정한 객체가 아닌 **클래스에 속한 함수를 구현하고자 할 때** 사용한다.<br>
데이터베이스 관련 클래스에도 사용되곤한다.<br>

## 📄 정적 프로퍼티(static property)

정적 프로퍼티또한 `static`이라는 키워드를 사용한다.

```js
class User {
  static staticProperty = "John";
}
```

### 정적 프로퍼티는 언제 사용할까?

정적 프로퍼티는 데이터를 클래스 수순에 저장하고 싶을 때 사용한다.<br>
정적 프로퍼티 역시 개별 인스턴스에 묶이지 않는다.

## 정적 프로퍼티와 메서드의 상속

정적 프로퍼티와 정적 메서드는 상속이 가능하다.<br>

```js
class Animal {}
class Rabbit extends Animal {}

// 정적 메서드
consol.log(Rabbit.__proto__ === Animal); // true

// 일반 메서드
consol.log(Rabbit.prototype.__proto__ === Animal.prototype); // true
```

클래스 `Rabbit`의 프로토타입이 클래스 `Animal`을 가리키게 한다.<br>
따라서 `Rabbit`에서 원하는 프로퍼티나 메서드를 찾지 못하면 `Animal`로 검색이 이어진다.

## 출처

[모던 자바스크립트 튜토리얼](https://ko.javascript.info/static-properties-methods)
