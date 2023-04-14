---
title: "[메세지가 도착했습니다] 둘다 사용해보고 작성하는 Styled-Components와 SCSS의 차이점"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - random-message
tags:
  - ["Styled-Components", "SCSS"]
last_modified_at: 2023-04-14T08:06:00-05:00
---

## 📄 SCSS? SCSS!

처음으로 프로젝트에 SCSS를 사용했다.<br>
두가지 사용경험에 우선 차이점이 있다면 styled-components는 일단 다른 코드를 보며 무작정 사용하고 SCSS는 인강을 보고 공부했다는 점이다.<br>
styled-component를 계속 사용하다보니 CSS-in-CSS문법에 둔해져 그냥 구글링과 공식문서를 보고 사용하기엔 감이 잘 오지 않아 인강을 들을 수 밖에 없었다.<br>
빨리 SCSS를 사용해 보고 싶어서 인강은 하루만에 다 들었다.<br>

## 📄 SCSS 사용하니 좋았던 점

<h3>1. 좀 더 나은 스타일 구조화</h3>

아주 객관적이지만 SCSS를 사용했을 때 프로젝트 구조를 잡기가 더 쉬웠다.<br>
styled-component의 경우 베이스 코드를 작성하기 위해 **createGlobalStyle**을 사용해 `index`파일에서 import하고 태그를 생성하는 과정이 있는 반면, SCSS에서는 베이스 코들르 작성하고 **import하면 바로 사용**할 수 있었다.<br>
큰 차이는 아니지만 처음 styled-components를 사용했을 때 createGlobalStyle 태그를 생성해야하는 위치가 헷갈려 애먹었던 적이 있다.

**💾 base.scss**

- 프로젝트를 진행하며 점점 추가될 예정인 내 base 코드

```scss
* {
  font-family: "NanumBarunpen";
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  height: 100%;
  width: 100%;
  margin: 0;
}
button {
  font-weight: bold;
}
```

좀더 시각적으로 나았던 부분이 하나 더 있다.<br>
SCSS는 **파일 아이콘**이 있어 좀더 확실히 구분되는 느낌을 준다.

![image](https://user-images.githubusercontent.com/56298540/231812925-e84556cd-f856-4035-8050-e392303937a9.png)

styled-components는 어떤게 스타일 파일인지 직관적으로 눈에 들어오지 않는다.

![image](https://user-images.githubusercontent.com/56298540/231813201-baa363ba-65ec-4c32-a9d6-6951f1c306a0.png)

<h3>2. 매번 설치할 필요가 없다.</h3>

저번에 인강들으면서 전역으로 한번 설치해놓으니 매번 설치할 필요가 없다.<br>
왠지 프로젝트가 가벼워진 기분이든다.

```
npm install -g sass // 요거 한번만 설치하면 끝
```

<h3>3. 코드 재사용 문법이 더 잘되어 있다.</h3>

- 변수
  - theme color를 지정할 때 유용
  - media-query에도 사용할 예정
- 중첩
- mixin
- extend

styled-component도 물론 중복 코드를 처리할 수 있지만, styled-component 고유 문법이 아니다.<br>
styled-component를 사용했을 때는 그냥 이렇게 보통 객체를 생성해 key-value형태로 사용했다.

```js
// styled-component

const theme = {
  mainColor: `#CCD6A6`,
  bgGroundColor1: "#FFFFFF",
  bgGroundColor2: "#F8F9FA",
  bgGroundColor3: "#E9ECEF",
  bgGroundColor4: "#F4EAD5",
  ...
};
```

SCSS에서는 따로 스타일을 위한 변수 선언 및 사용이 가능하다.

```scss
// scss

$main-color: #39b5e0;

$back-ground-light: #ffffff;
$back-ground-light2: #f6f1f1;
```

뿐만 아니라 mixin문법으로 자주 사용하는 스타일을 저장해 꺼내쓰고, extend문법으로 부모 스타일을 상속받아 사용할 수 있다.

```scss
.messageList__content {
  padding: 1em;
  background-color: wheat;
  border-bottom: 1px solid $point-blue1;
}

.messageList__header {
  @extend .messageList__content ...; // 💡
}

.messageList_list {
  @extend .messageList__content ...; // 💡
}
```

<h3>4. 코드가 색이 칠해져 있다 🤩</h3>

사실 이게 styled-componets의 가장 큰 단점이라고 생각한다.<br>
코드가 한 색깔로 되어 있다는 것이다.

```js
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: inherit;
  height: 100%;

  @media (max-width: 1920px) {
    width: calc(100% - 20rem);
  }

  @media (max-width: 1080px) {
    width: calc(100% - 8rem);
  }

  @media (max-width: 600px) {
    width: calc(100% - 3rem);
  }
`;
```

혹시 바로 몰라 찾아 보니 vscode에 vscode-styled-components이라는 extension이 있다고 한다.<br>
진작 찾아봤으면 좋았을껄...

## 📄 SCSS 사용하니 불편했던 점

<h3>1. 처치 곤란한 CSS파일들</h3>

작성은 SCSS로 하지만 컴파일되면 모두 CSS로 변환되어 새로운 CSS파일이 자동으로 생긴다.<br>
나에게 가장 큰 진입장벽이 CSS파일을 관리하는 것이었다.<br>

1. SCSS파일이 위치한 곳마다 CSS파일을 둔다.
2. CSS파일 경로를 설정해 한 폴더에 몰아버린다.

여기까지 알아 뒀는데 인강을 듣고 한가지 방법을 더 알게 되었고 프로젝트에 도입했다.

3. main.scss에 모든 scss파일을 import해 컴파일 되는 파일은 main.scss파일 하나만 되게 만든다.

3번의 방법을 사용하면 결국 나오는 .CSS확장자를 가진 파일은 main.css하나만 존재한다.<br>
아마 프로젝트가 큰 경우에는 main.scss 파일이 너무 무거워져 사용하면 안될 것 같다.<br>

이렇게 하면 또 번거로운 점이 생긴다.

- Styled-Components의 경우: styled.js --(**import**)--> index.tsx
- SCSS의 경우: \_index.scss --(**import**)--> main.scss --(**compile**)--> main.css --(**import**)--> (root경로의)index.tsx

일단 인강에서 배운대로만 하면 이렇게 징검다리가 생기는데 분명 더 나은 방법이 있을 것이다.<br>
요즘 프로젝트 구조를 참고하는 [sendbird Github](https://github.com/sendbird/sendbird-uikit-react)는 나처럼 한번에 모아서 컴파일 하지도 않고 CSS파일이 숨겨져 있는지 보이지도 않는다.<br>
검색해도 방법 찾기가 쉽지 않다.

<h3>2. 컴파일로 인한 속도 저하</h3>

Scss파일을 컴파일하기 위해 터미널말고 **Watch Sass** extension을 사용하고 있다.<br>
문제는 파일이 변경(저장)되면 즉시 컴파일 한다는 점이다. <br>
ctrl + s가 습관인 나는 굉장히 여러번 컴파일을 하는데 OUTPUT창이 계속 움직인다...<br>
만약 프로젝트 크기가 굉장히 큰 경우에는 적용한 스타일을 바로바로 빠르게 확인하기 어려울듯 싶다.

<h3>3. props 참조가 안된다.</h3>

이 부분은 styled-component의 가장 큰 장점인듯 싶다.<br>
styled-component를 사용할 때 매우 유용하게 사용해 이 부분도 굉장히 불편하게 느껴졌다.<br>

SCSS에서 props를 설정하는 방법은 여러가지가 있다.

1. className을 배열로 선언해 사용

```js
import React from "react";
import "./Button.scss";

function Button({ children, size }) {
  return <button className={["Button", size].join(" ")}>{children}</button>;
}

Button.defaultProps = {
  size: "medium",
};

export default Button;
```

2. className을 리터럴로 만들어 사용

```js
import React from "react";
import "./Button.scss";

function Button({ children, size }) {
  return <button className={`Button ${size}`}>{children}</button>;
}

Button.defaultProps = {
  size: "medium",
};

export default Button;
```

이를 보완하기 위해 **classnames**라는 라이브러리를 많이 사용한다고 한다.<br>

```js
classNames("foo", "bar"); // => 'foo bar'
classNames("foo", { bar: true }); // => 'foo bar'
classNames({ "foo-bar": true }); // => 'foo-bar'
classNames({ "foo-bar": false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'
classNames(["foo", "bar"]); // => 'foo bar'

// 동시에 여러개의 타입으로 받아올 수 도 있습니다.
classNames("foo", { bar: true, duck: false }, "baz", { quux: true }); // => 'foo bar baz quux'

// false, null, 0, undefined 는 무시됩니다.
classNames(null, false, "bar", undefined, 0, 1, { baz: null }, ""); // => 'bar 1'
```

---

SCSS와 Styled-Component는 둘다 CSS 스타일링에 많이 사용되는 언어이고 장단점이 있어 사용자 특성에 따라 사용되는 것 같다.<br>
SCSS를 꼭 사용해보고 싶었는데 하루 써보고 신나서 바로 블로그에 포스팅하러 달려왔다.<br>
계속 사용해볼 예정인데 아마 오늘 알게 된 내용보다 더 많은 걸 알게 될 것 같다.

## 코드 참고

- [벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/styling/01-sass.html)
