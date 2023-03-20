---
title: "position(relative & absolute)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["position", "relative", "absolute"]
last_modified_at: 2022-07-29T08:06:00-05:00
---

## 📄 position

position은 HTML 요소가 배치되는 방식을 방법을 정의합니다.

## 📄 position의 속성값

<h3 style="background: lightgrey"> 1. static: 기본값</h3>

`position`이 기본 속성일 때는 위치 조정이 불가능한 기본 HTML 요소의 상태가 됩니다.

따라서 **`top`, `left`, `bottom` `right`**를 사용할 수 없습니다.

```css
.item2 {
  position: static;
  top: 30px; // 의미없는 코드
  left: 30px; // 의미없는 코드
}
```

<h3 style="background: lightgrey"> 2. relative: 기본값</h3>

: 원래 있던 자리를 기준으로 요소의 위치를 조정할 수 있습니다.

```css
div {
  width: 100px;
  height: 100px;
  background-color: red;

  position: relative;
  top: 100px;
  left: 100px; // 위에서부터 100px, 왼쪽에서부터 100px이동
}
```

> 원래 위치보다 위에서부터 100px, 왼쪽에서부터 100px 떨어진다.

<h3 style="background: lightgrey"> 3. absolute</h3>

: 요소를 일반적인 문서의 흐름에서 제거하고,

대상의 부모 요소 중 `relative`가 적용된 요소가 있다면 해당 위치를 절대 좌표의 기준으로 정합니다.

`relative`가 적용된 요소가 없다면 body태그를 기준으로 절대 위치를 정합니다.

```css
div {
  width: 100px;
  height: 100px;
  background-color: red;

  position: absolute;
  top: 100px;
  left: 100px;
}
```

<h3 style="background: lightgrey"> 4. fixed</h3>

: 스크롤과 무관하게 **뷰포트를 기준**으로 요소의 위치를 설정합니다.

스크롤을 내려도 화면에 고정되어 위치가 변하지 않습니다.

```css
.item2 {
  position: fixed;
  top: 30px;
  left: 30px;
}
```

<h3 style="background: lightgrey"> 4. sticky</h3>

: 요소의 원래 위치에 있다가 스크롤이 내려가면 지정된 좌표에 고정됩니다.

기준은 부모 요소의 좌표입니다.

스크롤이 내려가지 않았을 때는 `static`처럼 작동하다가,
해당요소의 위치 아래로 스크롤이 내려가면 지정한 좌표에 고정됩니다.

```css
.item2 {
  position: sticky;
  top: 30px;
  left: 30px;
}
---

## 출처

- [강력한 CSS](https://www.inflearn.com/course/%EA%B0%95%EB%A0%A5-css-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84)
```
