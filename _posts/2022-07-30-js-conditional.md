---
title: "조건문"
excerpt: ""
toc: true
toc_sticky: true

categories:
  - TIL/JavaScript
tags:
  - ["JavaScript", "조건문"]
last_modified_at: 2022-07-30T08:06:00-05:00
---

## 📄 조건문

조건문은 표현식이 참으로 평가될 때, 실행되는 블럭입니다.

```js
if (true) {
  console.log("항상 실행"); // 출력됨.
}

if (false) {
  console.log("항상 실행되지 않음"); // 출력되지 않음.
}
```

조건이 참인 경우는 출력이 되고 거짓인 경우는 출력되지 않습니다.

TIP | 블록에 코드가 한줄이면, 중괄호는 생략 가능합니다.

```js
if (true) console.log("항상 실행");

if (false) console.log("항상 실행되지 않음");
```

## 📄 표현식이 거짓으로 평가될 때

표현식이 거짓으로 평가될 때는 false만 있는 것이 아닙니다.

```js
if (false) console.log(false);
if (0) console.log(0);
if ("") console.log("");
if (null) console.log(null);
if (undefined) console.log(undefined);
if (NaN) console.log(NaN);
```

위의 경우 모두 거짓으로 평가되어 출력되지 않습니다.

## 📄 표현식이 참으로 평가될 때

마찬가지로 참인 경우도 여러가지 경우가 있습니다.

```js
if (true) console.log(true);
if (37) console.log(37);
if (-37) console.log(-37);
if ("Mark") console.log("Mark");
if ({}) console.log({});
if ([]) console.log([]);
```

## 📄 if에 해당하지 않을 때 | else

if문으로 조건식을 작성하고 반대의 경우에는 간단하게 else로 작성할 수 있습니다.

```js
const n = 15;

if (n % 3 === 0) {
  console.log("n은 3의 배수 입니다.");
} else if (n % 5 === 0) {
  console.log("n은 5의 배수 입니다.");
} else {
  console.log("n은 3의 배수도 아니고, 5의 배수도 아닙니다.");
}
```

마찬가지로 한줄로 작성할 경우 중괄호 생략이 가능합니다.

```js
if (n > 0) console.log("n이 0보다 큰 경우");
else console.log("n이 0보다 크지 않은 경우");
```

## 📄 조건이 여러번 반복되는 경우

조건이 여러번 반복되는 경우에는, 조건을 변수나 상수에 넣어 작성할 수 있습니다.<br>

```
const multipleOfThree = n % 3 === 0;
const multipleOfFive = n % 5 === 0;

if(multipleOfThree && multipleOfFive) {
    console.log('n은 15의 배수입니다.');
} else if(multipleOfThree) {
    console.log('n은 3의 배수입니다.');
}  else if(multipleOfFive) {
    console.log('n은 5의 배수 입니다.');
} else {
    console.log('n은 3의 배수도 아니고, 5의 배수도 아닙니다.');
}

```

## 출처

- 패스트캠퍼스 프론트엔드 강의
