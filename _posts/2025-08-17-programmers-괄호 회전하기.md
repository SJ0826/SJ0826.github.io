---
title: "[프로그래머스 / Lv 2] 괄호 회전하기 by JS"
excerpt: "문자열을 자르지 않고 인덱스를 활요해 문자열 회전 시키는 방법"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["프로그래머스", "Array.prototype.entries()"]
last_modified_at: 2025-08-17T08:06:00-05:00
---

## 📄 문제 개요

[🔍 프로그래머스 - 괄호 회전하기 문제 보러가기](https://school.programmers.co.kr/learn/courses/30/lessons/76502)

프로그래머스 괄호 회전하기를 스택 자료구조를 이용해 풀었습니다. <br />
이번 문제에서 제가 알게된 점은 **문자열을 회전하며 참조하는 방법**이었습니다.
<br />

이번 포스팅의 주된 내용은 문자열을 자르지 않고 index를 활용해 문자열을 회전하는 방법을 알아보는 것입니다.
<br /> 

- 문자열 s가 주어집니다.
- 문자열을 **한 칸씩 회전**시켜서 올바른 괄호 문자열이 되는 경우의 수를 구하는 문제입니다.


## 🙋‍♀️ 나의 풀이

```js
function solution(s) {
  const n = s.length;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];

    let isCorrect = true;
    for(let j = 0; j < n; j++) {
      // 1. 괄호 문자열을 회전시키면서 참조
      const c = s[(i + j) % n];

      if (c === "[" || c === "(" || c === "{") {
        // 2. 열린 괄호는 푸시
        stack.push(c);
      } else {
        if (stack.length === 0) {
          // 3. 여는 괄호가 없는 경우
          isCorrect = false;
          break;
        }


        // 4. 닫힌 괄호는 스택의 top과 짝이 맞는지 비교
        const top = stack[stack.length - 1];

        if (c === "]" && top === "[") {
          stack.pop();
        } else if (c === ")" && top === "(") {
          stack.pop();
        } else if (c === "}" && top === "{") {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }

    // 5. 모든 괄호의 짝이 맞는 경우
    if (isCorrect && stack.length === 0) {
      answer += 1;
    }
  }

  return answer;
}
```
<br />
<br />

## 🔨 핵심 설명 s[(i + j) % n]

###  1. i와 j의 의미

- i: 몇칸 회전했는지 (0칸, 1칸, 2칸 ...)
- j: 회전된 문자열의 j번째 문자

👉 (i + j)는 실제로 원래 **문자열에서 참조해야 할 인덱스**가 됩니다.

### 2. %n의 의미

문자열 길이를 n이라고 할 때, (i + j)가 n을 넘어가면 인덱스 범위를 벗어나게 됩니다. <br />
따라서 <span class="highlight-orange">**%n**</span>을 사용해 항상 **0 ~ n-1 의 범위**로 돌려줍니다.

즉, **문자열 끝까지 갔다면 다시 앞으로 되돌아가라는 의미**입니다.

### 3. 예시로 보기


✅ `s = [](){} (n = 6)` 의 경우
  - `i = 0, j = 0`  →  `(0+0) % 6 = 0 `→ `s[0] = "["`
  - `i = 0, j = 1` → `(0+1) % 6 = 1` → `s[1] = "]"`
  - ➡️ 그대로 "{}"

<br /> 

✅ `i = 2` (2칸 회전):

- `j = 0` → `(2+0) % 6 = 2` → `s[2] = "("`
- `j = 1` → `(2+1) % 6 = 3` → `s[3] = ")"`
- `j = 2` → `(2+2) % 6 = 4` → `s[4] = "{"`
- ➡️ 새로운 문자열: "(){}[]"

<br />

즉, **왼쪽으로 2칸 회전한 결과**를 얻을 수 있습니다.


<br />

## 🕚 시간 복잡도 분석

- 문자열의 길이를 **n**이라고 할 때:
  - 바깥 반복문 (i 루프): **n**번 반복
  - 안쪽 반복문 (j 루프): **n**번 반복
  - 내부에서 하는 연산 (스택 push/pop, 비교 등): **O(1)**

<br />

➡️ 전체 시간 복잡도: <span class="highlight-orange">**O(n²)**</span> <br /><br />

📌 문자열이 최대 1,000 이하라면 충분히 통과할 수 있는 복잡도입니다.


<br />

## 정리

- <span class="highlight-orange">s[(i + j) % n]</span>는 **i칸 회전된 문자열에서 j번째 문자를 읽는 방법**입니다.
- <span class="highlight-orange">% n</span>을 사용해 인덱스가 배열 범위를 벗어나지 않도록 처리합니다.
- 이렇게하면 문자열을 직접 잘라 붙이지 않고도 회전한 효과를 얻을 수 있습니다.

<br />

## 참조

- [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/42840)
- 코딩테스트 합격자되기 (자바스크립트 편)
