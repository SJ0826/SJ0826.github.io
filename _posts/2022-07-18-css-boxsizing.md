---
title: "CSS box-sizing"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["content-box", "border-box"]
last_modified_at: 2022-07-18T08:06:00-05:00
---

## 📄 box-sizing 속성

box-sizing 속성은 너비와 높이가 포함할 영역을 변경함으로써 너비와 높이의 계산 방법을 결정할 수 있습니다.

- **content-box**: 기본값. 너비와 높이가 콘텐츠 영역만을 포함합니다. padding이 추가 되어도 content크기는 보장받고 싶을 때 씁니다.
- **border-box**: 너비와 높이가 안쪽 여백과 테두리까지 포함합니다.

```css
div {
  content-box: border-box;
}
```

![box-sizing](https://user-images.githubusercontent.com/56298540/179513956-1f50d8e2-0e09-402c-93f9-74b6366a26a3.png)

개발자도구를 통해 padding이 추가되어도 content크기는 변하지 않은 것을 확인할 수 있습니다.
