---
title: "[프로그래머스 / Lv 1] 핸드폰 번호 가리기"
excerpt: "프로그래머스 Lv 1 핸드폰 번호 가리기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["repeat", "정규식"]
last_modified_at: 2023-04-14T08:06:00-05:00
---

## 📄 문제

프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 \*으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

- phone_number는 길이 4 이상, 20이하인 문자열입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}
```

1. 문자열 메소드인 `repeat`으로 보여질 숫자 4개를 제외한 개수로 "\*"을 만든다.
2. 주어진 `phone_number`를 뒤에서 4개로 잘라 붙여서 반환한다.

## 👍 Best Practice

```js
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
```

정규식을 이용한 풀이입니다.<br/>
`?=`가 숫자 앞에오면 그 뒤에있는 숫자가 일치하는지 확인하는 정규식 문법입니다.

## 문제 출처

- 프로그래머스
