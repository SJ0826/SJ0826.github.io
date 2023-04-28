---
title: "[프로그래머스 / Lv 1] 최대공약수와 최소공배수 by JS"
excerpt: "유클리드 호제법으로 최대공약수와 최소공배수 구하기"
toc: true
toc_sticky: true
sidebar:
nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["최대공약수", "최소공배수"]
last_modified_at: 2023-04-28T08:06:00-05:00
---

## 📄 문제

두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

- 두 수는 1이상 1000000이하의 자연수입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(n, m) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  return [gcd(n, m), lcm(n, m)];
}
```

저번 문제에서 공부한 유클리드호제법으로 최대공약수(`gcd`)와 최소공배수(`lcm`)을 계산해 풀었습니다.

## 👍 Best Practice

```js
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
```

재귀함수가 아닌 for문을 사용해 최대공약수를 찾는 풀이입니다.

`a % b`가 0이 될 때까지 반복문을 실행합니다.

재귀함수로만 풀릴 줄 알았는데 for문으로 풀려서 신기하네요:)

## 문제 출처

- 프로그래머스
