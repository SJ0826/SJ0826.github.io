---
title: "[Lv 2] 다음 큰 숫자"
excerpt: "숫자 이진수 변환하기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv2
tags:
  - ["이진수", "알고리즘"]
last_modified_at: 2023-04-05T08:06:00-05:00
---

## 📄 문제

자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

- 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
- 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
- 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
  예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

- n은 1,000,000 이하의 자연수 입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(n) {
  let answer = n;
  const numberOfOne = n.toString(2).split(1).length - 1;

  while (answer++) {
    if (answer.toString(2).split(1).length - 1 == numberOfOne) return answer;
  }
}
```

저는 주어진 숫자에서 1을 더해가며 이진수로 변환 후 1의 개수를 `split()`메소드로 계산해 조건을 걸었습니다.

항상 익숙한 for문만 쓰다가 처음으로 while문을 써보았습니다.

## 👍 Best Practice

```js
function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}
```

주어진 문제 함수가 재귀함수가 되었네요.

조건이 맞을 때까지 계속 자기 자신을 호출하는 형태입니다.

## 문제 출처

- 프로그래머스
