---
title: "[Next.js] 🚨 이벤트가 함수가 prop로 전달되지 않는 이유"
excerpt: "Event handlers cannot be passed to Client Component props"
toc: true
toc_sticky: true
sidebar:
nav: "docs"

categories:
  - Nextjs
tags:
  - [
      "nextjs",
      "props",
      "error",
      "함수의 직렬화",
      "서버 컴포넌트",
      "클라이언트 컴포넌트",
    ]
last_modified_at: 2023-11-13T08:06:00-05:00
---

# 이벤트가 함수가 prop로 전달되지 않는 이유

## 🚨 문제 발생

Next.js를 사용해 프로젝트를 진행하는데 에러가 발생했다.

![스크린샷 2023-11-10 오전 11 04 49](https://github.com/SJ0826/coding-swamp-/assets/56298540/c2095e9c-76fb-4671-aa4b-e8a4d69afa99)

프로젝트 환경은 다음과 같다.

- Next.js (app routing)
- TS

이벤트 함수를 컴포넌트 간 props로 전달하는 과정에서 발생했다.

## ❔문제 원인

1. Server Component에서 Client Component로 함수를 전달 할 수 없다.
2. 각 컴포넌트 간 props로 전달되는 함수는 직렬화 할 수 없기 때문이다.

이 때 궁금한점.

1. 난 Client Component로 컴포넌트를 변환한 적이 없는데?
2. 함수 직렬화가 무엇이지?

### 1. 난 Client Component로 컴포넌트를 변환한 적이 없는데? | Client Component로 실행되는 조건

next.js는 따로 설정하지 않으면 기본적으로 서버 컴포넌트로 실행된다. 하지만 위와 같은 에러가 발생했고 이유를 찾아보았다.

하위 컴포넌트인 `Modal.tsx`는 **onClick 이벤트**를 발생시키는 컴포넌트를 포함하고 있다. onClick 이벤트는 자바스크립트 이벤트 핸들러로 웹 브라우저 상에서 사용자에 의해 컨트롤된다.

사용자와 상호작용하는 이벤트 핸들러는 브라우저 환경에서 실행되는 클라이언트 측 코드에서 사용되어야 한다

⭐️ 이벤트 핸들러가 실행되는 함수는 자동으로 클라이언트 컴포넌트로 변환된다!

```jsx
const MyModal = (props: IModal) => {
  const { isOpen, onRequestClose, contentLabel } = props; // 👀

  return (
    <div>
      <h2>{contentLabel}</h2>
      <p>...모달내용...</p>
      <button onClick={onRequestClose}>닫기</button> // 👀
    </div>
  );
};
```

에러가 발생한 포인트는 props전달 과정에 있다. props전달 과정에서 어떤 일이 발생하길래 서버 ↔️ 클라이언트 컴포넌트 간 props를 전달 할 수 없는 것일까?

### 2. 함수 직렬화가 무엇이지? | 서버 ↔️ 클라이언트 컴포넌트 간 props를 전달할 때 발생하는 일

> If you fetch data in a Server Component, you may want to pass data down as props to Client Components. Props passed from the Server to Client Components need to be serializable by React. by. NEXT JS 공식문서

공식문서에서도 서버 컴포넌트가 클라이언트 컴포넌트로 데이터를 props형태로 전달할때 리액트에 의해 직렬화(serializable)되어야 한다고 말한다.

💡 함수 직렬화란?<br />
함수를 **문자열로 변환**하여 데이터를 직렬화하는 과정을 뜻한다. 자바스크립트에서는 데이터를 JSON형태로 변환하는 것을 직렬화한다고 한다.

하지만 NEXT JS에서 서버 컴포넌트에서 클라이언트 컴포넌트로 데이터를 전달할 때 JSON으로 직렬화되지 않고 React.Element로 전달한다. <br />
전달된 React.Elements는 리액트 컴포넌트를 표현하는 객체로, JS 기본 데이터 형식 이외에도 React에 특화된 데이터를 포함하고 있다.

다시 한번 문제를 정리하자면 다음과 같다.

1. 하위 컴포넌트가 이벤트 함수를 props로 전달받아 클라이언트 컴포넌트로 자동 전환되었다.
2. 컴포넌트간 데이터를 전달할 때는 직렬화 과정이 필요한데, 이때 서버 컴포넌트에서 클라이언트 컴포넌트로 props로 전달된 데이터는 직렬화 과정을 거치지 않는다.
3. 이 데이터는 JSON으로 직렬화 되지 않고, React.Elements로 전달되기 때문이다.

이 문제를 해결하는 데에 여러 방법이 있다.

## 🔨 문제 해결

### 1. 클라이언트 ↔️ 클라이언트 구조 만들기

서버 컴포넌트 ↔️ 클라이언트 컴포넌트 구조가 문제라면, ㅊ 구조로 바꾸는 것은 어떨까?

이 때 사용되는 명령어는 다음과 같다.

```js
"use client";
```

상위 컴포넌트 파일 상단에 이 명령어를 추가하면 클라이언트 컴포넌트로 선언된다. 여기서 구분을 명확하게 하기 위해 파일 이름도 바꾸어 주면 좋다.

`MyModal.tsx` -> `MyModal.client.tsx`

여기서 또 궁금점이 생겼다.

NEXT JS에서 상위 컴포넌트가 클라이언트 컴포넌트라면 하위 컴포넌트는 모두 클라이언트로 설정된다. 이 프로젝트의 가장 상위 컴포넌트인 `Page.tsx`에 `use client`를 추가했는데, 이러면 NEXT JS 프레임워크를 사용하는 것이 의미가 있을까?

공식문서에 따르면 이를 해결하기 위해 react-query 같은 third-party 라이브러리 사용을 권장한다. 하지만 프로젝트가 작고 상태관리 라이브러리가 굳이 필요하지 않다면 라이브러리를 추가하지 않고 이벤트 핸들러를 props로 전달하는 경우를 최대한 지양하는 편이 좋다는 생각이 들었다.

## 참고

- [Passing props to onClick from server to client component in Next13](https://stackoverflow.com/questions/76948441/passing-props-to-onclick-from-server-to-client-component-in-next13)

* [Next.js 공식문서 - composition-patterns](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
