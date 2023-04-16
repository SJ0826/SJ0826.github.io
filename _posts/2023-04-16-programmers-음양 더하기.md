---
title: "[프로그래머스 / Lv 1] 음양 더하기"
excerpt: "for문과 배열 메소드 성능 비교 고민"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - programmers-lv1
tags:
  - ["reduce", "for"]
last_modified_at: 2023-04-16T08:06:00-05:00
---

## 📄 문제

어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

- absolutes의 길이는 1 이상 1,000 이하입니다.
  - absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
- signs의 길이는 absolutes의 길이와 같습니다.
  - signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

## 🙋‍♀️ 나의 풀이

```js
function solution(absolutes, signs) {
  const answer = absolutes.reduce((acc, cur, index) => {
    return (acc += signs[index] ? cur : -cur);
  }, 0);
  return answer;
}
```

이렇게 반복문을 사용하게 되는 문제에서는 항상 고민을 하게 됩니다.

언제 for문을 사용하고 언제 배열 메소드를 사용할까요?

속도는 for문이 빠르지만 가독성은 배열 메소드들이 좋기 때문입니다.

![image](https://user-images.githubusercontent.com/56298540/232277740-badc3e98-fe25-4f05-90cf-c4b09f759c90.png)

참고한 포스팅을 읽고 정리한 저의 생각은 다음과 같습니다.

1. 성능이 중요한 경우에 for 문(명령형 프로그래밍)을 사용한다. 예를들어, 프로그래머스 효율성 테스트 혹은 계산이 너무 많아 느려지는 함수등이 그렇다.

2. 병목 현상은 사실상 다른곳에서 일어나는 경우다. 따라서 성급한 최적화는 오히려 독이 되는 경우가 많다.

3. 만약 배열 메소드를 사용해도 가독성이 좋지 않으면, 다시 고려해본다.

> 병목 현상이란? PC에서 병목 현상이라고 하면 두 구성 요소의 최대 성능의 차이로 인해 한 구성 요소가 다른 하드웨어의 잠재 성능을 제한하는 것을 말합니다. by. intel

항상 고민하던 문제였는데 이제 나름 기준이 생겨 가고 있습니다 :)

## 참고

- 프로그래머스
- [Leany Labs](https://leanylabs.com/blog/js-forEach-map-reduce-vs-for-for_of/)

* [intel - 구성 요소의 균형을 적절하게 조정하는 방법](https://www.intel.co.kr/content/www/kr/ko/gaming/resources/what-is-bottlenecking-my-pc.html)
