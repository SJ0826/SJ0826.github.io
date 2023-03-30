---
title: "[Lv 1] 문자열 내 p와 y의 개수"
excerpt: "문자열에서 특정 문자 개수 구하기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["문자열 내 p와 y의 개수", "match"]
last_modified_at: 2023-03-30T08:06:00-05:00
---

## 📄 문제

대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

- 문자열 s의 길이 : 50 이하의 자연수
- 문자열 s는 알파벳으로만 이루어져 있습니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(s) {
  return (
    s.toLowerCase().split("p").length - 1 ===
    s.toLowerCase().split("y").length - 1
  );
}
```

문자열을 소문자로 바꾸고 `p`와 `y`를 기준으로 잘라 크기를 구한 후 1를 빼주면 각 문자가 몇개 들어있는지 알 수 있습니다.

`pPoooyY`의 경우 `toLowerCase()`를 통해 소문자로 바꾸면 `ppoooyy`가 됩니다.

이후 `p`를 기준을 문자열을 `split()`메소드를 이용해 잘라내면 `["", "", "oooyy"]`가 됩니다.

이 배열의 크기는 3인데 여기서 1을 빼면 `p`의 개수를 알 수 있습니다.

## 👍 Best Practice

```js
function numPY(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
```

이 답안은 `match()`라는 메소드를 이용했네요.

이번에 처음으로 알아갑니다.

<span style="background: #FFD966; padding: 1em;">📌 match()는 특정 문자열를 추출하여 배열로 반환해주는 메소드입니다.</span>

그런데 이 코드는 문제가 있습니다.

`p`와 `y`가 없을 때 match()가 null을 반환해서 length함수를 쓸 수 없기 때문에 다음과 같은 컴파일 에러가 납니다.

```
 Cannot read properties of null (reading 'length')
```

이 부분을 해결해보기 위해 옵셔널 체이닝을 걸어주겠습니다.

```js
function numPY(s) {
  return s.match(/p/gi)?.length == s.match(/y/gi)?.length;
}
```

이렇게 되면 `undefined === undefined`가 되어 `true`를 반환해 에러없이 통과할 수 있습니다.
