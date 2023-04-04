---
title: "Commit Head란?"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - Git
tags:
  - ["commit", "Head"]
last_modified_at: 2022-07-22T08:06:00-05:00
---

## 📄 HEAD란?

파일을 commit할 때, 현재 commit한 파일은 이전 commit한 파일을 참조합니다.

a b c d 순으로 commit한다고 가정할 때, b는 a를 가리키고 c는 b를 가리킵니다.

이런식으로 commit을 해 나가는 기본 줄기를 master branch 라고 합니다.

> a <- b<- c<- d (시각적 표현)

이 master brach에서 HEAD는 마지막으로 commit한 d파일을 가리키게 됩니다.

이때 c는 head~1이 되어 head가 있는 곳에서 첫 번째 부모임을 설명합니다.

b도 마찬가지로 head~2가 됩니다.

만약, b로 돌아가고 싶다면

```
git checkout b해쉬태그
```

를 입력하여 b로 돌아갈 수 있습니다.

![git checkout](https://user-images.githubusercontent.com/56298540/180416896-3faceac3-222d-4340-9c7d-0ded87a32286.PNG)

```
git checkout master
```

위와 같이 입력하면 다시 원상태로 돌아옵니다.

## 참고

- 드림코딩
