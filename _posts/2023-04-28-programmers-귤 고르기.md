---
title: "[프로그래머스 / Lv 2] 멀리 뛰기 by JS"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv2
tags:
  - [""]
last_modified_at: 2023-04-26T08:06:00-05:00
---

## 📄 문제

경화는 과수원에서 귤을 수확했습니다. 경화는 수확한 귤 중 'k'개를 골라 상자 하나에 담아 판매하려고 합니다. 그런데 수확한 귤의 크기가 일정하지 않아 보기에 좋지 않다고 생각한 경화는 귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화하고 싶습니다.

예를 들어, 경화가 수확한 귤 8개의 크기가 [1, 3, 2, 5, 4, 5, 2, 3] 이라고 합시다. 경화가 귤 6개를 판매하고 싶다면, 크기가 1, 4인 귤을 제외한 여섯 개의 귤을 상자에 담으면, 귤의 크기의 종류가 2, 3, 5로 총 3가지가 되며 이때가 서로 다른 종류가 최소일 때입니다.

경화가 한 상자에 담으려는 귤의 개수 k와 귤의 크기를 담은 배열 tangerine이 매개변수로 주어집니다. 경화가 귤 k개를 고를 때 크기가 서로 다른 종류의 수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

- 1 ≤ k ≤ tangerine의 길이 ≤ 100,000
- 1 ≤ tangerine의 원소 ≤ 10,000,000

## 🙋‍♀️ 나의 풀이

```js
function solution(k, tangerine) {
  let answer = 0;
  let acc = 0;
  const tangerineObject = {};
  tangerine.forEach((value) => {
    tangerineObject[value] = (tangerineObject[value] || 0) + 1;
  });
  const tangerineNum = Object.values(tangerineObject).sort((a, b) => b - a);
  for (let i = 0; acc < k; i++) {
    answer++;
    acc += tangerineNum[i];
  }
  return answer;
}
```

1. `tangerine`배열에서 과일이름이 중복된 횟수를 계산해 새로운 객체 `tangerineObject`에 이름과 과일의 개수를 매칭해 저장한다.
2. 과일 개수를 내림차순으로 정렬해 배열에 저장한다.(`tangerineNum`)
3. 정렬된 배열에서 앞에서부터 k개의 요소를 더하여, 그 합이 k이상이되는 최소값을 구한다.

## 👍 Best Practice

```js
function solution(k, tangerine) {
  let answer = 0;
  const tDict = {};
  tangerine.forEach((t) => (tDict[t] = (tDict[t] || 0) + 1));
  const tArr = Object.values(tDict).sort((a, b) => b - a);
  for (const t of tArr) {
    answer++;
    if (k > t) k -= t;
    else break;
  }
  return answer;
}
```

최솟값을 구할때 저는 변수(`acc`)를 선언해 누적값을 구했는데, 이 풀이에서는 따로 변수를 선언하지 않고 주어진 `k`에서 값을 빼주며 0이 되었을 때 반복문을 나오게 했습니다 👍
