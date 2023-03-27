---
title: "특성 선택자와 결합자"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["특성 선택자", "자손 결합자", "형제 결합자"]
last_modified_at: 2022-07-19T08:06:00-05:00
---

## 📄 특성 선택자

특성 선택자(속성 선택자)는 주어진 속성의 존재 여부나 그 값에 따라 요소를 선택합니다.

```css
[class] {
  background-color: tomato; // 클래스 속성을 가진 요소에 컬러 적용.
}

[class="item"] {
  background-color: tomato; // 클래스가 item인 요소에 컬러 적용.
}

[class*="it"] {
  color: white; // 클래스 값에 "it"가 포함되는 요소에 컬러 적용.
}

[class^="it"] {
  color: white; // 클래스 값이 "it"으로 시작하는 요소에 컬러 적용.
}

[class$="it"] {
  color: white; //클래스 값이 "it"으로 끝나는 요소에 컬러 적용.
}
```

## 📄 결합 선택자

결합 선택자(결합자)는 두 개 이상의 선택자를 결합시켜 결합된 조건을 만족하는 요소를 선택합니다.

### ▪ 자손 결합자

두 개의 선택자 중 첫 번째 선택자 요소의 자손을 선택할 수 있습니다.

```css
div p {
  color: white; // div요소 안에 위치하는 모든 p 요소에 컬러 적용.
}

div > p {
  color: white; // div 요소의 바로 아래에 위치하는 모든 p 요소에 컬러 적용.
}
```

### ▪ 형제 결합자

두 개의 선택자 중 첫 번째 선택자 요소의 형제를 선택할 수 있다.

```css
h1 ~ p {
  color: red; // h1 요소의 뒤에 오는 형제 중 모든 p 요소에 컬러 적용.
}

h1 + p {
  color: red;
} // h1 요소의 바로 뒤에 오는 형제 p 요소에 컬러 적용.
```

## 출처

- 유노코딩
