---
title: "[네트워크] 도커(Docker)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - network
tags:
  - [""]
last_modified_at: 2023-02-09T08:06:00-05:00
---

# 도커(Docker) 🐳

![도커](https://subicura.com/generated/assets/article_images/2017-01-19-docker-guide-for-beginners-1/docker-logo-800-b3c79c1cb.png)

## 도커란?

도커는 **애플리케이션을 패키징**할 수 있는 툴입니다.

도커를 통해 애플리케이션을 배포한다면, 컨테이너라는 하나의 작은 소프트웨어 유닛안에 애플리케이션, 시스템 툴, Dependencies를 담아 다른 서버로 배포하게 됩니다.

### 도커의 장점

- 런타임 환경 자체를 보내주기 때문에 버전 충돌같은 에러가 발생하지 않게 됩니다.

- 도커 런타임 환경을 사용하면 어떤 PC, 어떤 서버에서도 어플리케이션을 사용할 수 있습니다.

## VM와 도커의 차이

![vmvsdocker](https://images.contentstack.io/v3/assets/blt300387d93dabf50e/bltb6200bc085503718/5e1f209a63d1b6503160c6d5/containers-vs-virtual-machines.jpg)

VM은 하드웨어 Infrasturcture위에 VirtualBox같은 Hypervisor 소프트웨어를 이용해 각각의 가상의 머신을 만들어 줍니다.

> VM(Virtual Machine)이란? 운영체제와 조건이 다른 환경을 가상으로 만들어 필요한 application을 구동할 수 있게 해주는 장치

한 운영체제 위에서 동일한 어플리케이션을 각각 고립된 다른 환경(ex. 윈도우와 리눅스)을 구동하기 위해서는 vm을 이용합니다.

하지만 각각 고립된 다른 환경을 운영한는 만큼 무게가 무겁고 시작하는데도 오래걸리고 리소스를 많이 요구합니다.

### 컨테이너를 사용하게 된다면?

컨테이너는 vm에서 좀더 경량화된 컨셉이며 하드웨어 설치된 운영체제인 Host OS에서 **Container Engine**이라는 소프트웨어를 설치만 하면 개별적인 컨테이너를 만들어서 각각의 애플리케이션을 고립된 환경에서 구동할 수 있다.

가장 큰 차이점은 컨테이너는 운영체제를 각각 설치하지 않고 컨테이너 엔진이 설치된 Host OS를 공유한다는 점입니다.

도커는 컨테이너 엔진 중 가장 사용량이 많은 플랫폼 입니다.

## 도커의 3대 구성요소

### 1. Dockerfile

컨테이너를 어떻게 만들어야 하는지 알려주는 설명서

### 2. Image

어플리케이션이 실행되는데 필요한 코드

- 런타임 환경 등 모든 세팅들이 포함되어 있다.
- 실행되고 있는 어플리케이션의 상태를 이미지화해서 변경이 불가능한 불변의 상태로 만든다.

### 컨테이너

이미지를 고립된 환경에서 실행할 수 있는 환경

- 컨테이너 안에서 만들어진 어플리케이션이 동작한다.
- 이미지는 클래스 각각의 컨테이너는 인스턴스와 비슷한 컨셉으로 이해할 수 있다.

## 도커 이미지 배포하는 과정

1. 로컬에서 깃허브와 같은 Container Registry에 이미지를 배포합니다.
2. 서버에서 이미지를 가져와 설치한 도커와 같은 컨테이너 환경에서 가져온 이미지를 토대로 어플리케이션을 실행합니다.

## 출처

- [CS지식의 정석](https://www.inflearn.com/course/%EA%B0%9C%EB%B0%9C%EC%9E%90-%EB%A9%B4%EC%A0%91-cs-%ED%8A%B9%EA%B0%95)

* [드림코딩 YouTube](https://www.youtube.com/watch?v=LXJhA3VWXFA)
* [weaveworks](https://www.weave.works/blog/a-practical-guide-to-choosing-between-docker-containers-and-vms)
