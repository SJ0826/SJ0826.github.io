---
title: "컨테이너와 전역 속성"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - HTML
tags:
  - ["HTML", "컨테이너", "전역속성"]
last_modified_at: 2022-07-15T08:06:00-05:00
---

## 📄 컨테이너 태그

콘텐츠에 아무런 영향을 주지 않고, 여러 요소를 묶어 관리하기 편하게 만드는 역할을 하는 태그입니다.

### div: 블록 레벨 컨테이너

![div](https://user-images.githubusercontent.com/56298540/179185892-8113f5da-5429-4734-854b-f1ae0039f47a.png)

페이지 전체 면적을 차지합니다.

### span: 인라인 컨테이너

지정한 부분의 면적만 차지합니다.

## 📄 전역 속성

전역속성(Global attributes)은 **모든 HTML 태그에서 공통으로 사용**할 수 있는 속성입니다.

```html
<태그명 속성명=**속성값** 속성명=**속성값**>콘텐츠</태그명>
```

### 대표적인 전역 속성들

- **id**: 요소에 고유한 이름을 부여하는 식별자 역할 속성입니다. id는 태그당 하나씩만 지정합니다.
- **class**: 요소를 그룹 별로 묶을 수 있는 식별자 역할 속성입니다. class는 다중 지정 및 중복이 가능합니다.
- **style**: 요소에 적용할 CSS스타일을 선언하는 속성입니다.
- **title**: 요소의 추가 정보를 제공하는 텍스트 속성입니다. 사용자에게 툴팁을 제공합니다.