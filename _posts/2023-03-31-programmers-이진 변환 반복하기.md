---
title: "[Lv 2] 이진 변환 반복하기"
excerpt: "자연수 이진수 만드는 방법 & 문자열 치환하기 replace"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv2
tags:
  - ["이진수", "replace"]
last_modified_at: 2023-03-31T08:06:00-05:00
---

## 📄 문제

0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

x의 모든 0을 제거합니다.
x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.

- s의 길이는 1 이상 150,000 이하입니다.
- s에는 '1'이 최소 하나 이상 포함되어 있습니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(s) {
  let binaryTransforms = s;
  let NumberOfZero = 0;
  for (let i = 0; i < s.length; i++) {
    // NumberOfZero += binaryTransforms.match(/0/gi)?.length; 🚨 Error!
    NumberOfZero += binaryTransforms.split("0").length;
    binaryTransforms = binaryTransforms?.match(/1/gi).length.toString(2);

    if (binaryTransforms === "1") return [i + 1, NumberOfZero];
  }
}
```

저번에 공부한 `match()`라는 메소드를 야무지게 써먹어 보았습니다.

그런데 문자열에서 0만 뽑아오는 binaryTransform이 0이 없을 때 null을 뱉어 NumberOfZero이 Nan이라는 결과를 뱉습니다.

이를 해결하기 위해 `split()`메소드를 사용해 무조건 값이 나오게 만들어 length 속성을 사용할 수 있도록 작성했습니다.

## 👍 Best Practice

```js
function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}
```

제가 많은 것들을 놓치고 있었네요.

- 명확한 조건이 있음에도 의미 없이 `for`문을 사용
- OR 연산자를 사용해 조건을 걸어 length 사용 가능
- 답을 무조건 변수에 넣는다고 좋은 것이 아님

저는 다른것보다 답을 배열에 넣어놓은 부분이 마음에 들었습니다.

반환되는 값이 어떤 역할을 하는지 명확히 하려고 변수에 담았는데 오히려 여기서 보여주는 답안이 answer이 하는 역할을 더 잘 보여주는 것 같습니다.

또하나 인상적인 점은 string 메소드인 `replace()`를 사용했다는 것입니다.

<span style="background: #FFD966; padding: 1em">📌 String.prototype.replace(): 문자열을 치환할 수 있다. str.replace(해당 문자열 || 정규식, 치환할 문자열 || 함수) </span>

이녀석도 기억해서 다음 문제에 사용하게 된다면 야무지게 써먹어보겠습니다.

## 문제 출처

- 프로그래머스
