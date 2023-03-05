---
title: "함수"
excerpt: "JavaScript 함수"
toc: true
toc_sticky: true

categories:
  - JavaScript
tags:
  - ["JavaScript", "함수"]
last_modified_at: 2022-08-05T08:06:00-05:00
---

함수는 특정코드를 하나의 명령으로 실행할 수 있게 해주는 기능입니다.

함수는 파라미터가 주어졌을 때 파라미터를 처리해서 결과를 만듭니다.

## 선언방법

함수를 선언할 때는 `functions`이라는 키워드를 사용합니다.

함수의 결과 값을 나타낼 때는 `return`이라는 키워드를 사용합니다.

`return`되는 순간 함수는 종료됩니다.

```
functions add(a,b) {
    return a + b;
}
```

> add라는 이름의 함수에 파라미터값으로 a와 b를 받아서, a + b의 결과값을 return시키는 함수.
