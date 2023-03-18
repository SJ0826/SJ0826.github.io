---
title: "float&clear"
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

## 📄 float

float속성은 요소가 문서의 흐름에서 제외되어 자신을 포함하고 있는 컨테이너의 왼쪽이나 오른쪽에 배치되게 합니다.<br>
문서의 흐름에선 제외되지만, 필요한 만큼의 공간은 차지합니다.

주로 레이아웃을 구성할 때 **블록레벨 요소를 가로 정렬**하기 위해 사용됩니다.

### float의 속성값

- **none**: 기본값
- **left**: 왼쪽부터 가로정렬
- **right**: 오른쪽부터 가로정렬

```css
float: left;
float: right;
margin: 0 auto; /* 중앙 정렬 */
```

## 📄 clear

clear속성은 float 요소 이후에 표시되는 요소의 동작들을 조절합니다.

컨테이너 요소에 float요소를 적용하고 이후 요소에 더이상 float을 적용하고 싶지 않을 때 사용합니다.

### clear의 속성값

- **none**: 기본값
- **left**: float이 left인 요소의 아래로 내려가겠다<br>
- **right**: float이 right인 요소의 아래로 내려가겠다<br>
- **both**: float이 left및 right인 요소의 아래로 내려가겠다<br>

```css
.left {
  background-color: #ff8c00;
  width: 150px;
  height: 50px;
  float: left;
}
.right {
  background-color: #9932cc;
  width: 150px;
  height: 50px;
  float: right;
}
p {
  clear: both;
}
```

## 출처

- 유노코딩

* [Inpa Dev - Float 속성 간단 정리](https://inpa.tistory.com/entry/CSS-%F0%9F%93%9A-float)
