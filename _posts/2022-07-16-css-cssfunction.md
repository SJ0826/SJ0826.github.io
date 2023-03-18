---
title: "CSS 함수"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["calc"]
last_modified_at: 2022-07-16T08:06:00-05:00
---

## 📄 CSS 함수

CSS의 속성값을 지정할 때 함수의 성격을 적용할 수 있습니다.

CSS함수는 괄호 안에 인수를 전달하면, 인수에 따른 결과값을 속성에 적용하는 방식으로 동작합니다.

## 📄 calc()

CSS함수 중 계산을 담당하는 함수 입니다.

괄호안의 표현식을 결과값으로 적용합니다.

```css
.message_text {
  width: calc(100% - 100px);
}
```

이렇게 message_text를 가변적인 크기로 설정이 가능합니다.

## 출처

- 유노코딩
