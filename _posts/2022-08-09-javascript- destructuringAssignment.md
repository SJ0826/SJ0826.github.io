---
title: "비구조화 할당"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "객체", "비구조화 할당"]
last_modified_at: 2022-08-09T08:06:00-05:00
---

## 📄 비구조화 할당

비구조화 할당을 다른 말로 표현하면 **객체 구조 분해**라고 할 수 있습니다.
말 그대로 객체의 구조를 분해해서 특정값을 추출하는 과정을 비구조화 할당이라고 합니다.

```js
const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};

const { name } = ironMan; //객체 ironMan에서 name이란 값을 추출함.
console.log(name);
```

결과

```js
토니 스타크
```

중괄호(`{}`)를 사용해서 선언한 객체의 원하는 키를 뽑아냅니다.

객체뿐만아니라 배열에서도 비구조화 할당을 할수 있습니다.

```js
const array = [1, 2];

const [one, two = 2] = array;

console.log(one);
console.log(two);
```

## 출처

- 패스트캠퍼스 프론트엔드 강의
