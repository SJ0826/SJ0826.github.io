---
title: "배열 내장 함수"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - [
      "JavaScript",
      "forEach",
      "map",
      "IndexOf",
      "findIndex",
      "filter",
      "splice",
      "slice",
      "shift",
      "push",
      "pop",
      "reduce",
    ]
last_modified_at: 2022-11-23T08:06:00-05:00
---

## 📄 배열 내장함수

자바스크립트 배열에는 자체적으로 내장되어 있는 함수들이 있습니다.

이 함수들을 잘 활용한다면 코드가 더욱 간결해지고 가독성이 높아질 수 있습니다.

## 📄 forEach

`forEach`함수는 기존의 for문을 대체할 수 있습니다.

```js
const array = [a, b, c, d];

superheroes.forEach((item) => {
  console.log(item);
});
```

`forEach`의 파라미터로 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어줍니다.

이렇게 주어진 함수를 배열 요소 각각에 대해 실행합니다.

## 📄 map

`map`은 배열 안의 각 원소를 변환할 때 사용하며, <br>
결과 값이 담긴 **새로운 배열을 생성**합니다.<br><br>

`map` 함수의 파라미터로는 변화를 주는 함수를 전달해줍니다.

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = array.map((n) => n * n);
```

map을 사용하면서 index값을 얻고 싶다면 함수의 두번째 파라미터를 이용하면 됩니다.

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = array.map((currentElement, index) => {
  console.log("The current iteration is: " + index); // 배열의 인덱스 값
  console.log("The current element is: " + currElement); // 배열의 현재 값
});
```

## 📄 IndexOf

`IndexOf`는 배열에서 원하는 항목이 몇번째 원소인지 찾아주는 함수입니다.

```js
const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];

const index = superheroes.indexOf("토르");
```

함수의 파라미터로 원하는 값을 넣어주면 몇번째 함수인지 반환합니다.

## 📄 findIndex & find

만약 찾고자 하는 배열안의 값이 숫자나 문자열이라면 `indexOf`를 사용하지만

배열안의 값이 객체이거나 배열인 경우에는 사용할 수 없습니다.

그럴경우 사용하는 함수가 `findIndex`와 `find`입니다.

`findIndex`함수를 사용하고자 하면 함수에 검사하고자 하는 조건을 반환하는 함수를 넣습니다.

```js
const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true,
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true,
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true,
  },
];

const index = todos.findIndex((todo) => todo.id === 3);
```

> 배열 todos에서 id가 3인 값의 index를 반환한다.

결과

```js
`2`;
```

만약 `Index`아닌 객체나 배열의 값 전체를 반환하고자 하면 `find`함수를 사용합니다.

```js
const index2 = todos.find((todo) => todo.id === 3);
```

결과

```js
{ id: 3, text: '객체와 배열 배우기', done: true }
```

## 📄 filter

`filter`함수는 특정조건을 만족하는 원소를 찾아서 그 원소들을 **새로운 배열**로 만듭니다.

```js
const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true,
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true,
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true,
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false,
  },
];

const tasksNotDone = todos.filter((todo) => todo.done === false);
console.log(tasksNotDone);
```

결과

```js
[{ id: 4, text: "배열 내장함수 배우기", done: false }];
```

## 📄 splice & slice

### splice함수 사용법

```js
const spliced = 배열.splice(index number, n);
```

> index number인 원소부터 n개를 지우겠다.

### slice함수 사용법

```js
const sliced = 배열.slice(index number, n);
```

> index number인 원소부터 n개를 잘라내 새로운 배열을 생성한다.

### 공통점

두 함수 모두 배열을 잘라낼 때 사용합니다.

### 차이점

`splice`로 배열을 잘라내면 기존배열이 그대로 잘리지만,
`slice`로 배열을 잘라내면 기존배열이 유지됩니다.

## 📄 shift & unshift

- `shift`: 배열의 첫번째 원소를 추출합니다.
- `unshift`: 배열의 맨 앞에 원소를 추가합니다.

```js
const value = numbers.shift(); // value라는 값에 배열 numbers의 첫번째 원소 할당.
numbers.unshift(5); // 배열 numbers의 마지막 자리에 원소 5 추가.
```

## 📄 push & pop

- `push`: 배열의 마지막 원소를 추가합니다.
- `pop`: 배열의 마지막 자리에 있는 원소를 추출합니다.

```js
numbers.push(50); // numbers라는 배열에 값 50 추가
const value = numbers.pop(); // value에 numbers의 마지막 원소 할당
```

## 📄 reduce

`reduce`함수는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행합니다.

배열안의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환합니다.

```js
arr.reduce(callback, initialValue);
```

callback함수는 4개의 파라미터 값을 받습니다.

1. 누산기 (acc): 콜백의 반환값을 누적합니다.
2. 현재 값(cur): 처리할 현재 요소
3. 현재 인덱스(idx): 처리할 현재 요소의 인덱스
4. 원본 배열(src): reduce()를 호출한 배열

```js
const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, cur, idx) => {
  return (acc += cur);
}, 0); // 0은 초기값
console.log(result); // 15
```

## 출처

- 패스트캠퍼스 프론트엔드 강의

- [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
