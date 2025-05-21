---
title: "[NestJS] 내가 EC2서버에서 CORS 에러지옥에 갇혔던 이유(는 NGINX) + EC2/NextJS/PM2 배포 가이드"
excerpt: "대체 왜 백엔드 서버에서 요청은 수행하는데, 브라우저는 CORS 에러를 보여주는거야!"
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

### 📚Mixed Content 에러란?

* HTTPS 페이지에서 HTTP 리소스를 요청할 때 발생하는 보안 에러
* 암호화되지 않은 데이터 전송으로 보안 위협이 발생할 수 있어, 브라우저가 요청 자체를 차단함
* 해결 방법
  * 도메인을 발급하고, SSL 인증서를 적용해 백엔드 서버도 HTTPS로 통신하도록 설정하자!


NestJS에서도 SSL 인증서를 다룰 수 있지만, 역할을 구분하고 서버에 가해지는 부담을 감소하기 위해 NGINX를 도입했습니다.

### 📚 NGINX의 역할
* SSL 인증서 관리
  * Let's Encrypt 같은 무료 인증서를 자동으로 갱신
  * 인증서의 암호화/복호화
* 인프라 관리 표준 패턴 사용 (TLS Termination)
* 간편한 포트 관리 및 리버스 프록시
  * NGINX가 80/443 포트에서 요청을 받고, 내부적으로 NestJS 서버로 프록시 요청을 전달함.
  * NestJS 서버 포트 노출 없이 보안성과 유연성 확보


그렇게 NGINX의 설정까지 마친 저는 두가지 CORS에러를 마주하게 됩니다.

## ◾ 프리플라이트(OPTIONS) 요청 실패

### 📝문제 상황

* 본 요청 성공적으로 도달하기 전에, 프리플라이트 요청이 404응답으로 돌아옵니다.

![image](/assets/image/posts/cors-option.png)

### 📝문제 원인

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

### 📝문제 해결

`/etc/nginx/sites-available/default`을 디렉터리 내에서 제거하고, 오직 **하나의 서버 블록에서만 80/443 요청을 처리**하도록 했습니다.

```shell
ubuntu@ip-["be 서버 도메인"]:~/rebook-api$ sudo nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful // 테스트 성공
```

## ◾ NestJS 서버서 요청을 수행하지만 브라우저에는 CORS 응답이 떨어져요
이 에러는 처음에 원인을 짐작조차 하지 못했습니다. 
* Status Code:  200 OK
* Response: CORS ERROR

![image](/assets/image/posts/cors-header-setting.png)


http-filter 설정도 다시 보고, CORS 설정도 다시 봤지만 문제가 되는 부분은 없었습니다.

### 📝문제 원인

스크린샷을 자세히 보면 응답 헤더에 **Access-Control-Allow-Origin 헤더**가 없습니다.

정리하자면 이렇습니다.

1. 서버 - 요청을 정상 처리 
2. 브라우저 응답에 CORS 헤더가 없어서 응답 무효 처리

NestJS가 정상 응답을 보냈지만, **NGINX에서 Access-Control-Allow-Origin 헤더 설정을 하지 않아 브라우저가 해당 응답을 차단**했습니다.
NGINX를 설정할 때는 주로 백엔드로 들어오는 요청만 고려했지만, 실제로는 브라우저가 응답의 헤더도 검사하기 때문에, 응답에 대한 CORS 설정 또한 반드시 필요하다는 사실을 놓치고 있었습니다.

### 📝문제 해결

이 문제는 NGINX에서 모든 응답에 CORS 허용 헤더를 추가하며 해결할 수 있었습니다.

**💾 /etc/nginx/sites-available/rebook**

```shell
...
location / {
    add_header 'Access-Control-Allow-Origin' '[프론트 서버 도메인]' always;  // 특정 도메인에 한해 허용
    add_header 'Access-Control-Allow-Credentials' 'true' always;
    add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization' always;
    add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, PATCH, DELETE, OPTIONS' always; // 모든 메서드 허용

    if ($request_method = 'OPTIONS') {
        return 204;
    }

    proxy_pass http://localhost:4000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
...
```



## ◾ 간단 회고

NGINX를 처음 회사에서 설정할 때는 인프라에 대해 거의 알지 못하던 상태였습니다.
당시 맨몸으로 부딪히며 작업했던 경험이 이번 프로젝트에 상당한 도움이 되었습니다.

인프라는 처음 접하면 어렵지만, 작업을 하나하나 직접 연결해 흐름이 완성되는 것을 보면 속이 시원합니다.
오늘의 경험이 또 미래에서 헤매고 있는 저에게 도움이 되길 바랍니다.

## 🐞 (추가) EC2 + NestJS 간단간단 배포 가이드 (명령어 위주)

### A. EC2 서버 설정하기 (AWS EC2 서버 생성 생략)

| 우분투 기준입니다.

✅ STEP 01.  EC2 인스턴스 접근 <br />
```shell
$ cd ~/.ssh
$ ssh -i "public ip 주소"
```

✅ STEP 02.  프로젝트 디렉터리 소유자 변경 <br />
```shell
$ sudo chown -R ubuntu:ubuntu [프로젝트 경로]
```
* root(기존 소유자)에서 ubuntu로 변경


✅ STEP 03.  ecosystem.config.js 생성 <br />
```js
module.exports = {
  apps: [
    {
      name: 'rebook-api', // 애플리케이션 이름
      script: './dist/src/main.js', // 실행할 파일
      instances: 1, // 싱글 인스턴스 실행 (다중 실행 시 cluster 모드 사용)
      autorestart: true, // 크래시 발생 시 자동 재시작
      watch: false, // 코드 변경 감지 비활성화 (개발 모드에서는 true 가능)
      max_memory_restart: '300M', // 메모리 초과 시 재시작
      env: {
        // 💡 기본값 (개발 환경)
        NODE_ENV: 'development',
      },
      env_production: {
        // 💡 --env production 사용 시 적용 (운영 환경)
        NODE_ENV: 'production',
      },
    },
  ],
};
```
⭐️ PM2로 프로젝트를 실행할 때는, [환경변수를 ecosystem에 작성](https://pm2.keymetrics.io/docs/usage/environment/)합니다. 다만, github에서는 중요한 정보가 숨겨져야 하기 때문에 EC2서버에서 직접 설정합니다.


### B. NGINX 설치 & SSL 인증서 발급

[📚 NGINX 사용 목적] <br/>
▪︎ **HTTPS 요청을 수신** - NGINX가 443 포트에서 브라우저의 요청을 수신 후, Let's Encrypt SSL 인증서를 보여준다.<br/>
▪︎ **TLS 핸드셰이크** - 브라우저가 공개키로 정보를 암호화해서 보내면 NGINX가 개인키로 복호화한다<br/>
▪︎ **복호화된 HTTP 요청을 NestJS 서버로 전달** - HTTPS로 받은 요청을 HTTP로 변환해서 내부 NestJS 서버에 보낸다.<br/>
▪︎ **HTTP → HTTPS 리다이렉트** - 80포트로 HTTP 요청이 들어오면, NGINX가 자동으로 HTTPS로 리다이렉트한다.<br/>


✅ STEP 01.  NGINX 설치

```shell
$ sudo apt update # apt: ubuntu 명령어 실행 도구
$ sudo apt intall nginx -y

$ sudo systemctl start nginx # (nginx 실행)
$ sudo systemctl enable nginx # (부팅시 nginx 자동 실행)
```
<br />

✅ STEP 02. SSL 인증서 발급

```shell
$ sudo apt install certbot python3-certbot-nginx -y
$ sudo nginx -t # (NGINX 설정 테스트)
$ sudo systemctl reload nginx # (변경된 설정 적용)
$ curl -I [백엔드 도메인 주소] # (HTTPS 정상 동작 테스트)
$ sudo systemctl enable certbot timer # (SSL 인증서 자동 갱신 설정)
```
▪︎ certbot: 무료 SSL 인증서를 발급받고 자동으로 NGINX에 적용. 인증서 발급 도구.<br/>
▪︎ python3-certbot-nginx: NGINX와 certbot을 연동하는 플러그인<br/>
▪︎ -y: 설치 중 사용자 확인 생략하고 자동 진행<br/>


### C. NGINX SSL Reverse Proxy 설정

✅ STEP 01. NGINX 설정파일 생성
```shell
$ sudo nano /etc/nginx/sites-available/[생성할 설정파일 명]
```
```shell
💾 /etc/nginx/sites-available/[생성할 설정파일 명]

# HTTP 요청은 무조건 HTTPS로 리다이렉트

server {
    listen 80;
    server_name www.rebook.p-e.kr;

    return 301 https://$host$request_uri;
}

# HTTPS 처리 서버 블록
server {
    listen 443 ssl;
    server_name [백엔드 서버 도메인 주소];

    ssl_certificate /etc/letsencrypt/live/www.rebook.p-e.kr/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/www.rebook.p-e.kr/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location / {
        # ✅ 모든 응답에 CORS 헤더 추가 
        add_header 'Access-Control-Allow-Origin' '[프론트 서버 도메인 주소]' always;
        add_header 'Access-Control-Allow-Credentials' 'true' always;
        add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, PATCH, DELETE, OPTIONS' always;

        if ($request_method = 'OPTIONS') {
            return 204;
       }

        proxy_pass http://localhost:4000;  # NestJS 서버
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

✅ STEP 02. NGINX 심볼링 링크 설정

[📚 NGINX 심볼릭 링크 사용 목적] <br/>
▪︎ /etc/nginx/sites-available/ : 설정 파일 보관소 (실제 내용 작성) <br/>
▪︎ /etc/nginx/sites-enabled/ : NGINX가 실제로 읽어들이는 활성 설정 <br/>
▪︎ 장점: 프로젝트별로 설정을 만들어두고 필요할 때만 심볼릭 링크로 필요할 때만 on/off 가능

```shell
$ sudo ln -s /etc/nginx/sites-available/[프로젝트 이름] /etc/nginx/sites-enabled/[프로젝트 이름]
```
<br/>

