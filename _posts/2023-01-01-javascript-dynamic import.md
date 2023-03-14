---
title: "동적 임포트(Dynamic import)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["JavaScript", "동적 임포트", "import"]
last_modified_at: 2023-01-01T08:06:00-05:00
---

## 📄 동적 임포트(Dynamic import)

보통 코드의 최상단에서 `import`문을 사용해 클래스나 함수를 가져오는 것을 **정적 import**라고 합니다.

정적으로 모듈을 import한다면

1. import문에 동적 매개 변수를 사용할 수 없습니다. = 원시 문자열만 가능하기 때문에 함수 호출 결과값을 경로로 사용할 수 없습니다.
2. 런타임이나 조건부로 모듈을 불러올 수 없습니다. = if문, 코드 블록에서 사용할 수 없습니다.

## 📄 동적으로 모듈 import 하는 방법

동적으로 모듈을 import한다면

1. 프로미스 객체를 반환합니다. 프로미스 객체의 반환값은 불러온 모듈입니다.
2. 코드의 위치에 관계없이 사용이 가능하기 때문에, 모듈들을 사용자가 필요로 할 때 불러올 수 있습니다.
3. `import()`를 호출하는 순간부터 로딩이 되기 때문에 성능을 향상시킬 수 있습니다.

```js
import("./sum").then((sum) => {
  console.log(sum(1 + 2));
});
```
