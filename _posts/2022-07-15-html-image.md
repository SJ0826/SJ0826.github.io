---
title: "이미지 표시하기"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - HTML
tags:
  - ["HTML", "img"]
last_modified_at: 2022-07-15T08:06:00-05:00
---

## 📄 이미지를 보여주는 img 태그

html에서는 이미지를 보여줄 때 `img`라는 단일 태그를 사용합니다.

```html
<img src="표시할 이미지 파일" alt="이미지설명" />
```

이때 **alt**는 대체 택스트 역할을 합니다.

이미지가 로딩되기 전이나 이미지 로딩에 실패한 경우

이미지 대신에 대체 텍스트가 표시됩니다.

이미지 유실 상황에 대비하거나 시각 장애인을 위한 콘텐츠에 유용합니다.(음성인식기 활용)

## 📄 이미지 크기 조절하기

**width**와 **height**로 크기를 지정합니다.

이때 너비와 높이는 각각 픽셀(px)단위로 적용됩니다.

```html
<img
  src="표시할 이미지 파일"
  alt="이미지 설명"
  width="너비 값"
  height="높이 값"
/>
```
