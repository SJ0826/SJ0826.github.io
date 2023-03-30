---
title: "x만큼 간격이 있는 n개의 숫자"
excerpt: "프로그래머스 Lv1. x만큼 간격이 있는 n개의 숫자"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["x만큼 간격이 있는 n개의 숫자"]
last_modified_at: 2023-03-30T08:06:00-05:00
---

## 📄 문제

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

- x는 -10000000 이상, 10000000 이하인 정수입니다.
- n은 1000 이하인 자연수입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(x, n) {
  let answer = []; // 1

  for (let i = 1; i < n + 1; i++) {
    answer.push(x * i); // 2
  }
  return answer;
}
```

1. 정답으로 반환할 배열 `answer`을 생성합니다.
2. `for`문을 돌려 배열 내장함수인 `push`를 이용해 배열에 x만큼 더해준 값을 삽입합니다.

## 👍 Best Practice

```js
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
```

아예 미리 x로 채워진 배열을 생성후 `map`을 이용해 값을 변경해준 답안입니다.

한줄로 훨씬 깔끔하지만 성능은 `for`문으로 하는게 더 좋다고 합니다.

## 문제 출처

- 프로그래머스
