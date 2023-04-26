---
title: "[프로그래머스 / Lv 1] 문자열 다루기 기본 by JS"
excerpt: "문자열이 숫자로만 이루어져 있는지 확인하기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["문자열"]
last_modified_at: 2023-04-26T08:06:00-05:00
---

## 📄 문제

문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

- s는 길이 1 이상, 길이 8 이하인 문자열입니다.
- s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(s) {
  if (s.length !== 4 || s.length !== 6) return false;
  console.log(Number(s));
  return !isNaN(Number(s));
}
```

처음에 주어진 문자열 전체를 숫자로 바꿨는데 테스트 케이스 오류가 발생했습니다.

알고보니 문자 `e`가 포함되면 Number()가 지수로 인식해 `e`를 숫자로 판별했던 것이었습니다.

따라서 for문을 돌려 문자 하나하나에 Number()를 적용해주어야 했습니다.

```js
function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;

  for (let i = 0; i < s.length; i++) {
    if (isNaN(Number(s[i]))) return false;
  }
  return true;
}
```

문자열에 Number() 메소드를 적용하면 NAN이 되니, isNaN()을 사용해 이를 판별했습니다.

isNaN을 !!isNaN으로 사용하면 더 간결하겠지만, 주어진 문자열이 "0000"인 경우에는 0도 false로 인식하므로 사용할 수 없었습니다.

## 👍 Best Practice

```js
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;

  return regex.test(s);
}
```

정규식을 이용한 풀이입니다.

주어진 문자열이 6개 혹은 4개의 숫자(d)로 이루어져 있는지 바로 확인할 수 있습니다.

## 문제 출처

- 프로그래머스
