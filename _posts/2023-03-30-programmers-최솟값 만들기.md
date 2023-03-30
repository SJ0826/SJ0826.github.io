---
title: "[Lv 2] 최솟값 만들기"
excerpt: "숫자 내림차순 오름차순 하는 법 by sort()"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv2
tags:
  - ["최솟값 만들기", "reduce"]
last_modified_at: 2023-03-30T08:06:00-05:00
---

## 📄 문제

길이가 같은 배열 A, B 두개가 있습니다. 각 배열은 자연수로 이루어져 있습니다.
배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다. 이러한 과정을 배열의 길이만큼 반복하며, 두 수를 곱한 값을 누적하여 더합니다. 이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다. (단, 각 배열에서 k번째 숫자를 뽑았다면 다음에 k번째 숫자는 다시 뽑을 수 없습니다.)

예를 들어 A = [1, 4, 2] , B = [5, 4, 4] 라면

- A에서 첫번째 숫자인 1, B에서 첫번째 숫자인 5를 뽑아 곱하여 더합니다. (누적된 값 : 0 + 5(1x5) = 5)
- A에서 두번째 숫자인 4, B에서 세번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 5 + 16(4x4) = 21)
- A에서 세번째 숫자인 2, B에서 두번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 21 + 8(2x4) = 29)

즉, 이 경우가 최소가 되므로 29를 return 합니다.

배열 A, B가 주어질 때 최종적으로 누적된 최솟값을 return 하는 solution 함수를 완성해 주세요.

- 배열 A, B의 크기 : 1,000 이하의 자연수
- 배열 A, B의 원소의 크기 : 1,000 이하의 자연수

## 🙋‍♀️ 나의 풀이

```js
function solution(A, B) {
  const newA = A.sort((a, b) => a - b);
  const newB = B.sort((a, b) => b - a);
  let answer = 0;
  for (let i = 0; i < A.length; i++) {
    answer += newA[i] * newB[i];
  }
  return answer;
}
```

이번 문제를 통해 숫자를 오름차순, 내림차순 하는 법을 공부했습니다.

곱셈한 값의 누적결과가 최솟값이 되려면 `가장 작은 수 x 가장 큰 수`가 되어야 하기 때문입니다.

따라서 A는 오름차순으로 B는 내림차순으로 정렬해 인덱스가 일치하는 값끼리 곱셈해주었습니다.

## 👍 Best Practice

```js
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
```

`reduce`메소드를 사용한 풀이입니다.

`reduce`메소드를 배열 하나에만 적용할 수 있다는 생각에 시도하지 않았는데 이렇게도 접근이 가능하네요 👍

## 문제 출처

- 프로그래머스
