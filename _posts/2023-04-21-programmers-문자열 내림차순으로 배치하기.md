---
title: "[프로그래머스 / Lv 1] 문자열 내림차순으로 배치하기 by JS"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["ceil"]
last_modified_at: 2023-04-21T08:06:00-05:00
---

## 📄 문제

문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

- str은 길이 1 이상인 문자열입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(s) {
  return [...s].sort().reverse().join("");
}
```

구조분해 + 메소드 체이닝을 통해 풀었습니다.

1. 문자열을 배열로 바꾼다. `[...s]`
2. 정렬한다. `sort()`
3. 역순으로 배치한다. `reverse()`
4. 다시 문자열로 바꿔 리턴한다. `join()`

## 문제 출처

- 프로그래머스
