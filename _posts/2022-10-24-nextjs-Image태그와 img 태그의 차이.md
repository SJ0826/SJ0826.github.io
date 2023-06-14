---
title: "[Next.js] Image태그와 img 태그의 차이"
excerpt: "Next.js의 Image 컴포넌트"
toc: true
toc_sticky: true
sidebar:
nav: "docs"

categories:
  - Nextjs
tags:
  - ["Image", "img"]
last_modified_at: 2022-10-24T08:06:00-05:00
---

## 🗒️ Image 태그와 Img 태그의 차이

Next.js는 에서 Image 컴포넌트를 제공한다.

```js
<Image src="/images/profile.jpg" width={144} height={144} alt="Jimmy" /> // Image 태그

<Img src="/images/profile.jpg" alt="Jimmy" /> // img 태그
```

## 🗒️ Next/Image 컴포넌트에서 제공하는 기능

- Resizing(responsive 사이즈)
- Lazy load(viewport에 들어오면 로드한다): 이미지를 로드하는 시점을 필요할 때까지 지연시킨다.
- 그외 optimization(webp 형태)

## 출처

- 패스트 캠퍼스 Next.js 완전 정복

* [카카오 FE 기술블로그](https://fe-developers.kakaoent.com/2022/220714-next-image/)
