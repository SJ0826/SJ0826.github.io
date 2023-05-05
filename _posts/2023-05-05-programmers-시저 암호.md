---
title: "[프로그래머스 / Lv 1] 시저 암호 by JS"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["아스키 코드", "배열"]
last_modified_at: 2023-05-05T08:06:00-05:00
---

## 📄 문제

어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

- 공백은 아무리 밀어도 공백입니다.
- s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
- s의 길이는 8000이하입니다.
- n은 1 이상, 25이하인 자연수입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(s, n) {
  const MINCODE = 97;
  const MAXCODE = 122;
  let answer = [];

  let store;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer.push(" ");
      continue;
    }
    store = s.toLowerCase()[i].charCodeAt() + n;
    if (store > 122) store = store - MAXCODE + MINCODE - 1;
    store = String.fromCharCode(store);
    if (s[i] === s[i].toUpperCase()) store = store.toUpperCase();
    answer.push(store);
    store = "";
  }
  return answer.join("");
}
```

1. 문자열의 아스키 코드를 구하고 n만큼 더한다.
2. 만약 더한 값이 122보다 크다면 더한 값 - 122 + 97 - 1 을 해준다.
3. 해당 문자열이 대문자인지 확인 후 값을 변환한다.

## 👍 Best Practice

```js
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
```

아스키코드가 아닌 배열로 작성한 풀이입니다.

0. 우선, 주어진 문자열을 순환할때 해당 문자열이 소문자인지 대문자인지 확인합니다. (`textArr`)
1. `textArr`에 해당 문자열의 인덱스를 구한 후 n만큼 더합니다.
2. 만약 `textArr`의 길이보다 길어질 경우 그만큼 값을 빼서 정확한 위치를 구합니다.

아스키코드를 사용한 풀이보다 오히려 가독성이 좋은 것 같습니다.

## 문제 출처

- 프로그래머스
