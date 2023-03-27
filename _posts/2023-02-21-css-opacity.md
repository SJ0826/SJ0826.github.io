---
title: "투명도 설정하기"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["opacity", "rgba"]
last_modified_at: 2023-02-21T08:06:00-05:00
---

## 📄 opacity 속성

```css
div {
  background-color: rgb(255, 255, 255);
  opacity: 0.5;
}
```

- `opacity`로 0~1의 값을 설정한다.

- 0에 가까울수록 투명하다.

## 📄 rgba 속성

```css
div {
  background-color: rgb(255, 255, 255, 0.5);
}
```

### 차이점

opacity는 해당 요소를 포함한 하위 요소까지 적용되고,<br/>
raga는 해당 요소에만 적용됩니다.
