---
title: "getElementById 와 querySelector 비교"
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

## 📄 getElementById 와 querySelector 비교

`getElementById`와 `querySelector`의 공통점은 **엘리먼트를 검색해서 반환한다**는 것입니다.

하지만 둘의 사용법은 다르며 사용하는 상황에서 차이점을 드러냅니다.

## 📄 getElementById와 querySelector의 차이점

### `getElementById`

- **id**를 통해 엘리먼트를 반환한다.
- 만약 document에 해당 id가 없다면 `null`을 반환한다.

### `querySelector`

- selector의 구체적인 그룹과 일치하는 document의 **첫번째 엘리먼트**를 반환한다.
- 일치하는 요소가 없다면 `null`을 반환한다.

✔ 예시

```js
<form id="userForm">
  <input id="username" type="text" value="Guilherme">
</form>
```

`getElementById`로 `username`을 가져올 때:

```js
var username = document.getElementById("username");
```

`querySelector`로 `username`을 가져올 때:

```js
var username = document.querySelector("#userForm #username");
```

=> 결과는 같지만 `querySelector`로 가져올 때 더 구체적이고 한정적이다.

## 📄 querySelectorAll vs selectElementByClassName

하나가 아니라 **여러개의 요소**를 **하나의 이름**으로 한번에 얻고 싶을 때 사용하는 방법이다.

✔ 예시

```js
<form id="productForm">
  <input id="productOne" class="product" type="text" value="Product 1" />
  <input id="productTwo" class="product" type="text" value="Product 1" />
  <input id="productThree" class="product" type="text" value="Product 1" />
</form>
```

`getElementByClassName`으로 가져올 때: `HTMLCollection`에 리턴

```js
var products = document.getElementByClassName("product");
```

`querySelectorAll`로 가져올 때: `NodeList`에 리턴

```js
var products = document.querySelectorAll("#productForm .product");
```

둘다 인덱스를 제공해 인덱스 번호로 접근이 가능하지만,
`HTMLCollection`항목은 `name`과 `id`속성으로도 접근할 수 있다.

---

엘리먼트에 접근할 때 방법이 두가지가 있어 어떤 상황에 어느 것을 사용하는지 궁금해서 정리를 시작했다.

구체적으로 엘리먼트를 선택하고 싶다면 `querySelector`를,

좀더 빠른 성능으로 접근하고 싶다면 `getElementById`를 사용하는 것이 좋다.

## 출처

\*[guinatal.github - qeurySelector vs getElementById](https://guinatal.github.io/queryselector-vs-getelementbyid/)
