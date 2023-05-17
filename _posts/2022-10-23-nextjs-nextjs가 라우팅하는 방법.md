---
title: "[Next.js] Next.j가 라우팅하는 방법"
excerpt: "Next.js의 정적 라우팅과 동적 라우팅"
toc: true
toc_sticky: true
sidebar:
nav: "docs"

categories:
  - Nextjs
tags:
  - ["Link", "slug"]
last_modified_at: 2023-05-18T08:06:00-05:00
---

## 📄 Next.js가 Routing 방법

> 💡 라우팅이란? 특정 주소에 도달해서 주소가 제공하는 데이터를 받아서 사용하는 과정

리액트에서 react-router-dom을 이용했다면, Next.js는 자체적인 router기능이 있다.

`page`폴더에 들어가는 파일과 폴더의 이름에 따라 URL이 정해진다.

폴더명으로 접근한다면 `index.js`파일로 접근해야한다.

## 📄 1. 정적 라우팅(Link)

> 💡 정적 라우팅이란? 사전에 지정된 주소로 이동하는 방법

13버전 이전에는 Link태그 안에 a태그를 사용해야 했지만 13버전 이후로 Link태그 하나로 라우팅이 가능하다.

```js
<Link href="해당경로">...</Link>
```

## 📄 2. 동적라우팅(slug)

> 💡 동적 라우팅이란? 페이지가 상황에 따라 동적으로 경로가 지정된다.

본래 slug는 중요한 의미를 포함하는 단어만을 이용해 제목을 작성하는 방법이다.

slug에 어떤 값을 넣어도 해당 파일로 이동한다.

파일뿐만 아니라 폴더에도 slug를 쓸 수 있다.

```js
page/category/[slug].js => /category/:slug (ex. /category/food)
pages/[username]/info.js => /:username/info (ex. /jimmy/info)
```

⭐ slug의 값은 Next.js에서 제공하는 `useRouter`을 사용해 Router의 `query`로 컨트롤한다.

```js
import { useRouter } from 'next/router'
...
const router = useRouter()
const {slug} = router.query
...
```

### ▪ 다중 slug

`...`을 쓰면 무한 경로로 사용할 수 있다.

⭐ 슬래시가 하나 이상이면 slug페이지가 트리거 된다.

```js
const router = useRouter();

const findEventHandler = (year, month) => {
  const fullPath = `/events/${year}/${month}`;
  router.push(fullPath);
};
```

### ▪ 옵셔널 slug

slug 값이 없어도 동작하게 만드려면 `[[...slug]]`처럼 대괄호를 두번씩 사용하면 된다.

## 📄 3. Shallow Routing

#### : `getServerSideProps` / `getStaticProps` 등을 다시 실행시키지 않으면서 현재 상태를 잃지 않고 url을 바꾸는 방법

Shallow의 뜻은 '얉은'이라는 뜻을 가지고 있다.

Shllow Routing을 사용하는 경우는 상태를 유지하면서 url을 바꾸고 싶을 때 이다.

예를 들어 사용자가 어떤 동작을 했고, 그 기록을 `query`로 남기고 싶을때, `query`로 남기면 사용자가 새로고침을 해도 유지된다.

#### url을 바꾸는 3가지 방법

1. `location.replace("url")`: 로컬 `state`는 유지 안됨(리렌더)
2. `router.push(url)`: 로컬 `state`는 유지 / data fetching은 일어남
3. `router.push(url, as, {shallow: true })`: 로컬 `state` 유지 / data fetching은 일어나지 않음

## 출처

- 패스트 캠퍼스 Next.js 완전 정복

* https://merrily-code.tistory.com/52
