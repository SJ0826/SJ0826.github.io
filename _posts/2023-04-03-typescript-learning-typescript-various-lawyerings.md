---
title: "[Leaning Typescript 🦜] various-lawyerings"
excerpt: "책 learning typescript 4장 타입 객체 실습 프로젝트 입니다."
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - [
      "learning typescript",
      "러닝 타입스크립트",
      "타입 객체",
      "various-lawyerings",
    ]
last_modified_at: 2023-04-03T08:06:00-05:00
header:
  teaser: assets\image\learning typescript.PNG
---

# 👩‍🎓 Various Lawyerings

> Hello, fellow lawyer. I'm glad you've chosen to join me in preparing to engage in legal battle. As you can see, I require your assistance in developing TypeScript projects to manage my files for this most important case.

안녕, 동료 변호사야.<br/>
이번 법정 사건을 나와 함께 준비하기로 했다니 정말 기쁘다.<br/>
보다시피, 아주 중요한 케이스를 위한 파일을 관리하는 지금 개발중인 타입스크립트 프로젝트를 너가 도와줬음 좋겠다잉.

- 타입 인터페이스말고, 타입 객체를 사용하세요.

## 🎓 Step 1: Aviary Classification

> As a world-renowned expert in bird law, it is my duty to properly educate the court on the characteristics of various birds and related bird information. I cannot uphold my critical task if my bird files are not in proper order.<br/><br/>I require you to write an object type describing a Bird type for my array of birds. Please be as specific as possible for types when possible. Any property other than name whose values are strings should be a union of unions of string literals.

**▪ 요약: 새 정보가 들어있는 객체 타입을 가능한 구체적으로 만들어줘. name말고도 값이 string인 프로퍼티는 string 리터럴 유니언 타입이 되어야해**

### 📄 문제 코드

birds배열의 속성들이 객체로 이루어져 있습니다. 이 객체들의 타입을 지정해주어야 합니다.

```ts
// Write your Bird type here! ✨
export const birds = [
  {
    dangerous: true,
    diet: "omnivore",
    name: "White-Throated Magpie-Jay",
    noisy: true,
  },
  {
    diet: "omnivore",
    intelligent: true,
    name: "Eurasian Magpie",
  },
  {
    diet: "carnivore",
    name: "Yellow-Billed Blue Magpie",
    noisy: true,
  },
  {
    intelligent: true,
    diet: "omnivore",
    name: "American Crow",
  },
];
```

### 📄 풀이과정

공통된 속성들을 빼주고 서로 다른 경우의 속성들을 유니언 타입으로 생성해 교차 타입으로 묶어주었습니다.

error는 없어졌지만 이게 요구사항대로 한게 맞는지 모르겠습니다.

```ts
type Bird = { name: string; diet: string } & (
  | { dangerous: boolean; noisy: boolean }
  | { diet: string }
  | { noisy: boolean }
  | { intelligent: boolean }
);
```

✔ 정답

```js
export type Bird = {
  dangerous?: boolean,
  diet: "carnivore" | "omnivore",
  intelligent?: boolean,
  name: string,
  noisy?: boolean,
};
```

역시 틀렸습니다. 교차 타입말고 선택적 속성을 사용하니 훨씬 가독성있네요.

교차 타입을 알기 전에는 이렇게 코드를 작성했었는데 교차 타입을 공부하니 애먼곳에 얶매여 생각했습니다.

역시 코드는 사람이 눈으로 읽기 좋게 짜야합니다.

## 🎓 Step 2: Case Management

> Very good, very good. My birds are classified correctly. I thank you.<br/>
> Next, I have the opposite type of task for you to tackle. I have created a Case type for you and have a cases array. But, the elements in cases vary in format and do not always match up with the Case type. Please correct cases -- without changing the Case type.

**▪ 요약: 아주 맘에 드는구만. 이번엔 반대로 내주지. 타입 Case를 바꾸지 말고 배열 cases를 바꿔서 문제를 해결해 봐라!**

## 📄 문제 코드

이번에는 타입을 수정하지 않고 주어진 배열 데이터인 cases를 고쳐야 합니다.

```ts
export type Case = {
  court: "state" | "federal";
  decided: Date;
  defendant: string;
  id: string | string[];
  plaintiff: string;
  title: string;
};

export const cases: Case[] = [
  {
    court: "federal",
    decided: new Date("February 18, 1986"),
    defendant: ["Glynn Batson", "and", "Southplains Land Corporation"],
    id: 841710,
    plaintiff: "United States of America",
    title: "United States v. Batson",
  },
  {
    court: "state",
    decided: "April 17, 1992",
    defendant: "Bradford Marine, Inc",
    id: ["90-6372-CIV", "90-6599-CIV"],
    plaintiff: "Lyn C. Noble",
    title: "Noble v. Bradford Marine, Inc",
  },
  {
    amusing: true,
    court: "NY state",
    defendant: "PepsiCo, Inc.",
    decided: {
      on: new Date("August 5, 1999"),
    },
    ids: ["96-cv-5320", "96-cv-9069"],
    plaintiff: "John Leonard",
    title: "Leonard v. Pepsico, Inc.",
  },
];
```

### 📄 해결 과정

주어진 타입 Case에 맞게 배열 cases를 바꾸어 주었습니다.

Case에 없는 속성은 아예 삭제했습니다.

```ts
export type Case = {
  court: "state" | "federal";
  decided: Date;
  defendant: string;
  id: string | string[];
  plaintiff: string;
  title: string;
};

export const cases: Case[] = [
  {
    court: "federal",
    decided: new Date("February 18, 1986"),
    defendant: "Glynn Batson and Southplains Land Corporation",
    id: "841710",
    plaintiff: "United States of America",
    title: "United States v. Batson",
  },
  {
    court: "state",
    decided: new Date("1992-04-17"),
    defendant: "Bradford Marine, Inc",
    id: ["90-6372-CIV", "90-6599-CIV"],
    plaintiff: "Lyn C. Noble",
    title: "Noble v. Bradford Marine, Inc",
  },
  {
    court: "state",
    defendant: "PepsiCo, Inc.",
    decided: new Date("August 5, 1999"),
    id: ["96-cv-5320", "96-cv-9069"],
    plaintiff: "John Leonard",
    title: "Leonard v. Pepsico, Inc.",
  },
];
```

정답 코드와 일치합니다 :)

## 📄 Step 3: Making Arguments

> Well done, dear chap! Well done indeed.
> I have but one more file for you. It contains the many motions I have seen in cases involving my clients. I must admit, I'd grown quite weary while jotting down those motions. It is missing TypeScript types, and many elements in the motions array have typos in their data.
> The tricky thing is, there are a few different types of motions that can be filed. There should be some kind of discriminating indicator property on the types to distinguish between:

- Status: allowed, denied, and pending. Within those types:
  - Allowed: it may also indicate how many hours it spent in deliberation
  - Denied: it may also indicate how many hours it spent in deliberation, and whether it annoyed the justice
  - Pending: it may also indicate how many hours it's estimated to spent in deliberation
- Step: post-trial and pre-trial. Within those types:
  - Pre-trial: I only noted dismissals, suppressions, and venue changes
  - Post-trial: I only noted acquittals, corrections, and new trials

**▪ 아주 잘했군, 녀석. 나 정말 피곤하다... 내 클라이언트 사건들에서 사라진 타입을 찾고 오타 좀 고쳐주라.. 여기 구별하기 위한 프로퍼티들이 있어.(망해버린 번역입니다.)**

## 📄 문제 코드

배열 motions 요소를 이루는 객체의 타입을 지정해주어야 하네요.

```js
// Write your types here! ✨

export const motions: Motion[] = [
  {
    annoyedJustice: true,
    classification: "acquittal",
    deliberationHours: 1,
    from: "defendant",
    reason: "The heretofore document had dried ink on it.",
    status: "denied",
    step: "post-trial",
  },
  {
    annoyedJustice: true,
    classification: "correction",
    deliberationHours: 2.5,
    from: "plaintiff",
    reason: "The tenant has ninety days to vacate.",
    status: "denied",
    step: "post-trial",
  },
  {
    classification: "suppress",
    deliberationHours: 4,
    from: "plaintiff",
    reason: "Frank was never allowed in the house.",
    status: "allowed",
    step: "pre-trial",
  },
  {
    classification: "new trial",
    estimatedDeliberationHours: 3,
    from: "defendant",
    reason: "The duel's been accepted. There's no backing out. That's the law.",
    status: "pending",
    step: "post-trial",
  },
  {
    annoyedJustice: false,
    classification: "dismiss",
    deliberationHours: 0.5,
    from: "plaintiff",
    reason:
      "It seems like you have a tenuous grasp on the English language in general.",
    status: "denied",
    step: "pre-trial",
  },
  {
    annoyedJustice: true,
    classification: "correction",
    deliberationHours: 1.5,
    from: "defendant",
    reason: "Fillibuster?",
    status: "denied",
    step: "post-trial",
  },
  {
    annoyedJustice: true,
    classification: "venue",
    deliberationHours: 0.25,
    from: "defendant",
    reason: "A time was never specified for the duel.",
    status: "denied",
    step: "pre-trial",
  },
  {
    annoyedJustice: true,
    classification: "correction",
    deliberationHours: 5,
    from: "plaintiff",
    reason: "He's making a few good points!",
    status: "denied",
    step: "post-trial",
  },
];
```

## 📄 풀이 과정

이번 문제는 제 영어 실력에 한계가 느껴졌습니다.

주어진 지문을 보고 문제가 잘 이해가 가지 않았습니다.

처음으로 못풀었던 문제입니다..

우선 객체의 공통된 속성들을 가지고 베이스 타입을 만들어줍니다.

```ts
export type MotionBase = {
  from: "defendant" | "plaintiff";
  reason: string;
};
```

이후, 지문에서 주어진 요구사항에 맞게 두가지 타입을 분류합니다.

```ts
export type PreTrialMotion = MotionBase & {
  classification: "dismiss" | "suppress" | "venue";
  step: "pre-trial";
};

export type PostTrialMotion = MotionBase & {
  classification: "acquittal" | "correction" | "new trial";
  step: "post-trial";
};
```

이렇게 재판 유형에 따른 타입 TrialMotion을 유니언 타입으로 만들어주었습니다.

```ts
export type TrialMotion = PostTrialMotion | PreTrialMotion;
```

이제 각 상태에 맞게 타입을 분류하고 유니언 타입으로 합쳐 최종 타입을 생성합니다.

```ts
export type AllowedMotion = TrialMotion & {
  deliberationHours: number;
  status: "allowed";
};

export type DeniedMotion = TrialMotion & {
  annoyedJustice: boolean;
  deliberationHours: number;
  status: "denied";
};

export type PendingMotion = TrialMotion & {
  estimatedDeliberationHours: number;
  status: "pending";
};

export type Motion = AllowedMotion | DeniedMotion | PendingMotion;
```

영어 공부를 좀 더 해야겠네요.

정답 코드를 보기 전까진 어떻게 해야할지 사실 감이 잘 잡히지 않았습니다.

역시 영어는 꼭 공부해야겠습니다.

## 문제 출처

- [learning typescript](https://www.learningtypescript.com)
