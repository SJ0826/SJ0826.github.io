---
title: "Math 메소드 정리"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["Math"]
last_modified_at: 2023-04-07T08:06:00-05:00
---

## 📄 Math.abs(number)

▪ 용도: 인수의 **절댓값**을 반환한다.

```js
Math.abs(-1); // 1
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs(null); // 0
Math.abs(undefined); // NaN
```

## 📄 Math.round(number)

▪ 용도: 소수점 이하를 **반올림**한 정수를 반환한다.

```js
Math.round(1.2); // 1
Math.round(-1.6); // -2
Math.round(); // NaN
```

## 📄 Math.ceil(number)

▪ 용도: 소수점 이하를 **올림**한 정수를 반환한다.

```js
Math.ceil(1.4); // 2
Math.ceil(1); // 1
Math.ceil(); // NaN
```

## 📄 Math.floor(number)

▪ 용도: 소수점 이하를 **내림**한 정수를 반환한다.

```js
Math.floor(1.4); // 1
Math.floor(-1.8); // -2
Math.floor(); // NaN
```

## 📄 Math.sqrt(number)

▪ 용도: 인수의 **제곱근**을 반환한다.

```js
Math.sqrt(9); // 3
Math.sqrt(-9); // NaN
Math.sqrt(); // NaN
```

## 📄 Math.random()

▪ 용도: **0에서 1미만의 랜덤 숫자**를 반환한다.

```js
Math.random(); // 0.xxxxxxxx
```

## 📄 Math.pow(number, number)

▪ 용도: 첫번째 인수를 밑, 두번째 인수를 지수로한 **거듭제곱근**을 반환한다.

```js
Math.pow(2, 8); // 256

// ES7 거듭 제곱 연산자
2 ** 8; // 256
```

## 📄 Math.max(numbers)

▪ 용도: 인수 중 **최댓값**을 반환한다.

```js
Math.max(1, 2, 3); // 3
```

## 📄 Math.min(numbers)

▪ 용도: 인수 중 **최솟값**을 반환한다.

```js
Math.min(1, 2, 3); // 1
```
