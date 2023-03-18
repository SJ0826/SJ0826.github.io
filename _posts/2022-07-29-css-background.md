---
title: "CSS background"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["backgroud"]
last_modified_at: 2022-07-29T08:06:00-05:00
---

## 📄 background

background는 콘텐츠의 배경을 정의합니다.

## 📄 background의 하위 속성

#### ▪ background-color

: 배경색을 정의합니다.

#### ▪ background-image

: 배경 이미지를 정의합니다.

```css
background-image: url(이미지);
```

#### ▪ background-position

: 배경 이미지의 초기 위치를 정의합니다.

#### ▪ background-size

: 배경 이미지의 크기를 정의합니다.

- cover: 이미지가 찌그러지지 않는 한도 내에서 최대로 설정합니다.
- contain: 이미지가 찌그러지거나 잘리지 않는 한도 내에서 최대로 설정합니다.

#### ▪ background-repeat

: 배경 이미지의 반복 방법을 정의합니다.

- no-repeat: 이미지를 반복하지 않습니다.(이미지가 콘텐츠보다 작을 경우 활용)

```css
div {
  background-image: url(이미지);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
```

---

background는 하위 속성을 연달아 정의할 수 있습니다.<br>
매우 다양하여 사용자는 속성값을 정확한 값으로만 정의하면 됩니다.

```css
background: no-repeat url(이미지);
```
