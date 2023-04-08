---
title: "[프로그래머스 / Lv 1] k번째수"
excerpt: "프로그래머스 Lv 1 k번째수 sort 메소드 대신 정렬 알고리즘으로 풀어보기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["정렬", "k번째 수"]
last_modified_at: 2023-04-08T08:06:00-05:00
---

## 📄 문제

배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

- array의 길이는 1 이상 100 이하입니다.
- array의 각 원소는 1 이상 100 이하입니다.
- commands의 길이는 1 이상 50 이하입니다.
- commands의 각 원소는 길이가 3입니다.

## 🙋‍♀️ 나의 풀이 #1

```js
function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    answer.push(
      array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[
        commands[i][2] - 1
      ]
    );
  }
  return answer;
}
```

![image](https://user-images.githubusercontent.com/56298540/230713712-3a7bcde9-3dd8-4bda-9072-05edb083103c.png)

주어진 배열 array를 요구사항대로 자르고 sort() 메소드로 정렬했습니다.

그래도 정렬 알고리즘을 배웠으니 한번 메소드를 사용하지 않고 풀어보겠습니다.

### 🙋‍♀️ 나의 풀이 #2

삽입 정렬을 사용한 풀이입니다.

```js
function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    const slicedArray = array.slice(commands[i][0] - 1, commands[i][1]);
    // 삽입 정렬 시작
    for (let j = 1; j < slicedArray.length; j++) {
      let cur = slicedArray[j];
      let left = j - 1;

      while (left >= 0 && slicedArray[left] > cur) {
        slicedArray[left + 1] = slicedArray[left];
        left--;
      }
      slicedArray[left + 1] = cur;
    }
    answer.push(slicedArray[commands[i][2] - 1]);
  }
  return answer;
}
```

![image](https://user-images.githubusercontent.com/56298540/230713681-e96b3412-0e75-49d2-8f7a-2955653ddc57.png)

속도면에서는 크게 다른 점이 없습니다.

## 👍 Best Practice

```js
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
```

주어진 조건 `commands`를 구조 분해 할당을 사용해 가독성을 높인 풀이입니다.

slice 메소드가 아니라 filter 메소드를 사용해 배열을 자를 수도 있다는걸 하나 알아갑니다.

## 문제 출처

- 프로그래머스
