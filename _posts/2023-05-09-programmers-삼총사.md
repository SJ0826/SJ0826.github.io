---
title: "[프로그래머스 / Lv 1] 삼총사 by JS"
excerpt: "삼중 for문으로 가능한 조합의 수 구하기"
toc: true
toc_sticky: true
sidebar:
nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["for문"]
last_modified_at: 2023-05-05T08:06:00-05:00
---

## 📄 문제

한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.

한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

- 3 ≤ number의 길이 ≤ 13
- -1,000 ≤ number의 각 원소 ≤ 1,000
- 서로 다른 학생의 정수 번호가 같을 수 있습니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(number) {
  let answer = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let l = j + 1; l < number.length; l++) {
        if (number[i] + number[j] + number[l] === 0) answer++;
      }
    }
  }
  return answer;
}
```

자바스크립트를 공부하면서 삼중 for문은 처음 사용해보았습니다.

이중 for문도 불안한데 삼중으로 중첩되니 달달 떨리네요.

## 문제 출처

- 프로그래머스
