---
title: "[프로그래머스 / Lv 2] 타겟 넘버 by JS"
excerpt: "모든 경로의 수 구하기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv2
tags:
  - ["DFS"]
last_modified_at: 2023-04-24T08:06:00-05:00
---

## 📄 문제

n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

```
-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
```

사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

- 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
- 각 숫자는 1 이상 50 이하인 자연수입니다.
- 타겟 넘버는 1 이상 1000 이하인 자연수입니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);

  function dfs(depth, sum) {
    if (depth === numbers.length) {
      if (sum === target) answer += 1;
      return;
    }

    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  }
  return answer;
}
```

이번 문제는 dfs알고리즘을 이용해서 재귀함수를 만들어 풀었습니다.

1. 함수 dfs는 주어진 숫자의 개수만큼 깊이가 길어지면 리턴한다. 이때 노드의 충합이 target과 같다면 answer에 1을 더한다.
2. 1번의 조건과 만족하지 않는다면 `depth`에 1을 더하고 number의 요소가 음수인 경우를 포함해 구하기 때문에 재귀함수를 두번 호출한다.

## 문제 출처

- 프로그래머스
