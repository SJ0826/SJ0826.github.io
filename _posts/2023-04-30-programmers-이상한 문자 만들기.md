---
title: "[프로그래머스 / Lv 1] 이상한 문자 만들기 by JS"
excerpt: "문자열 홀짝 기준으로 대문자/소문자 만들기"
toc: true
toc_sticky: true
sidebar:
nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["toUpperCase()", toLowerCase()]
last_modified_at: 2023-04-30T08:06:00-05:00
---

## 📄 문제

문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

- 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
- 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(s) {
  const newS = s.split(" ").map((value, index) => {
    return [...value]
      .map((char, index) => {
        return (index + 1) % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
      })
      .join("");
  });
  return newS.join(" ");
}
```

1. 단어 `s`를 공백을 기준으로 잘라 배열을 생성한다.(`newS`)
2. 주어진 조건에 맞게 단어를 배열로 만든 후 각 글자를 대문자 또는 소문자로 변환하고 다시 문자열로 만든다.

## 문제 출처

- 프로그래머스
