---
title: "[Lv 1] 자연수 뒤집어 배열로 만들기 by JS"
excerpt: "자연수 뒤집어 배열로 만들기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv2
tags:
  - ["reverse", "split", "스택/큐"]
last_modified_at: 2023-04-04T08:06:00-05:00
---

## 📄 문제

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

- n은 10,000,000,000이하인 자연수입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(n) {
  const numToArr = [...String(n)].reverse(); // 1
  let answer = [];
  for (let i = 0; i < numToArr.length; i++) {
    answer.push(Number(numToArr[i])); // 2
  }
  return answer;
}
```

1. 주어진 숫자를 문자열로 바꿔 하나하나 배열의 요소로 만들어준 후 순서를 바꾼다.
2. `answer`에 `numToArr`의 요소를 숫자로 바꿔 삽입해준다.

뭔가 한줄짜리 코드로 바꿀 수 있을 것 같은데 깔끔하게 답이 나오지 않아 이렇게 제출했습니다.

## 👍 Best Practice 1

```js
function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((n) => parseInt(n));
}
```

역시 한줄짜리 답안이 있네요.

아직 배열 내장 메소드를 쓰는 것이 그렇게 익숙하지 않은듯 합니다.

그런데 왜 숫자 뒤에 공백을 붙이고 split("")을 하면 문자열로 하나하나 쪼개질까요.

열심히 이리저리 콘솔을 찍어본 결과 숫자 뒤에 공백("")을 붙이면 문자열이 되기 때문이었습니다.

제가 했던 `[...String(n)]`과 같은 과정이네요.

## 👍 Best Practice 2

```js
function solution(n) {
  var arr = [];

  do {
    arr.push(n % 10); // 1
    n = Math.floor(n / 10); // 2
  } while (n > 0); // 3

  return arr;
}
```

1. 주어진 자연수를 10으로 나누어 소수점 한자리를 나오게해 그 값을 `arr`에 넣어준다.
2. 뒤에 소수점을 하나 떨궈내고 자릿수를 하나 줄인다.
3. n이 0이 될때까지 반복한다.

세상은 이런 분들이 바꿔가는걸까요.

저는 어떻게든 배열 메소드를 쓰려고 했는데 이런 멋진 방법이 있습니다.

## 문제 출처

- 프로그래머스
