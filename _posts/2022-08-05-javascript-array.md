---
title: "배열(Array)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "배열"]
last_modified_at: 2022-08-05T08:06:00-05:00
---

## 📄 배열(Array)

배열은 여러개의 항목이 들어있는 리스트를 뜻합니다.

배열은 대괄호(`[]`)를 사용하여 선언합니다.

대괄호 안에 들어가는 항목들은 숫자, 문자열 배열, 객체 등 이 있습니다.

```js
const array = [1, 2, 3, 4, 5];
```

> 이름이 array인 배열을 선언함.

## 📄 배열에 새로운 항목 추가

배열에 새로운 항목을 추가할 때는 `push`라는 키워드를 사용합니다.

```
array.push(6);
```

> 배열에 6이라는 값을 추가함

이렇게 배열에 값을 추가하면 배열의 마지막에 추가 됩니다.<br>

## 📄 배열의 크기 조회

배열의 크기를 조회 한다는 것은 배열에 몇개의 항목이 있는지 계산한다는 뜻입니다.

배열의 크기를 조회할 때는 `length`라는 키워드를 사용합니다.

```js
console.log(array.length);
```

> 배열 array의 크기를 조회해서 출력한다.

## 출처

- 패스트캠퍼스 프론트엔드 강의
