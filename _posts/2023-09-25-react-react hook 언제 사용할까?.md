---
title: "[React] react hook, 언제 사용해야 할까?"
excerpt: "react hook을 사용하는 본격적인 이유"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["useEffect", "useCallback", "useMemo"]
last_modified_at: 2023-09-25T08:06:00-05:00
---

## 📄 react hook?

리액트 훅 (React hook)은 함수형 컴포넌트에서도 클래스형 컴포넌트의 기능을 사용할 수 있게 해주는 기능이다.

자주 사용되는 리액트 훅의 종류는 다음과 같다.

- useCallback

  - 의존성 배열안의 인자가 변경될 때까지 함수를 저장
  - 하위 컴포넌트의 무의미한 렌더링을 방지할 수 있어 유용

- useMemo

  - 의존성 배열안의 인자가 변경될 때까지 계산된 값(value) 저장
  - 매 렌더링마다 복잡한 계산을 해야하는 상황을 피할 수 있다.

- useEffect
  - 모든 컴포넌트가 렌더링 (처음 렌더링) 된 후, 실행
  - 의존성 배열안의 인자가 변경될 때마다, 첫번째 인자로 등록된 함수가 실행

리액트 훅은 매우 유용하지만 데이터를 메모리에 저장하는 메모이제이션 기능을 담당하기 때문에, 무분별하게 사용한다면 <span style="text-decoration: underline">의미없는 메모리 낭비</span>가 발생하게 된다.

리액트 훅을 어느 상황에서 사용하는 것이 적절한 것인지 정리해보았다.

## 📄 useCallback | 리렌더링될 때마다 함수 호출하기 싫어요

- 목적: 함수 생성 최적화

`useCallback`은 함수를 저장하는 리액트 훅이다.

이때 함수를 저장하다는 것은 함수의 실행 여부를 정한다는 뜻이다.

컴포넌트가 리렌더링된다면 그 안에 종속되어 있는 함수는 매번 호출된다. 간단한 함수라면 문제없지만 api를 통해 데이터를 fetching하는 함수라면 의미없는 api 호출이 계속 발생하게 될 수 있다.

### 💾 App.js

- `getItem()`: 데이터 fetching 함수. List에 props로 전달한다.

```js
import React, { useState } from "react";
import List from "./List";

function App() {
  const [input, setInput] = useState(1);
  const [light, setLight] = useState(true);

  const getItems = () => {
    return [input + 10, input + 100];
  };

  const theme = {
    backgroundColor: light ? "White" : "grey",
    color: light ? "grey" : "white",
  };
  return (
    <>
      <div style={theme}>
        <input
          type="number"
          value={input}
          onChange={(event) => setInput(parseInt(event.target.value))}
        />
        <button onClick={() => setLight((prevLight) => !prevLight)}>
          {light ? "dark mode" : "light mode"}
        </button>
        <List getItems={getItems} />
      </div>
    </>
  );
}

export default App;
```

### 💾 List.js

```js
import React, { useEffect, useState } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Fetching items");
    setItems(getItems());
  }, [getItems]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
export default List;
```

🔍 문제 상황: theme을 바꾸는 버튼을 눌렀을 때 컴포넌트 리렌더링 -> 매 렌더링마다 `getItem()`호출되어 계속되는 무의미한 api 호출 <br />

🔦 해결 방법: useCallback 함수로 `getItem()`을 저장해 의존성 배열안의 값이 바뀔 때만 함수가 실행되도록 하자!

```js
const getItems = useCallback(() => {
  return [input + 10, input + 100];
}, [input]);
```

useCallback함수로 `getItem()`는 input값이 변경될 때만 호출되어 무의미한 data fetching을 없애 주었다.

## 📄 useMemo | stateful한 값이 변경될 때마다 발생하는 리렌더링을 막고 싶어요

- 목적: 값 계산 최적화

### 💾 MyComponent.js

```js
function MyComponent() {
    const [data, setData] = useState(0);
    const number = verySlowFunction(data);
    return <div>{number}</div>;
}

function verySlowFunction(input) {
    ...heavy work done here
    return value;
}
```

🔍 문제 상황: MyComponent가 호출될 때마다, `verySlowFunction()`가 호출

🔦 해결 방법: useState 값을 저장해 무의미한 컴포넌트 호출을 막을 수 있다.

```js
function MyComponent() {
	const [data, setData] = useState(0);
	const number = useMemo(() => {
		return verySlowFunction(data)
	}, [data]);

	return <div>{number}</div>;
}

function verySlowFunction(input) {
	...heavy work done here
	return value;
}

```

---

useCallback 과 useMemo는 리액트 컴포넌트 내에서 렌더링과 관련된 함수와 값의 최적화를 달성하기 위해 사용된다.
이로써 불필요한 렌더링을 방지하고 애플리케이션의 성능을 향상 시킬 수 있다.
목적은 의존성 배열을 올바르게 설정하여 효율적인 최적화를 도출하는 것이다.
하지만 무작정 사용하는 것보다 "왜" 사용하는지를 중요시하며, 무의미한 메모리 낭비를 줄이기 위해 신중하게 확인해야 한다.

## 참고

- [When to use useCallback, useMemo and useEffect?](https://www.geeksforgeeks.org/when-to-use-usecallback-usememo-and-useeffect/)
