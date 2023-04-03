---
title: "[Lv 1] 정수 제곱근 판별"
excerpt: "정수 제곱근 판별"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv2
tags:
  - ["정수 제곱근 판별", "sqrt", "Number.isInteger", "pow"]
last_modified_at: 2023-04-03T08:06:00-05:00
---

## 📄 문제

임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

- n은 1이상, 50000000000000 이하인 양의 정수입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(n) {
  const sqrt = Math.sqrt(n); // 1
  return Number.isInteger(sqrt) ? (sqrt + 1) * (sqrt + 1) : -1; // 2
}
```

제곱근을 반환해주는 메소드 `Math.sqrt()`를 이용해 문제를 풀었습니다.

for문이나 while문을 사용하면 너무 많은 경우의 수가 생겨 효율성이 좋지 않을 거라고 생각했기 때문입니다.

1. 주어진 숫자 n의 제곱근(`sqrt`)을 구한다.
2. `sqrt`가 정수라면 1을 더한 제곱을 반환, 아니면 -1을 반환한다.

## 문제 출처

- 프로그래머스
