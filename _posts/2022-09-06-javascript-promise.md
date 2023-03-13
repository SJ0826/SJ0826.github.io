---
title: "Promise"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "Promise"]
last_modified_at: 2022-09-06T08:06:00-05:00
---

## 📄 promise

프로미스는 주로 서버에서 데이터를 받아올 때 사용합니다.

서버에 요청을 보내고 데이터를 받아올 때, 아직 데이터를 다 받아오기도 전에 데이터를 다 받아온것 처럼 화면에 데이터를 표시하고 오류가 발생합니다.

이런 문제점을 해결하는 방법이 프로미스 입니다<br><br>

프로미스는 ES6부터 JavaScript의 표준 내장 객체로 추가되었습니다.

## 📄 promise 처리 흐름

**1. 프로미스가 생성자를 통해서 생성되면 pending(대기)상태가 됩니다.**

```js
new Promise((resolve, reject) => {}); //pending
```

**2-1. pending상태로 돌입한 후 excutor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled(이행)상태가 됩니다.**

```js
new Promise((resolve, reject) => {
  // pending상태
  // ... 비동기적인 상황이 되는 처리가 벌어짐.
  resolve(); // fulfilled
});
```

**2-2. excutor 함수 인자 중 하나인 reject 함수를 실행하면, rejected (거부) 상태가 됩니다.**

```js
new Promise((resolve, reject) => {
  reject(); //rejected
});
```

**3-1. 프로미스 객체가 fulfilled 되는 시점에 .then 안에 설정한 callback 함수가 실행됩니다.**

```js
p.then(/*callback*/);
```

> p라는 프로미스 객체의 callback이 실행됨.

excutor의 resolve함수를 실행할 때 인자를 넣어 실행하면, then의 callback 함수의 인자로 받을 수 있습니다.

```js
resolve('hello');
then((message) => {...})
```

**3-2. 마찬가지로 프로미스 객체가 rejected되는 시점에 .catch안에 설정한 callback함수가 실행됩니다.**

```js
catch(() => {
    console.log('/*callback*/');
});
```

executor의 reject 함수를 실행할 때 인자를 넣어 실행하면, catch의 callback함수의 인자로 받을 수 있습니다.

```js
reject('error');
catch((reason) => {...})
```

보통 reject 함수를 실행하며 rejected 되는 이유를 넘기는데, 표준 내장 객체인 Error의 생성자를 이용하여 Error 객체를 만들 수 있습니다.

```js
reject(new Error('bad'));
catch((error) => {...});
```

**4. fulfilled 되거나 rejected 된 후에 최종적으로 실행할 것이 있다면, `.finally()`를 설정하고, 함수를 인자로 넣습니다.**

```js
finally(() => {...});
```

## 📄 callback vs promise

비동기 작업을 하는 방법은 주로 callback과 promise가 있습니다.

### 1. callback

보통 비동기 작업을 할 때, callback함수를 인자로 넣어 로직이 끝나면 callback함수를 호출합니다.

이런 경우 함수가 아래로 진행되지 않고, callback 함수 안으로 진행됩니다.

```js
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

### 2. promise 체이닝

promise방식에서는 then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 비동기 적업을 순차적으로 아래로 표현할 수 있습니다.

```js
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

## 📄 value가 프로미스 객체인지 알 수 없는 경우

연결된 then 메서드를 실행합니다.

value가 프로미스 객체면, resolve 된 then 메서드를 실행합니다.

value가 프로미스 객체가 아니면, value를 인자로 보내면서 then메서드를 실행합니다.

```js
Promise.resolve(/* value */); //프로미스라는 전역객체의 resolve함수를 실행하면서 동시에 promise를 만들어낸다.

Promise.resolve(
  new Promise((resolve, reject) => {
    // 비동기 프로미스 객체를 생성해서 resolve의 인자인 value값으로 설정.
    setTimeout(() => {
      resolve();
    }, 1000);
  })
).then((data) => {
  console.log(
    "프로미스 객체인 경우, resolve 된 결과를 받아 then이 실행됩니다.",
    data
  );
});

Promise.resolve("bar").then((data) => {
  console.log("then 메서드가 없는 경우, fulfilled됩니다.", data);
});
```

promise.reject를 사용하면, catch로 연결된 rejected 상태로 변경됩니다.

```js
Promise.reject(/* */);

Promise.reject(new Error("reason"))
  .then((error) => {})
  .catch((error) => {
    console.log(error);
  });
```

## 📄 promise 객체를 배열로 생성하기

### promise.all

프로미스 객체를 여러개를 생성하여,

배열로 만들어 인자로 넣고 `Promise.all`을 실행하면,

배열의 모든 프로미스 객체들이 fulfilled 되었을 때, then의 함수가 실행됩니다.

then의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려줍니다.

```js
Promise.all([프로미스 객체들]);
```

`promise.all`에 전달되는 프라미스 중 하나라도 거부되면, `Promise.all`이 반환하는 프라미스는 에러와 함께 바로 거부됩니다.

### promise.allSettled

`Promise.allSettled`는 모든 프라미스가 처리될 때까지 기다립니다.

반환되는 배열은 다음과 같은 요소를 갖습니다.

- 응답이 성공할 경우 – {status:"fulfilled", value:result}
- 에러가 발생한 경우 – {status:"rejected", reason:error}

```js
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

결과

```js
[
  {status: 'fulfilled', value: ...응답...},
  {status: 'fulfilled', value: ...응답...},
  {status: 'rejected', reason: ...에러 객체...}
]
```

### promise.race

프로미스 객체 여러개를 생성하여,

배열로 만들어 인자로 넣고 `Promise.race`를 실행하면,

배열의 모든 프로미스 객체들 중 가장 먼저 fulfiiled된 것으로, then의 함수가 실행됩니다.

then의 함수의 인자로 가장 먼저 fulfilled 된 프로미스 개체의 resolve 인자값을 돌려줍니다.

```js
Promise.race([프로미스 객체들]);
```

## 출처

- 패스트캠퍼스 강의<br><br>

- [캡틴판교](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
