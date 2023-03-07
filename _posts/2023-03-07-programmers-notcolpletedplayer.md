---
title: "완주하지 못한 선수"
excerpt: "프로그래머스 Lv1. 완주하지 못한 선수"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["프로그래머스", "완주하지 못한 선수", "해시"]
last_modified_at: 2023-03-07T08:06:00-05:00
---

## 문제 📖

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

## 나의 풀이 #1 🙋‍♀️

```js
function solution(participant, completion) {
  const setParticipant = new Set(participant); // 1
  if (setParticipant.size < participant.length) {
    // 2
    const notCompletion = participant.filter((item) => {
      if (setParticipant.has(item)) {
        setParticipant.delete(item);
      } else {
        return item;
      }
    });
    return notCompletion[0];
  }
  const answer = participant.filter((person) => !completion.includes(person)); // 3
  return answer[0];
}
```

1.  `Set`객체를 사용해서 `participant` 중복요소를 제거한다.
2.  중복요소를 제거한 `participant` 객체(`setParticipant`)의 크기가 `participant`보다 작다면, 동명이인이 있다는 뜻이므로 `filter`함수를 사용해 완주하지 못한 선수의 이름을 구한다.
3.  동명이인이 없는 경우 바로 완주하지 못한 선수의 이름을 구한다.

이 코드를 제출하며 정확성 체크는 통과하지만 효율성 체크는 통과하지 못한다.

효율성까지 테스트하는 문제는 처음이라 시간이 좀 걸려서 코드를 고쳤다.

## 나의 풀이 #2 🙋‍♀️

```js
function solution(participant, completion) {
  const sortedParticipant = participant.sort(); // 1
  const sortedCompletion = completion.sort();

  for (let i = 0; i < sortedParticipant.length; i++) {
    // 2
    if (sortedParticipant[i] !== sortedCompletion[i]) {
      // 3
      return sortedParticipant[i];
      break;
    }
  }
}
```

1. 참가자 배열과 완주자 배열의 문자열을 abc차순으로 정리한다.
2. `for`문을 사용해서 참가자 수만큼 반복문을 실행한다.
3. 순차가 정리된 배열끼리 이름을 비교하게 되고, 이름이 같지 않으면 해당 이름을 정답으로 제출한다.

효율성 체크는 수행 시간과 메모리를 기준으로 평가된다.

코드의 시간복잡도와 저장된 메모리를 고려해야 통과할 수 있다.

반복문을 사용하는 경우에는 원하는 값이 도출되었을 때, 바로 반복문을 종료시킬 수 있어야 효율성이 증가한다.

그런면에서 배열에 `for...in`을 사용하는 것은 좋지 않다.

`for...in`은 모든 값을 조회해 효율성을 떨어뜨리기 때문이다.

## Best Practice 👍

```js
function solution(participant, completion) {
  const map = new Map(); // 1

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1); // 2
    map.set(b, (map.get(b) || 0) - 1); // 3
  } // 4

  for (let [k, v] of map) {
    // 5
    if (v > 0) return k;
  }

  return "nothing";
}
```

해시의 컨셉을 정확히 접목시킨 풀이이다.

해시의 개념은 알고 있었지만 프로그래머스에서 이렇게 접목시킬 생각은 못했다.

1. 우선 `Map`객체를 생성한다.
2. 참가자 수만큼 반복문을 돌려 `map`에 키는 참가자 이름으로, 값은 기존에 1을 더해준다.
3. map에 완주자 이름의 키에 해당되는 값을 `-1`만큼 빼준다.
4. 처음 `for`문을 나온 `map`의 키는 참가자이름이고 값은 0 또는 1이 된다.
5. 완주하지 못한 참가자는 1의 값을 가지고 있으므로 해당 key의 값을 답으로 제출한다.
6. 동명이인이 있을 경우에는 해당 이름의 값에 두번 1이 더해지고 한번 1이 빼지므로 마찬가지로 1이 된다.

풀이를 정리하자면 다음과 같게 된다.

![image](https://user-images.githubusercontent.com/56298540/223395946-3b217984-2284-408b-916f-8c85a22952fe.png)

`sort`로 풀면 **O(NlogN)**의 시간이 걸리지만 해시로 풀면 **O(N)**의 시간 복잡도를 가진다.

다음 해시 문제를 풀때는 꼭 `Map`을 사용해서 답을 낼 것이다.
