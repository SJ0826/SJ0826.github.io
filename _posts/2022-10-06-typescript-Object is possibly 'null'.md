---
title: "🚨 Object is possibly 'null'.ts(2531)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["null", "에러"]
last_modified_at: 2022-10-06T08:06:00-05:00
---

## 🚨 Object is possibly 'null'.ts(2531)

`tsconfig`파일에서 안전한 코드 가동을 위해 `strict`을 `true`로 설정했더니 여러가지 에러가 발생했습니다.

```ts
...
    deathsList.appendChild(li);
...
```

이 코드의 에러메세지는 다음과 같습니다.

```ts
const deathsList: Element | null;
// 🚨 Object is possibly 'null'.ts(2531)
```

`deathsList`의 타입이 `Element` 혹은 `null`이 될 수 있는데 확실하게 해달라는 뜻입니다.

애초에 `deathList`를 선언할때 타입단언을 확실히 해주면 되는 일이지만 이 외에도 다양한 해결 방법이 있습니다.

## 🔨 해결 방법

### 1. if문 사용

코드의 바로 윗줄에 `if`문을 사용하여 `null`일 경우 `return`합니다.

```ts
if (!deathList) {
  return;
}
deathsList.appendChild(li);
```

`deathListh`가 `null`이 되면 `return`되어 버리기 때문에 해당 코드까지 내려가지 않고 에러가 발생하지 않습니다.

하지만 이렇게 모든 해당 에러 코드를 `if`문으로 작성하면 코드가 길어져 효율성이 떨어질 수 있습니다.

### 2. assertion 사용(타입 단언)

```ts
deathsList!.appendChild(li);
```

assertion 기호 `!`를 사용하면 해당 데이터가 `null`이 아니라고 타입스크립트에 알려주게 됩니다.

하지만 assertion을 사용해서 타입 단언을 하게 되면 esLint에서 위험하다고 경고를 줍니다.

### 📌 타입 단언 문법 사용시 주의해야 할 점

타입 단언을 사용하면 주의해야할 점이 있습니다.

```ts
interface Hero {
  name: string;
  skill: string;
}

const capt = {} as Hero;

// capt.name = 'capt';
```

타입 단언을 사용하면 인터페이스의 속성 값을 사용하지 않아도 에러가 나지 않는 위험성을 가지고 있습니다.

따라서 타입 단언은 확신이 있을 경우에만 사용하는 것을 권장한다.

### 3. 옵셔널 체이닝 연산자 사용하기

옵셔널 체이닝 문법을 사용하면 `?`기호로 간단히 에러를 잡을 수 있습니다.

```ts
...
    deathsList?.appendChild(li);
...
```

`deathList`가 `null` 이나 `undefined`면 평가를 멈추고 `undefined`를 반환한다.

## 출처

- [캡틴 판교-타입스크립트 입문 강의](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8/dashboard)
