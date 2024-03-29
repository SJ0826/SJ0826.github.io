---
title: "[Lv 2] 피보나치 수"
excerpt: "피보나치 수 스택 적용해서 풀기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv2
tags:
  - ["피보나치 수", "알고리즘", "스택"]
last_modified_at: 2023-04-06T08:06:00-05:00
---

## 📄 문제

피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

예를들어

* F(2) = F(0) + F(1) = 0 + 1 = 1
* F(3) = F(1) + F(2) = 1 + 1 = 2
* F(4) = F(2) + F(3) = 1 + 2 = 3
* F(5) = F(3) + F(4) = 2 + 3 = 5
와 같이 이어집니다.

2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

* n은 2 이상 100,000 이하인 자연수입니다.

## 🙋‍♀️ 나의 풀이

아마 지금까지 풀었던 프로그래머스 문제 중 가장 오래걸렸던 문제였던 것 같습니다.

재귀로 접근하려고 했다가 실패하고 스택 개념을 적용했습니다.

```js
function solution(n) {
    let arr = [0, 1]
    for(let i = 2; i <= n; i++){
        arr.push(arr[i-2] + arr[i-1])
    }
    return arr[n]%1234567
}
```

값이 하나씩 늘어갈 때마다 배열에 값을 넣어줬습니다.

하지만 모든 테스트 코드를 통과하지 못했습니다.

자바스크립트의 number의 범위는 `2^53 -1`이 최대이기 때문에 이 이상의 값이 나오면 에러가 발생하기 때문이었습니다. 

여기서 시간이 오래걸려 주어진 힌트를 보고 문제를 다시 풀었습니다.

```js
function solution(n) {
    let arr = [0, 1]
    for(let i = 2; i <= n; i++){
        arr.push((arr[i-2] + arr[i-1])%1234567)
    }
    return arr[n]
}
```
매 연산에 `%1234567`을 해주어 너무 큰 값이 발생하지 않게 하는 것이었습니다.

이는 자바스크립트의 특징으로 파이썬의 경우에는 해당되지 않는다고 합니다.

