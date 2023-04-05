---
title: "[모여봐요 코딩의 늪] 🚨 react-scripts: not found"
excerpt: "github actions 배포 자동화 과정에서 발생"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - coding-swamp
tags:
  - ["모코늪", "리액트", "github actions", "에러", "npm ci"]
last_modified_at: 2023-04-04T08:06:00-05:00
---

## 🚨 문제 발생

모코늪 프로젝트에서 github actions를 통해 프로젝트를 배포하는데 `npm run build`명령어가 되질 않습니다.

![image](https://user-images.githubusercontent.com/56298540/229796651-09a5dd5c-951d-4c6e-8ae5-fa01d747ea16.png)

프로젝트에서 npm을 업데이트하고 설치해도 같은 문제가 발생해서 아예 **package.lock**파일과 **node_modules**폴더를 삭제하고 다시 npm을 설치해주었습니다.

실패했습니다.

## 🔨 문제 해결

구글링하면 왜 자꾸 사람들이 node_modules를 지워라, 다시 npm install을 해라 하는지 알았습니다.

그런 케이스들은 로컬 환경에서 일어났던 에러였으니 당연히 다시 npm을 설치해 초기화 시켜주면 해결이 되었던 것입니다.

저는 로컬 환경에서는 빌드가 되었지만 github actions에서 되지 않았던 것이었는데 말이죠.

저의 CICD.yml파일입니다.

```yml
jobs:
  CICD:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@main
      # - run: npm ci 이 부분을 실수로 삭제 해놓고 헤매고 있던 것이었습니다.
      - run: npm run build
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

### 📌 npm ci 란?

npm ci는 package-lock.json에 있는 패키지 정보를 이용해 정확한 버전의 패키지들을 설치해서 node_modules에 적재합니다.

`npm run build`을 실행할 수 있는 파일은 node_modules에 있는데 node_modules를 설치하지 않았으니 에러가 발생할 수 밖에요.

---

그런데 사실 에러가 완전히 끝나지 않았습니다.

![image](https://user-images.githubusercontent.com/56298540/229803270-b3879941-04d0-4416-aaf1-6d94fb25fdae.png)

@toast ui 라이브러리가 현재 사용중인 react 18버전과 맞지 않습니다.

산넘어 산입니다.

이거 리액트 버전을 낮추는거 밖에 답이 안보이네요.

## 참고

- https://github.com/facebook/create-react-app/discussions/10220
