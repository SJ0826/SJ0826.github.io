---
title: "[React] 리액트"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["리액트"]
last_modified_at: 2022-09-11T08:06:00-05:00
---

## 📄 리액트(React)

리액트는 **사용자에게 보여지는 유저 인터페이스를 만들 수 있게 하는 라이브러리.**입니다.

리액트는 2013년 페이스북에서 시작되어 현재 많은 웹 어플리케이션이 리액트를 사용하고 있습니다.

리액트는 **컴포넌트의 집합체**로서 유저 인터페이스를 보여주고 이벤트를 처리합니다.

## 📄 리액트 컴포넌트

```js
import React, { Component } from 'react';

/* component */
class LikeButton extends Component {
  /* state */
  state = {
    numnerOfLikes: 0,
  };
  /* render */
  render() {
    return <button>
      {this.state.numberOfLikes}
    </button>;
  }
}

export defalut LikeButton;
```

- state: 컴포넌트에 들어있는 데이터
- render: 사용자에 어떻게 표시 될지 표현<br>

리액트는 위와 같은 코드의 형식으로 돌아갑니다.

컴포넌트 안의 `state`가 변경이 되면 `render`에 적용되어 업데이트할 때 사용자에게 보여지는 내용이 바뀝니다.

만약 `render`함수 안에 자식요소가 들어있다면 자식요소의 `render`함수가 모두 업데이트 됩니다.

하지만 모든 변경 요소들이 DOM Tree에 적용되는 것은 아닙니다.

리액트의 Virtual Dom Tree는 이전 트리와 비교해 **변경된 사항만 구별**하여 Dom Tree에 적용시킵니다.

## 📄 리액트의 장점

- 리액트는 **컴포넌트**로 구성되어 있기 때문에 **독립적**이고 **재사용성**이 높다.

- 리액트에는 `Virtual Dom Tree`가 있다. 변경사항이 `Virtual Dom Tree`에 적용되고 이전 트리와 비교해 변경된 사항만 구별하여 `Dom Tree`에 적용시킨다. 모든 내용이 업데이트되지 않고 **변경사항만 업데이트** 되기 때문에 불필요한 동작을 줄임으로써 성능을 높일 수 있다.

- 위와 같은 과정은 리액트에서 직접 데이터가 변경이 될 때 마다 어플리케이션 전체를 다시 렌더링 한다. 개발자가 다른 요소를 하나하나 일일히 손댈 필요 없이 리액트 자체에서 업데이트를 해주기 때문에 효율성을 추구할 수 있다.

- 리액트는 기본적으로 `60fps`를 보장하기 때문에 성능이 보장된다.

## 📄 컴포넌트를 만드는 방법

1. 클래스

   - 컴포넌트를 **상속**해서 만든다.
   - 컴포넌트가 **주기적으로 업데이트** 될 때 사용한다.
   - 관련된 데이터, 함수가 묶어져 있다.
   - state가 들어있어 컴포넌트가 업데이트 되면 Render함수가 업데이트된다.

   ```js
   class LikeButton extends Component {...}
   ```

2. 함수
   - 업데이트가 없고 **정적인 경우**에 사용한다.
   - 한가지의 기능을 수행하는 단위이며, state나 lifecycle method가 없다.
     하지만 React 16.8 버전부터는 React Hook이 도입되어 state, lifecycle method를 사용할 수 있음.

```js
function App() {
  return <h1>Hello</h1>;
}
```

## 출처

- 드림코딩

* 생활코딩
