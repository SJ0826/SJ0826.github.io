---
title: "콜백(Callback)"
excerpt: ""
toc: true
toc_sticky: true

categories:
  - JavaScript
tags:
  - ["JavaScript", "콜백"]
last_modified_at: 2022-09-06T08:06:00-05:00
---

## 📄 콜백

콜백 함수는 **다른 코드를 인자로 넘겨주는 함수**이다.<br>
다른 코드(함수 또는 메서드)에게 인자로 넘겨줌으로써 그 제어권도 함께 위임한다.
자바스크립트는 호스트 환경이 제공하는 여러 함수를 사용하면 **비동기 동작**을 수행할 수 있다.

## 📄 콜백은 어떤 경우에 사용될까?

```js
function loadScript(src) {
  // <script> 태그를 만들고 페이지에 태그를 추가합니다.
  // 태그가 페이지에 추가되면 src에 있는 스크립트를 로딩하고 실행합니다.
  let script = document.createElement("script");
  script.src = src;
  document.head.append(script);
}

loadScript("/my/script.js"); // script.js엔 "function newFunction() {…}"이 있습니다.

newFunction(); // 함수가 존재하지 않는다는 에러가 발생합니다!
```

`new Function()`에서 에러가 발생하는 이유는 브라우저가 스크립트를 읽어올 수 있는 시간을 충분히 확보하지 못했기 때문이다.<br>

```js
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}

loadScript('/my/script.js', function() {
  // 콜백 함수는 스크립트 로드가 끝나면 실행됩니다.
  newFunction(); // 이제 함수 호출이 제대로 동작합니다.
  ...
});
```

`loadScript`의 두 번째 인수에 스크립트 로딩이 끝난 후 실행될 함수인 콜백 함수를 추가했다.<br>
두 번째 인수로 전달되 함수는 원하는 동작이 완료되었을 떄 실행된다.<br><br>

이것을 **콜백 기반 비동기 프로그래밍**이라고 부른다.<br>
비동기적으로 수행되어야할 필요성을 가진 코드에 콜백을 기반으로 접근할 수 있다.

## 📄 오류 우선 콜백

콜백함수를 이용해서 에러를 핸들링할 수 있다.

```js
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () =>
    callback(new Error(`${src}를 불러오는 도중에 에러가 발생했습니다.`));

  document.head.append(script);
}

loadScript("/my/script.js", function (error, script) {
  if (error) {
    // 에러 처리
  } else {
    // 스크립트 로딩이 성공적으로 끝남
  }
});
```

### 오류 우선 콜백의 관례

1. `callback`의 첫 번째 인수는 에러를 위해 남겨둔다. 에러가 발생하면 이 인수를 이용해 `callback(err)`이 호출된다.
2. 두 번째 인수는 에러가 발생하지 않았을 때를 위해 남겨둔다. 원하는 동작이 성공한 경우엔 `callback(null, result1, result2)`가 호출된다.

### 오류 우선 콜백의 장점

오류 우선 콜백을 사용하면, 단일 콜백 함수에서 에러 케이스와 성공 케이스 모두를 처리할 수 있다.

## 출처

- 코어 자바스크립트
- [모던 자바스크립트 튜토리얼](https://ko.javascript.info/callbacks)
