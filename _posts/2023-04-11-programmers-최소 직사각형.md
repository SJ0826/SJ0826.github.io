---
title: "[프로그래머스 / Lv 1] 최소직사각형 by JS"
excerpt: "프로그래머스 Lv 1 최소직사각형 찾기 문제 풀이"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["완전 탐색"]
last_modified_at: 2023-04-11T08:06:00-05:00
---

## 📄 문제

명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

명함 번호 가로 길이 세로 길이

- 1 60 50
- 2 30 70
- 3 60 30
- 4 80 40

가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 이때의 지갑 크기는 4000(=80 x 50)입니다.

모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

- sizes의 길이는 1 이상 10,000 이하입니다.
  - sizes의 원소는 [w, h] 형식입니다.
  - w는 명함의 가로 길이를 나타냅니다.
  - h는 명함의 세로 길이를 나타냅니다.
  - w와 h는 1 이상 1,000 이하인 자연수입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(sizes) {
  let sortedSizes = sizes.map((arr) => arr.sort((a, b) => b - a)); // 1
  let card = [0, 0];
  for (let i = 0; i < sizes.length; i++) {
    // 2
    card[0] = sortedSizes[i][0] > card[0] ? sortedSizes[i][0] : card[0];
    card[1] = sortedSizes[i][1] > card[1] ? sortedSizes[i][1] : card[1];
  }
  return card[0] * card[1]; // 3
}
```

1. 주어진 배열 `sizes`를 순회하여 가로길이에 더 큰 값이 가도록 정렬한다.
2. 정렬한 배열 `sortedSizes`를 반복문을 돌려 가로, 세로 각 최댓값을 구한다.
3. 구한 최댓값끼리 곱해 답을 반환한다.

## 👍 Best Practice

```js
function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}
```

비슷한 방식으로 풀었지만 개인적으로 삼항연산자보다 if문을 사용한게 더 깔끔하다고 느꼈습니다.
