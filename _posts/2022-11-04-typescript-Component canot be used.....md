---
title: "🚨 Component cannot be used as a JSX component. Its return type is not a valid JSX element"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["에러"]
last_modified_at: 2022-11-04T08:06:00-05:00
---

## 🚨 에러 발생

프로젝트 진행 중 Layout 컴포넌트에서 에러가 발생했다.

![image](https://user-images.githubusercontent.com/56298540/199916270-ad668bb1-8e8a-47f3-946d-073cbb3f2c3b.png)

## ❔ 에러 원인

해당 컴포넌트를 함수형으로 작성했는데 **return** 문이 없었다.

## 🔨 에러 해결

```js
// Page.tsx
...
export default function Page({ children }: Props) {
  return <Container>{children}</Container>
}
...
```

## 출처

- [stack overflow](https://stackoverflow.com/questions/62702485/component-cannot-be-used-as-a-jsx-component-its-return-type-element-is-not)
