---
title: "[flex-box] flex-direction & flex-wrap"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["flex-direction", "flex-wrap", "flex-flow"]
last_modified_at: 2022-07-22T08:06:00-05:00
---

## 📄 flex-direction & flex-wrap

플렉스박스는 행 또는 열을 주축으로 설정하여 웹 요소를 배치 및 정렬하는 1차원 레이아웃 방식

## 📄 flex-direction

플렉스 컨테이너의 주축을 결정하는 속성입니다.

```css
flex-direction: row; /*플렉스의 진행방향이 가로축이다.*/
flex-direction: row-reverse; /*플렉스의 진행방향이 가로축 반대방향이다.*/
flex-direction: column; /*플렉스의 진행방향이 세로축이다.*/
flex-direction: column-reverse; /*플렉스의 진행방향이 세로축 반대방향이다.*/
```

## 📄 flex-wrap

플렉스 아이템들이 강제로 한줄에 배치되게 할 것인지,<br>
또는 가능한 영역 내에서 벗어나지 않고 여러행으로 나누어 표현 할 것인지 결정하는 속성입니다.

```css
flex-wrap: nowrap; /*기본값: 반드시 한줄로 배치된다.*/
flex-wrap: wrap; /*플렉스 컨테이너의 영역이 좁아짐에 따라 플렉스 아이템이 새로운 행으로 형성된다.*/
flex-wrap: wrap-reverse; /* 역순으로 wrap이 된다.*/
```

## 📄 flex-flow

wrap속성을 한번에 여러개 지정할 수 있는 단축 속성입니다.

```css
flex-flow: row-reverse wrap;
```

## 출처

- 유노코딩
