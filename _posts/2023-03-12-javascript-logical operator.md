---
title: "논리 연산자를 이용한 조건문"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "논리연산자"]
last_modified_at: 2022-03-12T08:06:00-05:00
---

## 📄 논리 연산자를 이용한 조건문

조건문은 계산식뿐만 아니라 논리연산자를 이용해 완성할 수 있습니다.

## 📄 표현식 && 표현식

`&&`는 **and연산자**로 불리며 조건 중 하나라도 거짓일 경우 거짓이 됩니다.

```js
if (true && true) {
  console.log("두개 모두 참이면 참");
}

if (true && false) {
  console.log("한개만 참이면 거짓");
}

if (false && false) {
  console.log("두개 모두 거짓이면 거짓");
}
```

결과

![연산자](https://user-images.githubusercontent.com/56298540/181880486-d09bc950-b56a-4dfc-8dde-80f078ecabb3.PNG)

## 📄 표현식 || 표현식

`||`는 &&OR연산자\*\*로 둘중 하나만 참이면 참이 됩니다.

```js
if (true || true) {
  console.log("두개 모두 참이면 참");
}

if (true || false) {
  console.log("한개만 참이면 참");
}

if (false || false) {
  console.log("두개 모두 거짓이면 거짓");
}
```

결과

![연산자2](https://user-images.githubusercontent.com/56298540/181880683-33cd5dcc-69d0-4bb1-8dc8-8988ec1b8e03.PNG)

## 📄 !표현식

!는 NOT연산자로 반대의 결과값을 출력합니다.

```js
if (!true) {
  console.log("참이면 거짓"); // 거짓이므로 출력되지 않음.
}

if (!false) {
  console.log("거짓이면 참");
}
```

결과

![연산자3](https://user-images.githubusercontent.com/56298540/181880944-f9897594-d45f-4c30-a231-9c430f06f041.PNG)

## 📄 논리연산자를 이용한 조건부 실행

표현식은 앞을 먼저 평가하고 뒤를 평가합니다.

앞 표현식을 평가를 해서 참 일때만, 뒤 표현식을 평가할 필요가 생기기 때문에 뒤의 표현식이 실행됩니다.

```js
n % 5;

// 앞이 참이기 때문에 뒤가 실행이 되지 않음.
n % 5 === 0 || console.log("5로 나누어 떨어지지 않을 때만 실행");

n = 6;

// 앞이 거짓이기 때문에 뒤가 실행됨.
n % 5 === 0 || console.log("5로 나누어 떨어지지 않을 때만 실행");
```

결과
![연산자4](https://user-images.githubusercontent.com/56298540/181882917-35b9afda-a77f-43b7-ac2d-7f7cd389946d.PNG)

## 📄 논리연산자 우선순위

논리연산자에는 우선순위가 있습니다.

`NOT(!)` > `AND(&&)` > `OR(||)` 순으로 NOT연산자가 제일 먼저 실행됩니다.

```js
const value = !((true && false) || (true && false) || !false);
```

세가지 논리연산자가 동시에 쓰였지만,

우선순위가 적용되어 value는 false라는 값을 가지게 됩니다.

## 출처

- 패스트캠퍼스 프론트엔드 강의
