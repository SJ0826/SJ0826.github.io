---
title: "[프로그래머스 / Lv 1] 수박수박수박수박수박수? by JS"
excerpt: "무한 문자열 생성 함수 만들기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["수박", "repeat"]
last_modified_at: 2023-04-19T08:06:00-05:00
---

## 📄 문제

길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

- n은 길이 10,000이하인 자연수입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    i % 2 ? answer.push("수") : answer.push("박");
  }
  return answer.join("");
}
```

1. 빈배열을 생성해 홀수번째 인덱스에는 "수", 짝수번째 인덱스에는 "박"을 push한다.
2. 반환할때는 문자열로 바꾼다.

## 👍 Best Practice

```js
var waterMelon = (n) => "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
```

1. `repeat` 메소드를 사용해 수박을 주어진 수를 글자 수로 나눈 값만큼 반복한다.
2. 마지막에 자릿수가 하나 남으면 "수"를 채워준다.

아무래도 배열보다 문자열이 메모리 소비를 덜할 것 같아 좋은 풀이로 느껴집니다.

## 문제 출처

- 프로그래머스
