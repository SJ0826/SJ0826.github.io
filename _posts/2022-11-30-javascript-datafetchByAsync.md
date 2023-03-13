---
title: "async 함수로 데이터 fetch하기"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "async"]
last_modified_at: 2022-11-30T08:06:00-05:00
---

## 📄 async 함수로 데이터 fetch하기

서버로부터 데이터를 fetch해오는 방법은 여러가지가 있다.
보통 `promise`를 사용하거나 `async` `await`문을 사용한다.

## 📄 Promise를 통한 비동기 코딩의 문제점

**1. 디버깅**

```js
function fetchAuthorName(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => post.userId)
    .then((userId) => {
      return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((user) => user1.name); // 의도한 Error
    });
}

fetchAuthorName(1).then((name) => console.log("name:", name));
```

✔ 결과

```js
ReferenceError: user1 is not defined
    at fetch.then.then.then.then.then (<anonymous>:7:29)
```

동일한 이름의 메소드인 여러개의 `then()`중에서 정확히 어디서 에러가 발생했는지 에러 메세지만 보고는 알 수 없다.

**2. 예외처리**

Promise를 사용하면 `try/catch`대신 `catch()`메서드만 사용하여 예외처리를 해야한다.
비동기, 동기 코드가 섞인 경우에는 예외 처리를 하는 과정이 복잡해질 수 있다.

**3. 들여쓰기**

실제 프로젝트에서 비동기 처리 코드는 길고 복잡하기 마련인데, 무한 `then()` 메서드에 빠지게 되면 코드의 가독성이 매우 떨어진다.

## 📄 aync/await를 통해 데이터 fetch해오기

`async/await`를 사용하면 Promise가 가진 문제점들을 해결해 줄 수 있다.

**Promise 사용했을 때:**

```js
fetch(`https://api.idiots.band/api/search?keyword=${e.target.value}`)
  .then((x) => x.json())
  .then((data) => {
    console.log(JSON.stringify(data, null, 2));
  });
```

**async-await 사용했을 때:**

```js
onSearchBand: async (inputValue) => {
  const postResponse = await fetch(
    `https://api.idiots.band/api/search?keyword=${inputValue}`
  );
  const post = await postResponse.json();
  this.setState(post);
};
```

- `fetch`함수를 사용하는 함수를 aysnc 함수로 만들어준다.
- `fetch`함수에 `await`를 걸어준다.
- `await`로 가져온 데이터는 `.json()`을 호출해서 한번 더 `await`를 걸어준다.

### 예외처리 하기 주의사항

```js
export const getSearchData = async (value) => {
  const url = `https://api.idiots.band/api/search?keyword=${value}`;
  const postResponse = await fetch(url);
  if (postResponse.ok) {
    const data = await postResponse.json();
    return data;
  } else {
    throw new Error(data);
  }
};
```

이 코드는 에러는 나지 않지만 성능이 떨어진다.

- async 함수는 모두 Promise를 리턴한다.
- `reponse.ok`인 경우도 Promise가 리턴된다.
- 하지만 `throw new Error(data)`를 선언한다면 async 함수는 `Promise<Response> | Promise<void>`로 타입이 잡히게 된다.

따라서 `reponse.ok`를 선언했다면 예외처리를 할 경우도 Promise를 반환하게 하는 것이 바람직하다.

```js
// 바람직한 코드

export const getSearchBand = async (value) => {
  const url = `https://api.idiots.band/api/search?keyword=${value}`;
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error("API 요청에 실패 했습니다."));
};
```

## 출처

- [DaleSeo - 비동기 처리 3부 async/await](https://www.daleseo.com/js-async-async-await/)
