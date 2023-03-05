---
title: "프로토타입(prototype)"
excerpt: "프로토타입(prototype)"
toc: true
toc_sticky: true

categories:
  - JavaScript
tags:
  - ["JavaScript", "프로토타입"]
last_modified_at: 2022-09-05T08:06:00-05:00
---

## 📄 프로토타입이란?

프로토타입의 한국어 뜻은 **원형**입니다.

프로토타입은 말 그대로 객체의 원형이라고 할 수 있는 것입니다.

Javascript에서는 객체를 상속하기 위하여 프로토타입이라는 방식을 사용합니다.

- 생성자 함수에 기본으로 세팅되는 프로퍼티`(F.prototype)`는 `[[Prototype]]`과 다릅니다. `F.prototype`은 `new F()`를 호출할 때 만들어지는 새로운 객체의 `[[Prototype]]`을 설정합니다.

- `F.prototype`의 값은 객체나 `null`만 가능합니다. 다른 값은 무시됩니다.
- 굳이 this라는 자기참조변수를 사용하지 않고 prototype으로 변수 p에 hello라는 함수를 할당했다.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  //this.hello = function() {
  //    console.log('hello', this.name, this.age);
  //}
}

Person.prototype.hello = function () {
  console.log("hello", this.name, this.age);
};

const p = new Person("Mark", 37);

p.hello();
```

결과

```js
hello Mark 37
```

```js
function Person() {} //Person함수 생성

Person.prototype.hello = function () {
  //Person의 프로토타입으로 hello 함수 생성
  console.log("hello");
};

function Korean(region) {
  //Korean 함수 생성
  this.region = region;
  this.where = function () {
    console.log("where", this.region);
  };
}

Korean.prototype = Person.prototype; // 프로토타입을 이용해 부모의 프로퍼티를 자식의 프로퍼티에 할당

const k = new Korean("Seoul"); // 변수 k에 객체 할당

k.hello();
k.where();
```

결과

```js
hello1
where Seoul
```

## 📄 프로토타입 장점

프로토타입의 장점은 **함수의 재사용성을 높인다는 것**입니다.

프로토 타입을 사용해서 함수 밖에서 새로운 함수나 값을 선언한다면,

새로운 함수나 값을 기존 함수에 할당할 필요없이 `prototype`이라는 키워드 하나로 바로 사용가능하기 때문에 코드가 훨씬 간결해집니다.

### 프로토타입 체인

프로토타입을 이용해 서로 이어져 있는 집합을 **프로토타입 체인**이라고 합니다.

위의 코드에 다음과 같은 코드를 이어서 작성합니다.

```js
console.log(k instanceof Korean);
console.log(k instanceof Person);
console.log(k instanceof Object);
```

```js
true;
true;
true;
```

- `Korean`이 `Person`을 상속하고, `Person`이 `Object`를 상속하므로 `true`값이 나왔다.

## 느낀 점

자바스크립트 공부하면서 제일 난관에 봉착했다.<br>
뭔가 알듯 말듯 헷갈리는 개념이다.<br>
강의를 끝나면 모던자바스크립트튜토리얼도 보고 책도 보고 할텐데 그 과정에서 익숙해지며 습득될 수 있도록 꼼꼼히 학습해야겠다.<br><br>

## 출처

- 패스트캠퍼스 프론트엔드 강의<br><br>

- [생활코딩](https://opentutorials.org/course/743/6573)<br><br>

- [MDN Web Docs](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes)
