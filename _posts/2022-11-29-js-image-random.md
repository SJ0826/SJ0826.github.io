---
title: "이미지 랜덤 배치"
excerpt: ""
toc: true
toc_sticky: true

categories:
  - JavaScript
tags:
  - ["JavaScript"]
last_modified_at: 2022-11-29T08:06:00-05:00
---

## 📄 이미지 랜덤 배치하기

**목표: Vanila JavaScript로 새로고침 될 때마다 이미지가 특정 범위에 랜덤으로 배치된다.**

원하는 범위의 위치를 받아와서 **이미지의 left와 right 값을 지정**해주자!<br>

## 📄 1. 원하는 feild의 위치를 파악한다.

```js
const fieldRect = field.getBoundingClientRect();
function initGame() {
  console.log(fieldRect);
}
```

`getBoundingClientRect`를 이용해 출력하면 지정한 요소의 위치를 콘솔창에서 확인할 수 있다.

## 📄 2. feild에 추가하기 전에 이미지를 생성하는 함수를 만들어준다.

```js
// 랜덤으로 숫자를 생성하는 함수
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// 아이템을 생성하는 함수
function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  // 이미지가 feild에서 벗어나는 것을 막기 위해 최댓값을 조정한다.
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;

  for (let i = 0; i < count; i++) {
    const item = document.createElement("img"); // 이미지 추가!
    item.setAttribute("class", className); // 이미지에 클래스 속성추가!
    item.setAttribute("src", imgPath); // 이미지 경로 추가!
    item.style.position = "absolute"; // feild에 상대적으로 오프셋 적용
    const x = randomNumber(x1, x2); // 최솟값 x1와 최댓값 x2 사이에서 랜덤으로 숫자를 받아 상수 x에 할당!
    const y = randomNumber(y1, y2); // 최솟값 y1와 최댓값 y2 사이에서 랜덤으로 숫자를 받아 상수 y에 할당!
    item.style.left = `${x}px`; // 추가한 이미지의 left값에 x값 할당!
    item.style.top = `${y}px`; // 추가한 이미지의 top에 y값 할당!
    field.appendChild(item); // field에 해당 이미지를 추가
  }
}
```

## 📄 3. addItem함수에 값을 지정한다.

```js
function initGame() {
  addItem("carrot", 5, "carrot.png"); // 당근 이미지 5개!
  addItem("bug", 5, "bug.png"); // 벌레 이미지 5개!
}
```

#### 결과

![캡처](https://user-images.githubusercontent.com/56298540/184609114-2aaf8d9f-db80-40b6-9a59-a9b7b67ea962.PNG)

새로고침할 때 마다 당근 5개와 벌레 5개가 배치된다.

## 느낀점

강의 전혀 안보고 하려고 했는데 실패했다~ <br>
이미지를 랜덤으로 배치하는 함수가 따로 있는 줄 알았다.<br>
모든게 함수나 API로 있진 않나보다.<br>
구글링할때 많은 사람들이 제이쿼리를 쓰는 것을 보았다.<br>
생각보다 바닐라로 구현하는 내용은 보지 못했다.<br>
코드를 혼자서 완성시키는 것은 지금 당장 해내지 못할지라도 강의에서 보여주는 코드를 완벽하게 이해하고 넘어가서 다음에 사용하는 경우가 생긴다면 그때는 꼭 적용시켜서 스스로 해낼 것이다.<br>

## 출처

- 드림코딩
