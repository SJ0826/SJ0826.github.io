---
title: "약수의 합"
excerpt: "프로그래머스 Lv1. 약수의 합 풀이"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["프로그래머스", "약수의 합"]
last_modified_at: 2023-02-20T08:06:00-05:00
---

## 문제 📖

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

- n은 0 이상 3000이하인 정수입니다.

## 나의 풀이 🙋‍♀️

```js
function solution(n) {
  let sum = n;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}
```

간단하게 `for`문을 사용했다.

어차피 주어진 수 `n`의 절반까지만 정답의 유효 범위이기 때문에 반복 횟수를 조금이라도 줄이려고 신경썼다.

반복문을 통해 주어진 수 `n`을 정수로 나눈 값이 0일 경우, 총합 `sum`에 더해준다.
