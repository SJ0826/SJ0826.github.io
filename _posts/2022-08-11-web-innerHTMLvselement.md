---
title: "[WEB] innerHTML vs element"
excerpt: "자바스크립트에서 html내용을 변경하는 방법"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - WEB
tags:
  - ["innerHTML", "element"]
last_modified_at: 2022-08-11T08:06:00-05:00
---

## 📄 innerHTML vs element

JavaScript에서 html내용을 변경하는 경우 방법은 여러가지가 있습니다

`innerHTML`을 사용하거나 `element`를 업데이트 해주는 방법이 있는데 두가지 방법은 차이점이 있습니다.

## 📄 innerHTML을 사용하는 경우

innerHTML은 해당 태그의 전체적인 HTML을 모두 업데이트합니다.

그렇게 되면 새로 추가한 요소들의 DOM Tree를 만들고 Render Tree를 만들게 되어 매우 번잡한 과정이 이어집니다.

따라서 한번 innerHTML을 만든 다음에 변경사항이 없다면 사용하는 것이 적합합니다.

## 📄 Element를 사용하는 경우

전체가 아닌 부분적으로 변경이 일어나는 경우라면 해당한는 Element를 업데이트하는 것이 효과적입니다.

따라서 Element의 reference 즉, Element의 변수를 가지고 있으면서 조금 더 많은 동작을 해야한다면 element를 개별적으로 변경하는것이 적합합니다.

## 출처

- 드림코딩
