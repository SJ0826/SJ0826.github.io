---
title: "[Next.js] 서버 컴포넌트에서 Redirect 구현하기 with middleware"
excerpt: "권한이 없는 페이지 미들웨어로 리다이렉트 시키기"
toc: true
toc_sticky: true
sidebar:
nav: "docs"

categories:
  - Nextjs
tags:
  - [
      "middleware",
      "서버 컴포넌트",
    ]
last_modified_at: 2025-03-07T08:06:00-05:00
---

## 🚨 문제 발생

페이지 인증 로직을 구현하면서 권한이 없는 사용자를 로그인 페이지로 리다이렉트하는 기능이 필요했습니다.

클라이언트 컴포넌트에서는 useRouter를 사용하여 리다이렉트할 수 있었지만, 서버 컴포넌트에서는 useRouter를 사용할 수 없었습니다. 따라서 서버에서 인증을 처리하는 적절한 방법을 찾아야 했습니다.

![image](/assets/image/posts/nextjs-middleware.png)

## 시도 1 | redirect

가장 간단하게 사용할 수 있어보이는 redirect를 사용해 보았습니다.

```ts
await reissueTokenAPI(REFRESH_TOKEN).then((res) => {
      if (res.accessToken) {
        cookieStore.set(REFRESH_TOKEN, res.refreshToken);
      } else {
        redirect(Url.SignIn);
      }
})
```
<br />

문제가 없을 줄 알았지만 콘솔에서 에러가 발생했습니다.

![image](/assets/image/posts/nextjs-middleware-error.png)

> Invoking the redirect() function throws a NEXT_REDIRECT error and terminates rendering of the route segment in which it was thrown. by Next.js

~~왜 redirect api 표에서는 severcomponet가 포함되어있는지 잘 모르겠지만 아무래도 서버 컴포넌트에서는 redirect()를 사용할 수 없는 것 같습니다.~~ <br />
(2025.03.07 수정) 
서버 컴포넌트임에도 redirect()를 사용할 수 없었던 이유는 await을 사용하는 비동기 코드 내부에서 redirect()를 호출했기 때문입니다. 
redirect() 함수는 페이지가 서버에서 렌더링되는 도중에 실행되어야합니다.

## 시도 2 | NextResponse.redirect in Middleware

미들웨어는 페이지 요청이 완료되기 전에 실행되므로, 페이지가 서버에서 렌더링되기 전에 필요한 로직을 처리할 수 있습니다.

그러나 미들웨어에서는 axios의 기본 설정으로 AJAX 요청을 보낼 수 없었으며, 이를 사용하려고 하면 다음과 같은 에러가 발생했습니다.

```ts
[TypeError] adapter is not a function
```

따라서 fetch 함수를 사용하여 API 요청을 처리하는 방식으로 해결했습니다.
저의 경우에는 미들웨어에서 사용하는 인증관련 로직을 분리했습니다.
<br />

**💾 withAuth.ts**
```ts
import { NextRequest, NextResponse } from 'next/server';

export async function withAuth(request: NextRequest) {
  try {
    const redirectUrl = request.nextUrl.clone(); // 1
    redirectUrl.pathname = `${리다이렉트 경로}`

    const refreshToken = request.cookies.get('refreshToken'); // 2
    if (!refreshToken) return NextResponse.redirect(redirectUrl);

    const url = `${refreshToken 갱신 api}`; // 3
    const data = {
      refreshToken: refreshToken.value,
    };
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const apiResponse = await fetch(url, requestOptions);
    const responseData: any = await apiResponse.json();

    if (responseData.resultCode == 200) { // 4
			console.log('succeed')

      const response = NextResponse.next();

      response.cookies?.set(
        'refreshToken',
        responseData.data.refreshToken
      );
      response.cookies?.set(
        'accessToken',
        responseData.data.accessToken
      );

      return response;
    } else {
      console.log('failed');

      return NextResponse.redirect(redirectUrl); // 5
    }
  } catch (error) {
    console.log('err: ' + error);
  }
}
```
1. 객체의 참조를 공유하지 않고 안전하게 nextUrl를 사용하고자 clone 메서드를 사용해 값을 복사한다.
2. 서버에 요청 (request)할때 브라우저 쿠키에 저장된 refreshToken을 가져온다.
3. 서버에서 api요청을 처리해 refreshToken을 갱신한다.
4. refreshToken 갱신 성공시, 쿠키에 새로운 토큰을 저장해 클라이언트에 응답 (response)을 내려보낸다.
5. refreshToken 갱신 실패시, 설정한 경로로 리다이렉트 한다.


이전에는 서버에서 쿠키를 다루기 위해 별도의 라이브러리를 설치하거나, 각 페이지 컴포넌트에서 getServerSideProps의 request를 통해 관리해야 했습니다.

그러나 이번에 미들웨어를 사용하면서, 원하는 페이지를 요청할 때 공통된 비즈니스 로직을 처리할 수 있게 되었고, 쿠키를 다루는 과정이 번거롭지 않아 작업이 훨씬 간편해졌습니다.

또한, 서버에서 인증을 처리할 수 있기 때문에, 브라우저에서 추가적인 화면을 렌더링하지 않고 즉시 로그인 페이지로 리다이렉트할 수 있어, 사용자는 바로 로그인을 진행할 수 있습니다.

만약 리다이렉트 후 사용자에게 추가적인 메시지를 전달하고 싶다면, 응답(Response)을 커스텀하여 메시지를 포함할 수도 있습니다.

**💾 middleware.ts**
```ts
import { NextRequest } from 'next/server'
import { isAuthenticated } from '@lib/auth'
 
// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: '/api/:function*',
}
 
export function middleware(request: NextRequest) {
  // Call our authentication function to check the request
  if (!isAuthenticated(request)) {
    // Respond with JSON indicating an error message
    return Response.json(
      { success: false, message: 'authentication failed' },
      { status: 401 }
    )
  }
}
```

공식 문서를 참고하며 작업을 진행하는 과정에서, 현재까지 Next.js의 기능을 절반 정도만 활용하고 있었다는 것을 깨달았습니다.

미들웨어는 단순히 리다이렉트를 처리하는 용도뿐만 아니라, 다양한 기능을 제공하고 있습니다. 이를 적극적으로 활용하여 프로젝트를 더욱 효율적으로 진행하고 싶습니다.

## 참고
- [Next.js 공식 문서 - middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [reddit - using_axios_in_middleware_not_working](https://www.reddit.com/r/nextjs/comments/tx1pcp/using_axios_in_middleware_not_working/)