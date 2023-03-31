---
title: "[Lv 1] 나머지가 1이 되는 수 찾기"
excerpt: "프로그래머스 Lv1. x만큼 간격이 있는 n개의 숫자"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["나머지가 1이 되는 수 찾기"]
last_modified_at: 2023-03-31T08:06:00-05:00
---

## 📄 문제

자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

- 3 ≤ n ≤ 1,000,000

## 🙋‍♀️ 나의 풀이

```js
function solution(n) {
  for (let i = 0; i < n; i++) {
    if (n % i === 1) return i;
  }
}
```

for문으로 반복문을 돌려 나머지가 1이 되면 바로 값을 반환했습니다.

## 👍 Best Practice

```js
function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}
```

증감연산자를 for문뿐만 아니라 while문에서 사용해 반복문을 돌릴 수 있다는 걸 배워갑니다.

## 문제 출처

- [프로그래머스 - 나머지가 1이 되는 수 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/87389)
