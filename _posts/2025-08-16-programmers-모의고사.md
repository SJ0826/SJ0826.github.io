---
title: "[프로그래머스 / Lv 1] 모의고사 by JS"
excerpt: "Array.prototype.entries() 로 완전탐색 문제 접근하기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["프로그래머스", "Array.prototype.entries()"]
last_modified_at: 2023-08-16T08:06:00-05:00
---

## 📄 문제

[🔍 프로그래머스 - 모의고사 문제 보러가기](https://school.programmers.co.kr/learn/courses/30/lessons/42840)

세 명의 수포자가 각각 일정한 패턴으로 문제를 찍습니다. 정답 배열이 주어졌을 때, 누가 가장 많이 맞췄는지를 구하는 문제입니다.


## 🙋‍♀️ 나의 풀이

```js
function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }

  const maxScore = Math.max(...scores);

  const highestScores = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      highestScores.push(i + 1);
    }
  }

  return highestScores;
}
```
<br />

## 🔨 핵심 문법 설명

###  1. answers.entries()

* `Array.prototype.entries()` 는 배열의 [인덱스, 값] 쌍을 반환하는 이터레이터 객체를 생성합니다.
```typescript
const arr = ['a', 'b', 'c'];
for (const [i, value] of arr.entries()) {
console.log(i, value);
}
// 0 'a'
// 1 'b'
// 2 'c'
```

➡️ 따라서 for (const [i, answer] of answers.entries()) 는 answers **배열의 인덱스(i) 와 값(answer)** 를 동시에 얻어옵니다.

<br />

### 2. for...of vs for...in


| 구분     | `for...in`             | `for...of`             |
| ------ | ---------------------- | ---------------------- |
| 순회 대상  | 객체의 key, 배열의 **인덱스**   | 이터러블의 **값(value)**     |
| 대표적 용도 | 객체 프로퍼티 열거             | 배열 값, 문자열 문자 순회        |
| 사용 예시  | `for (let key in obj)` | `for (let val of arr)` |

👉 이번 문제에서는 **인덱스와 값이 동시에 필요**하므로 `for...of answers.entries()` 가 가장 깔끔합니다.

<br />

### 3. `i % pattern.length` 의 의미

- `%` 는 **나머지 연산자**입니다.
- `i % pattern.length` 는 "인덱스 i를 패턴 길이로 나눈 나머지"를 의미합니다.

예시 (2번 수포자 패턴: `[2, 1, 2, 3, 2, 4, 2, 5]`, 길이 8):

```js
// i: 문제 번호, i % 8: 패턴 인덱스
0 % 8 = 0 → 패턴[0] = 2
1 % 8 = 1 → 패턴[1] = 1
...
7 % 8 = 7 → 패턴[7] = 5
8 % 8 = 0 → 다시 패턴[0] = 2
```

➡️ 따라서 `pattern[i % pattern.length]` 는 **무한히 반복되는 패턴에서 현재 위치의 값**을 의미합니다.

## 🕚 시간 복잡도 분석

- `answers.length = N` (정답 배열의 크기)

1. 바깥 반복문: `N` 번 실행
2. 안쪽 반복문: 수포자는 항상 3명 → 상수 3번 반복 = O(1)

👉 따라서 전체 반복 횟수는 `3N`, 시간 복잡도는 **O(N)** 입니다.

그 외:

- `i % pattern.length` → O(1)
- `Math.max(...scores)` → 길이 3 → O(1)
- 최고 점수 찾는 루프 → 길이 3 → O(1)

➡️ 최종 시간 복잡도: **O(N)**

## 정리

- `answers.entries()` 와 `for...of` + 구조 분해 할당으로 인덱스와 값을 동시에 가져올 수 있다.
- `for...in` 은 key(인덱스), `for...of` 는 값(value)을 순회한다.
- `i % pattern.length` 를 통해 패턴을 무한 반복하는 효과를 낼 수 있다.
- 전체 시간 복잡도는 **O(N)** 으로, 입력 크기에 비례하여 효율적으로 동작한다.

## 문제 출처

- [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/42840)

