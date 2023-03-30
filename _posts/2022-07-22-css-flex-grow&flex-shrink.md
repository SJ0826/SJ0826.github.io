---
title: "[flex-box] flex-grow & flex-shrink & flex-basis"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["flex-grow", "flex-shrink", "flex-basis"]
last_modified_at: 2022-07-22T08:06:00-05:00
---

## 📄 flex-grow (기본값:0)

플렉스아이템이 기본 크기보다 더 커질 수 있는지를 결정하고,<br>
플렉스컨테이너 내부의 할당받을 공간을 상대적으로 정의하는 속성입니다.<br>

속성값(숫자)는 음수는 적용되지 않습니다.

```css
li:nth-child(2) {
  /*컨테이너가 커질 때, 두번째 아이템이 상대적으로 더 큰 크기를 가지게 된다.*/
  flex-grow: 1;
}

li:nth-child(3) {
  /*flex-grow가 1인 아이템보다 더 큰 크기를 가진다.*/
  flex-grow: 2;
}
```

## 📄 flex-shrink (기본값:1)

플렉스 아이템이 기본 크기보다 더 작아질 수 있는지를 결정합니다.<br>
플렉스컨테이너 내부의 할당받을 공간을 상대적으로 정의하는 속성입니다.<br>

> 속성값(숫자)는 음수는 적용되지 않습니다.

```css
li:nth-child(2) {
  /*컨테이너 크기가 작아질 때, 두번째 아이템은 더 크기가 작아진다.*/
  flex-shrink: 2;
}

li:nth-child(3) {
  /*flex-shrink가 2인 아이템보다 더 많이 줄어든다.*/
  flex-shrink: 3;
}
```

---

주로 반응형 웹을 만들 때 주로 사용하는 속성들입니다.  
화면이 줄어들 때 어떤요소가 더 커지고 줄어들지 상대적으로 지정할 때 적절히 사용하면 유용합니다.

## 출처

- 유노코딩
