---
title: "가운데 글자 가져오기"
excerpt: "프로그래머스 Lv1. 가운데 글자 가져오기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["가운데 글자 가져오기", "삼항 연산자", "subString()"]
last_modified_at: 2023-03-28T08:06:00-05:00
---

## 문제 📖

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

- s는 길이가 1 이상, 100이하인 스트링입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(s) {
  const stringToArray = [...s]; // 1
  const target = s.length / 2; // 2

  if (s.length % 2 === 0) {
    // 3
    return stringToArray[target - 1] + stringToArray[target];
  }

  return stringToArray[Math.floor(target)]; // 4
}
```

1.  문자열을 배열(`stringToArray`)로 바꾼다.
2.  배열의 크기를 2로 나눈 수(`target`)를 구한다.
3.  `stringToArray`가 짝수면 `target`과 직전의 값을 인덱스로 하는 값을 함께 반환한다.
4.  아니면 `target`을 반내림해서 하나의 값만 반환한다.

이번 문제는 간단해서 1분도 안되어 풀었지만, 오히려 이런 문제에서 고수는 드러나기 마련입니다.

그리고 당연하게도 저는 아직 초보자임이 들통나버립니다.

## 🔨 Best Practice

```js
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
```

왜 삼항연산자를 사용할 생각을 못했을까요.

새로운 `subString()`이라는 자바스크립트 문법을 하나 알아갑니다.

📌 `substr`이라는 자바스크립트 문법이 인상적이어서 가져왔는데 댓글을 보니 미래에 삭제되니 `subString()`으로 대체해서 사용하라고 알려주네요.

### 🔖 subString()

`subString()`은 문자열을 인덱스를 기준으로 자를 수 있는 메소드 입니다.

```js
str.substring(시작 인덱스, 마지막 인덱스(옵션));
```

시작 인덱스는 해당 인덱스를 포함하지만, 마지막 인덱스를 해당 인덱스까지 포함하지 않고 직전까지 잘라내기 때문에 헷갈리지 말아야 합니다.

```js
const str = "Mozilla";

console.log(str.substring(1, 3));
console.log(str.substring(3, 1));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"

console.log(str.substring(2, 2));
// Expected output: ""
```

만약, 마지막 인덱스보다 시작 인덱스가 크다면 알아서 순서를 바꿔서 메소드가 동작합니다.

시작 인덱스와 마지막 인덱스가 같다면 빈 문자열을 반환합니다.

## 문제 출처

- 프로그래머스
