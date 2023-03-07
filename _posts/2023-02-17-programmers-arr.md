---
title: "평균 구하기"
excerpt: "프로그래머스 Lv1. 평균 구하기 풀이"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["프로그래머스", "평균구하기", "해시"]
last_modified_at: 2023-02-17T08:06:00-05:00
---

## 문제 📖

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

- arr은 길이 1 이상, 100 이하인 배열입니다.
- arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

## 나의 풀이 🙋‍♀️

```js
function solution(arr) {
  const answer = arr.reduce((a, c) => a + c) / arr.length;
  return answer;
}
```

배열 내장 함수인 `reduce`함수를 사용했다.

`for`문을 사용하는 것보다 훨씬 간결한 코드가 나왔다.
