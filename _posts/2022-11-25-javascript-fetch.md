---
title: "Fetch"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "Fetch"]
last_modified_at: 2022-11-25T08:06:00-05:00
---

## ๐ Fetch

: ์๊ฒฉ API๋ฅผ ํธ์ถํ  ์ ์๋ ์๋ฐ์คํฌ๋ฆฝํธ ๋ด์ฅ ํจ์

## ๐ Fetch ์ฌ์ฉ๋ฒ

Fetchํจ์๋ ๋๊ฐ์ง์ ์ธ์๋ฅผ ๋ฐ์ต๋๋ค.

1. URL
2. ์ต์๊ฐ์ฒด

์ธ์๋ฅผ ๋ฐ์ Promise๊ฐ์ฒด๋ฅผ ๋ฐํํฉ๋๋ค.

๋ฐํ๋ ๊ฐ์ฒด๋ APIํธ์ถ์ด ์ฑ๊ณตํ์ ๋ ์๋ต(response) ๊ฐ์ฒด๋ฅผ **resolve**ํ๊ณ 
์คํจํ์ ๋๋ ์์ธ(error)๊ฐ์ฒด๋ฅผ **reject**ํฉ๋๋ค.

```js
fetch(url, options)
  .then((response) => response.json())
  .catch((error) => console.log("error:", error));
```

- `Response`: HTTP ์๋ต ์ ์ฒด๋ฅผ ๋ํ๋ด๋ ๊ฐ์ฒด. JSON ๋ณธ๋ฌธ ์ฝํ์ธ ๋ฅผ ์ถ์ถํ๊ธฐ ์ํด์๋ `json()`๋ฉ์๋๋ฅผ ํธ์ถํด์ผ ํฉ๋๋ค.

## ๐ GET ํธ์ถ: ๋ฐ์ดํฐ ๋ถ๋ฌ์ค๊ธฐ

fetchํจ์์ ๊ธฐ๋ณธ์ ์ธ ๋์์ `GET`์๋๋ค.

```js
fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
  console.log(response)
);
```

โ ๊ฒฐ๊ณผ

```js
Response {status: 200, ok: true, redirected: false, type: "cors", url: "https://jsonplaceholder.typicode.com/posts/1", โฆ}
```

์๋ต(response) ๊ฐ์ฒด๋ json๋ฉ์๋๋ฅผ ์ ๊ณตํฉ๋๋ค.

`json()`์ ํธ์ถํ๋ฉด ์๋ต ๊ฐ์ฒด๋ก๋ถํฐ JSON ํฌ๋ฉง์ ์๋ต์ ์๋ฐ์คํฌ๋ฆฝํธ ๊ฐ์ฒด๋ก ๋ณํํด์ ์ป์ ์ ์์ต๋๋ค.

```js
// json()์ ํ์ฉํ์ฌ ์๋ต๊ฐ์ฒด๋ฅผ ์๋ฐ์คํฌ๋ฆฝํธ ๊ฐ์ฒด๋ก ๋ณํ
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

โ ๊ฒฐ๊ณผ

```js
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipitโตsuscipit recusandae consequuntur โฆstrum rerum est autem sunt rem eveniet architecto"
}
```

## ๐ POST ํธ์ถ: ๋ฐ์ดํฐ ์์ฑํ๊ธฐ

POST๋ ์๊ฒฉ API์์ ๊ด๋ฆฌํ๊ณ  ์๋ ๋ฐ์ดํฐ๋ฅผ ์์ฑํ  ๋ ์ฌ์ฉํฉ๋๋ค.

- `method` ์ต์์ `POST`๋ก ์ง์ ํ๋ค.
- `headers`์ต์์ ํตํด JSONํฌ๋ฉง์ ์ฌ์ฉํ๋ค๊ณ  ์๋ ค์ค๋ค.
- ์์ฒญ ์ ๋ฌธ์ JSON ํฌ๋ฉง์ผ๋ก ์ง๋ ฌํํ์ฌ `body`์ต์์ ์ค์ ํด์ค๋ค.

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
}).then((response) => console.log(response));
```

โ ๊ฒฐ๊ณผ: ์๋ต์ฝ๋๊ฐ 201 Created

```js
Response {type: "cors", url: "https://jsonplaceholder.typicode.com/posts", redirected: false, status: 201, ok: true, โฆ}

// json๋ฉ์๋๋ก ์๋ต๊ฐ์ฒด๋ฅผ ํธ์ถํ์ ๋(response.json())
{title: "Test", body: "I am testing!", userId: 1, id: 101}
```

## ๐ PUT, DELETE: ๋ฐ์ดํฐ ์์ , ์ญ์ ํ๊ธฐ

PUT๊ณผ DELETE๋ ๋ฐ์ดํฐ๋ฅผ ์์ ํ๊ฑฐ๋ ๋ฐ์ดํฐ๋ฅผ ์ญ์ ํ  ๋ ์ฌ์ฉ๋ฉ๋๋ค.

```js
// PUT
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

โ ๊ฒฐ๊ณผ

```js
  {title: "Test", body: "I am testing!", userId: 1, id: 1}
```

DELETE๋ ๋ณด๋ผ ๋ฐ์ดํฐ๊ฐ ์์ด `header`์ `body`์ต์์ด ํ์ํ์ง ์์ต๋๋ค.

```js
// DELETE
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

โ ๊ฒฐ๊ณผ

```js
{
}
```

## ๐ fetch ํจ์ ์ปค์คํํ ํ๊ธฐ

```js
async function post(host, path, body, headers = {}) {
  const url = `https://${host}/${path}`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  };
  const res = await fetch(url, options);
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw Error(data);
  }
}

post("jsonplaceholder.typicode.com", "posts", {
  title: "Test",
  body: "I am testing!",
  userId: 1,
})
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

## ์ถ์ฒ

- [MDN-Fetch ์ฌ์ฉํ๊ธฐ](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch)
- [DaleSeo-fetch()ํจ์๋ก ์๊ฒฉ APIํธ์ถํ๊ธฐ](https://www.daleseo.com/js-window-fetch/)
