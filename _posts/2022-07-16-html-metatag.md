---
title: "메타(meta) 태그"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - HTML
tags:
  - ["HTML", "메타 태그", "charset", "http-eqiv", "name"]
last_modified_at: 2022-07-16T08:06:00-05:00
---

## 📄 메타(meta) 태그

meta 태그는 **HTML 문서의 정보를 표시**하는 태그입니다.

검색엔진 최적화에 기여하며, 검색 결과에도 영향을 끼칩니다.

개발자가 페이지를 참고할 때 도움이 되기도 합니다.

## 📄 메타 태그의 다양한 속성들

**1. charset**

문자 인코딩에 대한 요약 정보를 기입하는 속성입니다.

주로 영문과 한글을 모두 사용하기 위해 utf-8방식을 사용합니다.

```html
<meta charset="uth-8" />
```

**2. http-eqiv**

콘텐츠 속성의 정보/값에 대한 HTTP 헤더를 제공합니다.

```html
<!-- IE 브라우저의 최신 버전의 엔진을 사용하라는 뜻-->
<meta http-equiv="x-ua-compatible" content="IE-edge" />
<!-- 10초마다 페이지 새로고침하라는 뜻-->
<meta http-equiv="refresh" content="10" />
```

**3.name**
name 속성을 이름으로, content 속성을 값으로 하여 문서 정보를 제공합니다.

```html
<!--문서 제작자-->
<meta name="author" content="유노코딩" />
<!-- 페이지에 대한 요약-->
<meta name="desciption" content="페이지에 대한 짧고 명확한 요약" />
<!-- 페이지의 콘텐츠와 관련된, 쉼표로 구분한 키워드 목록-->
<meta
  name="keywords"
  content="예를 들면, 강아지, 고양이, 정보, 반려동물, 등등"
/>
```

## 출처

- 유노코딩
