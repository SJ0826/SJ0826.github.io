---
title: "웹폰트(Web Font)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["@font-face"]
last_modified_at: 2022-07-28T08:06:00-05:00
---

## 📄 웹폰트(Web Font)

웹 폰트란 사용자가 <span style="text-decoration: underline">로컬에 폰트를 설치하지 않아도</span>, 특정 서버에 위치한 폰트를 다운받아 웹페이지에 표시되는 폰트입니다.

## 📄 웹폰트 적용 방법

### 1. @font-face 이용

1. 웹폰트 파일을 준비한다.
2. CSS 문서에서 `@font-family`를 이용해 폰트 파일을 불러온다.
3. 불러온 폰트 파일을 이용해 새로운 font-family를 만든다.
4. 만든 font-family를 사용한다.

`@font-face`를 사용하는 방법보다 더 간편한 방법이 있습니다.

### 2. import 이용

1. 구글 폰트에 접속해서 원하는 폰트를 찾는다.
2. 원하는 굵기의 폰트 옆에 있는 Select this style를 클릭한다.
3. Use on web 항목에서 import를 선택하고 해당 import 구문을 css파일 내에 입력한다.

```css
// index.css

@import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap");

div {
  font-family: "Nanum Pen Script", cursive;
}
```
