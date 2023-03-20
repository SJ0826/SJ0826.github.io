---
title: "margin&padding 다루기"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["margin", "padding"]
last_modified_at: 2022-07-18T08:06:00-05:00
---

## 📄 하위 속성 정의하기

```css
div {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-lefr: 40px;
}
```

위와 같이 margin에도 동일한 접미사를 붙여 개별 정의할 수 있습니다.

## 📄 여러 값을 한 번에 정의하기

```css
span {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 10px 20px 30px 40px;
  <!--순서: top-right-bottom-left-->;
}
```

위와 같이 padding에도 동일한 접미사를 붙여 개별 정의할 수 있습니다.

## 출처

- 유노코딩
