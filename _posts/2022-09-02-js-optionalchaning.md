---
title: "옵셔널 체이닝"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "옵셔널체이닝"]
last_modified_at: 2022-09-02T08:06:00-05:00
---

## 📄 옵셔널 체이닝

옵셔널 체이닝(optional chaining) `?.`을 사용하면 **프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근**할 수 있습니다.<br><br>

`?.`은 `?.`'앞’의 평가 대상이 `undefined`나 `null`이면 평가를 멈추고 `undefined`를 반환합니다.

```
let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined
```

`user?.address`로 주소를 읽으면 아래와 같이 `user` 객체가 존재하지 않더라도 에러가 발생하지 않습니다.

## 📄 주의할 점

- `?.`는 존재하지 않아도 되는 괜찮은 대상에만 사용해아 합니다.
- `?.`앞의 변수는 꼭 선언되어 있어야 합니다.
