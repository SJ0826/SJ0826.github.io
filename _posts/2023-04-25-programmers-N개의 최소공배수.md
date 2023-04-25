---
title: "[프로그래머스 / Lv 2] N개의 최소공배수 by JS"
excerpt: "유클리드 호제법을 이용해 최소공배수 구하기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv2
tags:
  - ["유클리드 호제법", "최소공배수"]
last_modified_at: 2023-04-25T08:06:00-05:00
---

## 📄 문제

두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

- arr은 길이 1이상, 15이하인 배열입니다.
- arr의 원소는 100 이하인 자연수입니다.

## 📄 나의 풀이

```js
function solution(arr) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  let answer = 1;
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, sortedArr[i]);
  }
  return answer;
}
```

> **📌 유클리드 호제법이란?**
> 유클리드 호제법은 나눗셈을 반복해서 두 수의 최대공약수를 구하는 알고리즘입니다.
> 두 수 A와 B의 나머지가 r일때, gcd(A, B) = gcd(B, r)입니다.
> r이 0이라면 최대공약수는 B가 되고, 아니라면 gcd(B, r)을 계산합니다.

1. 최대공배수는 `두수를 곱한 값 / 최대 공약수`이다.
2. 주어진 배열을 오름차순으로 정렬한다.(`sortedArr`)
3. 초기값이 1인 `answer`와 `sortedArr`의 요소의 최대공배수를 구해 answer의 값을 변경해준다.

## 👍 Best Practice

```js
function nlcm(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
```

for문 대신 reduce 메소드를 사용해 가독성을 높인 풀이입니다.

이 풀이에서는 누적값 `a`가 answer이 되었습니다.

## 문제 출처

- 프로그래머스
