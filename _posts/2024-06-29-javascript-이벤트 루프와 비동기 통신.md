---
title: "[JS] 이벤트 루프와 비동기 통신"
excerpt: "자바스크립트가 비동기 통신을 하는 방법"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["비동기", "이벤트루프"]
last_modified_at: 2024-06-29T08:06:00-05:00
---

## 📝 싱글 스레드 자바스크립트

자바스크립트는 **싱글 스레드 언어**다.

하나의 프로세스안에 여러개의 스레드가 있을 수 있다. 하지만 자바스크립트는 싱글 스레드 언어이므로 하나의 스레드만 존재한다.

여러개의 스레드가 있다면 메모리를 공유해 동시에 여러작업이 가능하지만 하나의 스레드만 가지고 있는 자바스크립트 엔진은 작업을 병렬로 처리할 수 없다.

자바스크립트 코드는 한줄한줄 순서대로 처리되며 하나의 작업이 끝나기전까지 다음 작업이 실행되지 않는다.

만약 하나의 작업이 너무 오래걸리면 뒤에 있는 작업이 실행되지 않는데, 이는 **Run-to-Completion**이라고 불리는 자바스크립트의 특징이다.

* 프로세스
  * 메모리를 사용하는 독립적인 실행 단위
  * 다른 프로세스와 자원을 공유하지 않는다.
* 스레드
  * 하나의 프로세스 안에 존재하는 작은 실행 단위
  * 스레드끼리 자원을 공유할 수 있다.
  * 하나의 프로세스가 병렬로 작업을 처리할 수 있게 한다.

<br />

### ◆ 메모리 힙과 콜 스택  | 자바스크립트가 작업을 수행하는 방법

■ 메모리 힙 (Memory Heap)
- 선언된 변수들의 메모리 할당이 이루어진다.
- 비구조적으로 데이터가 저장된다.

■ 콜 스택 (Call Stack)
- 함수들이 실행 순서에 따라 쌓인다.
- LIFO(선입후출)의 구조로 진행된다.

![image](/assets/image/posts/js-event-loop.png)

<br />

## 📝 이벤트 루프 | 자바스크립트가 비동기 통신을 하는 방법

```ts
function bar(){
    console.log('bar')
}

function baz(){
    console.log('baz')
}

function foo(){
    console.log('foo')
    setTimeout(bar(), 0)
    baz()
}

foo()
```

* 출력 순서: foo → baz → bar

bar의 실행을 기다리지 않고 다음줄인 baz가 실행된 이유는 setTimeout 함수는 바로 콜스택에 들어가는 것이아니라 태스크큐에 들어가기 때문이다.
* 태스크큐에 저장되는 작업들: setTimeout, setInterval, setImmediate

<br />

### ◆ 브라우저 이벤트 동작 순서
![image](/assets/image/posts/js-event-loop-2.png)

1. **콜스택** 실행
2. 콜스택이 비어있으면 **마이크로 태스크 큐** 확인. 큐가 빌 때까지 모든 마이크로 태스크 실행
  - 프로미스의 `then`이나 `catch`, `MutationObserver` 등
3. **태스크 큐** 확인. 큐가 빌 때까지 모든 태스크 실행
  - `setTimeout`, `setInterval`, I/O 작업, DOM 이벤트 등
4. **Request Animation Frame**에서 대기중인 콜백 실행
  - Request Animation Frame: 애니메이션을 효율적으로 실행하기 위해 제공하는 함수로 브라우저가 다음 리페인트(Repaint) 전에 지정된 콜백 함수를 실행하도록 예약
5. 모든 작업이 완료되면 브라우저는 **렌더링**을 수행해 화면을 업데이트한다.

<br />

### ◆ 함수가 마이크로 태스크 큐에 저장될 경우

1. 콜 스택에서 프로미스를 만들고 프로미스에 등록된 콜백, 즉 프로미스가 다 수행이 되고나면 실행되는 `then`과 `mutation observer`라는 웹 API에 등록된 콜백이 마이크로 큐에 들어온다.
2. 이벤트루프는 마이크로 태스크 큐에 있는 프로미스 then 콜백을 비어있는 콜스택으로 가져간다.
3. 프로미스 `then`이 끝나면 `mutation obsever`를 콜 스택으로 가져간다.


**⭐️ 포인트 1** 이 과정에서 마이크로 태스크 큐에 새로운 함수가 들어온다면, 나중에 들어온 함수도 모두 끝날때까지 계속 콜스택으로 가지고 와서 수행한다. <br />
**⭐️ 포인트 2** 마이크로 태스크 큐가 텅텅비면 테스크 큐로 넘어간다.(태스크 큐와의 차이점: 태스크 큐에서는 아이템 하나만 콜스택으로 보내고 기다린다.)
 
```ts
function handleClick() {
  console.log("handleClick");
  Promise.resolve(0) // promise 의 콜백은 Microtask que를 이용한다.
    .then(() => {
      console.log("then");
      handleClick();
    });
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
  handleClick();
});
```

이벤트루프는 마이크로태스크 큐에 등록된 콜백이 모두 빌때까지 기다리기때문에 이벤트루프가 멈춰 브라우저가 반응하지 않는다.

<br />

### ◆ 함수가 태스크 큐에 저장될 경우

1. 브라우저에서 지정된 이벤트가 발생한다.
2. 웹 API는 콜백함수를 태스크 큐에 넣어준다.
3. 이벤트 루프는 계속 관찰을 하다가 콜 스택에 할일이 남아 있으면 콜스택이 비워질 떄까지 기다린다.
4. 콜스택이 비어서 자바스크립트 엔진이 더이상 일을 하지 않을 때 태스크 큐에 있는 함수를 콜 스택으로 가져온다.
5. 자바스크립트 엔진이 콜 스택에 들어온 콜백함수를 실행한다.

**⭐️ 포인트 1** 이벤트 루프는 콜스택에 있는 함수를 **하나씩만** 가져온다.

```ts
function handleClick() {
  console.log("handleClick");
  setTimeout(() => {
    console.log("setTimeout");
    handleClick(); // 콜스택에 무한으로 추가되어 동일한 내용의 이벤트루프가 반복된다.
  }, 0);
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
  handleClick();
});
```
콜백함수 내에서 다시 콜백함수를 호출하기 때문에 Task Queue에 무한으로 함수가 추가된다.

<br />

### ◆ 함수가 Request Animation Frame Queue에 저장될 경우

브라우저를 다시 업데이트 할 때는 render안의 request Animation Frame 에 등록된 콜백들을 거친 후 렌더 트리를 만들고 그 트리를 이용해서 레이아웃을 계산한 뒤에 페인트를 통해서 브라우저에 업데이트를 한 다음에 이벤트루프가 재개된다.

```ts
const button = document.querySelector("button");

button.addEventListener("click", () => {
  requestAnimationFrame(() => {
    // 렌더링이 되기 전 브라우저가 콜백함수를 실행하는 것을 보장해준다.
    document.body.style.backgroundColor = "beige";
  });
  requestAnimationFrame(() => {
    document.body.style.backgroundColor = "orange";
  });
  requestAnimationFrame(() => {
    document.body.style.backgroundColor = "red";
  });
});
```

큐는 FIFO의 구조를 가지고 있기 때문에 마지막에 들어온 코드가 가장 먼저 적용되기 때문에 최종적으로 빨간색이 적용된 상태에서 렌더트리가 만들어지고 브라우저에 표기가 완료된다.

## 출처

- 드림코딩
- 모던 리액트 딥다이브
- 모던 자바스크립트 딥다이브
