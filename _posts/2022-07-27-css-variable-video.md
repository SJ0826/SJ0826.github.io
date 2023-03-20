---
title: "가변 동영상"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - CSS
tags:
  - ["가변 동영상", "video", "iframe"]
last_modified_at: 2022-07-27T08:06:00-05:00
---

## 📄 가변 동영상

동영상도 이미지와 마찬가지로 화면 배율에 따라 가변적으로 크기를 설정할 수 있습니다.

다만 유튜브 등 동영상 서비스에 따라 성질이 다를 수 있어 주의해야 합니다.

## 📄 가변 동영상 설정 1 | vedio 태그

```css
<video src="./my-cat.mp4" controls></video>
```

동영상 파일을 직접 가지고 있다면, 이렇게 `body`태그안에서 `video`태그를 설정하면 됩니다.

컨트롤 속성으로 컨트롤 패널을 추가했습니다.

`style`태그에서 너비를 `%`단위로 지정하게 되면 화면 크기에 따라 동영상 화면 크기가 변합니다.

## 📄 가변 동영상 설정 2 | iframe 태그

하지만 동영상 파일을 직접 가지고 있지 않다면 유튜브 등 동영상 서비스를 이용하는 방법이 있습니다.

유튜브에서 원하는 동영상을 선택후 `공유 > 퍼가기`를 선택합니다.

![iframe](https://user-images.githubusercontent.com/56298540/181203648-c1eae3fe-c877-45c0-8db9-f69e46f9bf2d.PNG)

유튜브는 이렇게 `iframe`태그를 제공합니다.

이 `iframe` 태그를 `body`태그로 가져오면 웹페이지에 동영상을 설정할 수 있습니다.

### ▪ iframe 태그의 문제점

style태그에서 iframe태그의 너비를 100%로 설정해주면 생각보다 동영상 화면 크기 전환이 자연스럽지 않은 것을 확인할 수 있습니다.

제공받은 iframe태그는 동영상 서비스에서 다양한 속성을 설정하는 등 단순하지 않은게 이유가 됩니다.

이 문제는 여백을 만들어주고 그 여백에 동영상 크기를 맞춤으로써 해결할 수 있습니다.

```css
<div class="player">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BYMM5Dh_tSY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```

- 여백을 설정해줄 div를 설정해준 후 iframe태그를 넣었습니다.

```css
<style>
     .player{
       padding-top: 56.25%;
       position: relative;

     }
     iframe{
       position: absolute;
       top: 0; left: 0;
       width: 100%;
       height: 100%;
     }
</style>
```

- 스타일 태그안에서 클래스 선택자를 이용해 player로 설정한 div의 `padding-top`크기를 동영상의 종횡비에 맞추어 `%`단위로 지정했습니다.
- iframe은 position을 이용해 위치를 고정시키고 너비와 높이를 부모 요소인 player에 맞게 `100%`설정했습니다.

이렇게 iframe태그로 동영상을 가져오면 크기 전환이 더 자연스럽고 보다 나은 웹 구현이 가능하게 됩니다.

## 출처

- 유노코딩
