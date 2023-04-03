---
title: "최댓값과 최솟값"
excerpt: "프로그래머스 Lv2. 최댓값과 최솟값 풀이"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv2
tags:
  - ["프로그래머스", "최댓값과 최솟값"]
last_modified_at: 2023-02-16T08:06:00-05:00
---

## 문제 📖

문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.

예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

- s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.

```js
function solution(s) {
  var answer = "";
  return answer;
}
```

## 나의 풀이 🙋‍♀️

```js
function solution(s) {
  const stringToArray = s.split(" ");
  const stringToNumber = stringToArray.map((element) => parseInt(element));
  const maxValue = Math.max(...stringToNumber);
  const minValue = Math.min(...stringToNumber);
  const answer = `${minValue} ${maxValue}`;
  return answer;
}
```

먼저 `split` 배열 내장 함수를 통해 공백을 기준으로 문자열을 구분했다.

이후 최댓값과 최솟값을 구하기 위해 구분된 배열의 문자들을 숫자로 바꾸어 주고,

`spread`연산자로 배열을 분해해서 최댓값과 최솟값을 구했다.

문자열을 반환해야 한다고해서 백틱으로 `maxValue` `minValue`을 감싸 `return`시켰다.

## Best Practice 👍

### # 1

```js
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}
```

우선, 내가 작성한 코드보다 훨씬 간결한 것을 확인했다.

내가 몰랐던 점은 다음과 같다.

- `Math`가 문자열도 취급한다는 것
- 굳이 따로 변수나 상수에 값을 할당하는 것보다 바로 `return`을 시키는게 더 나을 때도 있다는 것

### # 2

```js
function solution(s) {
  let min = Math.min.apply(null, s.split(" ").map(Number));
  let max = Math.max.apply(null, s.split(" ").map(Number));
  var answer = min + " " + max;
  return answer;
}
```

이 코드가 인상적이었던 점은 `map`함수를 사용하는 방식 때문이었다.

내 풀이를 보면 `map`을 사용할때 각각 요소에 `parseInt`를 적용해서 숫자로 변환하는 방식이었는데, 그냥 `Number`라고 적기만 해도 식이 진행된다는 것을 알게 되었다.
