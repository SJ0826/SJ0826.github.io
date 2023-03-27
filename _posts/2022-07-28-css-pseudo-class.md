---
title: "의사클래스(가상클래스)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["hover", "active", "before", "after"]
last_modified_at: 2022-07-28T08:06:00-05:00
---

## 📄 의사클래스(가상클래스)

의사클래스는 선택자에 추가하는 키워드로, 요소가 어떤 특정한 상태가 되었을 때 요소를 선택하겠다는 의미입니다.

## 📄 의사클래스 종류

- **hover**: 마우스 포인터가 요소에 올라가 있다.

```css
[type="button"]:hover{ 버튼에 마우스 커서 댔을 때 배경 색깔 변경
                background-color: gray;
                }
```

- **active**: 사용자가 요소를 활성화했다.(ex. 마우스 클릭)<br>

```css
 [type="button"]:active{버튼을 마우스로 클릭하면 배경 색깔 변경
                background-color: black;
                }
```

- **focus**: 요소가 포커스를 받고 있다.<br>

```css
input:focus{ 포커스 상태일 때 색 변경
            color: white;
            background-color: red;
            }
```

- **visited**: 방문한적 있는 링크에 효과를 준다.<br>

```css
.link1:visited {
  color: red;
}
```

- **disabled**: 비활성 상태의 요소이다.<br>

```css
<input type="text" placeholder="아무거나 쓰기" disabled>
```

- **nth-child()**: 형제 사이에서의 순서에 따라 요소를 선택한다.<br>

```css
.box:nth-child(3) {
  /*.box의 세번째 요소에 배경 색 적용*/
  background-color: red;
}
```

- **nth-of-type**: `:nth-of-type`이라는 가상 클래스가 적용된 선택자에 해당 되는 요소만 카운트한다.

```css
.container p:first-of-type {
  /* container안에 있는 p 태그 중 첫번째 요소 선택*/
  background: blue;
}
```

## 📄 가상요소 선택자

가상 요소 선택자를 이용하면 html요소를 수정하지 않고, css만으로 가상 요소를 추가할 수 있습니다.

- **before**
- **after**

```css
.box1 {
  width: 200px;
  height: 300px;
  background-color: yellow;
}
.box1:after {
  content: "나는 박스2입니다.";
  display: block;
  background-color: blue;
}
```

중요하지 않은 간단한 css작업에 사용된다. `content`애 값을 추가해서 직접 html에 코드를 추가하지 않고 css를 다룰 수 있습니다.<br/>
콘텐츠 자체적인 내용 뿐 아니라 사용자와의 상호작용과 관련된 경우에도 스타일을 적용할 수 있어 유용합니다.

## 출처

- 유노코딩
