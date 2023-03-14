---
title: "입력 요소 만들기(input)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - HTML
tags:
  - ["HTML", "input"]
last_modified_at: 2022-07-15T08:06:00-05:00
---

## 📄 input 태그

입력요소는 **`<input>`** 태그를 이용해 만들어 줍니다.

`<input>`태그는 인라인 요소이며, 단일 태그입니다.

`<input>`태그에는 name식별자를 추가하여 각각 어떤 특징을 가지는지 설명하는 것이 좋습니다.

## 📄 input 태그의 type 속성

type값에 따라 입력 요소의 형태나 입력 데이터 유형 등이 달라집니다.

**1. text**: 텍스트 메세지를 입력합니다.

```html
<input name="text" type="text" maxlength="5" placeholder="메세지입력" />
```

- maxlength: 텍스트 최대 크기를 지정합니다.
- place holder: 텍스트 입력 전 창에 띄워지는 텍스트를 지정합니다.

**2. button**: 버튼이 생성됩니다.

```html
<input name="button" type="button" value="PUSH" />
```

**3. color**: 색을 지정할 수 있는 팔레트가 띄워 집니다.

```html
<input name="color" type="color" />
```

**4. rage**: 숫자로 된 값을 입력 할 수 있는 바를 만들어 줍니다.

```html
<input name="score" type="range" max="100" min="0" step="10" />
```

**5. date**: 날짜를 입력할 수 있는 달력이 생성됩니다.

```html
<input name="birthdaty" type="date" />
```
