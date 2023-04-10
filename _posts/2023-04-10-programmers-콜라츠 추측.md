---
title: "[프로그래머스 / Lv 1] 콜라츠 추측"
excerpt: "프로그래머스 Lv 1 콜라츠 추측 문제 풀이"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["콜라츠 추측"]
last_modified_at: 2023-04-10T08:06:00-05:00
---

## 📄 문제 출처

1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.

예를 들어, 주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요. 단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.

- 입력된 수, num은 1 이상 8,000,000 미만인 정수입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(num) {
  let answer = 0;
  while (num > 1) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    answer++;
    if (answer === 500) return -1;
  }
  return answer;
}
```

재귀함수를 사용해 볼까 하다가 성능상 반복문이 더 좋을 것 같아 `while`문에 조건을 걸어 `num`가 1이 될때 까지 반복했습니다.

## 👍 Best Practice

```js
function collatz(num, count = 0) {
  return num == 1
    ? count >= 500
      ? -1
      : count
    : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
}
```

그래도 재귀함수를 사용한 풀이는 멋있네요.

삼항 연산자를 중첩으로 사용할 수 있다는 것도 처음 알아갑니다.

## 문제 출처

- 프로그래머스
