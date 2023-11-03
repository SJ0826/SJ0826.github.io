---
title: "tailwind를 사용해보자"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["tailwind"]
last_modified_at: 2023-11-03T08:06:00-05:00
---

## 📝 Tailwind란?

- CSS 프레임워크
- 미리 세팅된 유틸리티 클래스 활용

## 📝 tailwind 사용하기

### 1. 설치 및 환경 세팅

- tailwind를 설치한다.

```js
npm install -D tailwindcss
npx tailwindcss init
```

- tailwind.config.js파일에서 경로를 설정한다.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- 메인 CSS파일에서 tailwind 지시자를 설정한다.

```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- CLI도구를 설치해 메인 CSS 파일을 빌드시켜준다.

```js
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

- HTML파일에 빌드된 css파일을 연결한다.

```js
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

### 2. vsCode에 맞는 에디터 설치하기

- Tailwind CSS IntelliSense
  - 클래스 이름, css 함수, 지시자 이름 자동 완성
  - 린팅기능
  - 호버시 미리보기 기능
- Prettier
  - prettier는 공식적으로 tailwind css 코드 sorting기능을 제공

### 3. element className에 스타일 설정하기

- 리액트에서 사용할 경우, class가 아닌 className을 사용한다.

```js
function App() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
```

![image](https://github.com/SJ0826/coding-swamp-/assets/56298540/a65faddb-1761-4e8e-b731-a476de915f71)

---

다음에 또 보기 위해 tailwind 사용법을 간단하게 정리했다. 짧게 써보고 남기는 후기는 다음과 같다.

- 장) 컴포넌트 이름을 신경쓰지 않아도 괜찮다.
- 장) 이미 구현된 유틸리티 클래스 덕에 빠른 구현이 가능하다
- 단) 아무래도 클래스 이름이 스타일 코드로 인해 길어져 코드가 혼잡해 보인다.

사용하며 더 알게 되는 점이나 기록할 부분이 생기면 추가할 예정이다.

부트스트랩도 사용해본 경험이 없어 css framework는 꽤 생소했다. 잘 쓰면 약, 못쓰면 독일테니 적절하게 잘 사용해 퀄리티를 높이는 연습을 해야겠다.

## 참고

- [tailwind 공식문서](https://tailwindcss.com/docs/guides/create-react-app)
