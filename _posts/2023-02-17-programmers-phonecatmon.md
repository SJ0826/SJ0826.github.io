---
title: "폰켓몬"
excerpt: "프로그래머스 Lv1. 폰켓몬 풀이"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["프로그래머스", "폰켓몬", "해시"]
last_modified_at: 2023-02-17T08:06:00-05:00
---

## 문제 📖

당신은 폰켓몬을 잡기 위한 오랜 여행 끝에, 홍 박사님의 연구실에 도착했습니다. 홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.

홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다. 따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있습니다. 예를 들어 연구실에 총 4마리의 폰켓몬이 있고, 각 폰켓몬의 종류 번호가 [3번, 1번, 2번, 3번]이라면 이는 3번 폰켓몬 두 마리, 1번 폰켓몬 한 마리, 2번 폰켓몬 한 마리가 있음을 나타냅니다. 이때, 4마리의 폰켓몬 중 2마리를 고르는 방법은 다음과 같이 6가지가 있습니다.

- 첫 번째(3번), 두 번째(1번) 폰켓몬을 선택
- 첫 번째(3번), 세 번째(2번) 폰켓몬을 선택
- 첫 번째(3번), 네 번째(3번) 폰켓몬을 선택
- 두 번째(1번), 세 번째(2번) 폰켓몬을 선택
- 두 번째(1번), 네 번째(3번) 폰켓몬을 선택
- 세 번째(2번), 네 번째(3번) 폰켓몬을 선택
  이때, 첫 번째(3번) 폰켓몬과 네 번째(3번) 폰켓몬을 선택하는 방법은 한 종류(3번 폰켓몬 두 마리)의 폰켓몬만 가질 수 있지만, 다른 방법들은 모두 두 종류의 폰켓몬을 가질 수 있습니다. 따라서 위 예시에서 가질 수 있는 폰켓몬 종류 수의 최댓값은 2가 됩니다.

당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에, 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다. N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때, N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.

## 나의 풀이 🙋‍♀️

```js
function solution(nums) {
  const totalNumber = Math.ceil(nums.length / 2);
  const set = new Set(nums);
  const newNums = [...set];

  const answer =
    Math.ceil(newNums.length) > totalNumber
      ? totalNumber
      : Math.ceil(newNums.length);

  return answer;
}
```

우선 주어진 배열의 길이를 `totalNumber`에 저장해 answer에 최댓값으로 생각했다.

이후 `set`함수를 사용해서 배열의 중복요소를 제거했다.

최종 정답은 중복요소를 제거한 배열의 길이가 최댓값보다 크면 최댓값인 `totalNumber`, 작으면 중복요소를 제거한 배열의 길이로 설정했다.

## Best Practice 👍

```js
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}
```

다른 사람의 풀이를 보니 내가 너무 성급하게 정답을 제출했다는 것을 알았다.

내 풀이에서는 `newNums.length`에 쓸데없이 올림처리를 한 것을 지우지도 않았고, `set`함수를 사용할때 굳이 상수를 두번이나 선언한게 보인다.

답이 나와도 다시한번 보고 정리하는 습관을 가져야겠다.