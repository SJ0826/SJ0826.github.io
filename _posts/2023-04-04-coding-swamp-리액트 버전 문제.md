---
title: "🚨 Could not resolve dependency + package maneger Error"
excerpt: "리액트 꼬리에 꼬리를 무는 다운그레이드"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - coding-swamp
tags:
  - [
      "모코늪",
      "리액트 버전",
      "toast-ui",
      "다운 그레이드",
      "testing-library",
      "에러",
      "npm",
    ]
last_modified_at: 2023-04-04T08:06:00-05:00
---

## 🚨 문제 발생

리액트 프로젝트를 github actions를 통해 배포하는데 문제가 발생했습니다.

리액트 버전이 현재 18.2.0인데 @toast-ui라이브러리와 맞지 않습니다.

![image](https://user-images.githubusercontent.com/56298540/229803270-b3879941-04d0-4416-aaf1-6d94fb25fdae.png)

아무래도 리액트를 17로 버전을 낮춰야겠습니다.

## 🔨 해결 과정

다음 명령어를 통해 리액트를 `17.0.2`버전으로 다운그레이드 합니다.

당연히 react-dom도 함께 다운그레이드 합니다.

```
npm install react@^17.0.2 react-dom@17.0.2
```

![image](https://user-images.githubusercontent.com/56298540/229811519-a097a0b8-b098-48bd-a093-b54dcb5ef501.png) 👍

이제 로컬에서 잘 돌아가는지 테스트해보겠습니다.

버전이 바뀌니 뭔가 문제가 발생하네요.

내 이럴 줄 알았습니다.

### ▪ Can't resolve 'react-dom/client'

![image](https://user-images.githubusercontent.com/56298540/229812431-680ad17b-03e8-48ad-83b3-1fc99d62c4e3.png)

<h4>💾 [index.ts]</h4>

버전이 바뀌어 사용방법도 다릅니다.

아래 코드처럼 수정해줍니다.

```ts
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
```

### ▪ Property 'createRoot' does not exist on type

바뀐 버전은 렌더 방식도 다릅니다.

마찬가지로 index.ts파일에서 진행됩니다.

리액트 17버전은 ReactDOM이 직접 render하는 구조입니다.

```ts
// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

// root.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <ThemeProvider theme={theme}>
//         <GlobalStyle />
//         <Page>
//           <App />
//         </Page>
//       </ThemeProvider>
//     </PersistGate>
//   </Provider>,
// );

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Page>
          <App />
        </Page>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
```

이제 문제 없이 프로젝트가 잘 돌아갑니다.

과연 `npm ci`명령도 잘 통과할까요..

## 🚨 문제 발생 #2

![image](https://user-images.githubusercontent.com/56298540/229816887-6d15af8c-000a-4d8b-90b6-d709b2c60a5d.png)

이번엔 **testing library**가 문제네요.

현재 설치되어 있는 testing-library 버전 @13.4.0은 react 버전 @18.0.0이랑 맞는답니다.

라이브러리끼리 서로 합의 봐주면 안되는 것이었을까요.

찾아보니 react-testing-libray 12버전은 react 18버전 아래로는 다 지원이 가능하다고 합니다.

## 🔨 문제 해결

react-testing-library를 `12.1.5`버전으로 다운그레이드 하겠습니다.

```
npm install @testing-library/react@^12.1.5
```

## 🚨 문제 발생 #3

`npm ci`명령에서 다시 문제가 발생했습니다.

![image](https://user-images.githubusercontent.com/56298540/229825875-fb878b52-f944-4aed-a9b8-74372a902f04.png)

package-lock.json파일을 삭제 후 다시 `npm install`해도 안되네요.

npm install로 npm을 설치해서 package-lock.json파일도 생성되었는데 왜 안될까요.

## 🔨 문제 해결

그것은 바로 제가 **yarn.lock**파일을 가지고 있었기 때문입니다.

프로젝트를 계속 yarn으로 진행했는데 이게 문제가 될 줄 몰랐습니다.

CI를 진행하는데 필요한 정보가 `package-lock.json`이 아니라 `yarn.lock`에 있었나 봅니다.

그렇다면 이제부턴 정말 yarn뿐입니다.

npm을 쓰든 yarn을 쓰든 하나의 매니저와 갑시다...

npm은 보내주고 yarn을 사용해 CI를 진행하겠습니다.

yarn으로 ci를 실행시키는 커맨드는 다음과 같습니다.

```
yarn install --immutable --immutable-cache --check-cache
```

<h4>[💾 CICD.yml]</h4>

문제된 부분을 수정합니다.

```yml
jobs:
  CICD:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@main
      - run: yarn install --immutable --immutable-cache --check-cache // 🎉
      - run: yarn build // 🎉
      - name: deploy to s3
        uses: jakejarvis/s3-sync-action@master
        with:
          args: --delete
        env:
          AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: "ap-northeast-2"
          SOURCE_DIR: "build"
```

![image](https://user-images.githubusercontent.com/56298540/229835992-95140d01-cfc0-4276-9b10-e0890df94787.png)

드디어...CICD 파이프라인이 완성되었습니다. 🎉

---

## 🥶 오늘의 회고

공부를 하면 할수록 꼼수를 부리면 나중에 탈이 나고, 귀찮아서 넘기면 눈덩이처럼 커져 돌아오는것을 알았습니다.<br/>
그냥 애초에 눈에 보일 때 해결해야 뒤탈이 없습니다.<br/>
사실 toast-ui에 뭔가 버전이 안맞는 다는 걸 알았는데 개발환경에선 문제가 없길래 넘겼거든요.<br/>
인터스텔라가 흥행한 이유는 과거를 후회하는 인간이 많기 때문일까요.<br/>
이상 독학러의 주저리였습니다.

---

## 참고

- [what-are-the-corresponding-testing-library-react-versions-for-react-16-8-6](https://stackoverflow.com/questions/72264785/what-are-the-corresponding-testing-library-react-versions-for-react-16-8-6)

- [npm-ci-can-only-install-packages-with-an-existing-package-lock-json-or-npm-shrin](https://stackoverflow.com/questions/69984660/npm-ci-can-only-install-packages-with-an-existing-package-lock-json-or-npm-shrin)
