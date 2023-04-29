---
title: "[프로그래머스 / Lv 1] 3진법 뒤집기 by JS"
excerpt: "toString()으로 n진법 나타내기"
toc: true
toc_sticky: true
sidebar:
nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["toString", parseInt]
last_modified_at: 2023-04-29T08:06:00-05:00
---

## 📄 문제

자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

- n은 1 이상 100,000,000 이하인 자연수입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}
```

toString에 들어가는 인자는 적용한 숫자를 n진법으로 나타낼 때 사용합니다.

n.toString(3)은 숫자 n을 3진법으로 변환한다는 뜻입니다.

3진법으로 변환한 숫자 n을 spread연산자로 배열에 담아 뒤집은뒤 다시 문자열로 변환했습니다.

parseInt의 두번째 인자에는 해당 값이 몇진법인지 나타내는 숫자를 입력합니다.

`parseInt([...n.toString(3)].reverse().join(""), 3)`는 앞뒤 반전한 3진법을 다시 10진법으로 변환해주는 역할을 합니다.

## 문제 출처

- 프로그래머스
