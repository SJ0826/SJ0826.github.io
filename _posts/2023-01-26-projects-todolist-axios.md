---
title: "[TodoList-Project] 클래스로 작성하는 로그인/회원가입 axios통신"
excerpt: "axios를 사용한 api통신 로직을 클래스로 작성하기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - TodoList-Project
tags:
  - ["TodoList", "axios", "클래스"]
last_modified_at: 2023-01-26T08:06:00-05:00
---

## 📑 axios통신 로직을 클래스로 작성한 이유

꽤 여러번 투두리스트를 만들어봤지지만 axios 통신 로직은 항상 함수로만 작성했다.
원티드에서 강의를 듣고 클래스에 대해 고민하게 되었다.
클래스는 객체 형태로 state를 저장할 수 있기 때문에 state를 가진 모듈이라면 클래스로 작성하는 것이 좋다고 한다.
로그인/회원가입을 구현하는 로직은 url과 token을 가지고 있기 때문에 클래스로 작성을 하기로 결정했다.
이번에 본격적으로 구글링을 하는 연습을 하기 위해서 영어로 된 문서도 적극적으로 참고했다.

## 📑 httpClient.ts | axios Client를 담당

```ts
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getLocalStorageToken } from "../store/localStorage";

declare module "axios" {
  type AxiosRequest<T = unknown> = Promise<T>;
} // 0

abstract class HttpClient {
  // 1
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    // 2
    this.instance = axios.create({
      baseURL: BASE_URL,
    });

    this._initializeRequestInterceptor(); // 3
  }

  private _initializeRequestInterceptor = () => {
    // 4
    this.instance.interceptors.request.use(this._handleRequest);
  };

  private _handleRequest = (config: InternalAxiosRequestConfig) => {
    const accessToken = getLocalStorageToken();
    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  };
}

export default HttpClient;
```

0. 타입스크립트를 사용하고 있기 때문에 `AxiosRequest`가 무슨일을 하는지 알려줘야 한다. 이렇게 하면 response를 순수 data로 사용할때 타입스크립트가 에러를 내지 않는다고 한다.

1. 우선, HttpClient라는 추상 클래스를 만들어 instance를 생성할 수 없게 만들어주었다. instance를 생성할 클래스는 기능별로 따로 만들었기 때문이다.

2. `axios-instance`를 생성하는 constructor이다. constructor로부터 base URL을 얻을 수 있다. `axios.create`는 protected 멤버로 설정된 instance에 저장되어 외부 클래스에서 사용할 수 없게 했다. 하지만 상속받은 클래스에서는 접근할 수 있다.

3. 데이터를 요청하기 전 토큰이 있는지 확인해야 하기 때문에 axios의 `interceptor`메소드를 활용할 것이다. `_`는 private 메소드라고 암시하는 뜻이다.

4. `interceptor`메소드는 `_handleRequest`라는 콜백함수를 가진다. axios 요청시 로컬스토리지에 있는 값을 꺼내서 헤더에 `Authorization` 키를 설정할 수 있다.

---

## 📑 authAPI.ts | 로그인/회원가입 axios 통신을 담당

```ts
import { AxiosResponse } from "axios";
import { SIGNIN_URL, SIGNUP_URL } from "../../constants/constants";
import HttpClient from "../httpClient";
import { UserParam } from "../../types/auth/UserInterface";

class AuthAPI extends HttpClient {
  public constructor() {
    super();

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  private _handleResponse = (response: AxiosResponse) => {
    const responseCode = response.status;

    switch (responseCode) {
      case 200:
        alert("로그인되었습니다.");
        break;
      case 201:
        alert("회원가입에 성공했습니다. 로그인해주세요.");
        break;
      default:
        alert(
          "로그인/회원가입 요청이 거절되었습니다. 네트워크를 확인하거나 관리자에게 문의해주세요."
        );
    }
    return response;
  };

  protected _handleError = (error: AxiosError) => {
    const { response: errorResponse } = error;
    const errorCode = errorResponse.status;

    switch (errorCode) {
      case 400:
        alert("동일한 이메일이 이미 존재합니다.");
        break;
      case 401:
        alert("아이디와 비밀번호를 확인해주세요.");
        break;
      case 404:
        alert("해당 사용자가 존재하지 않습니다. 회원가입을 진행해주세요.");
        break;
      default:
        alert(
          "로그인/회원가입 요청이 거절되었습니다. 네트워크를 확인하거나 관리자에게 문의해주세요."
        );
    }
  };

  public SignIn = (data: UserParam) => this.instance.post(SIGNIN_URL, data);

  public SignUp = (data: UserParam) => this.instance.post(SIGNUP_URL, data);
}

const authApi = new AuthAPI();
export { authApi };
```

---

## 참고

- [Enhance Your HTTP](https://levelup.gitconnected.com/enhance-your-http-request-with-axios-and-typescript-f52a6c6c2c8e)
