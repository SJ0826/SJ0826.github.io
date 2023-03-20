---
title: "가변 이미지"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["가변 이미지", "max-width", "picture"]
last_modified_at: 2022-07-27T08:06:00-05:00
---

## 📄 가변 이미지

화면의 배율에 따라 크기가 달라지는 이미지 입니다.

보통 `px`로 고정을 시켜놓는 경우도 있지만,
그렇지 않은 경우에는 화면이 커질 수록 픽셀이 깨져보이는 현상이 발생합니다.

## 📄 가변 이미지 설정 1 | max-width 사용

이미지 너비를 `%`단위로 지정하고 `max-width`를 사용하면
화면이 커질수록 이미지크기가 증가하다가,<br>
일정 크기에 도달하면 더이상 증가하지 않음으로써 이미지를 보호할 수 있습니다.

```css
 <style>
        div{
            width: 50%;/* body의 50%로 크기지정*/
        }
        img{

            max-width: 640px; /*이미지 최대크기 지정*/
        }
 </style>
```

### 주의할 점

`width`는 너비를 지정하는 속성이고, `max-width`는 최대 넓이 제한 길이를 지정하는 속성입니다.

혼동하지 않도록 조심해야 합니다.

## 📄 가변이미지 설정 2 | picture 태그 사용

주로 해상도 별로 이미지의 비율을 바꾸고 싶을때 `picture`태그를 사용합니다.

`source`태그를 통해서 이미지를 미디어 조건에 맞게 불러올 수 있습니다.

```css
 <picture>
        <source srcset="jake2.jpg" media="(min-width: 800px)"><!--800px보다 이미지가 커지면 jake2이미지를 보여준다.-->
        <img src="jake..jpg">
 </picture>
```

## 출처

- 유노코딩
