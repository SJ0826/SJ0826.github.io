---
title: "fetch vs pull 차이점"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - Git
tags:
  - ["fetch", "commit", "pull"]
last_modified_at: 2022-07-27T08:06:00-05:00
---

## 📄 fetch vs pull 차이점

서버에서 commit이 발생하여 변경사항을 나의 로컬 저장소로 가져오는 상황에서 두 명령어는 차이점을 가지게 됩니다.<br><br>

## 📄 fetch를 사용했을 경우

fetch를 사용하게 되면 나의 로컬 브랜치의 origin은 서버에서 가져온 커밋으로 위치를 바꾸지만 <br><br>

현재 작업중인 로컬 master 브랜치 즉, HEAD의 위치는 변하지 않습니다.<br><br>

서버에 업데이트된 히스토리의 정보만 로컬로 가지고 올 때 fetch를 유용하게 사용할 수 있습니다.<br><br>

- `git fetch origin 브랜치명`<br>
  위와 같은 명령어 입력시 특정한 브랜치만 가지고 올 수 도 있습니다.<br><br>

## 📄 pull을 사용했을 경우

pull을 사용하게 되면 origin은 물론, HEAD의 위치도 서버에서 가져온 커밋으로 위치를 변경합니다.<br><br>
