---
title: "[프로그래머스 / Lv 2] 멀리 뛰기 by JS"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv2
tags:
  - [""]
last_modified_at: 2023-04-26T08:06:00-05:00
---

## 📄 문제

효진이는 멀리 뛰기를 연습하고 있습니다. 효진이는 한번에 1칸, 또는 2칸을 뛸 수 있습니다. 칸이 총 4개 있을 때, 효진이는
(1칸, 1칸, 1칸, 1칸)
(1칸, 2칸, 1칸)
(1칸, 1칸, 2칸)
(2칸, 1칸, 1칸)
(2칸, 2칸)
의 5가지 방법으로 맨 끝 칸에 도달할 수 있습니다. 멀리뛰기에 사용될 칸의 수 n이 주어질 때, 효진이가 끝에 도달하는 방법이 몇 가지인지 알아내, 여기에 1234567를 나눈 나머지를 리턴하는 함수, solution을 완성하세요. 예를 들어 4가 입력된다면, 5를 return하면 됩니다.

- n은 1 이상, 2000 이하인 정수입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(n) {
  if (n === 1 || n === 2) return n;
  const dp = Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n - 1];
}
```

처음 문제를 보고 DFS로 접근했더니 시간 초과가 되어 동적 계산법(DP)로 다시 생각했습니다.

n이 1일 경우 -> 1<br/>
n이 2일 경우 -> 2<br/>
n이 3일 경우 -> 3<br/>
n이 4일 경우 -> 5<br/>
n이 5일 경우 -> 8<br/>
n이 6일 경우 -> 13<br/>

문제의 답이 피보나치 수열로 이루어져 있습니다.

따라서 배열 (`dp`)의 맨 앞과 두번째 수를 1과 2로 만들고 그 뒤의 값들을 구하면 답을 알 수 있습니다.

`% 1234567`연산을 for문 안에서 한 이유는 dp[n - 1]의 크기가 커져 오버 플로우가 발생하기 때문입니다.

## 👍 Best Practice

```js
function jumpCase(num) {
  if (num <= 2) return num;

  return jumpCase(num - 1) + jumpCase(num - 2);
}
```

같은 방식을 재귀함수로 풀어낸 풀이입니다.

## 문제 출처

- 프로그래머스
