---
title: "[Leaning Typescript] system of a clown"
excerpt: "책 learning typescript 2장 타입 시스템 실습 프로젝트 입니다."
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["learning typescript", "type system", "clowning around"]
last_modified_at: 2023-03-23T08:06:00-05:00
---

# 🤡 system of a clown

> 🎈 Help me, please!<br/>
> I planned an elaborate clown-themed surprise party for my best friend. The whole event was planned using a few files of TypeScript code I'd written.<br/>
> My friend somehow caught wind of the party and enlisted the clowns' help to vandalize the program. Not only did the clowns remove or make incorrect my TypeScript type annotations, they introduced subtle bugs by subtly changing some of the values.<br/>
> Could you please add correct type annotations in my files and fix any bugs detected by TypeScript? You're my surprise clown celebration's last hope! 🤡

🎈 도와주라주!<br/>
내 베프를 위해 삐에로 컨셉의 깜짝 파티를 준비했어.
모든 이벤트가 내가 쓴 몇개의 타입스크립트 파일로 준비되어 있지.<br/>
근데 내 친구가 어떻게든 정보를 들어가지고 프로그램을 파괴하기 위해 삐에로들한테 도움을 요청한거야!
삐에로들은 내 타입스크립트 애너테이션을 지우고 망가뜨리는것 뿐만 아니라, 일부 값들을 교묘하게 바꿔버리며 버그마저 도입해버렸어.<br/>
내 파일에 올바른 애너테이션을 추가하고 버그를 잡아줄 수 있어? 너는 내 깜짝 삐에로 파티의 마지막 희망이야! 🤡

> 타입 애너테이션 (type annotation)? 타입에 주석을 다는 것으로 변수나 함수의 타입을 설정하는 것.<br/> ex) let name: string = 'sujin'

## 🎈 Step 1: Clowning Around

> The first area of code I'll need you to fix is the activity assignment engine. It repeatedly creates groups of size 5-10 guests. Each group is directed to go to an activity, which can hold up to a certain number of them at a time. <br/>
> It looks like the clowns didn't change too much on this one. They mostly just removed a few type annotations and changed one value. <br/>
> Could you please add back missing type annotations to avoid evolving or implicit anys, and fix the wrong value?

**▪ 요약: 액티비티 할당 엔진에서 타입 애너테이션을 추가하고 오류난 부분을 고쳐라!**

### 📃 문제 코드

```ts
let remainingGuests = 20;
while (true) {
  // Each group of guests will be size 5-10
  const guestsToAssign = Math.floor(Math.random() * 5) + 5;
  let activity; // Those were some nice type annotations you had here!
  let capacity; // It'd be a shame if we ... *erased* them! 😈
  let requiresSupplies;
  switch (Math.floor(Math.random() * 5)) {
    case 0:
      activity = "balloon animals";
      capacity = 5;
      requiresSupplies = true;
      break;
    case 1:
      activity = "face painting";
      capacity = "1";
      requiresSupplies = true;
      break;
    case 2:
      activity = "juggling";
      capacity = 3;
      requiresSupplies = true;
      break;
    default:
      activity = "dancing";
      capacity = 10;
      break;
  }
  console.log(`${guestsToAssign} of us will enjoy ${activity}.`);
  for (let i = 0; i < guestsToAssign; i += capacity) {
    console.log(`\t${capacity} will enter the ${activity} activity.`);
  }
  remainingGuests -= guestsToAssign;
  if (remainingGuests < 0) {
    break;
  }
  console.log(`We have ${remainingGuests} remaining guests to entertain.\n`);
}
console.log("\nAll done!");
export {};
```

문제로 나온 이 코드를 tsc명령어를 이용해 컴파일하면 다음과 같은 오류가 발생합니다.

![image](https://user-images.githubusercontent.com/56298540/227079353-886f9cad-aacd-4b8d-9a5c-08c359f7481b.png)

산술 연산자에 `string`값이 할당되고 있는 상황입니다.

### 📃 풀이 과정

오류가 난 부분을 보니, 산술 연산자에 `string`값이 할당되어 컴파일과정에서 막혀버렸습니다.

해당 변수 `capacity`를 찾습니다.

switch문안에서 문자열로 되어 있는 `capacity`를 찾아 숫자로 고칩니다.

```ts
 case 1:
      activity = "face painting";
      // capacity = "1";
      capacity = 1; // 수정
      requiresSupplies = true;
      break;
```

요구사항대로 변수가 선언된 부분에서 타입 애너테이션도 추가합니다.

```ts
let activity; // Those were some nice type annotations you had here!
let capacity; // It'd be a shame if we ... *erased* them! 😈
let requiresSupplies;
```

✔ 수정된 전체 코드

```ts
let remainingGuests = 20;

while (true) {
  // Each group of guests will be size 5-10
  const guestsToAssign = Math.floor(Math.random() * 5) + 5;
  let activity: string; // Those were some nice type annotations you had here!
  let capacity: number; // It'd be a shame if we ... *erased* them! 😈
  let requiresSupplies: boolean;

  switch (Math.floor(Math.random() * 5)) {
    case 0:
      activity = "balloon animals";
      capacity = 5;
      requiresSupplies = true;
      break;
    case 1:
      activity = "face painting";
      capacity = 1;
      requiresSupplies = true;
      break;
    case 2:
      activity = "juggling";
      capacity = 3;
      requiresSupplies = true;
      break;
    default:
      activity = "dancing";
      capacity = 10;
      break;
  }

  console.log(`${guestsToAssign} of us will enjoy ${activity}.`);

  for (let i = 0; i < guestsToAssign; i += capacity) {
    console.log(`\t${capacity} will enter the ${activity} activity.`);
  }

  remainingGuests -= guestsToAssign;
  if (remainingGuests < 0) {
    break;
  }

  console.log(`We have ${remainingGuests} remaining guests to entertain.\n`);
}

console.log("\nAll done!");

export {};
```

## 🎈 Step 2: Clown Availability

> The second and -thank heavens- final area of code I'll need you to fix is my clown assignment planner.
> I use this to print which clowns will be partying with which guests. <br/>
> Oh, and they introduced several unsettling clown puns in comments.<br/>
> It's because of those puns that I can't fix the code myself.<br/>
> The clowns again changed a few things around, but nothing more than an incorrect type annotation or different value for a variable.<br/>
> Could you please fix up the file to have no TypeScript complaints?
