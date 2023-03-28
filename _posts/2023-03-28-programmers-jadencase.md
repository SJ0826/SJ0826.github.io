---
title: "JadenCase 문자열 만들기"
excerpt: "빈문자열에 숫자 인덱스와 charAt방식으로 접근할 때의 차이점"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv2
tags:
  - ["프로그래머스", "JadenCase 문자열 만들기"]
last_modified_at: 2023-03-28T08:06:00-05:00
---

## 📄 문제

JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

- s는 길이 1 이상 200 이하인 문자열입니다.
- s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
  - 숫자는 단어의 첫 문자로만 나옵니다.
  - 숫자로만 이루어진 단어는 없습니다.
  - 공백문자가 연속해서 나올 수 있습니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(s) {
  const arr = s.toLowerCase().split(" ");

  const answer = arr.map((value) =>
    value ? value[0].toUpperCase() + value.substring(1) : ""
  );

  return answer.join(" ");
}
```

이 문제에는 함정이 있습니다.

**공백문자가 연속해서 나올 수 있습니다.**

문제를 제대로 읽지 않으면 무엇 때문에 통과할 수 없는지 알 수 없습니다.

제 경험담입니다 :)

제가 푼 순서는 다음과 같습니다.

1. 주어진 문자열을 모두 소문자로 바꾸고 공백을 기준으로 배열(`arr`)을 생성한다.
2. 생성된 배열을 순환해 첫 글자를 대문자로 바꿔줍니다.
3. 첫 글자가 대문자로 바뀐 문자열들이 담긴 배열을 다시 문자열로 바꿔 반환합니다.

2번 과정에서 공백문자가 연속으로 나올 가능성도 생각해야 합니다.

**빈 문자열에 인덱스로 접근할 경우 `undefined`를 반환**하기 때문에 `toUpperCase`에서 런타임 오류를 발생시킵니다.

문자열을 배열로 바꾼 `arr`의 요소가 공백문자일 경우 바로 넘어가도록 삼항연산자를 사용했습니다.

## 🔨 Best Practice

```js
function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
```

공백 문자를 해결하는 방법에 `charAt`이 있었습니다.

`charAt`은 해당 인덱스에 위치한 문자열을 반환합니다.

따라서 **빈 문자열에 `charAt`으로 접근할 경우 똑같이 빈 문자열을 반환**하기 때문에 문제가 일어나지 않는 것입니다.

## 문제 출처

- 프로그래머스
