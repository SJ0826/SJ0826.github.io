---
title: "[React-React Hooks] useMemo"
excerpt: "리액트에서 연산한 값 재사용하기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["React Hooks", "useMemo", "성능 최적화"]
last_modified_at: 2022-10-05T08:06:00-05:00
---

## 📄 useMemo

useMemo는 성능 최적화 단계에서 **연산된 값을 재사용**하기 위해 사용합니다.

```ts
import { useMemo } from "react";

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- 첫 번째 인자: 콜백 함수
- 두 번째 인자: 의존성 배열

두 번째 인자인 배열의 요소 값이 업데이트될 때만 콜백 함수를 다시 호출합니다.

만약 빈 배열을 넘겨주면 맨 처음 컴포넌트가 마운트 되었을 때만 값을 계산하고 이후에는 `memoizaton`된 값을 꺼내서 사용합니다.

원하는 값이 바뀌지 않으면 리렌더링할 때 이전의 값을 재사용합니다.

## 📄 useMemo 사용목적

- 이전에 연산된 값을 재사용한다.
- 컴포넌트가 렌더링된 결과를 재사용한다.

## 📄 주의할 점

`useMemo`는 꼭 필요한 경우에만 사용합니다.

값을 재활용하기 위해 따로 메모리에 값을 저장해 놓기 때문입니다.

불필요한 값을 저장하면 성능이 안좋아질 수 있습니다.

## 출처

- [코딩병원](https://itprogramming119.tistory.com/entry/React-useMemo-%EC%82%AC%EC%9A%A9%EB%B2%95-%EB%B0%8F-%EC%98%88%EC%A0%9C)

* 패스트캠퍼스 for velopert
