---
title: "[프로그래머스 / Lv 1] 내적 by JS"
excerpt: "reduce함수 활용해 두 배열의 합 구하기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["reduce"]
last_modified_at: 2023-04-20T08:06:00-05:00
---

## 📄 문제

길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]\*b[n-1] 입니다. (n은 a, b의 길이)

- a, b의 길이는 1 이상 1,000 이하입니다.
- a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(a, b) {
  return a.reduce((acc, cur, index) => {
    return (acc += cur * b[index]);
  }, 0);
}
```

reduce함수를 사용해 배열 `a`와 `b`의 같은 인덱스끼리의 합을 구해 반환했습니다.

## 👍 Best Practice

```js
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
```

reduce 함수를 사용할때 사용하지 않는 인자일 경우 `_`를 사용해 표현해주는 방법도 있습니다 :)

## 문제 출처

- 프로그래머스
