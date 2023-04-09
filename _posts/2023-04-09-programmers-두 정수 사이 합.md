---
title: "[프로그래머스 / Lv 1] 두 정수 사이의 합"
excerpt: "프로그래머스 Lv 1 두 정수 사이의 합 문제 풀이"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["sort"]
last_modified_at: 2023-04-09T08:06:00-05:00
---

## 📄 문제

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

- a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
- a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
- a와 b의 대소관계는 정해져있지 않습니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(a, b) {
  let [newA, newB] = [a, b].sort((a, b) => a - b); // 1
  let sum = 0;
  for (let i = newA; i <= newB; i++) {
    // 2
    sum += i;
  }
  return sum;
}
```

1. 주어진 정수를 배열에 담아 정렬후 구조분해 할당을 사용해 새로운 값을 만들었다.
2. 반복문으로 `newA`부터 `newB`까지의 합을 구해 답을 반환한다.

## 👍 Best Practice

```js
function adder(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}
```

Math 메소드를 적절히 활용한 풀이입니다. 👍
