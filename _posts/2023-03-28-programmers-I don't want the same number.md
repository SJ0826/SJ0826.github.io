---
title: "같은 숫자는 싫어"
excerpt: "프로그래머스 Lv1. 같은 숫자는 싫어"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["같은 숫자는 싫어"]
last_modified_at: 2023-03-28T08:06:00-05:00
---

## 문제 📄

배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

- arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
- arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

## 나의 풀이 #1 🙋‍♀️

```js
function solution(arr) {
  return arr.filter((value, index) => value !== arr[index + 1]);
}
```

프로그래머스 문제를 풀어보기 시작하고 처음으로 정답다운 풀이가 나온 느낌입니다.

`filter`함수를 사용해서 배열을 순환하며 해당 값과 바로 오른쪽의 값을 비교하며 같지 않은 값만 모아놓은 배열을 새로 생성했습니다.

마지막 값은 `undefined`와 비교하기 때문에 새로운 배열에 무조건 들어가게 됩니다.

## 나의 풀이 #2 🙋‍♀️

문제를 보고 바로 `filter`함수를 사용하면 되겠다 싶었는데 문제 옆에 `스택/큐`라고 쓰여 있어 스택 큐를 떠올리며 다시 풀어봤습니다.

```js
function solution(arr) {
  let answer = []; // 1
  for (let i = 0; i < arr.length; i++) {
    arr[i] === arr[i + 1] ? "" : answer.push(arr[i]); // 2
  }
  return answer;
}
```

1. 정답에 해당하는 값만 담을 새로운 배열 `answer`을 생성합니다.
2. 반복문을 돌려 해당 값과 오른쪽의 값을 비교하여 값이 다른 경우에만 새로운 배열(`answer`)에 담아 반환해줍니다.

## Best Practice 👍

```js
function solution(arr) {
  var answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}
```

다른 분의 풀이를 보니 비교한 값이 다른 경우만 생각해도 된다는 것을 알았습니다.

굳이 제 풀이처럼 삼항연산자를 쓰지 않아도 되는 것이었습니다.

왠지 삼항연산자에 집착이 생겨버려 자꾸 쓰게 되네요.

불필요한 습관을 버려야겠습니다.

## 문제 출처
