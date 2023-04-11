---
title: "[프로그래머스 / Lv 2] 짝지어 제거하기 by JS"
excerpt: "프로그래머스 Lv 2 짝지어 제거하기 찾기 문제 풀이"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv2
tags:
  - ["스택"]
last_modified_at: 2023-04-11T08:06:00-05:00
---

## 📄 문제

짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다. 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다. 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요. 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.

예를 들어, 문자열 S = baabaa 라면

b aa baa → bb aa → aa →

의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.

- 문자열의 길이 : 1,000,000이하의 자연수
- 문자열은 모두 소문자로 이루어져 있습니다.

## 🙋‍♀️ 나의 풀이 1

```js
function solution(s) {
  let arr = [...s]; // 0
  while (arr.length !== 0) {
    // 1
    arr = arr.filter(
      // 2
      (value, index) =>
        arr[index] !== arr[index + 1] && arr[index] !== arr[index - 1]
    );
    if (arr.length == s.length) break; // 3
  }
  return arr[0] ? 0 : 1; // 4
}
```

0. 주어진 문자열을 배열 `arr`로 바꾼다.
1. while문 배열의 길이가 0이될 때까지 반복한다.
2. 배열 요소의 앞 뒤 인덱스가 모두 다른 것만 남도록 조건을 주어 `arr`를 바꿔준다.
3. 만약 바꾼 `arr`의 길이와 처음 주어진 문자열 `s`의 길이가 같다면 반복문을 나온다.
4. `arr`의 값이 있으면 0 없으면 1을 반환한다.

이 코드는 문제가 있습니다.

O(N^2)의 시간복잡도를 가지고 있어 몇개의 테스트코드를 통과하지 못했습니다.

좀 더 나은 시간복잡도를 내기 위해 스택개념을 사용해보기로 했습니다.

## 🙋‍♀️ 나의 풀이 2

```js
function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(i);
    if (stack[stack.length - 1] == stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length == 0 ? 1 : 0;
}
```

1. 문자열 s를 순서대로 stack에 넣는다.
2. 만약 들어온 문자열이 중복으로 또 들어오면 내보낸다. `pop() pop()`!!!

다른 풀이를 보니 모두 스택 개념을 적용했네요.

스택을 이용해 푸니 시간복잡도가 O(N)이 되어 모든 테스트코드를 통과할 수 있었습니다.

## 문제 출처

- 프로그래머스
