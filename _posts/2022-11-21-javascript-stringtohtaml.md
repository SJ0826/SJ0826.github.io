---
title: "JS 문자열을 HTML 개체로 변환"
excerpt: "자바스크립트에서 작성한 문자열을 `innerHTML` 속성을 이용해 HTML로 변환시켜 주는 방법"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "문자열", "HTML"]
last_modified_at: 2022-11-21T08:06:00-05:00
---

## 📄 JS 문자열을 HTML 개체로 변환

자바스크립트에서 작성한 문자열을 `innerHTML` 속성을 이용해 HTML로 변환시켜 주는 방법입니다.

```js
const stringToHTML = function (str) {
  const dom = document.createElement("div");
  dom.innerHTML = str;
  return dom;
};
console.log(stringToHTML(`<h1>Hello world!</h1><p>How are you today?</p>`));
```

결과

```
<div>
  <h1>Hello world</h1>
  <p>How are you today?</p>
</div>
```

- domcument에 `div` 엘리먼트를 추가한다.
- 새로 생성된 `div` 인스턴스는 `dom`과 연결된다.
- `dom`의 경우 `innerHTML` 속성을 설정해서 HTML 개체로 변환한다.
- `return`은 `strinToHTML` 함수에 대한 `dom` 인스턴스가 된다.

## 출처

- [DelftStack-JavaScript에서 문자열을 HTML로 변환](https://www.delftstack.com/ko/howto/javascript/javascript-string-to-html/)
