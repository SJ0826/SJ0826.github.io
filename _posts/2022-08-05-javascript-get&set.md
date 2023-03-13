---
title: "get & set 함수"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "get", "set"]
last_modified_at: 2022-08-05T08:06:00-05:00
---

## 📄 get & set 함수

클래스 내부에서 get과 set 함수를 이용해 값을 저장하고 불러올 수 있습니다.

- get: 값을 조회한다.
- set: 값을 저장한다.

## 📄 Getter함수

Getter함수는 특정 값을 실행이 아닌 **조회**하려고 할 때 사용됩니다.

조회하려는 값을 `return`키워드를 사용해 조회합니다.

```js
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum함수가 실행됩니다.");
    return this.a + this.b;
  },
};
```

> const numbers라는 객체의 a와 b를 합한 값을 조회하는 Getter함수 sum.

## 📄 Setter함수

Setter함수는 객체나 함수 밖에서 값을 **설정**하려고 할 때 사용됩니다.

그렇기 때문에 Getter함수와는 다르게 파라미터 값 설정은 필수입니다.

```js
const dog = {
  _a: 1,

  set name(value) {
    this._a = value;
  },
};
```

## 출처

- 패스트캠퍼스 강의
