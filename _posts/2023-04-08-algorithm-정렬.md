---
title: "[알고리즘] 정렬 (sorting)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - Algorithm
tags:
  - ["버블 정렬", "선택 정렬", "삽입 정렬"]
last_modified_at: 2023-04-08T08:06:00-05:00
---

## 📄 정렬 알고리즘

정렬 알고리즘은 물건을 정리하는 것 처럼 데이터를 **정해진 순서대로 나열**하는 알고리즘입니다.

정렬 알고리즘에는 대표적으로 <span style="color: #FAAB78; font-weight: bold">버블 정렬</span>, <span style="color: #FAAB78; font-weight: bold">선택 정렬</span>, <span style="color: #FAAB78; font-weight: bold">삽입 정렬</span>이 있습니다.

## 📄 버블 정렬 (Bubble Sort)

버블 정렬은 매 사이클마다 모든 배열 요소를 비교합니다.

1. 0번째 원소와 1번째 원소를 비교 & swap
2. 1번째 원소와 2번째 원소를 비교 & swap
3. n-1번째 원소와 n번째 원소를 비교 & swap

버블 정렬은 중첩 반복이 발생하므로 **O(N^2)**의 시간복잡도를 가집니다.

```js
function bubble(input) {
  const len = input.length;
  let tmp = null;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (input[j] > input[j + 1]) {
        // swap
        tmp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = tmp;
        tmp = null;
      }
    }
  }
}
```

이때 최악의 경우 **모든 요소를 swap**해야 하기 때문에 직관적이지만 비효율적인 방식이라 자주 사용되진 않습니다.

## 📄 선택 정렬 (Selection Sort)

선택 정렬은 원소를 넣을 위치(인덱스)를 미리 정해놓고, 데이터셋을 순회하여 해당 원소를 찾습니다.

쉽게 얘기하자면, 오름차순으로 정리할 때 가장 작은 수를 찾아 맨 앞과 교환한다는 뜻입니다.

1. 주어진 데이터셋에서 최소값을 찾는다.
2. 해당 값을 맨 앞의 요소와 swap한다.
3. 두번째 요소부터 위 과정을 반복한다.

```js
function selectionSort (array){
  for (let i = 0; i < array.length; i++){
    let minIndex = i;
    for (let j = i + 1; j++){
      if (array[minIndex] > array[j]){
        minIndex = j; // 1
      }
    }
    if (minIndex !== i){ // 2
      let swamp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = swamp;
    }
  }
  return array
}
```

선택 정렬은 정렬이 되어 있는 경우, 되어 있지 않은 경우 모든 **O(N^2)**의 시간 복잡도를 가집니다.

## 📄 삽입 정렬

삽입 정렬은 한 사이클동안 모든 요소를 순환하지 않습니다.

사이클마다 해당 요소를 왼쪽에 있는 값들과 비교하고 알맞은 자리에 해당 요소를 삽입합니다.

1. 두번째 요소를 왼쪽 요소와 비교하고 데이터셋을 정렬한다.
2. 세번째 요소를 첫번째 요소와 두번째 요소와 비교하고 데이터셋을 정렬한다.
3. 배열의 크기만큼 위 과정을 반복한다.

```js
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let cur = array[i];
    let left = i - 1;

    while (left >= 0 && array[left] > cur) {
      array[left + 1] = array[left];
      left--;
    }
    array[left + 1] = cur;
  }
  return array;
}
```

삽입 정렬의 경우 정렬이 모두 되어 있는 최선의 경우에는 **O(N)**의 시간복잡도를 가지고,<br>
정렬이 되어 있지 않은 최악의 경우에는 **O(N^2)**의 시간 복잡도를 가집니다.

## 참고

- [노마드 코더 - 어? 재밌네? 정렬 알고리즘, 한방에 이해하기!](https://www.youtube.com/watch?v=Bor_CRWEIXo)
- [Code Playground](https://im-developer.tistory.com/133)
