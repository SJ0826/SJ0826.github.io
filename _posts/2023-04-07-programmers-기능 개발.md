---
title: "[프로그래머스 / Lv 2] 기능 개발 by JS"
excerpt: "프로그래머스 Lv 2 기능 개발 문제 풀이"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv2
tags:
  - ["스택/큐", "while"]
last_modified_at: 2023-04-07T08:06:00-05:00
---

## 📄 문제

프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

- 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
- 작업 진도는 100 미만의 자연수입니다.
- 작업 속도는 100 이하의 자연수입니다.
- 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(progresses, speeds) {
  let answer = [];
  let hundreds = 0;
  while (progresses.length !== 0) {
    // 1
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    } // 2
    if (progresses[0] >= 100) {
      while (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        hundreds++;
      } // 3
      answer.push(hundreds); // 4
      hundreds = 0;
    }
  }
  return answer;
}
```

- 시간 복잡도: O(n^2)

1. `progresses`의 길이가 0이 될 때까지 반복문을 실행합니다.
2. `progresses`에 인덱스를 맞춰 `speeds`를 더해줍니다.
3. 만약 `progresses`의 첫번째 인덱스의 값이 100보다 큰 경우 `shift`메소드를 사용해 각 각 배열들의 첫번째 원소를 추출하고, 추출된 횟수를 나타내는 변수 `hundreds`에 1을 더합니다.
4. `progresses`의 첫번째 인덱스가 100보다 크지 않아 반복문을 나오면, 작업이 완료된 기능의 개수인 `hundreds`를 `answer`에 추가합니다.

문제를 풀 때 중첩 반복문이 나오면 답은 나와도 성능상 좋지 않게 느껴져 아쉽습니다.<br>

## 👍 Best Practice

```js
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
```

각 기능들이 배포에 걸리는 시간을 배열로 만들어(`days`) 조건에 따라 `maxDay`를 바꿔가며 `days`를 순환합니다.

아예 접근방식이 달라버리네요. 이럴수가 있다니..<br>
속도나 성능을 떠나서 풀이 방식이 신기합니다.<br>
처음에 눈으로 보고 이해가 안가서 종이에 하나하나 조건을 줘가면서 이해했습니다. 세상엔 똑똑한 사람이 많네요.
