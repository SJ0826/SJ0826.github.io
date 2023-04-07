---
title: "[알고리즘] 시간 복잡도와  빅오(Big O) 계산법"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - Algorithm
tags:
  - ["시간 복잡도", "빅오 계산법"]
last_modified_at: 2023-04-07T08:06:00-05:00
---

## 📄 시간 복잡도

프로그래머스 문제를 푸는데 이제 점점 성능을 고려해야할 필요성이 생겼습니다.<br>
효율성 테스트를 넘어가야 하기 때문이죠. 🥶<br>
똑같은 답일지라도 빨리 답이 나오는 코드가 더 좋은 성능을 가진 코드인데 이를 구별할 수 있게 하는 것이 시간 복잡도입니다.

시간 복잡도는

**입력 값에 따라 연산을 실행할 때, 연산 횟수에 비해 시간이 얼마나 걸리는 지 알려주는 지표**입니다.

이 시간 복잡도를 나타내주는 방법 중 하나가 <span style="color: #6096B4; font-weight: bold;">빅오(Big O) 표기법</span>입니다.

## 📄 빅오(Big O) 표기법의 종류

![image](https://user-images.githubusercontent.com/56298540/230600786-4f4d7814-6fb9-4f3a-bf53-822590f98846.png)

### ▪ O(1) | Constant Complexity

O(1)는 <span style="color: #FAAB78">입력값에 상관없이 정해진 스텝의 계산을 실행</span>합니다.

콘솔을 한번만 찍는 함수는 아무리 큰 입력값이 오더라도 계산에 영향을 끼치지 않습니다.

```js
const constantComplexity = (arr) => {
  console.log("hello");
};

constantComplexity([1, 2, 3, 4, 5]);
```

- 스택의 push, pop

### ▪ O(n) | linear complexity

O(n)는 <span style="color: #FAAB78">입력값이 증가함에 따라 시간이 같은 비율로 증가</span>합니다.

```js
const linearComplexity = (n) => {
  for(let i = 0; i < n; i++>){
    ...
  }
}
```

- for 문

### ▪ O(n²) | Quadratic Complexity

O(n)는 <span style="color: #FAAB78">입력값이 증가함에 따라 시간이 n²으로 증가</span>합니다.

```js
const quadraticComplexity = () => {
  for (let i = 0; i < n; i++) {
    for (let j =0; j < n; j++) {
      ...
  }
}
```

- 이중 for문
- 삽입정렬(insertion sort)
- 선택정렬(selection sort)
- 거품정렬(bubble sort)

### ▪ O(log N) | Logarithmic Complexity

O(n)는 <span style="color: #FAAB78">입력값에 따라 처리 시간이 증가</span>합니다.

O(n)은 입력 값이 1이 될 때까지 절반으로 나누는 작업을 반복합니다.<br/>
따라서 입력값에 따라 처리 시간이 증가하지만, 비례해서 증가하는 것이 아니므로 O(1)다음으로 빠른 계산법입니다.

- 이진 트리 탐색
- 퀵 정렬(quick sort)
- 병합정렬(merge sort)
- 힙 정렬(heap Sort)

## 출처

- [노마드 코더 - 개발자라면 이제는 알아야하는 Big O 설명해드림. 10분컷.](https://www.youtube.com/watch?v=BEVnxbxBqi8)
- [shitai.koto - [Algorithm] 시간 복잡도(Time complexity) 학습](https://velog.io/@shitaikoto/Algorithm-Time-complexity)
