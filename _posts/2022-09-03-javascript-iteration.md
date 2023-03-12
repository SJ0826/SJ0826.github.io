---
title: "반복문(Iteration)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "반복문"]
last_modified_at: 2022-09-03T08:06:00-05:00
---

## 📄 반복문 for

`for`문은 어떤 유한한 횟수만큼 반복할 때 사용합니다.

```js
for(초기화; 반복 조건; 반복이 된 후 실행되는 코드) {
    반복이 되는 코드 블럭
 }
```

초기화 하면서 선언된 변수를 중괄호 안 반복 블럭에서 사용할 수 있습니다.

### 반복문 종료하기 | break

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
  if (i > 2) {
    break;
  }
  console.log("안녕하세요", i);
}
```

> i가 0부터 4까지 1씩 증가하면서 출력하는데, 만약 i가 2보타 큰 경우는 반복을 종료한다.

결과
![반복문](https://user-images.githubusercontent.com/56298540/181903537-cdb647f5-90ee-408c-8da5-84eddaa70770.PNG)<br>

### 반복문 넘기기 | continue

반복되는 블럭 안에서 `continue`를 만나면 거기서 바로 해당 블럭은 종료됩니다.

그리고 이와 같이 다음 반복이 있으면 다음 반복으로 넘어갑니다.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
  if (i < 2) {
    continue;
  }
  console.log("안녕하세요", i);
}
```

결과
![반복문2](https://user-images.githubusercontent.com/56298540/181903592-338b87d5-cbac-4b53-8db6-2f7b9ca5a819.PNG)

### for 무한 루프

소괄호 `()`안에 아무것도 적지 않고 세미콜론 `;`만 작성하면 조건이 생성되지 않아 무한으로 출력합니다.

이런 경우 보통 for문 안에서 if문으로 조건을 생성하기도 합니다.

```js
for (;;) {
  console.log("안녕하세요");
  if (Math.random * 100 > 90) {
    break;
  }
}
```

> 랜덤숫자\*100 이 90보다 크면 반복문 종료

## 📄 for in

`for in`반복문은 객체의 속성들을 반복하여 작업을 수행합니다.

객체의 `key`값에는 접근할 수 있지만 `value`에는 접근할 수 없습니다.

```js
for(let(또는 const) in 객체이름) {}

console.log(Object.keys(객체이름)); // 객체의 키 받아오기
console.log(Object.values(객체이름)); //키의 값 받아오기
console.log(Object.entries(객체이름)); //배열 형태로 키와 값을 반환
```

## 📄 for of

ES6에 추가된 `for...of`반복문은 배열안의 것들을 반복할 때 사용합니다.

for of 구문을 사용하기 위해선 컬렉션 객체가 `[Symbol.iterator]` 속성을 가지고 있어야만 합니다.

```js
var iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value); // 10, 20, 30
}
```

#### 주의할 점

`for..in`은 배열에 사용할 순 있지만 되도록 쓰지 않는 편이 좋습니다.<br>
`for..in`반복문은 모든 프로퍼티를 대상으로 순회하기 때문에 키가 숫자가 아닌 프로퍼티도 순회 대상이 되어 필요 없는 프로퍼티들이 문제를 일으킬 가능성이 생깁니다.<br>
또한 `for..in`반복문은 객체와 함께 사용할 때 최적화되어 있어 배열에 사용하면 객체에 사용하는 것 대비 10~100배 정도 느립니다.<br>

📌 **객체에는 `for...in`, 배열에는 `for...of`를 사용하자**

## 📄 while

무한 반복 루프를 작성할 때 for문 뿐만 아니라 while문으로도 작성할 수 있습니다.

```js
while (true) {
  console.log("안녕하세요");
  if (Math.random() * 100 > 90) {
    break;
  }
}
```

> Math.random() \* 100이 90보다 크면 반복문 종료

### do while

while문이 최초로 한번은 무조건 실행하도록 합니다.

```js
do {
  // 최초 한번은 무조건 실행
  console.log("안녕하세요");
} while (Math.random() * 100 > 90);
```

## 출처

- 패스트캠퍼스
- [모던 자바스크립트 튜토리얼](https://ko.javascript.info/array)
