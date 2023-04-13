---
title: "[프로그래머스 / Lv 1] 나누어 떨어지는 숫자 배열 by JS"
excerpt: "프로그래머스 Lv 1 나누어 떨어지는 숫자 배열 문제 풀이"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - [""]
last_modified_at: 2023-04-13T08:06:00-05:00
---

## 📄 문제

array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

- arr은 자연수를 담은 배열입니다.
- 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
- divisor는 자연수입니다.
- array는 길이 1 이상인 배열입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(arr, divisor) {
  const answer = arr.filter((value) => value % divisor === 0);
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
```

1. filter 메소드로 `divisor`로 나누어 떨어지는 수를 배열 `answer`에 담는다.
2. `answer`의 길이가 0이면 [-1], 0이 아니면 true를 반환하므로 `answer`을 오름차순한 값을 반환한다.

## 👍 Best Practice

```js
function solution(arr, divisor) {
  var _ = arr.filter((e) => !(e % divisor));
  return _[0] ? _.sort(($, _) => $ - _) : [-1];
}
```

filter연산을 좀더 간소화한 풀이입니다. 👍

## 문제 출처

- 프로그래머스
