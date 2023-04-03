---
title: "🚨 Too many revisions specified"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - Git
tags:
  - ["Git", "powershell"]
last_modified_at: 2022-07-27T08:06:00-05:00
---

## 🚨 Too many revisions specified

git 공부를 하던 도중 에러가 났다.

`git stash show stash{3}`

stash 변경사항을 확인하려고 명령어를 입력했는데 내 명령어를 받아주질 않는다..

![TMR](https://user-images.githubusercontent.com/56298540/180949724-a980c10b-cafd-4c4c-92d8-4191e2f5e674.PNG)<br>

너무 많은 개정이 지정되었다니..뭔말일까..

What does the error message mean, and what should I do?

구글링 gogo~

## ❔ 원인

그냥 쓰던 powershell 문제 였다.

powershell은 중괄호를 좋아하지 않는다니 어쩔 수 없다.

## 🔨 해결

따옴표를 써서 달래주자.

`git stash show "stash{3}"`

![TMR2](https://user-images.githubusercontent.com/56298540/180951727-9150de41-b295-4ba9-8ab2-feaac8b4d3bf.PNG)

## 참조

- stackoverfow

## 느낀 점

일부러 에러가 났을 때 국내 사이트보다 해외사이트에서 해결책을 찾았다. <br>
그러다보니 점점 해외 사이트가 눈에 익고 익숙해지는게 느껴진다.<br>
이번 에러를 찾는 과정에선 번역기를 돌리지 않고 해결책을 찾았다.<br>
외국이나 한국이나 웃긴점.<br>
-> 저도 이게 왜 되는지 모르겠는데 해결됐어요.<br>
라는 글을 심심치 않게 볼 수 있다.<br>
역시 코딩으로 하나되는 우리 지구.
