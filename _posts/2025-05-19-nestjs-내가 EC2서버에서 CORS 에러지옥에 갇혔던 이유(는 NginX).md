---
title: "[NestJS] 내가 EC2서버에서 CORS 에러지옥에 갇혔던 이유(는 NGINX) + EC2/NextJS/PM2 배포 가이드"
excerpt: "대체 왜 프로젝트에 요청은 들어오는데, 브라우저는 CORS 에러를 보여주는거야!"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - NestJS
tags:
  - ["NestJS", "NGINX", "PM2", "EC2", "AWS"]
last_modified_at: 2025-05-19T08:06:00-05:00
---

![image](/assets/image/nginx.png)

## ◾ 배경 
이전에 회사에서 NextJS 프로젝트를 EC2 서버에 배포하며 고생했던 경험이 있습니다. 
이번에는 NestJS 라고 별거 있겠냐며 겁나는 마음을 속이며 배포를 진행하게 되었고, 그때 나를 힘들게 했던 NGINX라는 친구와 다시 만나게 되었습니다.

그렇게 다시 혼쭐이나면서 겪었던 과정을 남겨봅니다.
 
## ◾ 내가 NGINX를 선택한 이유 - HTTPS 통신을 하기 위해서
Rebook 프로젝트의 프론트엔드 서버는 AWS Amplify를 통해 간편하게 배포했습니다.
Amplify는 모든 배포 도메인에 **HTTPS가 적용된 보안 인증서**를 기본 제공합니다.


반면, 백엔드 서버는 EC2를 사용했으며, 별도의 설정 없이 기본적으로 **HTTP 도메인**만 제공합니다.

이 때, 프론트엔드 서버와 백엔드 서버 사이에는 Mixed Content 에러가 발생합니다.

#### 📚Mixed Content 에러란?

* HTTPS 페이지에서 HTTP 리소스를 요청할 때 발생하는 보안 에러
* 암호화되지 않은 데이터 전송으로 보안 위협이 발생할 수 있어, 브라우저가 요청 자체를 차단함
* 해결 방법
  * 도메인을 발급하고, SSL 인증서를 적용해 백엔드 서버도 HTTPS로 통신하도록 설정하자!


NestJS에서도 SSL 인증서를 다룰 수 있지만, 역할을 구분하고 서버에 가해지는 부담을 감소하기 위해 NGINX를 도입했습니다.

#### 📚 NGINX의 역할
* SSL 인증서 관리
  * Let's Encrypt 같은 무료 인증서를 자동으로 갱신
  * 인증서의 암호화/복호화
* 인프라 관리 표준 패턴 사용 (TLS Termination)
* 간편한 포트 관리 및 리버스 프록시
  * NGINX가 80/443 포트에서 요청을 받고, 내부적으로 NestJS 서버로 프록시 요청을 전달함.
  * NestJS 서버 포트 노출 없이 보안성과 유연성 확보


그렇게 NGINX의 설정까지 마친 저는 두가지 CORS에러를 마주하게 됩니다.

## ◾ 프리플라이트(OPTIONS) 요청 실패

#### 📝문제 상황

* 본 요청 성공적으로 도달하기 전에, 프리플라이트 요청이 404응답으로 돌아옵니다.

![image](/assets/image/posts/cors-option.png)

#### 📝문제 원인

문제의 원인을 찾고자 NGINX 테스트를 진행합니다.

```shell
ubuntu@ip-["be 서버 도메인"]:~/rebook-api$ sudo nginx -t
2025/05/17 09:43:14 [warn] 75575#75575: conflicting server name "be 서버 도메인" on 0.0.0.0:80, ignored // ✅
2025/05/17 09:43:14 [warn] 75575#75575: conflicting server name "be 서버 도메인" on 0.0.0.0:443, ignored // ✅
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```
<br />

**80 포트와 443 포트에서 충돌**이 나서 요청이 무시되었다는 메세지를 확인했습니다.
이 설정을 작성한 NGINX 설정파일을 확인합니다.


```shell
ubuntu@ip-172-31-13-63:~/rebook-api$ sudo ls -l /etc/nginx/sites-enabled/
total 0
lrwxrwxrwx 1 root root 34 May 15 09:46 default -> /etc/nginx/sites-available/default
lrwxrwxrwx 1 root root 33 May 17 07:35 rebook -> /etc/nginx/sites-available/rebook
```

기본(default)설정 파일에 80/443 포트용 server 블록이 중복 선언되어, HTTPS 요청은 수신되지만 실제 처리를 못했습니다.

즉, 백엔드 도메인을 처리하는 **server 블록이 동일 포트(80/443)에서 두 개 이상 선언**되어 충돌이 발생했던 것입니다.

#### 📝문제 해결

`/etc/nginx/sites-available/default`을 디렉터리 내에서 제거하고, 오직 **하나의 서버 블록에서만 80/443 요청을 처리**하도록 했습니다.

```shell
ubuntu@ip-["be 서버 도메인"]:~/rebook-api$ sudo nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful 
```

