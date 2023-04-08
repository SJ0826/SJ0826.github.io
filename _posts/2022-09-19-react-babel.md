---
title: "[React] 바벨 (Babel)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["바벨"]
last_modified_at: 2022-09-19T08:06:00-05:00
---

## 📄 바벨

바벨은 최신 **자바스크립트 문법을 지원하지 않는 환경**에서도 **최신 문법**을 사용 가능하게 자바스크립트 코드를 변환해주는 컴파일러입니다.

```js
// Babel Input: ES2015 arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function (n) {
  return n + 1;
});
```

리액트에서는 JSX 문법을 `createElement`함수로 호출하기 위해 바벨을 사용합니다.

## 📄 바벨 설치

```
npm install @babel/core @babel/cli @babel/preset-react
```

- `@babel/core`: 바벨의 핵심 기능을 가지고 있는 패키지
- `@babel/cli`: cli에서 사용할 바이너리가 들어있다.
- `@babel/preset-react`: 리액트를 위한 플러그인 여러개를 모아놓은 것

```
npx babel --watch src --out-dir , --presets @babel/preset-react
```

`src`디렉토리의 모든 JS파일을 분석하고 변환한 내용을 적용합니다.

한번 컴파일 하고 끝나는 것이 아니라 파일이 바뀔 때마다 자동으로 컴파일을 합니다.

## 📄 Plugins

바벨에는 **프리셋**과 **플러그인**이 있다.

- 플러그인(Prugins): 코드를 변환하게 하는 작은 js프로그램
- 프리셋(Preset): 여러개의 플러그인을 모아놓은 것.

플러그인와 프리셋은 공식으로 정해진 것을 사용할 수도 있고 직접 자신만의 플러그인을 작성하여 변환을 코드에 적용할 수도 있다.

## 출처

- [실전 리액트 프로그래밍](https://www.inflearn.com/course/%EC%8B%A4%EC%A0%84-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/dashboard)
- [BABEL 공식문서](https://babeljs.io/docs/en/)
