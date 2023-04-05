---
title: "Props(Properties)란?"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["Props", "Default Props"]
last_modified_at: 2022-10-02T08:06:00-05:00
---

## 📄 Props 란?

Props는 **컴포넌트를 사용하는 과정에서 특정 값을 전달**하는 역할을 수행합니다.

- Props는 외부에서 제공받은 값을 컴포넌트에 전달합니다.
- 상위 컴포넌트가 하위 컴포넌트에 값을 전달할 때 사용합니다.(단방향 데이터 흐름)
- 프로퍼티는 수정할 수 없습니다.

## 📄 왜 Props를 사용할까?

가장 큰 이유는 **컴포넌트의 재사용성**을 높일 수 있기 때문입니다.

상황에 따라서 데이터를 전달받아 데이터에 맞게 UI를 구현할 수 있습니다.

```js
// App.js
import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
```

`Hello`컴포넌트에서 태그의 속성값을 사용하기 위해 파라미터에 `props`을 입력합니다.

```js
import React from "react";

function Hello(props) {
  // 컴포넌트 이름은 대문자로 시작
  console.log(props);
  return (
    <div
      style={{
        color: props.color,
      }}
    >
      안녕하세요 {props.name}
    </div>
  );
}

Hello.defaultProps = {
  // 특정값을 빠뜨렸을때 기본값으로 사용할 값
  name: "이름없음",
};
export default Hello; // Hello라는 컴포넌트를 내보낸다.
```

## 📄 props.children

컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐 `props.children`을 사용합니다.

```js
import React from "react";

function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return <div style={style}>{children}</div>;
}

export default Wrapper;
```

전달된 인자들이 오브젝트로 묶어져서 `LikeButton`컴포넌트 안에서 `this.props`로 할당됩니다.

- 드림코딩
- https://goddaehee.tistory.com/300
- [벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/basic/05-props.html)
