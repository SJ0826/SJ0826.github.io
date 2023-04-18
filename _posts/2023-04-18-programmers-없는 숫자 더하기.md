---
title: "[프로그래머스 / Lv 1] 없는 숫자 더하기 by JS"
excerpt: "배열에서 특정 값 찾기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["find", "include"]
last_modified_at: 2023-04-18T08:06:00-05:00
---

## 📄 문제

0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

- 1 ≤ numbers의 길이 ≤ 9
  - 0 ≤ numbers의 모든 원소 ≤ 9
  - numbers의 모든 원소는 서로 다릅니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(numbers) {
  let answer = 0;
  for (let i = 0; i <= 9; i++) {
    numbers.find((value) => value === i) ? "" : (answer += i);
  }
  return answer;
}
```

1. 0부터 9까지 for문을 돌려 `find`메소드로 `number`에 해당하는 정수가 있는지 확인하고 `answer`에 더한다.

## 👍 Best Practice 1

```js
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
```

1. 45에서 주어진 배열 요소를 합한 값을 뺀다.

## 👍 Best Practice

```js
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}
```

1. 0부터 9까지 for문을 돌려 `include`메소드로 `number`에 해당하는 정수가 있는지 확인하고 `answer`에 더한다.

콜백함수를 받는 `find`대신 `include`를 사용하는 것이 더 좋아보입니다 :)
