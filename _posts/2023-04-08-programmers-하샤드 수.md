---
title: "[프로그래머스 / Lv 1] 하샤드 수"
excerpt: "프로그래머스 Lv 1 하샤드 수 문제 풀이"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["하샤드 수", "reduce"]
last_modified_at: 2023-04-08T08:06:00-05:00
---

## 📄 문제

양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

- x는 1 이상, 10000 이하인 정수입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(x) {
  let sum = [...x.toString()].reduce((acc, cur) => {
    return (acc += Number(cur));
  }, 0);
  return x % sum === 0;
}
```

1. 주어진 숫자(x)를 문자열로 변환 후, 각 자릿값을 배열의 요소로 만든다.
2. 배열의 요소를 reduce메소드를 사용해 더한 누적값을 변수 `sum`에 할당한다.
3. 요구사항대로 주어진 숫자를 누적값으로 나누었을 때 0이 되는지에 대한 boolean값을 반환한다.

처음으로 프로그래머스에서 reduce함수를 사용했습니다. <br/>
점점 응용하는 메소드가 생길수록 뿌듯합니다.

## 👍 Best Practice

```js
function Harshad(n) {
  return !(n % (n + "").split("").reduce((a, b) => +b + +a));
}
```

반환값을 true/false가 아닌 0과 1을 통해 표현할 수도 있다는 것을 적용한 식입니다. 👍

## 문제 출처

- 프로그래머스
