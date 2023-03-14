---
title: "뷰포트(viewport)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - HTML
tags:
  - ["HTML", "뷰포트"]
last_modified_at: 2022-07-25T08:06:00-05:00
---

## 📄 뷰포트(viewport)

현재 화면에 보여지고 있는 영역을 의미합니다.

기기별로 뷰포트가 다르기때문에 보여지는 화면의 배율에 따라 화면이 다르게 보입니다.

html문서에서 이름이 뷰포트인 메타태그 설정을 확인할 수 있습니다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

> width=device-width : 너비를 기기의 너비 기준으로 초기화 한다.
> initial-scale=1.0 : 기기의 너비에 맞게 초기 scale를 지정한다.

이 메타태그 설정은 기기에 맞게 화면 배율을 조정해주기 때문에, 모바일 화면에서도 pc화면과 동일하게 콘텐츠의 크기가 유지되는 것을 확인할 수 있습니다.

## 📄 뷰포트 단위

뷰포트 크기를 기반으로 값을 계산하여 크기를 결정하는 가변단위들이 있습니다.

이는 반응형 웹을 만들 때 매우 유용하게 사용되는 단위들입니다.

▪ `font-size: 1vw;`

> 화면 사이즈에서 너비의 100분의 1

화면 너비의 백분율을 계산해서 크기를 조정합니다.

▪ `font-size: 1vh;`

> 화면 사이즈에서 높이의 100분의 1

화면 높이의 백분율을 계산해서 크기를 조정합니다.

▪ `font-size: 1vmin;`

> 화면 사이즈에서 너비와 높이 중 작은것의 100분의 1
> 너비와 높이 중 작은 것에 백분율을 맞춘다

▪ `font-size: 1vmax;`

> 화면 사이즈에서 너비와 높이 중 큰것의 100분의 1
> 너비와 높이 중 큰 것에 백분율을 맞춘다.
