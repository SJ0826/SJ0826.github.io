---
title: "[Leaning Typescript 🦜] system of a clown"
excerpt: "책 learning typescript 2장 타입 시스템 실습 프로젝트 입니다."
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
      "type system",
      "clowning around",
    ]
last_modified_at: 2023-03-23T08:06:00-05:00
header:
  teaser: assets\image\learning typescript.PNG
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
> <<<<<<< HEAD
> Could you please fix up the file to have no TypeScript complaints? x
> =======
> Could you please fix up the file to have no TypeScript complaints?

**▪ 요약: 고마운데 일하나 더 해라! 광대 배정 플래너에서 오류를 수정해라!**

### 📄 문제 코드

```ts
// Note: I'm planning on inviting 20 guests in total.
// Some clowns can only handle a certain number of guests.
let guestCount: boolean = 20;
let clownsCount = "zilch!";

let krustyAvailability = true;
let ronaldAvailability = true;
let pennywiseAvailability = true;

let matchingsDescription: any = "";
let lastClown;

do {
  clownsCount += 1;

  // Krusty says: I had a one-man show on Broadway...
  // That's who showed up, one man!
  if (krustyAvailability) {
    guestCount -= 10;
    krustyAvailability = false;
    matchingsDescription += "Krusty will handle the first ten guests.\n";
    lastClown = "Krusty";
    continue;
  }

  // Ronald says: McDonald's donated a large set of computers to a school...
  // They were all Big Macs!
  if (ronaldAvailability) {
    guestCount -= 5;
    ronaldAvailability = false;
    matchingsDescription += "Ronald will handle the next five guests.\n";
    lastClown = "Ronald";
    continue;
  }

  // Pennywise asks: what's a sewer's favorite data type?
  // Pennywise answers: Floats!
  if (pennywiseAvailability) {
    pennywiseAvailability = false;
    matchingsDescription += "Pennywise w̺̞̠i̢͇͙l͇̞l͇͍̘ c͓͕̝o̡̠̞n̼̝s̡̞͎u͉̝͔m͚̪̞e̢͚̝ y̴̡̡͕͌̿́ó̸̢͇͚̾̕u̸̡̡͎͒͛r̸͕͓͖̈́͆͒ s̵̺̘̪͒͆̓o̵̡͚̟̽͆̚u̵̠͖̓͐͝l̸͓̘͇̐̓̚s̸̺͎̽̈́͆.";
    lastClown = "Pennywise";
    continue;
  }

  throw new Error(`Oh no! We're out of clowns!`);
} while (guestCount > 0);

if (clownsCount > 2) {
  console.log("We've got a lot of clowns coming!");
}

if (matchingsDescription.length()) {
  console.log(`There will be ${clownsCount} clowns!\n`);
  clownsole.log(matchingsDescription);
  console.log(`The last clown is: ${lastClown.toUpperCase()}!`);
} else {
  console.log("Nobody gets a clown. Terrible party. Goodbye.");
}

export {};
```

1번 문제보다 많은 오류가 발생했습니다.

![image](https://user-images.githubusercontent.com/56298540/227455072-5aa043a8-f1b9-430b-9b62-249b1050c3b6.png)

### 📄 풀이과정

<h4>▪ Type 'number' is not assignable to type 'boolean'.</h4>

`guestCount`의 타입이 number인데 boolean으로 타입 애너테이션 설정이 잘못되어 있습니다.

```ts
// 문제 코드
let guestCount: boolean = 20;

// 수정된 코드
let guestCount: number = 20;
```

<h4> ▪  Operator '>' cannot be applied types 'string' and 'number'.</h4>

`clownCount`에 산술연산자를 사용하고 있는데 선언부에 보면 문자열을 할당하고 있습니다.

`zilch`가 무슨 뜻인지 찾아보니 `아무것도 없음`이라는 뜻이라 값을 할당하지 않았습니다.

`let`으로 선언되었기 때문에 가능합니다.

```ts
// 문제 코드
let clownsCount = "zilch!";
...
if (clownsCount > 2) {
	console.log("We've got a lot of clowns coming!");
}

// 수정된 코드
let clownCount;
```

![image](https://user-images.githubusercontent.com/56298540/227459790-39d64e84-a7a5-4e18-bbbf-d66322f0d4cc.png)

새로운 에러를 만들며 해결되지 않았습니다.

값이 할당되기 전에 산술연산자를 적용할 수 없기 때문입니다.

초기값으로 `0`을 할당해주었지만, 뭔가 답이 아닐것만 같은 느낌이 드네요.

```ts
// 수정된 코드
let clownCount: number = 0;
```

<h4>▪ Cannot find name 'clownsole'. Did 
you mean 'console'?</h4>

`clownsole`은 처음 들어봅니다. 문제가 저를 바보로 아나봅니다. 재밌네요.

```ts
// 문제 코드
clownsole.log(matchingsDescription);

// 수정된 코드
let clownCount: number = 0;
console.log(matchingsDescription);
```

끝!

```ts
Found 0 errors. Watching for file changes.
```

📄 고쳐야 할 점

```ts
let guestCount = 20;
let clownsCount = 0;
```

솔루션 코드를 보니 타입 애너테이션이 빠져있습니다.

책을 읽을 때 값을 할당할 경우 자동으로 타입추론이 되기 때문에 타입 애너테이션을 설정하면 중복으로 타입설정과정이 진행되는 것과 마찬가지라 불필요한 과정이라고 한 기억이 납니다.

**✔ 값을 할당해 타입추론이 될 경우에는, 타입 애너테이션을 생략하자**

그래도 `0`을 할당하는게 맞았네요 🎉

---

출처

- [learning typescript](https://www.learningtypescript.com/the-type-system/)
