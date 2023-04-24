---
title: "[알고리즘] DFS/BPS 깊이/너비 우선 탐색 알고리즘"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - Algorithm
tags:
  - ["DFS", "BPS"]
last_modified_at: 2023-04-24T08:06:00-05:00
---

## 📄 그래프 탐색 알고리즘

여러개체들이 연결되어 있는 자료구조에서 특정 개체를 찾는 알고리즘을 그래프 탐색 알고리즘이라고 합니다.

✔ 대표 문제

1. 경로탐색 유형 (최단거리, 시간)
2. 네트워크 유형 (연결)
3. 조합 유형 (모든 조합 만들기)

이 알고리즘들의 대표 유형이 DFS(깊이 우선 탐색)/BFS(너비 우선 탐색)입니다.

## 📄 DFS | 깊이 우선 탐색 알고리즘

![image](https://user-images.githubusercontent.com/56298540/233902499-8794557a-888f-4073-8feb-dfc611ecdec0.png)

DFS는 임이의 노드에서 시작해서 그 경로를 완벽히 탐색해야 다음 분기로 넘어가는 특징이 있습니다.

- 장점: 운이 좋으면 처음부터 최적의 탐색 경로를 알 수 있다
- 단점: 처음 경로가 복잡하고 아주 길면 시간이 오래걸릴 수 있다.

예시 코드입니다.

```js
// 그래프 정의 (인접 리스트 형태)
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F", "G"],
  D: ["B"],
  E: ["B", "H"],
  F: ["C"],
  G: ["C"],
  H: ["E"],
};

// DFS 알고리즘
function dfs(graph, start) {
  const visited = new Set(); // 방문한 노드를 저장하는 Set
  const stack = [start]; // 스택을 사용하여 탐색할 노드를 저장
  const result = []; // 탐색 결과를 저장할 배열

  while (stack.length > 0) {
    const node = stack.pop(); // 스택에서 하나의 노드를 꺼냄

    if (!visited.has(node)) {
      // 해당 노드를 방문하지 않았다면
      visited.add(node); // 노드를 방문 처리
      result.push(node); // 결과 배열에 노드를 추가

      const neighbors = graph[node]; // 현재 노드의 인접 노드들
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          // 방문하지 않은 인접 노드들을 스택에 추가
          stack.push(neighbor);
        }
      }
    }
  }

  return result;
}

// DFS 실행
const startNode = "A"; // 시작 노드 설정
const result = dfs(graph, startNode); // DFS 실행
console.log(result); // DFS 결과 출력
```

위 코드는 인접 리스트 형태로 그래프를 정의하고, DFS알고리즘을 사용하여 시작 노드에서 출발해 깊이 우선 탐색을 수행합니다.

방문한 노드는 `visited` Set에 저장되고, 탐색 결과는 `result`배열에 추가됩니다.

작성한 함수를 재귀함수로 만들면 다음과 같습니다.

```js
// 그래프 정의 (인접 리스트 형태)
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F", "G"],
  D: ["B"],
  E: ["B", "H"],
  F: ["C"],
  G: ["C"],
  H: ["E"],
};

// DFS 알고리즘 (재귀 함수)
function dfs(graph, node, visited, result) {
  visited.add(node); // 현재 노드를 방문 처리
  result.push(node); // 결과 배열에 노드를 추가

  const neighbors = graph[node]; // 현재 노드의 인접 노드들
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      // 방문하지 않은 인접 노드들에 대해 재귀 호출
      dfs(graph, neighbor, visited, result);
    }
  }
}

// DFS 실행
const startNode = "A"; // 시작 노드 설정
const visited = new Set(); // 방문한 노드를 저장하는 Set
const result = []; // 탐색 결과를 저장할 배열

dfs(graph, startNode, visited, result); // DFS 실행
console.log(result); // DFS 결과 출력
```

✔ 재귀함수를 사용했을 때 장점

- 더 간결하고 직관적이다
- 스택의 개념을 명시적으로 사용하지 않아도 된다

✔ 재귀함수를 사용했을 때 단점

- 스택의 크기가 커질 수 있고 스택 오버플로우가 발생할 수 있다
- 깊이 가 매우 깊은 트리 구조의 경우 재귀 함수를 사용하면 성능이 저하될 수 있다.

따라서 더 간단하고 직관적인 구현이 필요하거나 스택 오버플로우 등의 문제가 발생할 가능성이 낮은 경우에는 재귀 함수를 사용하는 것이 좋습니다.

하지만 성능이 중요하거나 스택의 크기가 커질 수 있는 경우에는 반복문 기반의 구현이 우선적으로 고려되어야 합니다.

## 📄 BFS | 너비 우선 탐색 알고리즘

![image](https://user-images.githubusercontent.com/56298540/233904191-5cb143d6-b194-4426-a8ac-4384f1680df5.png)

DFS는 깊게 탐색하기 전에 먼저 넓게 탐색해보는 알고리즘입니다.

✔ BFS 알고리즘의 장점

- 시작 노드에서 레벨별로 탐색을 진행하기 때문에 **최단 경로 탐색**에 유용하다.
- 각 레벨별로 탐색을 진행하기 때문에 같은 노드를 중복 방문하지 않아 **무한 루프 회피**가 가능하다.
- 레벨 기반으로 탐색을 진행하기 때문에 그래프의 균형을 잡아주는 특징이 있어 **균형 잡힌 탐색**이 가능해 노드가 균등하게 분포된 경우 유용하다.

✔ BFS 알고리즘의 단점

- BPS는 큐를 사용해 탐색을 진행하는데, 현재 레벨의 모든 노드를 큐에 저장해야 하므로 그래프의 너비가 큰 경우 **메모리에 부담**이 커질 수 있다.
- 무방향 그래프일 경우 같은 노드를 중복 방문할 수 있다.
- 그래프가 복잡할 경우 **경로의 복잡성**이 커진다.

```js
// 그래프의 인접 리스트를 표현한 예시
const graph = {
  1: [2, 3],
  2: [4, 5],
  3: [],
  4: [],
  5: [6],
  6: [],
};

// BFS 알고리즘 함수
function bfs(graph, start) {
  const queue = []; // 큐
  const visited = new Set(); // 방문한 노드를 저장할 Set
  queue.push(start); // 시작 노드를 큐에 넣음
  visited.add(start); // 시작 노드를 방문 처리

  while (queue.length > 0) {
    // 큐가 빌 때까지 반복
    const currentNode = queue.shift(); // 큐에서 노드를 꺼냄
    console.log(currentNode); // 현재 노드를 출력 또는 원하는 작업 수행

    const neighbors = graph[currentNode]; // 현재 노드의 인접 노드들
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        // 방문하지 않은 노드라면
        queue.push(neighbor); // 큐에 넣음
        visited.add(neighbor); // 방문 처리
      }
    }
  }
}

// BFS 실행 예시
bfs(graph, 1); // 1 2 3 4 5 6 순서로 출력 또는 원하는 작업 수행
```
