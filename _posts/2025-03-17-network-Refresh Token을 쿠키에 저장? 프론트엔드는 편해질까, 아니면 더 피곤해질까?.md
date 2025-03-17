---
title: "[네트워크] Refresh Token을 백엔드 서버에서 관리하면 프론트엔드는 편해질까, 아니면 더 피곤해질까?"
excerpt: "rebook 프로젝트에서 accessToken은 메모리로, refreshToken은 쿠키로 관리해보고 쓰는 후기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - network
tags:
  - ["쿠키", "HTTP", "accessToken", "refreshToken", "JWT", "NextJS", "NestJS"]
last_modified_at: 2025-03-17T08:06:00-05:00
---
## 🍪 accessToken은 메모리에, refreshToken은 쿠키에 저장하게 된 이유
여러 프로젝트를 진행하면서 항상 JWT 토큰을 다뤄왔습니다.
그 과정에서 **토큰 관리 방법**이 궁금해 여러 자료를 찾아봤고, 가장 많이 추천되는 방식은 다음과 같았습니다.

✅ **Access Token** → 프론트엔드의 메모리에 저장<br />
✅ **Refresh Token** → 백엔드 서버에서 HttpOnly 쿠키로 관리

이번 Rebook 프로젝트에서는 프론트엔드와 백엔드 개발을 모두 맡고 있기 때문에,
그동안 궁금했던 토큰 관리 방식을 직접 실험해볼 좋은 기회가 되었습니다.

그렇다면, 백엔드에서 Refresh Token을 쿠키로 관리하면 프론트엔드의 역할이 줄어들까?
정말 프론트엔드는 더 편해질까, 아니면 새로운 복잡함이 생길까?

토큰 관리방식에 당연히 정답은 없습니다.

다만 프로젝트를 진행하며 겪은 산전수전을 이 포스트에 풀어보려 합니다.




## 출처


