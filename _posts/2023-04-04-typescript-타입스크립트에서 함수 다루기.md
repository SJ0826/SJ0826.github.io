---
title: "타입스크립트에서 함수 다루기"
excerpt: "타입스크립트에서 함수를 사용하는 방법"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["함수"]
header:
  teaser: assets\image\TS-logo.PNG
last_modified_at: 2023-04-04T08:06:00-05:00
---

타입스크립트에서 함수를 사용할때 변수를 사용할때와 마찬가지로 타입을 지정해주어야 합니다.

함수에서는 크게 매개변수와 반환값에 타입을 지정합니다.

## 📄 함수 매개변수

함수의 매개변수에 타입을 지정하면 그 매개변수는 **필수 매개변수**가 됩니다.

그렇다면 반대로 **선택적 매개변수**는 어떻게 지정할까요?

타입 애너테이션(`:`)앞에 `?`를 붙여주면 됩니다.

```ts
function announceSong(song: string, singer?: string) {
  console.log(`Song: ${song}`);
}
```

`announceSong`함수의 매개변수인 `singer`은 선택적 매개변수가 되었습니다.

singer의 구체적인 타입은 `string | undefined`입니다.

이렇게 생성된 선택적 매개변수는 호출될때 생략해도 에러가 발생하지 않습니다.

### ▪ 나머지 매개변수

나머지 매개변수는 매개변수의 개수를 특정할 수 없을 때 사용합니다.

스프레드 연산자(`...`)를 사용해 배열로 나타납니다.

```js
function singAllTheSongs(singer: string, ...song: string[]) {
  for (const song of songs) {
    console.log(`${song}, by ${singer}`);
  }
}

singAllTheSongs("Day6"); // ok
singAllTheSongs("Day6", "예뻤어", "한 페이지가 될 수 있게", "때려쳐"); // ok
```

## 📄 반환 타입

타입스크립트는 함수의 반환 타입도 유추할 수 있습니다.

따라서 타입스크립트가 명확하게 타입을 유추할 수 있는 상황이라면, 타입을 명시적으로 지정하는 것은 중복된 타입 지정이므로 지양하는 것이 좋습니다.

```ts
function(): 반환 타입 {
  ...
}

const name = (): 반환 타입 => {
  ...
}
```

## 📄 함수 타입

함수 타입은 함수를 매개변수에 값으로 넘겨줘야 하는 상황에 지정해야 합니다.

마찬가지로 타입이 맞지 않으면 에러가 발생합니다.

```ts
functions runOnSongs(getSonAt: (index: number) => string){
  console.log(getSongAt('hello')); // Error.
}
```

## 📄 그 외 반환 타입

### ▪ void

반환 타입이 `void`인 경우는 다음과 같습니다.

- return문이 없는 함수인 경우
- 값을 반환하지 않는 return문인 경우

반환 타입이 void인 경우 undefined와 잘 구분해야 합니다.

반환 타입이 void인 경우는 반환 타입이 무시된다는 것을 의미하고 undefined는 반환되는 리터럴값이기 때문입니다.

```ts
function returnVoid(){
  return;
}

let lazyValue: string | undefined;

lazyValue = returnVoid()\
// Error: Type 'void' is not assignable to type 'string | undefined'
```

### ▪ never

never 반환 타입은 의도적으로 오류를 발생시킵니다.

따라서 에러를 제어하는 경우에 사용합니다.

```ts
function fail(message: string): never {
  throw new Error(`Invariant failure: ${message}`);
}

function workWithUnasafeParam(param: unknown) {
  if (typeof param !== "string") {
    fail(`param should be a string, not ${typeof param}`);
  }

  param.toUpperCase();
}
```

## 참고

- learning typescript
