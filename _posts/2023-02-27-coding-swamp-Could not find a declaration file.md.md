---
title: "[모여봐요 코딩의 늪] 🚨 Could not find a declaration file of module"
excerpt: "Redux-persist를 사용 중 발생한 에러 해결 과정"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - coding-swamp
tags:
  - ["모코늪", "redux-persist", "react-app-env.d.ts"]
last_modified_at: 2023-02-27T08:06:00-05:00
---

## 🚨 에러 발생

모코숲 프로젝트 진행 중 react-persist를 설치해서 사용하려고 하는데 에러가 발생했습니다.

![image](https://user-images.githubusercontent.com/56298540/221556374-51594fbe-1461-47b3-abcb-9e9e023e9374.png)

하라는대로 `npm i --save-dev @types/redux-persist`를 입력해도 계속 동일한 현상이 발생합니다.

## 🔨 에러 해결

**react-app-env.d.ts**파일에 다음과 같이 추가해주었습니다.

```
/// <reference types="redux-persist" />
```

평소에 크게 신경 쓰지 않았던 파일이기에 여기서 에러가 해결될 줄 몰랐다.

#### 📌 react-app-env.d.ts 란?

`d.ts` 는 전역에서 사용할 타입 유형을 선언만 할 수 있는 파일입니다.

이 파일은 컴파일 이후 자바스크립트 코드로는 생성되지 않습니다.

CRA로 프로젝트 생성시 자동으로 react-app-env.d.ts파일이 생성됩니다.

```ts
/// <reference types="react-scripts" />
```

여기서 트리플 슬래시(`///`)로 작성된 내용은 컴파일러 지시어로 사용됩니다.

node_modules의 `react-script`라는 dependency를 불러와서 사용한다는 뜻입니다.

이런 지시어는 패키지에 대한 종속성을 선언하는데 사용됩니다.

## 참조

[stack overflow - How to add redux-persist to typescript project?](https://stackoverflow.com/questions/59874937/how-to-add-redux-persist-to-typescript-project)
