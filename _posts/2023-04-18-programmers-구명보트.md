---
title: "[프로그래머스 / Lv 2] 구명보트 by JS"
excerpt: "스택/큐 개념으로 그리디 알고리즘 작성하기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv2
tags:
  - ["스택", "큐", "그리디"]
last_modified_at: 2023-04-18T08:06:00-05:00
---

## 📄 문제

무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.

예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.

사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

- 무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
- 각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
- 구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
- 구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(people, limit) {
  let answer = 0;
  let sortedPeople = people.sort((a, b) => a - b);
  while (sortedPeople.length !== 0) {
    if (sortedPeople[0] + sortedPeople[sortedPeople.length - 1] <= limit) {
      sortedPeople.pop();
      sortedPeople.shift();
    } else {
      sortedPeople.pop();
    }
    answer++;
  }
  return answer;
}
```

🎲 key point | 최선의 상황은 가장 몸무게가 많은 사람 + 가장 몸무게가 적은 사람

처음에 몸무게가 가장 적은 순서대로 배에 태웠더니 자꾸 테스트 에러가 발생해서 몸무게 조합을 바꾸어서 생각하니 통과할 수 있었습니다.

1. `people`을 내림차순으로 정렬한 배열 `sortedPeople`을 생성한다.
2. `sortedPeople`에 요소가 없을 때까지 반복문을 돌린다.
3. 요소의 맨 앞(가장 가벼운 사람) + 요소의 맨 뒤(가장 무거운 사람)의 합이 제한 무게 보다 적으면 배열에서 제거하고 `answer`에 1을 추가한다.
4. 요소의 맨 앞(가장 가벼운 사람) + 요소의 맨 뒤(가장 무거운 사람)의 합이 제한 무게 보다 많으면 맨 뒷사람만 배열에서 제거하고 `answer`에 1을 추가한다.

## 👍 Best Practice

```js
function solution(people, limit) {
  people.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0, j = people.length - 1; i < j; j--) {
    if (people[i] + people[j] <= limit) i++;
  }
  return people.length - i;
}
```

for문 조건으로 4개가 들어가는건 처음 봅니다. 신기하네요.

이 풀이에서는 i가 맨 앞사람, j가 맨 뒷사람이 됩니다.

## 문제 출처

- 프로그래머스
