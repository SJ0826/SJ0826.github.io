---
title: "디바운싱(Debouncing)"
excerpt: "이벤트를 그룹화하여 특정시간이 지난 후 하나의 이벤트만 발생하도록 하는 기술"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "디바운싱"]
last_modified_at: 2022-11-29T08:06:00-05:00
---

## 📄 디바운싱(debouncing)

1. 이벤트를 그룹화하여 특정시간이 지난 후 하나의 이벤트만 발생하도록 하는 기술
2. 연이어 호출되는 함수들 중 마지막 함수(또는 제일 처음)만 호출하도록 하는 것

디바운싱 기술는 검색 기능을 구현하는 경우에 가장 많이 사용됩니다.

이런 경우에는

`j`
`ja`
`jav`
`java`

처럼 키워드 하나하나 인식해서 키워드 하나에 매번 이벤트가 발생하게 됩니다.

이렇게 처리해야하는 일이 여러번의 요청이 있을때 최종(혹은 처음) 요청의 처리결과만 내놓게 하는게 디바운싱입니다.

```js
var timer;
document.querySelector("#input").addEventListener("input", function (e) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    console.log("여기에 ajax 요청", e.target.value);
  }, 200);
});
```

- 타자를 칠 때(input 이벤트 발생)마다 타이머를 설정한다.
- 200ms동안 입력이 없으면 입력이 끝난 것으로 한다. (시간 자유 설정 가능)
- 200ms 이전에 타자 입력이 발생하면 이전 타이머는 취소하고 새로운 타이머를 다시 설정한다.

## 출처

- [제로초-쓰로틀링과 디바운싱](https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa)
