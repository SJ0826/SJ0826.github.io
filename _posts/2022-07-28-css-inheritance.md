---
title: "상속&공용 키워드"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["CSS 상속", "inherit"]
last_modified_at: 2022-07-28T08:06:00-05:00
---

## 📄 상속(Inheritance)

상속(Inheritance)이란 하위 요소가 상위 요소의 스타일 속성값을 물려받는 것을 의미합니다.<br>
상속 가능 여부는 속성마다 다릅니다.<br>

<h4 style="background: lightgray">상속되는 속성</h4>

- color
- font-family
- font-size

<h4 style="background: lightgray">상속되지 않는 속성</h4>

- padding
- margin
- border

```css
ul {
  color: tamato;
}
```

하위요소인 `li` 혹은 `ol`태그는 상위요소인 `ul`태그의 color에 대한 속성 값을 물려받아 `color: tomato`라는 값을 사용할 수 있습니다.

## 📄 공용 키워드

모든 CSS 속성에 사용 가능한 키워드 입니다.<br>
'전역값'이라고 부르기도 합니다.

- **inherit**: 상위 요소로부터 해당 속성의 값을 받아 사용한다.
- **initial**: 해당 속성의 기본값을 요소에 적용한다.
- **unset**: 상속 속성에 대해서는 inherit처럼, 상속되지 않는 속성에 대해서는 initial처럼 적용한다.<br>
  즉, 상속을 받지 않는 요소에 unset을 쓴다는 것은 initial로 쓰겠다는 말과 같다고 볼 수 있습니다.

다음은 공용키워드 `inherit`을 사용한 예시입니다.

```css
<section>
  인사말
  <p><a href="#">홍길동</a>님, 안녕하세요!</p>
</section>
```

```css
a {
  color: inherit;
}
```

`a`태그는 브라우저의 내장 스타일이 적용되어 방문 전에는 파란색, 방문 후에는 보라색으로 표시됩니다.<br/>
이러한 내장 스타일이 마음에 들지 않는다면 color를 `inherit`으로 설정해주면 됩니다.

## 출처

- 유노코딩
- [DaleSeo - CSS의 상속](https://www.daleseo.com/css-inheritance/)
