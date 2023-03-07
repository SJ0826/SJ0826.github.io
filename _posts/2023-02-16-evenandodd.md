---
title: "짝수와 홀수"
excerpt: "프로그래머스 Lv1. 짝수와 홀수"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["프로그래머스", "짝수와홀수"]
last_modified_at: 2023-02-16T08:06:00-05:00
---

## 문제 📖

정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

- num은 int 범위의 정수입니다.
- 0은 짝수입니다.

```js
function solution(num) {
  var answer = "";
  return answer;
}
```

## 나의 풀이 🙋‍♀️

```js
function solution(num) {
  const answer = num % 2 === 0 ? "Even" : "Odd";
  return answer;
}

solution(4);
```

`num`을 2로 나누어 나머지값에 대한 유무를 삼항연산자로 표현하고, 상수 `answer`에 값을 할당에 결과값을 `return`시켰다.

## Best Practice 👍

```js
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}
```

숫자 0은 `false`, 이외의 값은 `true`라는 점을 활용하니 코드가 더욱 간결해졌다.
