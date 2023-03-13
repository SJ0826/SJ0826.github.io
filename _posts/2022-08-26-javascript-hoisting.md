---
title: "호이스팅(hoisting)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "호이스팅"]
last_modified_at: 2022-08-26T08:06:00-05:00
---

## 📄 호이스팅(hoisting)

아래에 있는 선언을 먼저 끌어올리는 것을 호이스팅이라고 합니다.

변수나 함수를 먼저 호출하고 다음에 변수나 함수를 선언하게 되면 문제없이 함수의 결과값이 출력됩니다.<br>

```js
hello2(); // 함수 호출

function hello2() {
  //함수 선언
  console.log("hello2");
}
```

함수뿐만 아니라 var키워드를 통한 호이스팅도 가능합니다.

```js
age = 6;
age++;
console.log(age);

var age;
```

### 주의할 점

**var로 변수를 선언함과 동시에 값을 지정했다면, 값을 제외한 선언만 호이스팅 됩니다.**

```js
console.log(name);

name = "Mark";

console.log(name);

var name = "Sujin";
```

결과

![hoisting](https://user-images.githubusercontent.com/56298540/181718021-21cd816e-ca43-449a-b023-7d9a8dbec97b.PNG)

이렇게 호이스팅되어 먼저 출력된 name은 값을 제외한 선언만 끌어올리기 때문에
`undifined`라고 출력됩니다.

**함수를 선언했을 때는 함수 전체를 끌어올립니다.**

```js
function a() {
  var b; // 수집 대상 1. 변수는 선언부만 끌어올립니다.
  function b() {} // 수집 대상 2. 함수 선언은 전체를 끌어올립니다.

  console.log(b);
  b = "bbb";
  console.log(b);
  console.log(b);
}
a();
```

결과

```js
[Function: b]
bbb
bbb
```

## 📄 let을 이용한 호이스팅은 불가능!

`let`을 이용한 호이스팅은 불가능 합니다.

`let`은 무조건 선언이 우선시 되어야 합니다.

```js
console.log(name);

name = "MARK";

console.log(name);

let name;
```

결과

![hoisting2](https://user-images.githubusercontent.com/56298540/181718866-7b0aa127-5262-46b9-aa62-8caefbe55319.PNG)

## 출처

- 패스트캠퍼스 프론트엔드 강의
- 코어 자바스크립트
