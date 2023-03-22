---
title: "tsconfig.json 파일 살펴보기"
excerpt: "tsconfig.json 파일 구조를 살펴보자"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["tsconfig"]
last_modified_at: 2023-03-22T08:06:00-05:00
---

## 📄 tsconfig.json 파일이란?
tsconfig.json 파일은 타입스크립트 프로젝트에서 타입스크립트에 관한 환경설정을 할 수 있는 **타입스크립트 컴파일러 설정파일**입니다.

## 📄 tsconfig.json 파일에서 사용하는 옵션

tsconfig.json 파일에는 다양한 옵션이 있지만, 자주 사용되는 옵션을 정리했습니다.

```ts
{
  "compilerOptions": {
    "module" :"CommonJS",
    "target": "es5",  
    "esModuleInterop": true,                            
    "moduleResolution": "node",                          
    "outDir": "dist",
    "baseUrl": ".",
    "sourceMap": true,
    "downlevelIteration": true,
    "noImplicitAny": false,
    "paths": {"*": ["node_modules/*"]}                               
  },
  "include": ["src/**/*"]
}

```

* `include`: 타입스크립트 컴파일러 대상이 되는 경로

### ▪ module 키
* 컴파일된 ES5 자바스크립트 코드는 웹브라우저와 노드제이에스에서 양쪽에서 동작해야 한다.
* 하지만, 웹브라우저와 노드제이에스는 동작방식이 다르다. (웹 브라우저: `amd`, 노드제이에스: `commonjs` )
* 따라서, module키로 동작 대상 플랫폼이 무엇인지 구분해주는 역할을 한다.

### ▪ moduleResolution 키
* moduule이 어떤 값을 가지느냐에 따라 다르게 설정된다.
* `commonjs`는 `node`로 설정하고, `amd`는 `classic`으로 설정한다.

### ▪ target 키
* 트랜스파일할 대상 자바스크립트의 버전을 설정한다.
* 보통 es5를 설정한다.

### ▪ baseUrl & OutDir 키
* 트랜스파일된 자바스크립트 파일을 저장하는 경로
* `OutDir`은 baseUrl 설정값을 기준으로 하위 디렉토리를 뜻한다.

### ▪ paths 키
* 소스 파일의 import 문에서 from 부분을 해석할 때 찾아야 하는 디렉토리를 설정한다.
* `node-module`을 포함한 이유는 찾아야하는 소스가 외부 패키지일 경우를 위해 설정한 것이다.

### ▪ esModuleInterop 키
* 웹 브라우저에서 동작한다는 가정으로 만들어진 오픈소스 자바스크립트 라이브러리가 CommonJS방식으로 동작하는 타입스크립트 코드에서 실행될 수 있도록 설정

### ▪ sourceMap 키
* 소스맵 파일 생성 유무를 설정한다.
* 소스맵 파일에는 변환된 자바스크립트 코드가 타입스크립트 코드의 어느 부분에 해당하는지 보여준다.

### ▪ downlevelIteration 키
* 타입스크립트의 생성기(generator) 구문이 정상적으로 동작하도록 설정

### ▪ nolmplicitAny 키
* 지정하지 않은 타입을 암시적으로 `any`로 설정하게 한다.
* `false`로 설정하면 타입을 지정하지 않았을 때, 에러메세지가 표시되지 않고 넘어간다.

## 참고

* Do It 타입스크립트 프로그래밍 (책)