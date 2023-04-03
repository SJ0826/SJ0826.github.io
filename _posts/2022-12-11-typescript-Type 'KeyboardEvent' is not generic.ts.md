---
title: "🚨 Type 'KeyboardEvent' is not generic."
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TypeScript
tags:
  - ["에러", "React", "TypeScript"]
last_modified_at: 2022-12-11T08:06:00-05:00
---

## 🚨 에러 발생

`KeyboardEvent`를 쓰려고 했는데 에러가 발생했다.

```ts
const onPressEnter = useCallback(
  async (e: KeyboardEvent<HTMLInputElement>) => {
    // Error. Type 'KeyboardEvent' is not generic.ts
    if (e.key === "Enter" && !isUserValidation) {
      await onClickSignIn();
    }
  },
  [isUserValidation]
);
```

앞에 `React.`를 붙이면 해결 됐지만, 다른 이벤트를 쓸 때는 평소처럼 그냥 쓰여서 궁금해서 찾아봤다.

## ❔ 에러 원인

사용하고 있던 이벤트가 `React`가 아닌 `DOM`에서 가져와서 생긴 에러였다.
코드의 `import`을 봤더니 `KeyboardEvent`만 빠져있었다.

```ts
import { ChangeEvent, useMemo, useState } from "react";
```

## 🔨 에러 해결

`KeyboardEvent`를 `React`에서 `impot`해올 수 있도록 변경해주었다.

```ts
import { ChangeEvent, KeyboardEvent, useMemo, useState } from "react";
```

## 참고

- [stack overflow-Why is the `MouseEvent` in the checkbox event handler not generic?](https://stackoverflow.com/questions/44764146/why-is-the-mouseevent-in-the-checkbox-event-handler-not-generic)
