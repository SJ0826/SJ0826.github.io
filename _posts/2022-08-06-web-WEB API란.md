---
title: "[WEB] WEB API란?"
excerpt: "API와 WEB API"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - WEB
tags:
  - ["WEP API"]
last_modified_at: 2022-08-06T08:06:00-05:00
---

## 📄 API란?

API는 **Application Programming Interface**의 약자입니다.<br/>
직역하자면 프로그램이 서로 상호작용하게 도와주는 매개체(어플리케이션)입니다.<br/>
우리는 자판기가 어떻게 동작하는지 전혀모르지만 몇번의 버튼 클릭으로 원하는 상품을 얻습니다.

마찬가지로 프로그램들이 서로 어떻게 상호작용하는지 로직을 구체적으로 들여다 보지 않아도<br>
간단한 동작으로 프로그램이 서로 **상호작용**하게 도와주는 것을 API라고 할 수 있습니다.

## 📄 WEB API란?

WEB API는 **웹브라우저에서 제공하는 API**를 뜻합니다.<br>
브라우저마다 공통적으로 제공하는 API의 종류는 굉장히 다양합니다.<br>
브라우저는 사용자의 정보를 보호할 의무가 있어 정보보안에 매우 민감합니다.<br>
따라서 어떤 브라우저는 사용자의 권한을 요청하거나 HTTPS에서만 동작합니다.

### ▪ Window.scroll()

`window.scroll()` 함수는 윈도우의 **원하는 위치로 스크롤**하게 해주는 WEB API입니다.

<h5>✔ 사용방법</h5>

1. scroll(x좌표, y좌표)

첫번째 방법은 파라미터값을 받아오는 방법입니다.

```js
<button onclick="scroll(0,100);"></button> //창 상단에 수직 100번째 픽셀을 배치한다.
```

2. OPTION들

```js
window.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

- `top`: Y축을 따라 픽셀 수를 지정
- `left`: X축을 따라 픽셀 수를 지정
- `behavior`: `smooth`를 지정하면 스크롤이 부드럽게 애니메이션 된다.

### ▪ Window.scrollBy()

`Window.scrollBy()`는 주어진 값만큼 윈도우에서 스크롤링하는 함수입니다.

<h5>✔ 사용방법</h5>

사용방법은 window.scrollBy()와 크게 다르지 않습니다.

1. scrollby(x축 방향 크기, y축 방향 크기)

첫번째 방법은 파라미터값을 받아오는 방법입니다.

```js
// 창 상단에 수직 100번째 픽셀을 배치한다.
window.scrollBy(0, window.innerHeight); // 페이지 아래로 스크롤 할때
window.scrollBy(0, -window.innerHeight); // 페이비 위로 스크롤 할때
```

2. OPTION들

```js
window.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

- `top`: Y축을 따라 픽셀 수를 지정
- `left`: X축을 따라 픽셀 수를 지정
- `behavior`: `smooth`를 지정하면 스크롤이 부드럽게 애니메이션 되고, `instant`를 지정하면 즉시 해당 위치로 점프하게 됩니다.

## 📌 HTTP란?

HTTP는 **Hypertext Transfer Protocol**의 약자입니다.<br>
HTTP는 **웹 클라이언트와 서버가 통신하는 통신규약**을 정해놓은 것입니다.<br>
클라이언트가 서버에 정보를 요청하고 받아오는 방식으로 이루어져 있습니다.

## 📌 HTTPS란?

HTTPS는 **Hypertext Transfer Protocal Secure**의 약자입니다.<br>
HTTP에 **보안처리**를 더해준 것입니다.<br>
보안처리가 되지 않은 HTTP에서 패스워드를 입력해서 데이터를 서버에 보내면,<br>
아무런 보안처리가 되지 않았기 때문에 해커가 내용을 볼 수 있습니다.<br>

반면<br>
HTTPS는 encrypt가 되어서 내용이 해커가 알아볼 수 없는 암호키를 이용해서 보안처리 되어 있습니다.<br>
몇몇의 API는 HTTPS환경에서만 동작하기 때문에 잘 확인하고 사용해야 합니다.

## 출처

- 드림코딩
