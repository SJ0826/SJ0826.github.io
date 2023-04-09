---
title: "[프로그래머스 / Lv 2] 가장 큰 수"
excerpt: "프로그래머스 Lv 2 가장 큰 수"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv2
tags:
  - ["가장 큰 수", "정렬", "sort"]
last_modified_at: 2023-04-09T08:06:00-05:00
---

## 📄 문제

0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

- numbers의 길이는 1 이상 100,000 이하입니다.
- numbers의 원소는 0 이상 1,000 이하입니다.
- 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(numbers) {
  let answer = numbers
    .map((value) => value + "")
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}
```

1. 주어진 배열 `numbers`를 순회해 sort()메소드를 적용한다.'
2. 인접한 두 수를 순서를 바꿔 비교하고 내림차순한다.
3. 완성된 배열을 join("")으로 문자열로 바꾼다.
4. 만약 [0, 0, 0]인경우 답이 "000"이 되므로 삼항연산자를 이용해 첫번째 자릿수가 0인경우 0을 바로 반환한다.
