---
title: "[JS] CJS와 ESM | 자바스크립트의 모듈화"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "CJS", "ESM"]
last_modified_at: 2024-07-09T08:06:00-05:00
---

## 📝 자바스크립트의 모듈화

모듈화는 코드를 작은 조각 또는 파일로 나누어 관리하는 방법입니다. <br />
초기 자바스크립트는 하나의 자바스크립트 파일에 모든 기능을 담아야 했습니다. 이로인해 가독성이 떨어지고 복잡성이 증가되는 등 문제가 발생하였습니다. <br />
자바스크립트의 역할이 커지며 모듈화의 필요성이 증가했고 CJS, ESM 등의 방법이 등장했습니다.

## 📝 CJS와 ESM | 자바스크립트를 모듈화 하는 방식

### ■ CJS (CommonJS) 방식

- **require**과 **module.exports**를 사용
- Node.js 환경에서 사용 (오직 서버사이드에서만 활용)
- 동기적으로 로드
  - 모듈이 완전히 로드되어 실행될 때까지 코드 차단
  - 실행전 모든 종속성이 로드되었는지 확인하고싶은 서버 측 애플리케이션에 적합
- 확장자: `.cjs`

```ts
// moduleA.js
const message = "Hello, from Module A!";
module.exports = message;

// moduleB.js
const messageA = require("./moduleA");
```

<br />

### ■ ESM (ECMAScript Modules) 방식

- **import**와 **export**를 사용
- Node.js 환경에서 사용하며 최신 브라우저에서도 사용 가능 (서버사이드와 브라우저 환경 모두 활용)
- 동기적으로 로드 되나 비동기 가능
  - ESM은 [Top-level await](https://nodejs.org/api/esm.html#top-level-await)를 지원하기 때문에 가능
- three shaking 가능
  - 정적 분석을 통해 빌드 단계에서(= 번들링된 코드에서) 사용하지 않는 코드를 제거
  - 웹페이지 로딩속도를 개선할 수 있어 프론트엔드 개발에 적합
- 확장자: `.mjs`

```ts
// moduleA.mjs
const message = "Hello, from Module A!";
export default message;

// moduleB.mjs
import messageA from "./moduleA";
```
### ■ CJS와 ESM 비교

|  | CJS | ESM |
| --- | --- | --- |
| 문법 | require, export.module | import, export |
| 적합도 | 서버측 개발에 적합 | 모던 웹 애플리케이션 개발에 적합 |
| 동적 가져오기 | 가능하나 일반적이지 않음 | o |
| 비동기 | x | o |
| 정적 분석 | x | o |
| three shaking | x | o |
| 브라우저 지원 | x | o |

<br />

## 출처
- [**.js, .cjs and .mjs defference**](https://dev.to/nipu/js-cjs-and-mjs-defference-5f21)
- https://tech.kakao.com/posts/605
