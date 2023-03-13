---
title: "Nodejs, npm, yarn"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "Nodejs", "npm", "yarn"]
last_modified_at: 2023-02-15T08:06:00-05:00
---

## 📄 Node.js란?

> Nodejs는 Chrome V8 JavaScript 엔진으로 빌드 된 **JavaScript의 런타임** 입니다. (by Node 공식 페이지)

> 런타임이란? 특정 언어로 만든 프로그램을 실행할 수 있는 환경

Nodejs는 자바스크립트를 브라우저 내에서 말고도 다른환경에서 자바스크립트를 실행할 수 있게 합니다.

### Node.js 의 유래

크롬같은 브라우저에는 html을 동적으로 움직일 수 있게하는 자바스크립트 해석 엔진이 있습니다.

크롬은 V8, 모질라는 SpiderMonkey를 사용합니다.

브라우저 중 크롬이 인기가 있는 이유중 하나는 빠른 속도입니다.

자바스크립트를 해석하는 속도가 빠르기 때문에 사용자가 브라우저를 이용할 때 속도가 빠르다고 느끼게 됩니다.

크롬은 사용하던 해석 엔진인 V8을 Node.js라는 이름으로 따로 출시합니다.

## 📄 npm(Node Packaged Manager)

npm은 **Node.js의 패키지 관리자**입니다.

npm은 Node.js로 만들어진 모듈을 웹에서 받아서 설치하고 관리해주는 프로그램입니다.

npm을 사용하여 패키지를 설치하면 `package.json`에서 설치한 패키지가 자동으로 정리됩니다.

## 📄 yarn

yarn 또한 npm과 같이 javascript 패키지 매니저입니다.

yarn을 사용하면 npm 보다 더 나은 환경에서 자바스크립트를 실행할 수 있어 사용량이 높습니다.

### yarn을 사용하는 이유

**1. 속도**

우선 npm보다 빠릅니다. 다운받은 패키지를 캐시에 저장하여 중복된 데이터는 다운로드하지 않고 캐시에 저장된 파일을 활용하기 때문입니다.

npm은 패키지를 설치할때 순차적으로 설치하는 반면, yarn은 병렬로 처리해 속도면에서 우수합니다.

**2. 안정성과 보안**

npm은 의존 관계를 가지는 다른 패키지들이 포함되지만 yarn은 `package.json`에 있는 파일만 설치한다고 합니다.
