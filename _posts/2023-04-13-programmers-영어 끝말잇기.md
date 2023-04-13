---
title: "[프로그래머스 / Lv 2] 영어 끝말잇기 by JS"
excerpt: "프로그래머스 Lv 2 영어 끝말잇기 문제 풀이"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv2
tags:
  - ["스택"]
last_modified_at: 2023-04-13T08:06:00-05:00
---

## 📄 문제

1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 하고 있습니다. 영어 끝말잇기는 다음과 같은 규칙으로 진행됩니다.

1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
이전에 등장했던 단어는 사용할 수 없습니다.
한 글자인 단어는 인정되지 않습니다.
다음은 3명이 끝말잇기를 하는 상황을 나타냅니다.

```
tank → kick → know → wheel → land → dream → mother → robot → tank
```

위 끝말잇기는 다음과 같이 진행됩니다.

- 1번 사람이 자신의 첫 번째 차례에 tank를 말합니다.
- 2번 사람이 자신의 첫 번째 차례에 kick을 말합니다.
- 3번 사람이 자신의 첫 번째 차례에 know를 말합니다.
- 1번 사람이 자신의 두 번째 차례에 wheel을 말합니다.
- (계속 진행)
  끝말잇기를 계속 진행해 나가다 보면, 3번 사람이 자신의 세 번째 차례에 말한 tank 라는 단어는 이전에 등장했던 단어이므로 탈락하게 됩니다.

사람의 수 n과 사람들이 순서대로 말한 단어 words 가 매개변수로 주어질 때, 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return 하도록 solution 함수를 완성해주세요.

- 끝말잇기에 참여하는 사람의 수 n은 2 이상 10 이하의 자연수입니다.
- words는 끝말잇기에 사용한 단어들이 순서대로 들어있는 배열이며, 길이는 n 이상 100 이하입니다.
- 단어의 길이는 2 이상 50 이하입니다.
- 모든 단어는 알파벳 소문자로만 이루어져 있습니다.
- 끝말잇기에 사용되는 단어의 뜻(의미)은 신경 쓰지 않으셔도 됩니다.
- 정답은 [ 번호, 차례 ] 형태로 return 해주세요.
- 만약 주어진 단어들로 탈락자가 생기지 않는다면, [0, 0]을 return 해주세요.

## 🙋‍♀️ 나의 풀이

```js
function solution(n, words) {
  let answer = [0, 0];
  let stack = [];
  for (let i = 0; i < words.length; i++) {
    // 1
    if (!stack[0]) {
      // 2
      stack.push(words[i]);
      continue;
    }
    if (stack.indexOf(words[i]) !== -1 || stack.at(-1).at(-1) !== words[i][0]) {
      // 3
      answer = [(i + 1) % n ? (i + 1) % n : n, Math.ceil((i + 1) / n)]; // 4
      break;
    }
    stack.push(words[i]); // 5
  }
  return answer;
}
```

1.  주어진 문자열 배열 `words`를 순환한다.
2.  첫번째 반복의 경우 stack의 값이 비어있어 연산과정에서 에러가 발생하므로, `words`의 첫번째 값을 삽입 후 반복문을 이어간다.
3.  만약 `stack`에 현재 순환되고 있는 순서의 `word[i]`값이 있거나 끝말잇기에 실패한다면,
4.  가장 먼저탈락한 사람의 번호와 몇 번째 차례 탈락인지 구하고 반복문을 나온다.
5.  위 조건문에 해당하지 않을 경우, `stack`에 값을 추가한다.

이 문제는 예전에 봤던 모 기업의 코딩테스트에서는 풀지 못했는데 이번에는 풀어서 뿌듯합니다.😤<br/>
시간이 좀 걸렸던 이유는 배열의 인덱스는 0부터 시작하고 문제기준 인덱스는 1부터 시작해 헷갈렸기 때문입니다. 대체 왜 배열을 만든 사람은 첫번째 숫자를 0으로 한걸까요.

## 👍 Best Practice

```js
function solution(n, words) {
  let answer = 0;
  words.reduce((prev, now, idx) => {
    answer =
      answer ||
      (words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]
        ? idx
        : answer);
    return now[now.length - 1];
  }, "");

  return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0];
}
```

1. 첫번째 인덱스에서는 `answer`값을 0인 그대로 넘기고 `prev`에 값의 마지막 문자열을 담는다.
2. 요구사항 조건에 해당하는 경우 `answer`에 해당 인덱스를 담는다.
3. `answer`에 값이 0이 아닌 경우, 가장 먼저 탈락한 사람의 번호와 탈락 차례를 반환한다. (0의 경우 [0,0]을 반환)

이 풀이는 속도에선 크게 차이가 없었으나, `reduce`함수를 잘 사용해서 Best Practice로 선정했습니다.<br/>
이 풀이의 단점은 reduce함수를 사용했기 때문에 break문을 사용할 수 없어 모든 경우를 연산해야 한다는 점이 있습니다.

## 문제 출처

- 프로그래머스
