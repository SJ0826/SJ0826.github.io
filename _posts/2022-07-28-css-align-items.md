---
title: "[flex-box] align-items/self/content"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["align-items", "align-self", "align-content"]
last_modified_at: 2022-07-28T08:06:00-05:00
---

## 📄 align-items (Flex Item이 한줄일 때 사용)

플렉스 컨테이너의 플렉스 아이템들이 어떤 식으로 정렬될 것인지 결정합니다.<br>

```css
align-items: stretch; /*기본값, 아이템들이 교차축에 스트레치되어 크기가 늘어남.*/
align-items: flex-start; /*stretch가 되지 않고 교차축의 앞쪽에 배치됨*/
align-items: flex-end; /*교차축의 끝점으로부터 시작점을 향해 배치*/
align-items: center; /* 교차축의 중심부에 배치*/
```

## 📄 align-self

각각의 플렉스아이템이 교차축에서 어떤 식으로 정렬될 것인지 스스로 결정합니다.<br>

```css
li:nth-child(3) {
  align-self: flex-start;
  /*ul(컨테이너)목록 중 3번째 li(아이템)에만 flex-start적용*/
}
```

## 📄 align-content(Flex Item이 한줄이상일 때 사용)

교차축 위에서 justify-content와 동일하게 사용할 수 있는 속성입니다.

1. flex-wrap의 값이 wrap으로 지정되어 있을 때
2. 아이템을 배치하기 위해 필요한 공간보다 플렉스 컨테이너가 더 클 때

```css
align-content: space-around; /*행이 여러개가 되었을 때 요소들이 동일한 여백을 가지게 됨.*/
align-content: space-between; /*양쪽 여백이 사라진 상태에서 요소들이 동일한 여백을 가지게 됨.*/
```

---

간단히 말해,
align-items는 flex-wrap이 nowrap(기본값)일때의 교차축 배치방법이고  
align-content는 flex-wrap이 wrap일때의 교차축 배치방법입니다.

## 📄 flex-basis(기본값 : auto)

플렉스 아이템의 초기 크기를 지정합니다.<br>
box-sizing이 따로 설정되지 않은 경우, 콘텐츠 박스의 크기를 결정합니다.<br>

```css
li:nth-child(2) {
  /*플렉스 컨테이너가 처음 만들어졌을 때 기본 크기를 정해줌.*/
  flex-basis: 100px; /*두번째 아이템 기본 크기: 100px*/
  flex-shrink: 2;
}
```

## 📄 flex

`flex-grow`, `flex-shrink`, `flex-basis`의 세 가지 속성을 한번에 정의할 수 있는 단축 속성입니다.

```css
.item {
  flex: 0 0 200px; /* 200px보다 크거나 작을 수 없음*/
  flex: 0 1 200px; /*늘어나진 않지만 줄어들 수는 있음.*/
}
```

## 출처

- 유노코딩
