---
title: "불변객체(Immutable Object
)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "불변객체"]
last_modified_at: 2022-08-25T08:06:00-05:00
---

## 📄 불변 객체란?

**변수에 새로운 객체를 할당하더라도, 객체의 주소가 변하지 않는 객체**

불변성 여부를 구분할 때의 변경 가능성의 대상은 **데이터 영역**메모리입니다.

## 불변 객체는 언제 필요할까?

모든 참조형 데이터가 가변성을 띠는 것은 아닙니다.

참조형 데이터가 가변성을 가질 때는 데이터 자체가 아닌 내부 프로퍼티를 변경하는 경우입니다.

내부 프로퍼티를 변경하면 변수가 가르키고 있는 데이터의 주소가 변경되기 때문입니다.

이러한 상황에서 **값으로 전달받은 객체에 변경을 가하더라도 원본 객체는 변하지 않아야 하는 경우**에 불변객체가 필요합니다.

```js
var user = {
  name: "Jaenam",
  gender: "male",
};

var chanegeName = function (user, newName) {
  var newUser = user;
  newUser.name = newName;
  return newUser;
};

var user2 = chanegeName(user, "Jung");

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다."); // 실행되지 않음
}
console.log(user.name, user2.name);
console.log(user === user2);
```

결과<br>

```js
Jung Jung
true
```

`user`과 `newUser`이 같은 데이터 주소를 참조하게 되어 `newUser`의 데이터가 변경될때 마다 `user`의 데이터도 변경됩니다.

따라서 `user`를 불변 객체로 만들어 줄 필요성이 보입니다.

## 📄 얕은 복사와 깊은 복사

### 1. 얕은 복사

중첩된 객체에서 참조형 데이터가 저장된 **프로퍼티**를 복사할 때 그 **주솟값만 복사**합니다.

얕은 복사를 하면 해당 프로퍼티에 대한 원본과 사본이 모두 동일한 참조형 데이터의 주소를 가리키고, 사본을 바꾸면 원본이 바뀌고 원본을 바꾸면 사본이 바뀌는 현상이 일어납니다.

```js
var copyObject = function (target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

var user = {
  name: "Jaenam",
  urls: {
    portfolio: "http://github.com/abc",
    blog: "http://blog.com",
    facebood: "http://facebook.com/abc",
  },
};
var user2 = copyObject(user);

user.name = "Jung";
console.log(user.name === user2.name); //false

user.urls.portfolio = "http://portfolio.com";
console.log(user.urls.portfolio === user2.urls.portfolio); // true

user2.urls.blog = "";
console.log(user.urls.blog === user2.urls.blog); //true
```

결과<br>

```
false
true
true
```

`user`객체에 직접 속한 프로퍼티에 대해서는 복사해서 완전히 새로운 데이터가 만들어진 반면, 한 단계 더 들어간 `urls`의 내부 프로퍼티들은 **기존 데이터를 그대로 참조**하는 것을 확인할 수 있습니다..

`user.urls`의 프로퍼티에 대해서도 불변 객체로 만들 필요성이 생겼습니다.

### 깊은 복사

깊은 복사는 얕은 복사에서 한 단계 더 복사를 하는 것입니다.

객체의 프로퍼티 중에서 그 값이 **기본형 데이터일 경우에는 그대로 복사**하고, **참조형 데이터에는 다시 그 내부의 프로퍼티를 복사**합니다.

```js
var copyObjectDeep = function (target) {
  var result = {};
  if (typeof target === "object" && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
};
```

`target`이 객체인 경우 내부 프로퍼티를 순회하여 `copyObjectDeep`함수를 재귀적으로 호출하고, 원본과 사본이 서로 다른 객체를 참조하게 됩니다.

## 출처

- 코어 자바스크립트
