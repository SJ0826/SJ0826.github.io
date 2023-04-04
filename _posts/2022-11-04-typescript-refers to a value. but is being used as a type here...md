---
title: "🚨 refers to a value, but is being used as a type here."
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["에러", "Navigate"]
header:
  teaser: assets\image\TS-logo.jpg
last_modified_at: 2022-11-04T08:06:00-05:00
---

## 🚨 문제 발생

타입 스크립트로 `React-Router-Dom`에서 제공하는 `Navigate` 컴포넌트를 사용하려고 하는데 에러가 발생했다.

```ts
'Navigate' refers to a value, but is being used as a type here.
```

![image](https://user-images.githubusercontent.com/56298540/214766745-28407eff-8fbe-4ace-8544-2853ee134072.png)

## ❔문제 원인

타입스크립트 파일 확장자를 `ts`로 한 상태에서 컴포넌트를 사용해서 발생한 문제였다.

## 🔨 문제 해결

![image](https://user-images.githubusercontent.com/56298540/214767246-c4c5e05e-907b-47a9-a7a7-ee0c48da2eca.png) :thumbsup:

## 참고

- [StackOverFlow](https://stackoverflow.com/questions/62059408/reactjs-and-typescript-refers-to-a-value-but-is-being-used-as-a-type-here-ts)
