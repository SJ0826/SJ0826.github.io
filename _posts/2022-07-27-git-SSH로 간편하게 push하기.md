---
title: "[git] mac os 환경에서 깃허브 아이디 여러개 관리하기"
excerpt: "로컬과 깃허브에 ssh key를 등록해보자"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - Git
tags:
  - ["SSH"]
last_modified_at: 2023-12-04T08:06:00-05:00
---

## 📄SSH(Secure Shell)란?

회사 계정으로 깃허브 저장소를 관리하게 되었다. 깃허브 계정 두개를 하나의 로컬에서 관리해야하는데 이때 permission denied 에러가 발생하며 ssh키로 계정을 관리하는 방법을 찾아보았다.

- 정의: 컴퓨터와 컴퓨터 사이에서 안전하게 통신할 수 있는 프로토콜

- 특징
  - 네트워크를 통해 다른 컴퓨터에 안전하게 접속
  - 컴퓨터와 컴퓨터 간 중요한 정보를 주고 받을 때 외부에서 개입되지 않도록 정보를 암호화
  - 주로 원격서버에 안전하게 접속하고 명령을 실행할 때 사용
  - 다수의 깃허브 계정을 하나의 로컬 환경에서 관리할 때 보안상 ssh key를 등록해 사용한다.

## 📄 순서

### 1. 로컬 환경에서 ssh key 생성하기

#### a. ssh key를 관리하는 폴더로 이동

```
$ cd ~/.ssh
$ ls -al
```

#### b. ssh key 생성하기

- 각 계정에 사용할 key를 생성한다. 두개면 두개, 세개면 세개
- id는 계정 용도에 맞게 지어야 구별하기 쉽다.
- ex) ssh-keygen -t rsa -C "github@gmail.com" -f "id_github_work"

```
$ ssh-keygen -t rsa -C {github 이메일 계정} -f {key id}
$ ls -al ~/.ssh
```

#### c. ssh key 확인하기

- `ls` 명령어를 통해 생성한 ssh key를 확인할 수 있다.
- 확장자가 `.pub`인 파일에 생성된 ssh key가 저장되어 있다.
  <img width="455" alt="스크린샷 2023-12-04 오후 9 58 25" src="https://github.com/SJ0826/my-blog/assets/56298540/075f6996-909f-4dbc-be16-aa27adadbda5">

### 2. ssh key 등록

- setting > SSH keys and GPS keys 로 이동해 New SSH key를 생성한다.
- 하나의 계정이 아닌 생성한 key 들을 각 계정에 등록한다.

![github](https://user-images.githubusercontent.com/56298540/181246239-208fe5c9-0dca-4c45-bb71-5c5f25dcfb3d.PNG)<br>

### 3. 각 ssh key host 지시자 설정하기

- 설정한 host 지시자는 프로젝틐 클론시 사용하기에 복잡하게 하지 않는게 좋다.
- ssh key가 있는 폴더에서 config 파일을 연다.
  ```
  $ cd ~/.ssh
  $ code config
  ```
- Host 지시자를 설정한다.

  ```
  # 개인 계정
  # -------------
  Host github.com-{호스트 지시자 이름1}
  HostName github.com
  IdentityFile ~/.ssh/id_github_개인계정
  User Sujin


  # 회사 계정
  # ------------
  Host github.com-{호스트 지시자 이름1}
  HostName github.com
  IdentityFile ~/.ssh/id_github_회사
  User Sujin
  ```

- ssh key가 잘 등록되었는지 테스트 해본다.
  ```
  $ ssh -T git@github.com-SJ0826
  Hi SJ0826! You've successfully authenticated, but GitHub does not provide shell access. // 👍
  ```

### 4. ssh key를 이용해 프로젝트 클론하기

- 이제 https url이 아닌 ssh key를 이용해 프로젝트를 클론할 수 있다.
  <img width="429" alt="스크린샷 2023-12-04 오후 10 08 39" src="https://github.com/SJ0826/my-blog/assets/56298540/7201a4f3-78ac-4c05-8c73-e3bbc6a0ad09">

- ⭐️ 체크한 부분처럼 그대로 등록한 ssh key host 지시자를 입력해야 한다.
- 그렇지 않으면 permission denied error가 발생할 것이다.
  <img width="616" alt="스크린샷 2023-12-04 오후 10 11 48" src="https://github.com/SJ0826/my-blog/assets/56298540/046fe342-1839-4341-8ef7-356fb83a9851">

## 출처

- 드림코딩
