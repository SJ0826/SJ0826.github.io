---
title: "브랜치(branch)란 무엇인가"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - Git
tags:
  - ["브랜치"]
last_modified_at: 2022-07-24T08:06:00-05:00
---

## 📄 브랜치(branch)란 무엇인가

브랜치는 하나의 줄기에서 뻗어나온 과정들을 의미합니다.<br>
즉, 저장공간 하나에서 빠져나오는 또다른 가상의 저장공간들을 생성하는 것을 뜻합니다.

## 📄 브랜치 과정

별도로 브랜치를 따로 작성하지 않으면 master 브랜치에서 계속 작성됩니다.<br>
만약 새로운 기능을 만든다면, 새로운 브랜치를 만들어서 작업을 해나아가는 것이 중요합니다.<br>
이런식으로 커밋을 하면 다수의 개발자들이 다수의 작업을 병렬적으로 처리하는 것이 가능해집니다.<br>
이후 master 브랜치 외 featureA브랜치에서 작업이 완료가 되었다면, featureA의 커밋들을 master브랜치에 merge를 하게 되어 master브랜치에 병합합니다.<br>
이때 featureA의 커밋들을 모두 master 브랜치로 가져오는 것 보다는, 커밋들을 합해서 새로운 하나의 커밋을 만들어 준 후에 master 브랜치로 가지고 오는 방법도 있습니다. <br>
이후 featureA 브랜치는 삭제를 하여 깔끔하게 정리합니다.

## 📄 브랜치 관련 명령어

### 브랜치 확인하기

▪ `git branch`

생성된 모든 브랜치를 확인할 수 있습니다.

![branch](https://user-images.githubusercontent.com/56298540/180636895-055417a1-dc17-4bc2-b348-4a05bb157088.PNG)
<br>

▪ `git branch -all`

서버를 포함한 생성된 모든 브랜치를 확인할 수 있습니다.

### 브랜치 생성하기

▪ `git branch (브랜치명)`

브랜치를 생성합니다. 다만, 생성한 브랜치는 만들어지기만 하고 현재의 브랜치는 변하지 않습니다.

![branch2](https://user-images.githubusercontent.com/56298540/180637006-39937e56-9d17-46af-87d0-a577151e20c0.PNG)

📌 로컬 브랜치에서 생성 후 원격 브랜치에 연동하기

```
git branch -b (브랜치명)

git push origin (브랜치명)
```

매번 브런치 명을 입력하기 번거로우므로 config설정을 해줍니다.

```
git config --global push.default current // 현재 브랜치를 기준으로 같은 이름의 브랜치에 push한다.
```

### 브랜치 이동하기

▪ `git switch (브랜치명)`

원하는 브랜치로 이동합니다.

▪ `git switch -C new-branch1`

새로운 브랜치를 생성함과 동시에 바로 이동합니다.

### 브랜치 삭제하기

▪ `git branch -d (브랜치명)`

해당 브랜치를 삭제합니다.

▪ `git push origin --delete (브랜치명)`

원격 저장소의 브랜치를 삭제합니다.

### 브랜치 이름 변경하기

▪ `git branch --move (브랜치명) (변경할 브랜치명)`

브랜치 이름을 새롭게 변경합니다.

▪ `git push --set-upstream origin (변경할 브랜치명)`

> 변경할 브랜치명을 원격저장소에 업데이트 합니다.

## 출처

- 드림코딩
