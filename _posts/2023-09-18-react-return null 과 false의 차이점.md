---
title: "[React] return null vs return false"
excerpt: "null 과 false를 반환하는 것에 대한 차이점"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["null", "false", "return"]
last_modified_at: 2023-09-18T08:06:00-05:00
---

## 📄 return null vs return false

지금까지 진행했던 프로젝트에서 자바스크립트는 null을 false로 인식해 boolean 체킹을 하기 때문에, boolean타입으로 형변환을 거치지 않고 그대로 null를 반환해서 사용했다.

하지만 리액트의 성능 최적화를 고려한다면, 이 둘을 명확히 구분해서 사용할 필요가 있다.

### ✅ null 보다는 false를 사용하자!

null과 false를 반환하는 것에 대한 차이점을 바로 말하자면, <span style="color: #FAAB78; font-weight: bold">리렌더링의 유무</span>이다.

리액트는 null를 유효한 값으로 취급한다.

이말인 즉슨 리액트의 가상 돔이 null을 인식하여 null을 반환하는 하위 컴포넌트를 가진 컴포넌트들이 강제로 리렌더링 된다는 뜻이다.

```js
function Parent() {
  return (
    <div>
      <Child />
    </div>
  );
}

function Child() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Child rendered");
  });

  if (count === 0) {
    return null;
  }

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

- 하위 컴포넌트인 Children이 null을 반환할 때, 상위 컴포넌트인 Parent가 강제로 리렌더링 된다.

이 현상을 방지하기 위한 방법이 false를 반환하는 것이다.

```js
function Parent() {
  return (
    <div>
      <Child />
    </div>
  );
}

function Child() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Child rendered");
  });

  if (count === 0) {
    return false;
  }

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

- 하위 컴포넌트인 Children이 false를 반환할 때, 상위 컴포넌트인 Parent가 리렌더링 되지 않는다.

리액트의 가상돔이 false를 인식하지 않기 떄문에, 상위 컴포넌트에서 리렌더링이 발생하지 않는다는 것을 알 수 있다.

## 📄 정리

| return | null | false |
|---|:---:||:---:|
|차이점| 상위 컴포넌트 리렌더링 O | 상위 컴포넌트 리렌더링 X |

비지니스로직이 아닌 뷰로직으로서 <span style="color: #FAAB78; font-weight: bold">아무것도 반환하지 않겠다</span>는 뜻으로 사용할 때는<span style="color: #FAAB78; font-weight: bold"> false</span>를 사용해 리렌더링을 방지할 수 있다.

## 참고

- [stop using "return null" in React](https://medium.com/@davidkelley87/stop-using-return-null-in-react-a2ebf08fc9cd)
