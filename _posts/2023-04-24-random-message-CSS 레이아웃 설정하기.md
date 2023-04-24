---
title: "[메세지가 도착했습니다] 컴포넌트 겹침 현상 해결하기"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - random-message
tags:
  - ["CSS", "레이아웃"]
last_modified_at: 2023-04-24T08:06:00-05:00
---

## 🚨 CSS 레이아웃 문제 발생

데스크탑 환경에서는 몰랐지만 배포하고 모바일에서 테스트해보니 Footer가 되는 컴포넌트가 다른 컴포넌트와 겹치는 현상이 발생했습니다.

![image](https://user-images.githubusercontent.com/56298540/233956639-26067272-4798-4e1b-ba34-077c7a0d73a4.png)

아무래도 Footer컴포넌트가 항상 밑에만 있으면 된다는 생각에 position설정을 absolute로 줘서 그런것 같습니다.

뷰포트 높이의 길이는 한정되어 있는데 모바일 화면은 데스크탑보다 작으니 자리가 고정되어 있는 Footer컴포넌트가 밀리지 않고 겹쳐지게 됩니다.

## 🔨 문제를 해결해보자

우선 Footer CSS를 변경하겠습니다.

```css
.footer {
  width: 100%;
  max-width: 650px;
  // position: absolute; 🔨
  // bottom: 0; 🔨
  padding: 1rem;
  text-align: left;

  .github__link {
    display: flex;
    align-items: center;
    text-decoration-line: none;
    color: $text-dark1;
    &:hover {
      cursor: pointer;
    }
  }
}
```

해당 부분을 주석으로 없앴더니 다른 문제가 발생합니다.

아예 페이지 바깥으로 컨텐츠가 탈출해버렸습니다.

![image](https://user-images.githubusercontent.com/56298540/233959070-e5a521ab-884f-4545-aece-65fcf4294a50.png)

이렇게 컨텐츠가 넘치는 현상을 막기 위해 페이지 컴포넌트에 `overflow: auto`를 추가합니다.

```scss
.start__container {
  @include set-box-size();
  @include set-center-aligned;
  flex-direction: column;
  background-color: $main-color;

  overflow: auto; // 🎉
}
```

![image](https://user-images.githubusercontent.com/56298540/233959941-dcbd1bc5-3670-4072-bb87-ffa6391c33cd.png)

이제 더이상 컴포넌트끼리 겹치지도, 컨텐츠가 페이지 밖으로 튀어나오지도 않습니다 :)
