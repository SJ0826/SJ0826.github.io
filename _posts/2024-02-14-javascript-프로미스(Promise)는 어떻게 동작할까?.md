---
title: "[JS] 프로미스(Promise)는 어떻게 동작할까?"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "Promise", "비동기"]
last_modified_at: 2024-02-14T08:06:00-05:00
---

## 📄 Promise란?

자바스크립트를 사용한 프로젝트에서 데이터를 페칭한다면 데이터를 받아오기도 전에 마치 데이터를 받아온 것처럼 화면에 데이터가 표시되고 에러가 발생합니다.

이는 **자바스크립트의 이벤트루프**가 동작하여 **동기적으로 코드가 실행**되기 때문입니다.

필요한 데이터를 모두 받아온 후 나머지 로직이 실행되게 만들고 싶을 때, 즉 로직을 **비동기로 동작하게 할 때 Promise를 사용**합니다.

Promise는 자바스크립트 **ES6**부터 추가된 내장 객체로 비교적 최근에 생성되었습니다.

## 📄 promise 처리 흐름

### 1. 프로미스가 생성자를 통해 Pending(대기) 상태로 생성된다.

```js
const myPromise = new Promise((resolve, reject) => {}); //pending
```

### 2. Promise의 executor(resolve, reject)함수의 인자를 통해 순서를 제어한다.

<span style="color:#357ABD">resolve()</span>가 실행되는 경우 → 프로미스가 <span style="color:#357ABD">fulfilled(이행)</span> 상태가 됩니다.

```ts
const myPromise = new Promise((resolve, reject) => {
  // pending상태
  // ... 비동기적인 상황이 되는 처리가 벌어짐.
  resolve(); // fulfilled
});
```

<span style="color:#FF6B6B">reject()</span>가 실행되는 경우 → 프로미스가 <span style="color:#FF6B6B">rejected(거부)</span> 상태가 됩니다.

```ts
const myPromise = new Promise((resolve, reject) => {
  // pending상태
  reject(); //rejected
});
```
<br />

프로미스가 실행되는 조건에 따라 이후 실행되는 로직을 결정할 수 있습니다.

- <span style="color:#357ABD">resolve()</span>가 실행되는 경우 → <span style="color:#357ABD">fulfilled</span> 상태가 되어 <span style="color:#357ABD">.then</span> 콜백 함수 실행
- <span style="color:#FF6B6B">reject()</span>가 실행되는 경우 → <span style="color:#FF6B6B">rejected</span> 상태가 되어 <span style="color:#FF6B6B">.catch</span> 콜백 함수 실행

```ts
myPromise
    .then((result) => {
      console.log("성공:", result);
    })
    .catch((error) => {
      console.error("실패:", error);
    });
```
<br />

<span style="color:#FF6B6B">reject()</span> 함수를 이용해 구체적인 **에러핸들링**도 가능합니다. 보통 reject 함수를 실행하여 rejected 되는 이유를 넘기는데, 표준 내장 객체인 Error의 생성자를 이용해 Error 객체를 만들 수 있습니다.

```ts
reject(new Error('bad'));
catch((error) => {...}); 
```

### 3. 최종으로 실행되는 로직의 경우 finally를 설정해 실행한다.

프로미스 객체가 fulfilled(이행)되거나 rejected 되고 나서 가장 마지막으로 실행되어야 하는 작업이 있다면 finally 콜백함수를 설정합니다.

```ts
myPromise
    .then((result) => {
      console.log("성공:", result);
    })
    .catch((error) => {
      console.error("실패:", error);
    })
    .finally(() => {
      console.log("finally 블록 실행: 작업 종료 후 항상 실행됩니다.");
    });
```
<br />

## 📄 Callback vs Promise
콜백함수도 비동기 작업을 할 수 있습니다. <br />
콜백 함수를 사용할 때 함수가 많아질 경우 유명한 콜백 지옥에 빠지게 되어 한눈에 봐도 불안한 모습이 됩니다.

```ts
function c(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

c(() => {
  console.log("1000ms 후에 callback 함수가 실행됩니다.");
});

c(() => {
  c(() => {
    c(() => {
      console.log("3000ms 후에 callback 함수가 실행됩니다");
    });
  });
}); //callback hell (콜백 지옥)
```

<br />

이런 경우 **프로미스 체이닝 (Promise Chaning)**을 통해 콜백 지옥을 해결 할 수 있습니다. 콜백 함수보다 가독성이 좋습니다.
```ts
function p() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

p()
  .then(() => {
    return p(); // 다시 새로운 프로미스 객체를 만들어서 리턴한다.
  })
  .then(() => p())
  .then(p)
  .then(() => {
    console.log("4000ms 후에 fulfilled 됩니다.");
  });
```

<br />

## 📄 여러개의 Promise(프로미스) 객체를 다루는 경우

여러개의 프로미스를 다룰 때는 **배열**을 통해 다룰 수 있습니다.

### 1. Promise.all

프로미스 객체들을 배열에 저장해 순차적으로 실행하는 경우에 Promise.all을 사용합니다. <br />
Promise.all은 **모든 프로미스가 fulfilled** 되었을 경우, 각 프로미스의 결과를 배열에 담아 리턴합니다.<br />
Promise.all에 전달되는 **프로미스 중 하나라도 거부되면**, Promise.all이 반환하는 프로미스는 **에러**와 함께 바로 거부됩니다.

```ts
function fetchData(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = `${url}에서 가져온 데이터`;
        resolve(data);
      }, Math.random() * 2000); // 랜덤한 시간 후에 데이터를 반환
    });
  }

// 프로미스 객체들을 배열로 저장
const promises = [
  fetchData('https://example.com/data1'),
  fetchData('https://example.com/data2'),
  fetchData('https://example.com/data3')
];

try {
	const results = await Promise.all(promises);
  console.log("모든 데이터를 성공적으로 가져왔습니다:", results);
} catch (error) {
  console.error("데이터를 가져오는 도중 오류가 발생했습니다:", error);
}
```

<br />

### 2. Promise.allSettled

Promise.all의 프로미스 객체들이 하나라도 실패했을 경우 바로 프로미스 체인을 중단한다면, Promise.allSettled 는 **이행/실패 여부와 상관없이** 모든 프로미스 객체를 실행합니다.<br />
이후 각 프로미스의 결과에 대한 정보를 담은 배열을 리턴합니다. 여러개의 작업을 병렬로 실행하고 각 작업의 성공 또는 실패 여부를 알아야 할 때 유용합니다.

* 응답이 성공할 경우
```ts
{status:"fulfilled", value:result}
```

* 에러가 발생한 경우
```ts
{status:"rejected", reason:error}
```
<br />

promise.allSettled 는 다음과 같이 활용할 수 있습니다.

```ts
let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/Violet-Bora-Lee",
  "https://no-such-url",
];

Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
  results.forEach((result, num) => {
    if (result.status == "fulfilled") {
      alert(`${urls[num]}: ${result.value.status}`);
    }
    if (result.status == "rejected") {
      alert(`${urls[num]}: ${result.reason}`);
    }
  });
});
```

<br />

### 3. Promise.race

Promise.race 는 **가장 먼저 종료(fullfilled 또는 rejected)된** 프로미스 객체의 결과 또는 에러를 반환합니다.

```ts
Promise.race([promise1, promise2, promise3])
  .then(result => {
    console.log('가장 빠른 프로미스 결과:', result);
  })
  .catch(error => {
    console.error('가장 빠른 프로미스 에러:', error);
  });
```
<br />

## 📝 정리

1. 동기적으로 실행되는 작업을 비동기적으로 만들 때 Promise를 사용해 제어할 수 있다.
2. 순서 뿐만 아니라 fullfilled / rejected 콜백 함수를 통해 조건 제어도 가능하다

   성공시) pending → fullfilled → then → finally

   실패시) pending → rejected → catch → finally

3. 프로미스를 사용하면 콜백 지옥을 해결 할 수 있다.
4. 여러개의 프로미스를 다루는 것도 가능하다 
   5. Promise.all ⇒ 하나의 프로미스라도 실패할 경우 프로미스 체이닝 중단 
   6. Promise.allSettled ⇒ 프로미스 개별의 성공/실패 여부와 상관없이, 모든 프로미스를 실행시키고 결과를 반환 
   7. Promise.race ⇒ 프로미스 개별의 성공/실패 여부와 상관없이, 가장 먼저 실행되는 프로미스 순으로 결과를 반환

## 출처

- 패스트캠퍼스 강의
- [캡틴판교](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
