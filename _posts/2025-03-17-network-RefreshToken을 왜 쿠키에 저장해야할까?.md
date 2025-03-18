---
title: "[네트워크] RefreshToken을 왜 쿠키에 저장해야할까?"
excerpt: "rebook 프로젝트에서 accessToken은 메모리로, refreshToken은 쿠키로 관리해보고 쓰는 후기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - network
tags:
  - ["쿠키", "HTTP", "accessToken", "refreshToken", "JWT", "NextJS", "NestJS"]
last_modified_at: 2025-03-18T08:06:00-05:00
---
## 🍪 accessToken은 메모리에, refreshToken은 쿠키에 저장하게 된 이유
여러 프로젝트를 진행하면서 항상 JWT 토큰을 다뤄왔습니다.
그 과정에서 **토큰 관리 방법**이 궁금해 여러 자료를 찾아봤고, 가장 많이 추천되는 방식은 다음과 같았습니다.

✅ **Access Token** → 프론트엔드의 메모리에 저장<br />
✅ **Refresh Token** → 백엔드 서버에서 HttpOnly 쿠키로 관리

이번 Rebook 프로젝트에서는 프론트엔드와 백엔드 개발을 모두 맡고 있기 때문에,
그동안 궁금했던 이 토큰 관리 방식을 직접 실험해볼 좋은 기회가 되었습니다.

## 🍪 리프레시 토큰을 왜 쿠키에 저장해야할까?

리프레시 토큰을 쿠키에 저장한다는 것은 정확히 **HttpOnly Secure 쿠키**에 저장한다는 뜻입니다.

```ts
const setCookieOptions = {
  httpOnly: true, // ✅ JavaScript에서 접근 불가능 → XSS 방어
  secure: process.env.NODE_ENV === 'production', // ✅ HTTPS에서만 전송
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // ✅ CORS와 일치해야 함
  maxAge: 7 * 24 * 60 * 60 * 1000, // ✅ 7일 (밀리초)
  path: '/',
};
```

<br />

### 1. XSS 공격 방어

#### ◾️ XSS(Cross-Site Scripting-크로스 사이트 스크립팅)란 ?
* 공격자가 웹사이트에 **악성 자바스크립트 코드를 삽입**
* 자바스크립트 코드를 통해 사용자의 쿠키나 개인정보를 탈취하거나 악성 스크립트 실행

자바스크립트에서 쿠키에 접근하려면 보통 아래와 같은 코드를 실행합니다.

```ts
document.cookie; 
```

httpOnly 설정은 자바스크립트 코드가 쿠키에 접근하는 것을 방지합니다.

리프레시 토큰은 사용기간도 길고, 계속해서 엑세스 토큰을 발급할 수 있습니다. 따라서 보안 중요성을 높게 가져가기 위해 쿠키에 저장하는 방식을 많이 사용합니다.

<br />

### 2. CSRF 공격 방어
#### ◾️CSRF(Cross-Site Request Forgery) 란?
* 공격자가 사용자의 세션을 이용해 **악의적인 요청을 자동으로 보내는 공격**
* 공격자가 사용자의 세션을 탈취해 임의의 기기에서 원치않은 요청(구매, 비밀번호 변경 등)을 수행할 수 있다. 

이러한 경우는 직접 리프레시토큰을 보지 않고도 악의적 요청을 보내는 공격 방식입니다.

CSRF 공격 시나리오는 다음과 같습니다.

1. 피해자가 중고책 거래 사이트 Rebook에 로그인한다.
2. 브라우저는 리프레시토큰을 HttpOnly Secure 쿠키로 저장한다.
3. 피해자는 공격자가 만든 악성 사이트에 방문한다.
4. 악성사이트가 백그라운드에서 Rebook 서버로 강제 요청 🧨을 보낸다.
5. 피해자의 브라우저는 자동으로 로그인된 세션 (쿠키 포함)과 함께 요청을 보낸다.
6. 결과적으로 사용자의 의도와 관련없는 요청 (구매, 비밀번호 변경 등)을 보낸다.

위 시나리오에서 공격자는 직접 리프레시토큰을 탈취하지 않았지만, 피해자의 세션을 악용합니다.

이러한 경우를 막으려면, **다른 사이트에서 요청할 때 쿠키를 자동으로 전송하지 않도록** 해야합니다.

```ts
res.cookie('refreshToken', refreshToken, {
  httpOnly: true, 
  secure: process.env.NODE_ENV === 'production', 
  sameSite: 'strict', // ✅ CSRF 공격 방어 (다른 사이트에서 자동 요청 차단)
  maxAge: 7 * 24 * 60 * 60 * 1000, 
  path: '/',
});
```

<br />

### 3. 프론트엔드의 개발적인 편리함 - 쿠키 저장, 삭제에 관여하지 않는다.

로컬스토리지나 세션스토리지의 경우에는, 프론트엔드가 직접 정보를 저장하고 삭제하는 코드가 필요합니다.

```ts
localStorage.setItem('refreshToken', response.refreshToken);
```

쿠키에 저장된 값을 관리하는 주체는 백엔드입니다. 
백엔드 서버에서 쿠키에 리프레시토큰을 설정하면, 프론트엔드 개발자가 리프레시 토큰을 저장하는 코드를 직접 작성할 필요가 없습니다.

```ts
const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true, // ✅ 쿠키 자동 포함
});
```

withCredentials을 true로 설정하면, Authorization 헤더를 수동으로 설정할 필요없이 자동으로 쿠키가 포함됩니다.

하지만 HttpOnly 쿠키는 자바스크립트에서 접근할 수 없기 때문에, 프론트엔드에서 로그인 상태를 직접 확인할 수 없어 추가적인 상태관리가 필요합니다.

특히 엑세스토큰을 메모리에 저장하는 방식은 새로고침시 토큰이 유실되는 문제가 발생합니다.
로그인 상태를 유지하려면 LoggedIn 상태를 로컬스토리지에 저장해서 관리해야합니다.

<br />


## 🍪️느낀점
리프레시토큰을 쿠키로 관리하면서, 보안적으로 고려해야 할 다양한 이슈를 공부할 수 있었습니다.
이전에는 쿠키를 이론으로만 공부하여 이해가 되지 않았던 부분들이, 백엔드 서버에서 직접 쿠키를 설정하고 관리하면서 더욱 명확해졌습니다. <br />

이 방법은 편리함보다는 보안성을 우선하는 방식이라고 생각합니다.
프론트엔드과 백엔드 모두 추가적인 작업이 필요했으며, 특히 NextJS에서 엑세스토큰을 전역 상태(Zustand)로 관리하며 로그인 상태 유지가 중요한 과제가 되었습니다. <br /> 

구현과정이 다소 복잡해졌지만, 프로젝트가 추구하는 우선 방향이 보안성 강화라면 저는 이 방법을 앞으로도 사용할 예정입니다.

