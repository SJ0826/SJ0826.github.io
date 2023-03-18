---
title: "fixed&sticky"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["fixed", "sticky"]
last_modified_at: 2022-07-19T08:06:00-05:00
---

## 📄 position: fixed;

요소를 일반적인 문서의 흐름에서 제거하고, 지정된 위치에 고정시킵니다.

```css
.pos {
  position: fixed;
  top: 50px;
  left: 50px;
}
```

> 위에서부터 50px 왼쪽에서부터 50px 떨어진 자리에서 움직이지 않는다.

## 📄 position: sticky;

요소를 일반적인 문서 흐름에 따라 배치하고, 스크롤(roll)되는 가장 가까운 상위 요소에 대해 오프셋을 적용합니다.

```css
.pos {
  position: sticky;
}
```

> 스크롤 이동으로 요소가 움직여도 스티키 요소는 고정된 상태를 유지한다.

## 출처

- 유노코딩
