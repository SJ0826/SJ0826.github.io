---
title: "[Lv 1] 정수 내림차순으로 배치하기 by JS"
excerpt: "배열 요소를 합쳐 문자열로 바꾸는 방법"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["내림차순", "배열", "문자열"]
last_modified_at: 2023-04-06T08:06:00-05:00
---

## 📄 문제

함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

- n은 1이상 8000000000 이하인 자연수입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(n) {
  return Number([...String(n)].sort((a, b) => b - a).join(""));
}
```

저는 주어진 숫자를 문자열 배열로 만들어 내림차순 한 뒤, 다시 문자열로 바꾸고 숫자로 반환했습니다.

배열 요소를 다 합해 문자열로 바꾸는 방법이 생각이 안나서 조금 헤맸습니다.

<div style="background: #FFD966; padding: 1em;">📌 배열 요소를 이어서 문자열로 바꾸는 방법: arr.join("")</div>

## 문제 출처

- 프로그래머스
