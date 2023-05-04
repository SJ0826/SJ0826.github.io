---
title: "[프로그래머스 / Lv 1] 예산 by JS"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
nav: "docs"

categories:
  - programmers-lv1
tags:
  - [""]
last_modified_at: 2023-05-04T08:06:00-05:00
---

## 📄 문제

S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.

물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

- d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
- d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
- budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(d, budget) {
  let answer = 0;
  d = d.sort((a, b) => a - b);
  for (let i = 0; budget > 0; i++) {
    if (budget - d[i] < 0) break;
    if (d[i] === undefined) break;
    budget = budget - d[i];
    answer++;
  }
  return answer;
}
```

1. 배열을 오름차순으로 정리한다.
2. budget이 0이 될 때까지 배열 d의 값을 하나씩 뺀다.
3. 예산을 뺀 값이 마이너스가 되면 for문을 종료한다.
4. 부서가 한개인 경우 조건(`budget - d[i] < 0`)을 걸어 for문을 종료한다.

## 👍 Best Practice

```js
function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}
```

sort와 reduce 메소드를 연달아 사용한 풀이입니다.

`((budget -= price) >= 0)`결과에 따라 0 또는 1이 되네요.

## 문제 출처

- 프로그래머스
