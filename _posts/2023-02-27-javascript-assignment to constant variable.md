---
title: "🚨 Assignment to constant variable."
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "에러", "상수", "변수"]
last_modified_at: 2023-02-27T08:06:00-05:00
---

## 🚨 Assignment to constant variable.

자바스크립트 퀴즈를 푸는데 코드에 빨간 표시도 안났는데 에러가 떴다.

직역하면 **상수값을 변수에 할당**했다는 뜻이다.

```js
function countBiggerThanTen(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    if (number > 10) {
      sum += 1; // TypeError: Assignment to constant variable.
    }
  });
  console.log(sum);
}
```

## 원인

이미 선언한 const 변수에 새로운 값을 할당했을 때 발생한다.

위 코드에서 계속 값이 바뀌는 sum을 상수로 선언했다.

## 해결

값을 재할당에서 사용할 수 있는 `let`으로 바꾸어 주었더니 정상적으로 동작했다.
