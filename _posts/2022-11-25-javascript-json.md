---
title: "JSON (JavaScript Object Notation)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "Json"]
last_modified_at: 2022-11-25T08:06:00-05:00
---

## 📄 JSON (JavaScript Object Notation)

: 데이터를 쉽게 교환하고 저장하기 위한 텍스트기반의 데이터 교환 표준

텍스트 기반이다 ❔

어떤 프로그래밍 언어에서도 JSON 데이터를 읽고 사용할 수 있다 ❕

즉, 데이터를 교환할때 어떤 프로그래밍언어도 쓸 수 있는 방법이다.

## 📄 JSON과 XML

XML(EXtensible Markup Language)은 문자기반의 마크업 언어로 데이터를 보여주는 것이 아닌 저장하고 전달하는 것 만을 목적으로 만들어졌다.

#### 공통점

- 둘다 데이터를 저장하고 전달하기 위해 만들어졌다.
- 사람도 읽을 수 있다.
- 계층적인 데이터구조를 가진다.
- 다양한 프로그래밍 언어에 의해 파싱될 수 있다.
- XMLHttpRequest 객체를 이용하여 서버로부터 데이터를 전송받을 수 있다.

#### 차이점

- JSON은 종료 태그를 사용하지 않는다.
- JSON의 구문이 XML의 구문보다 짧다.
- JSON 데이터가 XML 데이터보다 더 빨리 읽고 쓸 수 있다.
- XML은 배열을 사용할 수 없지만, JSON은 배열을 사용할 수 있다.
- XML은 XML 파서로 파싱되고, JSON은 자바스크립트 표준함수인 `eval()`함수로 파싱된다.

```js
// XML 예제
<dog>
    <name>식빵</name>
    <family>웰시코기<family>
    <age>1</age>
    <weight>2.14</weight>
</dog>

// JSON 예제
{
    "name": "식빵",
    "family": "웰시코기",
    "age": 1,
    "weight": 2.14
}
```

JSON은 XML보다 더 빠른 처리속도를 가지고 있지만 전송받은 데이터의 무결성을 직접 인증해야하는 특징을 가지고 있다.

## 📄 JSON 문법

JSON은 객체 표기법 중 **리터럴(literal)**과 **프로퍼티(property)**를 표현하는 방법을 쓴다.

- 리터럴: 변수가 아닌 해석되는 값 자체 ex) 12(숫자 리터럴), "JSON"(문자열 리터럴), true(불리언 리터럴)
- 객체: 이름(name)과 값(value)으로 구성된 프로퍼티(property)의 정렬되지 않은 집합

```js
// 네쌍의 프로퍼티로 구성된 객체
{
    "name": "식빵",
    "family": "웰시코기",
    "age": 1,
    "weight": 2.14
}
```

- JSON에서 주석을 사용하는것은 권장하지 않는다.

### undefined 와 null

JSON에서는 `undefined`타입을 제공하지 않는다.
자바스크립트와 다르게 JSON에서 `null`은 값을 가지고 있지 않다는 의미를 가지는 하나의 데이터값을 가지고 있기 때문에 유의해서 사용해야 한다.

## 📄 자바스크립트와 JSON

자바스크립트에서 JSON을 사용하기 위해 3가지의 메소드를 제공한다.

1. `JSON.stringify()`: 인수로 전달받은 자바스크립트 객체를 **문자열**로 변환
2. `JSON.parse(text)`: 인수로 받은 문자열을 **자바스크립트 객체**로 변환
3. `toJSON`: 자바스크립트의 Date 객체의 데이터를 JSON 형식의 문자열로 변환. `Date.prototype` 객체에서만 사용할 수 있다.

```js
// toJSON 예제
var date = new Date(); // 자바스크립트 Date 객체

var str = date.toJSON(); // Date 객체를 JSON 형식의 문자열로 변환함.

document.getElementById("json").innerHTML = date + "<br>";

document.getElementById("json").innerHTML += str;
```

## 출처

- [TCP SCHOOL.com-JSON](http://www.tcpschool.com/json/intro)
