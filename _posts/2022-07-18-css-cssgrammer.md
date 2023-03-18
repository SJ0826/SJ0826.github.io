---
title: "CSS기본문법"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["css 구성", "css 주석"]
last_modified_at: 2022-07-18T08:06:00-05:00
---

## 📄 CSS란?

▪ **Cascading**: 계단식<br>
▪ **Style**: 멋을 내다<br>
▪ **Sheets**: (종이)한 장<br>
<br>
즉, 계단식으로 스타일을 정의하는 문서입니다.<br>
<br>
css는 웹문서를 꾸며주기 위해 사용하는 언어입니다.<br>
<br>
확장자는 \*.css입니다.<br>
<br>
css문서는 html문서와 함께 작업을 수행합니다.

```css
<link href="style.css" rel="stylesheet">
```

이와 같이 html문서에 css문서의 링크를 걸어주어 작업을 수행하게 됩니다.

## 📄 CSS 기본 구성

```css
선택자 {
  속성명: 속성값;
}
```

- **선택자**: 어떤 요소에 스타일을 적용할지에 대한 정보
- **{중괄호}**: 선택한 요소에 적용할 스타일을 정의하는 영역
- **속성명**: 어떤 스타일을 정의하고 싶은지에 대한 정보(색상, 크기 등)
- **속성값**: 어떻게 정의하고 싶은지에 대한 정보

## 📄 주석

```css
p {
  /* 이 안에 작성하면 주석으로 처리됩니다. */
}
```

## 📄 HTML에 CSS문서를 적용하는 법

- 인라인 스타일: 태그에 직접 기술합니다.
- 스타일 태그: 스타일시트를 위한 태그를 추가하여 기술합니다
- 문서 간의 연결: 스타일시트 문서를 따로 작성하여 HTML 문서와 연결합니다.

```html
<link href="./style.css" rel="stylesheet" />
```

> href: 연결하고자 하는 외부 소스의 url을 기술하는 속성 <br />
> rel: 현재 문서(HTML)와 외부 소스의 연관 관계를 기술하는 속성

## 출처

- 유노코딩
