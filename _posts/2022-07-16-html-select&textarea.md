---
title: "select & textarea"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - HTML
tags:
  - ["HTML", "select", "textarea"]
last_modified_at: 2022-07-16T08:06:00-05:00
---

## 📄 select

select는 다수의 옵션(선택지)를 포함할 수 있는 선택 메뉴입니다.

메뉴 안에 포함되는 옵션은 option 태그를 사용하여 표시합니다.

```html
<select>
    <option value="starbucks">스타벅스</option>
    <optio nvalue="coffeebean">커피빈</option>
    <option value="ediya">이디야</option>
    <option value="pascucci">파스쿠찌</option>
</select>
```

> 선택지에서 커피빈을 고른다 = cafe의 입력 값은 coffebean이다

## 📄 textarea

textarea는 여러 줄의 일반 텍스트를 입력할 수 있는 입력 요소입니다.

```html
<textarea name="letter"
rows="10" cols=:10">기본적으로 쓰여 있는 텍스트</textarea>
```

## 출처

- 유노코딩
