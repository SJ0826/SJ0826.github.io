---
title: "[React] forwardRef로 부모컴포넌트에서 자식컴포넌트 DOM에 접근하기"
excerpt: "각각 파일로 나뉘어져 있는 input을 어떻게 관리하면 좋을까"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["forwardRef"]
last_modified_at: 2023-06-01T08:06:00-05:00
---

## 📄 리액트 폼 관리하기

하나의 폼을 관리할 때 input이 각각 파일로 나뉘어져 있다면 관리할 수 있는 방법은 여러가지가 있다.

1. 부모-자식 컴포넌트간 통신
2. 상태 관리 라이브러리 사용
3. Context API 사용
4. 폼 라이브러리 사용

원래는 상태 관리 라이브러리로 form을 관리했지만 해당 state를 구독하는 컴포넌트가 타이핑마다 리렌더링되어 비효율적이라는 생각이 들었다.

그래서 다른 방법이 있나 찾아보던 중 `forwardRef`라는 react 훅을 알게 되었다.

## 📄 forwardRef를 써보자

- 역할: 부모컴포넌트가 자녀 컴포넌트에 ref를 전달할 수 있다.

* 사용법: 자식 컴포넌트를 forwardRef로 감싸준다.

```js
const inputRef = useRef();

const focus = () => {
  inputRef.current.focus();
};

return (
  <div>
    <MyInput ref={inputRef} />
    <button onClick={focus}>포커스</button>
  </div>
);
```

```js
const Input = (ref) => {
  return <input ref={ref} />;
};

export default forwardRef(MyInput);
```

### 📄 주의할 점

자녀 컴포넌트가 가진 DOM노드를 외부로 노출시키는 일이므로 캡슐화를 방해할 수 있다.

필요하다면 사용하지만 굳이 필요없다면 최선책으로 사용할만한 방법은 아니다.

## 출처

- [별코딩 Youtube - React의 ForwardRef란?](https://www.youtube.com/watch?v=LtYzjv2yXHE&list=PLZ5oZ2KmQEYjVH2ie-sZJnbEE6B-uCVIh&index=6)
