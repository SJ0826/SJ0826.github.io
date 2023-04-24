---
title: "[프로그래머스 / Lv 1] 약수의 개수와 덧셈 by JS"
excerpt: "약수 구하기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["약수"]
last_modified_at: 2023-04-24T08:06:00-05:00
---

## 📄 문제

두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

- 1 ≤ left ≤ right ≤ 1,000

## 🙋‍♀️ 나의 풀이

```js
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    answer = count % 2 === 0 ? answer + i : answer - i;
  }
  return answer;
}
```

중첩 반복문을 생성해 모든 경우를 계산하고,

약수의 개수가 짝수일 경우에는 합, 홀수인 경우에는 차를 계산해 answer를 반환했습니다.

## 👍 Best Practice

```js
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
```

이 풀이는 **제곱근이 정수이면, 약수의 개수는 홀수이다**라는 공식을 이용한 풀이입니다.

## 문제 출처

- 프로그래머스
