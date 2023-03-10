---
title: "배열 중복 요소 없애기 (Set)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "Set"]
last_modified_at: 2022-11-29T08:06:00-05:00
---

## 📄 Set

배열을 다룰때 `Set`함수를 사용하면 중복된 요소를 없애고 값을 한번만 보여줍니다.

`Set`은 객체로 다루어지지만 배열의 타입이 `Object`이기 때문에 사용할 수 있습니다.

## 📄 Set 사용하기

```js
var mySet = new Set();
```

`mySet`은 중복된 요소가 있으면 하나만 남기고 사라집니다.

```js
mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add("some text"); // Set { 1, 5, 'some text' }
```

`5`를 두번 추가했지만 한개만 남습니다.

```js
this.setHistoryData = (histData) => {
  const avoidDulpli = [...new Set([histData, ...this.state.historyList])];
  if (avoidDulpli.length > 5) {
    avoidDulpli.pop();
  }
  this.setState({
    ...this.state,
    historyList: avoidDulpli,
  });
};
```

구현하던 프로젝트에서 검색기록을 내는 코드입니다.

검색한 데이터(`histData`)를 받아서 새로운 배열 `avoidDulpli`를 만들고,

`new Set`을 이용해 중복된 값은 제거되는 새로운 배열을 만들어 받아온 데이터(`histData`)가 앞에 추가됩니다.
