---
title: "z-index"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["z-index"]
last_modified_at: 2022-07-21T08:06:00-05:00
---

## 📄 z-index

z-index 속성은 요소의 **쌓임 순서(stack order)**를 정의합니다.<br>
정수 값을 지정하여 쌓임 맥락(stacking context)에서의 레벨을 정의하는 방식으로 적용됩니다.<br>
위치 지정 요소에 대해 적용할 수 있는 속성입니다.<br>

```css
.first {
  z-index: 1;
}
.second {
  z-index: 2;
}
.third {
  z-index: 3;
}
.fourth {
  z-index: 1;
}
```

간단히 말해, 요소들의 z축 순서를 결정해 주는 속성입니다.

- z-index은 정해진 정수 값이 있는 것이 아니라, 상대적인 수로 쌓임 맥락이 결정됩니다.
- z-index의 숫자가 같을 경우에는, 나중에 쌓은 요소가 위로 오게 됩니다.

## 출처

- 유노코딩
