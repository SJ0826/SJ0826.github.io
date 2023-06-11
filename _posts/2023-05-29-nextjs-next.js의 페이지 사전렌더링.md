---
title: "[Next.js] Next.js의 페이지 사전렌더링"
excerpt: "Next.js가 페이지를 사전 렌더링하고 데이터를 페칭하는 방법"
toc: true
toc_sticky: true
sidebar:
nav: "docs"

categories:
  - Nextjs
tags:
  - ["SSG", "SSR"]
last_modified_at: 2023-06-11T08:06:00-05:00
---

## 📄 Next.js가 페이지를 준비하고 사전 렌더링을 하는 방법

> 💡 Hydration이란? HTML을 미리 렌더링하고, 그 뒤에 요청이 오면 chunk단위로 js를 보내주어 이벤트가 작동하는 것

Next.js의 사전렌더링은 기존 리액트의 CRA와 다르게 완성된 HTML을 브라우저에 보내주는 방법이다.

사전 렌더링은 첫번째 페이지에만 적용되며, 첫번째 페이지 렌더링이 끝아면 다시 SPA로 돌아간다.

이렇게 미리 완성된 HTML 페이지를 가져오면 두가지 이점이 생긴다.

1. 사용자는 데이터가 실질적으로 로딩될때까지 기다리지 않아도 된다. => **사용자 경험 최적화**
2. 구글 검색엔진이 실질적 데이터가 들어있는 HTML코드를 읽고 해석한다. => **SEO 최적화**

Next.js 가 사전렌더링을 구현하는 방법은 **SSG, SSR**이 있다.

⭐ 중요한 사실은 Next.js는 어떤 작업을 하지 않아도 기본적으로 사전렌더링을 한다는 점이다. SSG, SSR은 사전렌더링을 하는 방식을 정하기 위한 요소라는 점을 이해해야한다.

### 🔴 SSG(Server-Side-Generation, Static-Site-Generation)

- 사용 방법: 페이지에 `getStaticProps`함수를 추가한다.
- 사용 목적
  1. 페이지가 사전 생성되어야 하는 것을 Next.js에게 알려준다.
  2. 만약 Next.js가 사전렌더링을 하지 않도록 설정되었을 때, getStaticProps함수로 특정 페이지를 사전렌더링 하도록 지정할 수 있다.
- 페이지 생성 시기: 프로젝트 빌드시

```js
function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return {
    // 항상 객체를 반환한다.
    props: {
      products: [{ id: "p1", title: "Product 1" }],
    },
  };
}

export default HomePage;
```

`getStaticProp`가 포함된 페이지 파일이 실행되면 발생하는 순서를 다음과 같다.

1. `getStaticProps`함수를 먼저 호출한다. 함수안에 컴포넌트에서 사용될 데이터를 페칭해오는 작업을 한다.
2. 컴포넌트 함수를 실행한다.

#### 🗨 SSG를 통해 JSON데이터 가져오기

- SSG를 하면서 모든 데이터를 파일 내에 저장하지 않고, JSON파일을 불러와 사용하는 방법

1. data 폴더를 생성해 json 파일을 만들어 데이터를 저장한다.

```js
{
"products": [
  { "id": "p1", "title": "Product 1", "description": "This is product 1" },
  { "id": "p2", "title": "Product 2", "description": "This is product 2" },
  { "id": "p3", "title": "Product 3", "description": "This is product 3" }
]
}
```

2. 데이터를 사용할 페이지의 `getStaticProps`함수에서 데이터를 가져와 return한다.

```js
import path from "path";
import fs from "fs/promises"; // Node.js 로 부터 파일 시스템 모듈을 임포트

function HomePage(props) {
  //getStaticProps를 통해 가져온 json데이터를 props를 통해 전달
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
}
```

#### 🗨 ISR (증분 정적 생성) 활용하기

- 사용 목적: 사전 생성하는 페이지에서 데이터가 계속 **업데이트** 되는 경우에 사용

- 장점: 페이지를 빌드할 때 한 번만 생성하는 것이 아닌 재배포 없이 업데이트 할 수 있다.

```js
export async function getStaticProps() {
  console.log("(RE-)Generating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10, // 🎉 ISR: 10초마다 주어진 페이지를 Next.js가 재생성한다.
  };
}
```

![image](https://github.com/SJ0826/next-bnb/assets/56298540/0128068d-b7d6-410c-8990-5d3fc7ea2c0c)

#### 🗨 getStaticProps 구성 옵션 활용하기

1. `notFound`: 페이지가 일반 페이지 대신 404 오류 페이지를 렌더링

```js
if (data.products.length === 0) {
  return { notFound: true };
}
```

2. `redirect`: 데이터베이스에 엑세스할 수 없을 경우 주로 사용 (데이터 자체가 없을 때)

```js
if (!data) {
  return {
    redirect: {
      destination: "/no-data",
    },
  };
}
```

## 참고

- [유데미 Nextjs.&React - 완전 정복 가이드](https://www.udemy.com/course/nextjs-react-incl-two-paths)

* [Next.js 공식 문서](https://nextjs.org/docs)
