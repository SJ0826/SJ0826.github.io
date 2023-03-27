---
title: "[Leaning Typescript 🦜] Primitive Cooking"
excerpt: "책 learning typescript 3장 유니언과 리터럴 실습 프로젝트 입니다."
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["learning typescript", "Primitive Cooking", "유니언 타입", "리터럴 타입"]
last_modified_at: 2023-03-27T08:06:00-05:00
header:
  teaser: assets\image\learning typescript.PNG
---

# 🥗 Primitive Cooking

> Those pesky Java programmers are at it again!<br/>
> I wrote a few functions for a friend to help arrange meals when I have guests over. The friend worked with their enterprise application development team to "improve" the code. Next thing I know, they've replaced all my TypeScript-y literal and union types with plain old primitive types.<br/>
> Those Java fans are perfectly good developers -and lovely people- but we don't see eye-to-eye on type systems. Now TypeScript is reporting type errors on my code. Could you please correct the type annotations in my files -- and maybe a couple bugs the improved types helped TypeScript find?

성가신 자바 프로그래머들이 또 시작이야!<br/>
나는 친구를 위해 손님들이 왔을 때 식사 준비를 도와줄 수 있도록 몇개의 기능을 작성했어. 친구는 코드를 ✌향상시키기 위해✌ 기업 애플리케이션 개발팀과 일해. 다음으로 내가 아는건, 그 사람들이 내 타입스크립트 코드의 리터럴과 유니언 타입을 오래된 순수 원시 타입으로 바꿨다는 거야.(읽기만 해도 열받음)<br/>
이 자바 팬들은 완전 좋은 개발자들이야(게다가 사랑스러움). 하지만 우린(자바와 자바스크립트) 타입 시스템이 일치하지 않잖아. 지금 타입스크립트가 내 코드에서 타입 에러들을 보고하고 있거든. 내 파일들에서 타입 애너테이션들을 올바르게 고쳐줄래?

## 🍽 Step 1: Ingredients

> The first area of code I'll need you to fix is my ingredients planner. I use this to print what kind of salad greens and dressings to use for meals.<br/>
> Again, the runtime code is working fine. It's just the type annotations you'll need to correct.

**▪ 요약: 샐러드 야채와 드레싱 재료 플래너의 타입 애너테이션을 고쳐라!**

### 📄 문제 코드

```ts
// Please correct any type annotation problems here! ✨
let arugula: number;
let dressing: string;
let lettuce: number;
let mealDate: string;

arugula = 2;
dressing = "honey dijon";
lettuce = undefined;
mealDate = new Date("September 13, 2021");

console.log(`We're starting on ${mealDate} with a dressing of ${dressing}.`);

if (arugula) {
  console.log(`There are ${arugula} arugula serving(s) for this first meal.`);
}

if (lettuce) {
  console.log(`There are ${lettuce} lettuce serving(s) for this first meal.`);
}

arugula = undefined;
dressing = "balsamic vinaigrette";
lettuce = 1;
mealDate = new Date("March 13, 2022");

console.log(`Next up, a ${mealDate} meal with a dressing of ${dressing}.`);

if (arugula) {
  console.log(`This time, there are ${arugula} arugula serving(s).`);
}

if (lettuce) {
  console.log(`This time, there are ${lettuce} lettuce serving(s).`);
}

export {};
```

코드를 컴파일 하면 다음과 같은 에러가 발생합니다.

![image](https://user-images.githubusercontent.com/56298540/227881136-7f53dfe4-79fd-4351-bc02-5ae9af8023ec.png)

### 📄 풀이 과정

에러 메시지를 보고 변수 선언부에서 유니언 타입으로 타입을 확장해주었습니다.

```ts
let arugula: number | undefined;
let dressing: string;
let lettuce: number | undefined;
let mealDate: string | Date;
```

정답 코드를 보니 고쳐야할 점이 있습니다.

```ts
let mealDate: Date;
```

변수 `mealDate`는 하나의 타입만 사용합니다.<br/>
따라서 유니언 타입을 통해 타입을 확장하는게 아니라, 타입 애너테이션에서 타입을 수정해주면 되는 것이었습니다.<br/>
낚였습니다.

## 🍽 Step 2: Recipes

> Those salad ingredients are looking delectable, thank you! Next up is my list of favorite recipes.<br />
> It looks like these seem to pass the TypeScript compiler fine as-is. However, there's a catch: I want to make sure future recipes keep to the same difficulty and group types. Could you please use unions of literal types for them? Both should only have three possible values.<br/>
> This time, the runtime code is mostly working fine. Except I think I made a typo in one of the group values? You'll need to fix that. Otherwise it's just the type annotations you'll need to correct.

**▪ 요약: 샐러드는 이제 되었으니, 미래의 요리법(?)이 동일한 난이도와 그룹 타입을 갖도록 리터럴 유니언 타입을 사용해라!**

- 작성되는 유니언 타입은 세개의 타입으로 구성됩니다.

### 📄 문제 코드

이번 문제는 문제 코드를 컴파일해도 에러가 발생하지 않습니다.

목적은 에러 해결이 아닌, 유니언 타입을 사용한 코드 리팩토링입니다.

```ts
// Please clarify any overly wide (permissive) type annotations here! ✨
let difficulty: number;
let group: string;
let title: string;

// Start with something quick and painless to prepare...
difficulty = 1;
group = "appetizer";
title = "Raspberry Vinaigrette Salad";
console.log(`[${group}] ${title}: ${difficulty}/3 difficulty`);

// Next up, a nice hearty dish to center the meal...
difficulty = 2;
group = "entree";
title = "Cauliflower Steaks";
console.log(`[${group}] ${title}: ${difficulty}/3 difficulty`);

// Make a real impact with fancy delectable desserts...
difficulty = 3;
group = "dessert";
title = "Coconut Chocolate Ganache";
console.log(`[${group}] ${title}: ${difficulty}/3 difficulty`);

// Send everyone off with a nice closer.
difficulty = 1;
group = "desert";
title = "Biscuits and Coffee";
console.log(`[${group}] ${title}: ${difficulty}/3 difficulty`);

export {};
```

### 📄 풀이 과정

정해진 값을 사용하는 변수는 `difficulty`와 `group`으로 보입니다.

이 변수들이 사용하는 값을 리터럴 타입으로 사용해서 유니언 타입으로 타입을 구체화 시켜보겠습니다.

```ts
let difficulty: 1 | 2 | 3;
let group: "appetizer" | "entree" | "dessert";
let title: string;
```

유니언 타입을 작성하다보니 문제 제공자의 오타가 보입니다.

설마 레시피에 'desert(사막)`를 뜻하는 단어를 사용하진 않을 것 같은데요.

정답 코드에는 `dessert`로 올바르게 작성되어 있습니다.

너무 사소한 실수라 해당 레포에 pr를 날려볼까 고민하다 어떤 사람은 `a`하나로도 pr를 작성하길래 pr를 작성해보기로 결심했습니다.

아니면 조슈아 골든버그씨가 말해주겠죠.

🖇 [인생 처음 오픈소스 PR](https://github.com/LearningTypeScript/projects/pull/259)

## 🍽 Step3: Seating

> You're doing wonderfully, my friend. I can't wait to invite you to my next fancy dinner party.<br/>
> Speaking of which, I need to properly type the program to randomize invitations and seat assignments. My friends can be kind of childish -they're babies, really- and are very picky about seating.<br/>
> I also very much like what you did with the string literal union types in the last step. Could you please avoid using the string type altogether in this one? Just use literal types.<br/>
> Oh, and I think there's a typo in one of the names here too.

**▪ 요약: 저번 step에서 네가 만든 string 리터럴 유니언 타입 맘에 들었어. 이번엔 string타입을 사용하지말고 리터럴 타입만 사용해서 타입을 완성시켜봐라!**

### 📄 문제 코드

```ts
// Please fill in any missing type annotations here...
const headOfTable = "Me!";
let adjacentLeft;
let adjacentRight;
let furtherLeft;
let furtherRight;

// I always invite Susie and Tommy! ♥
if (Math.random() > 0.5) {
  adjacentLeft = "Susie";
  adjacentRight = "Tommy";
} else {
  adjacentLeft = "Tommy";
  adjacentRight = "Susie";
}

// I invite Angelica about half of the time. We're not as close as Susie and Tommy. It's a long story.
// I try to fill `furtherLeft` first...
if (Math.random() > 0.5) {
  furtherLeft = "Angelica";
}

// Same with Chuckie. I like them, but do I *really* like hanging out with them? Only sometimes.
// ...then after that `furtherRight`
if (Math.random() > 0.5) {
  if (furtherLeft) {
    furtherRight = "Chuckie";
  } else {
    furtherLeft = "Chuckie";
  }
}

// If I invited Angelica but not Chuckie, I'll invite Kimi. They get along well with Angelica but not Chuckie.
if (furtherLeft === "Angelica" && furtherRight !== "Chuckie") {
  furtherRight = "Kimi";
}

// If I invited Chuckie but not Angelica, I'll invite Timmy. They get along well with Chuckie but not Angelica.
if (furtherLeft === "Chuckie") {
  furtherRight = "Timmy";
}

console.log(`At the head of the table is... ${headOfTable}`);

console.log(`Adjacent to the left is: ${adjacentLeft}`);
console.log(`Adjacent to the right is: ${adjacentRight}`);

console.log(`Further down on the left is: ${adjacentLeft ?? "nobody"}`);
console.log(`Further down on the right is: ${adjacentRight ?? "nobody"}`);

export {};
```

변수 선언부를 보니 초깃값이 설정되어 있지 않아, 타입이 `any`로 추론되고 있습니다.

변수 선언부에서 리터럴 타입으로 각각 타입을 설정합니다.

```ts
let adjacentLeft: "Susie" | "Tommy";
let adjacentRight: "Susie" | "Tommy";
let furtherLeft: "Angelica" | "Chuckie";
let furtherRight: "Kimi" | "Timmy" | "Chuckie";
```

![image](https://user-images.githubusercontent.com/56298540/227911602-a53012c3-99c1-47ca-8801-68d04b9dc5bd.png)

값이 할당되기 전에 사용되어 에러를 발생시킵니다.

값이 할당되지 않은 변수를 위해 `undefined` 타입을 명시적으로 추가해주었습니다.

```ts
let furtherLeft: "Angelica" | "Chuckie" | undefined;
let furtherRight: "Kimi" | "Timmy" | "Chuckie" | undefined;
```
