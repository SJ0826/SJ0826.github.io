---
title: "[프로그래머스 / Lv 1] 서울에서 김서방 찾기"
excerpt: "프로그래머스 Lv 1 서울에서 김서방 찾기 문제 풀이"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["indexOf"]
last_modified_at: 2023-04-11T08:06:00-05:00
---

## 📄 문제

String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

- seoul은 길이 1 이상, 1000 이하인 배열입니다.
- seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
- "Kim"은 반드시 seoul 안에 포함되어 있습니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}
```

배열 내장 메소드인 `indexOf()`를 사용했습니다.

## 문제 출처

- 프로그래머스
