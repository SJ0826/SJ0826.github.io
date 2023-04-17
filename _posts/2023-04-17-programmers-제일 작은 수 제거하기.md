---
title: "[프로그래머스 / Lv 1] 제일 작은 수 제거하기 by JS"
excerpt: "배열에서 가장 작은 수 추출하기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["Math"]
last_modified_at: 2023-04-17T08:06:00-05:00
---

## 📄 문제

정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

- arr은 길이 1 이상인 배열입니다.
- 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(arr) {
  let target = Math.min.apply(Math, arr);
  return arr == target ? [-1] : arr.filter((value) => value !== target);
}
```

1. Math 메소드를 사용해 주어진 배열에서 가장 작은 수를 구한다.
2. 찾은 가장 작은수 (`target`)이 처음 값과 같다면 `[-1]`을, 아니라면 filter함수를 사용해 해당 값을 제거한 배열을 리턴한다.

## 👍 Best Practice

```js
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}
```

제가 푼 문제에서는 apply메소드를 사용해서 속도가 느렸는데 이 풀이는 스프레드 연산자를 사용해 이를 보완했습니다.

스프레드 연산자를 문자열을 배열로 만들때만 생각했는데 다양한 방법으로 활용해 문제에 접근해보는 시각을 넓혀야겠습니다.

## 문제 출처

- 프로그래머스
