---
title: "[JavaScript] 모듈 번들러, 웹팩(Webpack)"
excerpt: "웹팩 공식문서 읽고 정리하기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "Webpack", "번들링", "웹팩"]
last_modified_at: 2023-11-08T08:06:00-05:00
---

# Webpack - JS 모듈 번들링 도구

보통 CRA 또는 CNA로만 프로젝트를 빌드해왔기 때문에 "번들링"이라는 개념을 몰라도 프로젝트를 진행하는데 문제가 없었다. 최근 최적화에 관심을 가지게 되면서 평소에 그냥 지나쳤던 웹팩에 대해 관심을 가지게 되었고, 역시 공식문서가 제일 정리가 잘 되어 있다는 것을 알고 전체적으로 읽어 보았다.

## 🟣 웹팩이란?

웹팩은 **자바스크립트 모듈 번들러**이다.그렇다면 모듈과 번들링의 의미는 무엇일까.

- 모듈: 프로그래밍 관점에서 특정 기능을 갖는 가장 작은 단위.
- 번들링: 웹 애플리케이션을 구성하는 자원을 하나의 파일로 병합, 압축하는 과정

즉, 웹팩이 하는 일은 특정 기능을 가지는 작은 코드 뭉치를 하나의 파일로 병합하는 것이다.

### 웹팩 사용 이유

1. 파일 단위로 변수를 관리할 수 있다. <br />
   웹팩은 자바스크립트 파일을 모듈로 관리한다. 모듈로 관리하지 않으면 두개의 파일에서 전역으로 선언된 변수 `example`이 중복선언되는 일이 생긴다. 웹팩을 사용하면 같은 이름으로 선언된 전역 변수를 다른 취급으로 관리할 수 있다.
2. 모듈 번들링을 통해 브라우저에서 서버로 요청하는 파일 숫자를 줄일 수 있다.<br />
   브라우저에서 서버로 보낼 수 있는 HTTP요청 수는 정해져있다. 모듈 번들링을 통해 HTTP요청을 줄임으로써 사용자 경험을 높일 수 있다.
3. 웹팩의 code splitting 기능을 통해 동적으로 모듈을 로딩할 수 있다. <br />
   자바스크립트 코드가 모듈로 관리되어 있어 필요한 부분만 동적으로 로딩한다.

## 🟣 웹팩 설치하기

기본 프로젝트에 웹팩을 설치하는 방법이다.

1. webpack 설치

```
npm init -y
npm install webpack webpack-cli --save-dev
```

2. index.html 분리
   배포코드(`/dist`)와 개발자가 작성하는 소스코드(`/src`)를 분리하는 작업이다.

```js
webpack-demo
  |- package.json
  |- package-lock.json
 |- /dist
   |- index.html
  |- /src
    |- index.js
```

3. webpack.config.js 설정

- 번들링된 코드를 `/dist` 경로의 `main.js`에서 관리

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

4. 번들링 실행 명령어

```js
npx webpack --config webpack.config.js
```

5. package.json 에서 script 명령어 설정

```js
{
  "name": "webpack-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack" // 👀
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

## 🟣 웹팩으로 Asset 관련 코드 관리하기

## 참고

- [웹팩 공식문서](https://webpack.kr/)
