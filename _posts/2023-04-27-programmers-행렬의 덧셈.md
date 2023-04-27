---

title: "[프로그래머스 / Lv 1] 행렬의 덧셈 by JS"
excerpt: "배열 더하기"
toc: true
toc_sticky: true
sidebar:
nav: "docs"

categories:

- programmers-lv1
  tags:
- ["배열"]
  last_modified_at: 2023-04-27T08:06:00-05:00

---

## 📄 문제

행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

- 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer.push(arr1[i].map((value, index) => arr1[i][index] + arr2[i][index]));
  }

  return answer;
}
```

1. for문으로 주어진 배열의 인덱스만큼 반복문을 돌린다.
2. 배열의 요소가 배열이니 다시한번 map을 사용해 값을 더해준 후 `answer`에 값을 삽입한다.

## 👍 Best Practice

```js
function sumMatrix(A, B) {
  return A.map((arr1, idx1) => arr1.map((val, idx2) => val + B[idx1][idx2]));
}
```

map을 두번 사용해 배열의 값을 더한 풀이입니다.

## 문제 출처

- 프로그래머스
