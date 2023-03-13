---
title: "spread & rest"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "spread", "rest"]
last_modified_at: 2022-08-10T08:06:00-05:00
---

## 📄 spread 연산자

`spread`연산자는 ES6문법에서 처음으로 등장했습니다.

`spread`연산자는 객체나 배열의 엘리먼트를 요소 하나하나로 펼쳐서 사용할 수 있게 합니다.

`...`라는 키워드를 사용합니다.

**기존 객체나 배열을 복사하고 추가적인 값을 넣어줄 때** 주로 사용합니다.

```js
const first = {
  one: 1,
};

const second = {
  ...first, //first의 엘리먼트를 가져옴.
  two: 2,
};

consol.log(first);
consol.log(second);
```

✔ 결과

```js
{ one: 1}
{ one: 1, two: 2}
```

### 장점

- `spread`연산자는 기존객체를 변경시키지 않고 복사해옵니다.

- 코드의 재사용성이 높아집니다.

## 📄 rest 연산자

`rest`연산자도 마찬가지로 `...`키워드를 사용합니다.

차이점은 '나머지'라는 뜻을 가진것처럼 **정해준 값 이외의 값을 복사해온다**는 것입니다.

```js
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers; //첫번째 값을 제외한 값을 rest로 가져온다.
console.log(one);
console.log(rest);
```

✔ 결과

```js
0;
[(1, 2, 3, 4, 5, 6)];
```

## 출처

- 패스트캠퍼스 프론트엔드 강의
