---
title: "[애니메이션] transition"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["transition"]
last_modified_at: 2022-07-29T08:06:00-05:00
---

## 📄 transition

: CSS 속성을 이용한 변화의 전, 후 사이에 애니메이션을 추가해 움직임을 부드럽게 만들어주는 속성

## 📄 transition 속성

### 1. transition-property

: 어떠한 속성(property)에 transition을 적용할지 정합니다.

```css
trasition-property: color, transform;
```

### 2. transition-duration

: transition에 걸리는 시간을 지정합니다.

```css
transition-duration: 0.2s;
```

### 3. transition-timing-function

transition의 속도 패턴을 정합니다.

```css
transition-duration: ease-in-out | linear | ease | ease-in | ease-out;
```

[CSS-Transition timing function sample](https://codepen.io/Joogumi/full/eYMgrKO)에서 각각의 속성들을 확인할 수 있습니다.

### 4. transition-delay

: transition 요청을 받은 후 실제로 실행되기까지 기다려야 하는 시간의 양을 지정합니다.

```css
transition-delay: 2s;
```

transition의 속성을 한번에 적어줄 수도 있습니다.

```css
transition: color 0.4s (duration) ease-in-out(timing-function) 1s (delay);
```

## 출처

- [강력한 CSS](https://www.inflearn.com/course/%EA%B0%95%EB%A0%A5-css-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84/unit/135394)
