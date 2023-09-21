---
title: "[Next.js] Next.js 13.5 update!"
excerpt: "Next.js 13.5 버전에서 어떤 부분이 달라졌을까?"
toc: true
toc_sticky: true
sidebar:
nav: "docs"

categories:
  - Nextjs
tags:
  - ["nextjs", "업데이트"]
last_modified_at: 2023-09-20T08:06:00-05:00
---

## 📄 Next.js 13.5 realize!

Next.js 13.5 버전이 릴리즈 되었다.

어떤 기능이 향상되었는지 확인 겸 정리한다.

### 1. 시작 및 새로고침 시간 단축

- 로컬 서버 시작 시간 22% 단축
- HMR 시간 29% 단축
- 메모리 사용량 40% 감소

> 💡 HMR(Hot Module Replacement)? 브라우저를 새로고침하지 않아도 Webpack으로 빌드한 결과물이 웹 애플리케이션에 실시간으로 반영

### 2. next/image 기능 향상

- `unstable_getImgProps` 함수 추가

기존에 next/image 를 사용하려면 `<Image>` 컴포넌트를 사용해야했다. 이번 업데이트 버전에 따르면 `<Image>` 컴포넌트를 사용하지 않아도, 이미지를 렌더링 할 수 있다.

```js
import { unstable_getImgProps as getImgProps } from "next/image";

export default function Page() {
  const common = { alt: "Hero", width: 800, height: 400 };
  const {
    props: { srcSet: dark },
  } = getImgProps({ ...common, src: "/dark.png" });
  const {
    props: { srcSet: light, ...rest },
  } = getImgProps({ ...common, src: "/light.png" });

  return (
    <picture>
      <source media="(prefers-color-scheme: dark)" srcSet={dark} />
      <source media="(prefers-color-scheme: light)" srcSet={light} />
      <img {...rest} />
    </picture>
  );
}
```

---

이 외에도 Import 최적화 등 자잘한 업데이트 사항이 있지만, 이 두가지가 가장 크게 눈에 들어왔다.

더 확실한건 vercel이 page 라우팅 보다 app 라우팅에 중점을 두고 업데이트를 진행했다는 느낌을 받았다.

app 라우팅의 사용량도 점점 늘고 있는만큼 app 라우팅 기능을 잘 활용할 수 있도록 꾸준히 사용해 보아야겠다.

## 참고

- [Next.js란?](https://dev-redcat.tistory.com/12)
