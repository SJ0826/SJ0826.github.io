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

## ๐ select

select๋ ๋ค์์ ์ต์(์ ํ์ง)๋ฅผ ํฌํจํ  ์ ์๋ ์ ํ ๋ฉ๋ด์๋๋ค.

๋ฉ๋ด ์์ ํฌํจ๋๋ ์ต์์ option ํ๊ทธ๋ฅผ ์ฌ์ฉํ์ฌ ํ์ํฉ๋๋ค.

```html
<select>
    <option value="starbucks">์คํ๋ฒ์ค</option>
    <optio nvalue="coffeebean">์ปคํผ๋น</option>
    <option value="ediya">์ด๋์ผ</option>
    <option value="pascucci">ํ์ค์ฟ ์ฐ</option>
</select>
```

> ์ ํ์ง์์ ์ปคํผ๋น์ ๊ณ ๋ฅธ๋ค = cafe์ ์๋ ฅ ๊ฐ์ coffebean์ด๋ค

## ๐ textarea

textarea๋ ์ฌ๋ฌ ์ค์ ์ผ๋ฐ ํ์คํธ๋ฅผ ์๋ ฅํ  ์ ์๋ ์๋ ฅ ์์์๋๋ค.

```html
<textarea name="letter"
rows="10" cols=:10">๊ธฐ๋ณธ์ ์ผ๋ก ์ฐ์ฌ ์๋ ํ์คํธ</textarea>
```

## ์ถ์ฒ

- ์ ๋ธ์ฝ๋ฉ
