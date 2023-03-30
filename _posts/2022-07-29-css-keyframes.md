---
title: "[애니메이션] @keyframes"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["@keyframes"]
last_modified_at: 2022-07-29T08:06:00-05:00
---

## 📄 @keyframes

: css 애니메이션의 시작, 중간, 끝 등의 중간 상태를 정의한다.

```css
/* keyframe 작성 방법 */
@keyframes 애니메이션이름 {
  from {
    left: 0;
  }
  to {
    left: 200px;
  }
}
```

`%`로 진행도를 표기하기도 한다.

```
/* keyframe 작성 방법 */
@keyframes 애니메이션이름{
	0% {
		left : 0;
	}
	50%{
		left : 200px;
	}
	100%{
		top : 200px;
		left :  200px;
	}
}
```

작성한 keyframe은 animation 속성에서 사용한다.

---

## 출처

- [강력한 CSS](https://www.inflearn.com/course/%EA%B0%95%EB%A0%A5-css-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84)
