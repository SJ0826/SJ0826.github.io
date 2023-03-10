---
title: "getElementById ์ querySelector ๋น๊ต"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "getElementById", "querySelector"]
last_modified_at: 2022-11-25T08:06:00-05:00
---

## ๐ getElementById ์ querySelector ๋น๊ต

`getElementById`์ `querySelector`์ ๊ณตํต์ ์ **์๋ฆฌ๋จผํธ๋ฅผ ๊ฒ์ํด์ ๋ฐํํ๋ค**๋ ๊ฒ์๋๋ค.

ํ์ง๋ง ๋์ ์ฌ์ฉ๋ฒ์ ๋ค๋ฅด๋ฉฐ ์ฌ์ฉํ๋ ์ํฉ์์ ์ฐจ์ด์ ์ ๋๋ฌ๋๋๋ค.

## ๐ getElementById์ querySelector์ ์ฐจ์ด์ 

### `getElementById`

- **id**๋ฅผ ํตํด ์๋ฆฌ๋จผํธ๋ฅผ ๋ฐํํ๋ค.
- ๋ง์ฝ document์ ํด๋น id๊ฐ ์๋ค๋ฉด `null`์ ๋ฐํํ๋ค.

### `querySelector`

- selector์ ๊ตฌ์ฒด์ ์ธ ๊ทธ๋ฃน๊ณผ ์ผ์นํ๋ document์ **์ฒซ๋ฒ์งธ ์๋ฆฌ๋จผํธ**๋ฅผ ๋ฐํํ๋ค.
- ์ผ์นํ๋ ์์๊ฐ ์๋ค๋ฉด `null`์ ๋ฐํํ๋ค.

โ ์์

```js
<form id="userForm">
  <input id="username" type="text" value="Guilherme">
</form>
```

`getElementById`๋ก `username`์ ๊ฐ์ ธ์ฌ ๋:

```js
var username = document.getElementById("username");
```

`querySelector`๋ก `username`์ ๊ฐ์ ธ์ฌ ๋:

```js
var username = document.querySelector("#userForm #username");
```

=> ๊ฒฐ๊ณผ๋ ๊ฐ์ง๋ง `querySelector`๋ก ๊ฐ์ ธ์ฌ ๋ ๋ ๊ตฌ์ฒด์ ์ด๊ณ  ํ์ ์ ์ด๋ค.

## ๐ querySelectorAll vs selectElementByClassName

ํ๋๊ฐ ์๋๋ผ **์ฌ๋ฌ๊ฐ์ ์์**๋ฅผ **ํ๋์ ์ด๋ฆ**์ผ๋ก ํ๋ฒ์ ์ป๊ณ  ์ถ์ ๋ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ด๋ค.

โ ์์

```js
<form id="productForm">
  <input id="productOne" class="product" type="text" value="Product 1" />
  <input id="productTwo" class="product" type="text" value="Product 1" />
  <input id="productThree" class="product" type="text" value="Product 1" />
</form>
```

`getElementByClassName`์ผ๋ก ๊ฐ์ ธ์ฌ ๋: `HTMLCollection`์ ๋ฆฌํด

```js
var products = document.getElementByClassName("product");
```

`querySelectorAll`๋ก ๊ฐ์ ธ์ฌ ๋: `NodeList`์ ๋ฆฌํด

```js
var products = document.querySelectorAll("#productForm .product");
```

๋๋ค ์ธ๋ฑ์ค๋ฅผ ์ ๊ณตํด ์ธ๋ฑ์ค ๋ฒํธ๋ก ์ ๊ทผ์ด ๊ฐ๋ฅํ์ง๋ง,
`HTMLCollection`ํญ๋ชฉ์ `name`๊ณผ `id`์์ฑ์ผ๋ก๋ ์ ๊ทผํ  ์ ์๋ค.

---

์๋ฆฌ๋จผํธ์ ์ ๊ทผํ  ๋ ๋ฐฉ๋ฒ์ด ๋๊ฐ์ง๊ฐ ์์ด ์ด๋ค ์ํฉ์ ์ด๋ ๊ฒ์ ์ฌ์ฉํ๋์ง ๊ถ๊ธํด์ ์ ๋ฆฌ๋ฅผ ์์ํ๋ค.

๊ตฌ์ฒด์ ์ผ๋ก ์๋ฆฌ๋จผํธ๋ฅผ ์ ํํ๊ณ  ์ถ๋ค๋ฉด `querySelector`๋ฅผ,

์ข๋ ๋น ๋ฅธ ์ฑ๋ฅ์ผ๋ก ์ ๊ทผํ๊ณ  ์ถ๋ค๋ฉด `getElementById`๋ฅผ ์ฌ์ฉํ๋ ๊ฒ์ด ์ข๋ค.

## ์ถ์ฒ

\*[guinatal.github - qeurySelector vs getElementById](https://guinatal.github.io/queryselector-vs-getelementbyid/)
