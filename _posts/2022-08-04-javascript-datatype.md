---
title: "데이터 타입(Data type)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "데이터타입"]
last_modified_at: 2022-08-04T08:06:00-05:00
---

## 📄 데이터 타입(Data type)

프로그램에서 다뤄지는 모든 데이터에는 다양한 종류가 있습니다.

그 종류들을 **데이터 타입**이라고 부릅니다.

## 📄 String

`String`은 데이터를 문자열로 표현합니다.

데이터를 문자열로 지정하는 경우 따옴표 혹은 쌍따옴표를 이용합니다.

```js
let text = "hello";
let name = "하이요";
```

## 📄 boolean

`boolean`은 데이터의 참과 거짓을 지정하는 타입입니다.

```js
let good = true;
let loading = false;
```

## 📄 null과 undefined

`null`과 `undifined`는 둘다 의미가 없음을 뜻합니다.

하지만 분명한 차이점이 존재합니다.

`null`은 의미가 진짜 없다는 뜻을 가지고 있고,

`undefined`는 의미가 아직 정해지지 않았다는 뜻입니다.

```js
let friend = null;
let criminal;
```

위 코드를 출력하면

friend는 null을 그대로 출력하지만,

아무것도 값이 지정되지 않은 criminal은 undefined를 출력합니다.

## 출처

- 패스트캠퍼스 프론트엔드 강의
