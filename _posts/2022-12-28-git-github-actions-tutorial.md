---
title: "github-actions-tutorial"
excerpt: "github actions로 CI/CD 파이프라인 구축하기"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - Git
tags:
  - ["github actions", "CI", "CD", "스터디"]
header:
  teaser: assets\image\git logo.jpg
last_modified_at: 2022-12-28T08:06:00-05:00
---

## 📄 CI/CD

: 어플리케이션 개발 단계부터 배포때까지 모든 단계를 자동화하는 과정

<h3>🎲 Point (큰 틀로 먼저 생각하기)</h3>

- CI - 새로운 변경 사항 머지, 빌드, 테스트 자동화
- CD - 배포 자동화 (with AWS S3)

* github actions: 자동화를 가능하게 해주는 하나의 가상 컴퓨터

<h3>▪ CI (Continuos Integration) - 지속적인 통합</h3>

: 새로운 코드의 변경 사항이 빌드 및 테스트 되어 공유 레포지토리에 지속적으로(=자동적으로)통합되는 것

- 코드 변경사항을 주기적으로 빈번하게 머지해야 한다. = 작은 단위로 나누어 머지를 진행한다.

* CI를 위해 작성된 스크립트를 통해 테스트의 과정이 자동으로 진행된다.

<h3>▪ CD (Continuous Delivery(or Deployment)) - 지속적인 제공(or 배포)</h3>

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeeSLmu%2FbtqI9pXqCN8%2FiIopSPh3KSK1SwhRjkWPf1%2Fimg.png)

- Continuous Delivery는 개발환경 배포까지 자동화,
- Continuous Deployment는 Production 레벨까지 자동으로 deploy 하는 것을 의미
- CD는 개발자의 변경 사항이 레포지토리를 넘어, 고객의 프로덕션(Production) 환경까지 릴리즈 되는 것을 의미합니다.

CI/CD를 위해 플랫폼을 사용하는데 설치형과 클라우드형이 있다.

대표적인 설치형 플랫폼은 Jenkins, 클라우드형 CI/CD 플랫폼은 Github Actions가 있다.

> 클라우드 서비스? 타사 제공업체가 호스팅하여 인터넷을 통해 사용자에게 제공하는 인프라, 플랫폼 또는 소프트웨어

<h3>▪ 왜 CI/CD를 구축할까? (CI/CD의 장점)</h3>

- 개발 생산성을 향상 시켜준다.
- 문제점을 빠르게 발견할 수 있다.
- 발견된 버그를 빠르게 수정 또한 가능하다.

* 코드의 퀄리티 향상 > 코드의 유닛 테스트가 가능하기 때문

---

## 📄 What is Github Actions !

: Github에서 제공하는 클라우드형 CI/CD 툴

<h3>🎲 Point (사용 이유를 명확히 이해하기)</h3>

- CI/CD 자동화 파이프라인을 구축하기 위해서 사용한다.
- 자동화를 위해 github 에서 제공하는 하나의 가상 컴퓨터

<h3>▪ 장점</h3>

- 툴(ex. Jekins)을 따로 설치하지 않고 Repository에서 관리
- 쉬운 설정

<h3>▪ 알아야 할 개념 5가지</h3>

![image](https://docs.github.com/assets/cb-25535/images/help/images/overview-actions-simple.png)

```yml
name: CI/CD

on:
  push: // push event
    branches:
      - main
   pull_request: // pr event
    branches:
      - main
  workflow_dispatch: // github actions 페이지에서 workflow를 실행할 수 있는 기능을 추가하는 이벤트

jobs:
  helloWorld:
    runs-on: ubuntu-latest // runner
    steps:
      - run: echo HelloWorld
      - uses: actions/checkout@master
```

1. **Workflows**

   - 특정한 이벤트가 발생했을 때 어떤 일을 수행하는 지 알려주는 자동화된 프로세스
   - 여러 Job으로 구성

2. **Events**

   - github에서 발생할 수 있는 이벤트(main 브랜치로 머지, 커밋을 푸쉬)

3. **Jobs**

   - 하나의 Runner에서 실행될 여러 step 모음, workflow의 job들은 동시에 실행(병렬로 실행), step은 순차적으로 실행

   * 여러 step으로 구성되어 있음.
   * 다른 Job에 의존할 수 있고, 독립적 또는 병렬적으로 실행 가능.

4. **Actions**

   - github workflow 라이브러리
   - 남들이 만들어둔 일련의 step들을 가져다 씀.
   - `use` 키워드를 사용
     ![17](https://user-images.githubusercontent.com/56298540/209701432-0b61f28b-0840-4b39-912b-bcf3ba901c1b.PNG)
     marketplace에 설정된 actions가 많음. 가져다쓰면 된다.
     ![18](https://user-images.githubusercontent.com/56298540/209701575-6859868a-dcad-452a-86d0-183c7826ce2d.PNG)
     직접 코드 수정시에도 확인가능

5. **Runners**

   - 내가 직접 Job을 실행시킬 필요 없이 Job을 실행시키는 VM 머신(가상 컴퓨터)

6. **workflow dispatch**
   ![16](https://user-images.githubusercontent.com/56298540/209699575-a329e781-1dc5-4242-b328-4cd831c66b8d.PNG)

## 📄 GitHub Actions으로 CI 파이프라인 구축하기

CRA에는 별도의 test 기능이 있기 때문에 jest와 같은 테스트 라이브러리를 설치할 필요가 없다.

- App.js

```js
import "./App.css";

function App() {
  return <h1>Hello, World</h1>;
}

export default App;
```

- App.test.js (테스트코드 예시)

```js
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />); // App.js가 렌더링 되는지 확인

  // h1 태그를 가지고 있는지 테스트
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();

  // App.js가 Hello, Deploy라는 글자를 가지고 있는지 테스트
  expect(heading.textContent).toBe("Hello, Deploy");
});
```

- CICD.yml
  프로젝트 경로에 `.github\workflows`라는 폴더를 만들어 `yml`파일을 생성한다.

```yml
name: CI/CD

on:
  push:
    branches:
      - main
   pull_request:
    branches:
      - main
  workflow_dispatch:

jobs:
  helloWorld:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - run: npm ci // clean install의 약자, npm package를 설치한다.
      - run: npm run test
      - run: echo SUCCESS
```

<h3>✔ 잘못된 코드로 테스트 자동화 확인해보기</h3>

Hello deploy를 Hello World으로 바꾸어 테스트.

```js
import "./App.css";

function App() {
  return <h1>Hello, World</h1>;
}

export default App;
```

![19](https://user-images.githubusercontent.com/56298540/209702933-0dd2ec26-0d0f-4438-a234-5a87fbe18b31.PNG)

어느 부분에서 test를 통과하지 못했는지 확인할 수 있다.

<h3>▪ 정상 코드로 테스트 자동화 실행하기</h3>

![20](https://user-images.githubusercontent.com/56298540/209703425-124f2696-8933-4e4f-939e-25fb61f3784a.PNG)

모든 step이 작동한 것을 확인할 수 있다.

<h3>▪ PR할 때 제대로 test 되는지 확인해보기</h3>

1. 코드를 작성할 브랜치(break-tests)생성
2. push후 pr 생성
   ![6](https://user-images.githubusercontent.com/56298540/209554509-93485f88-1590-4925-b6c9-927e04f64955.PNG)

   바로 test결과를 알 수 있다.
   Detail을 클릭하면 action으로 넘어가 해당 work flow에서 어디가 잘못되었는지 확인 할 수 있다.
   ![7](https://user-images.githubusercontent.com/56298540/209554654-dcc48096-3926-4828-a196-9945dd986664.PNG)

   PR목록에서도 확인 가능하다.
   ![9](https://user-images.githubusercontent.com/56298540/209555186-4936e1b7-bd61-4579-9e5d-bfa9e66c6077.PNG)

   테스트시 문제가 없으면 초록 뱃지가 뜨는 것을 확인 할 수 있다.

<h4>📌 참고. github 페이지에서 workflow 생성하기 </h4>

1. CI/CD를 적용할 프로젝트의 action 탭에서 node.js 템플릿을 선택한다.
   ![1](https://user-images.githubusercontent.com/56298540/209549983-5875e074-9404-4198-93b6-73ec7dbc1374.PNG)
2. 기본적인 템플릿에서 각자 상황에 맞게 수정한다.
   ![2](https://user-images.githubusercontent.com/56298540/209550394-fb55e7df-e4ec-4e1d-8d06-9fa3f1b4f5b7.PNG)

## 📄 github actions를 사용해 CD 파이프라인 만들기 (with AWS S3)

- AWS: 아마존에서 만든 클라우드 서비스
- AWS S3: AWS에서 제공하는 인터넷 스토리지 서비스 like vercel

<h3>1. AWS에서 회원가입 후 버킷(= 저장소) 만들기</h3>

![1](https://user-images.githubusercontent.com/56298540/209651198-c164df1b-cd85-49fb-9309-4c30e037d5c7.PNG)

AWS 리전: 어디에 있는 컴퓨터를 빌려 쓰는가?

객체 소유권 - ACL 비활성화 (권장)
![2](https://user-images.githubusercontent.com/56298540/209651442-102a6661-bd6d-47b9-89b0-591bf7b3f4be.PNG)
![3](https://user-images.githubusercontent.com/56298540/209651769-907f926a-a16b-4b24-9b85-aa82079a8953.PNG)

:star: 중요. 퍼블릭 엑세스 차단 해제 > 우리가 만드는 웹에 모두가 접근하게 하기 위해서

주의(빨간 세모)박스에는 체크.

버킷 버전 관리 - 비활성화 체크

기본 암호화 - 비활성화 체크

버킷 만들기

![4](https://user-images.githubusercontent.com/56298540/209652488-1ee794d4-15d8-45be-ad84-89d952c26137.PNG)

<h3>2. 프로젝트 build 실행하고 버킷에 파일 업로드하기</h3>

![5](https://user-images.githubusercontent.com/56298540/209653758-d490e890-d391-49e7-b41e-b8a9a6f39087.PNG)

프로젝트 **build 폴더**에 있는 파일을 업로드 합니다.

![6](https://user-images.githubusercontent.com/56298540/209654335-94dc3f49-154c-44d4-aa74-8580bb7df74e.PNG)

- 속성탭에서 정적 웹 사이트 호스팅을 활성화 합니다.
  - 정적 웹 페이지: Client Side Rendering방식으로 진행되는 웹 페이지 (이미 저장된 html 문서를 클라이언트에게 전송)
  - 동적 웹 페이지: Server Side Rendering방식으로 진행되는 웹 페이지 (사용자의 요청 정보를 처리한 후에 제작된 HTML문서를 클라이언트에게 전송)
  * 따라서 AWS S3 기능으로는 Next.js로 만든 웹 페이지를 호스팅할 수 없음. AWS EC2라는 기능이 있다고 함.
- 인덱스 문서 - 특정한 웹사이트로 버킷에 접속하면 처음으로 보여줄 기본 페이지
  ![7](https://user-images.githubusercontent.com/56298540/209654504-f77f29b1-c4ca-4161-ac85-75e752a368bf.PNG)

  호스팅을 활성화 하면 주소를 받습니다.

  하지만 처음엔 `403 Forbidden` 에러가 발생합니다.

  왜? 니가 누군지 아는데 닌 권한이 없다. 버킷안에 있는 객체에 접근할 권한이 없다.

  차단 풀었는데 왜? 아까는 차단을 거는 것을 해제한것.

  차단은 풀렸지만 권한은 따로 부여해주어야 한다.

  권한을 부여하자

<h3>3. 웹페이지에 접근 권한을 부여한다.</h3>

권한 탭에 들어가서 버킷 정책으로 이동한다.

![8](https://user-images.githubusercontent.com/56298540/209656688-11a1e1c0-b2dd-45ba-8581-d5dbf6b41f37.PNG)

버킷 정책에서 엑세스 권한 설정이 가능하다. Json 파일로 제작

```json
{
  "Version": "2012-10-17", // 정책을 설정하는 aws문법의 마지막 업데이트
  "Statement": [
    {
      "Sid": "PublicReadGetObject", // 사이드 아님. S아이디임. 고유한 ID.
      "Effect": "Allow", // 권한을 허용할지 말아야할지
      "Principal": "*", // 누구한테 권한을 허용할 것인지
      "Action": "s3:GetObject", // 어떤 행동을 허락할 것인지
      "Resource": "arn:aws:s3:::<bucket-name>/*" // 여러가지 버킷 또는 파일 중 권한을 허용할 리소스
    }
  ]
}
```

![9](https://user-images.githubusercontent.com/56298540/209677998-9648ba28-091f-4a2b-b316-036fbebf721d.PNG)

버킷 정책에서 권한을 모두에게 허용하면, `403` forbidden error가 사라지고 잘 작동하는 것을 확인할 수 있습니다.

여기까지 aws에 파일을 올려서 한 수동적인 배포!

<h3>4. 터미널에서 AWS S3에 배포하고 github actions로 자동화하기!</h3>

자동화하기 위해 터미널에서 aws를 다룰 수 있도록 aws CLI를 설치한다.
AWS 공식 DOC에서 AWS CLI를 설치한다.
설치 방법: [Windows(OS) PC에 AWS CLI 설치하기](https://longtermsad.tistory.com/43)

> AWS CLI란? AWS Command Line Interface, 터미널에서 AWS 실행을 가능하게 해주는 오픈 소스 도구

![10](https://user-images.githubusercontent.com/56298540/209680950-107a48c8-49c4-4d20-bbcc-f4c61da73020.PNG)

유저탭을 클릭해 보안자격증명 페이지로 들어가 **엑세스키 만들기** 버튼을 클릭한다.
![11](https://user-images.githubusercontent.com/56298540/209681592-710b2559-db6c-4594-8c82-2a351d202783.PNG)

엑세스키 만들기 버튼을 눌러 단계를 진행하면 만들어진 엑세스키를 보여준다.

- 엑세스 키 = 사용자의 아이디
- 비밀 엑세스 키 = 사용자의 비밀번호
  :star: 중요! 비밀 엑세스 키는 처음 만든 상황 이후에는 보이지 않으니 따로 저장해 두어야 한다.

![12](https://user-images.githubusercontent.com/56298540/209682705-fc4b4dd9-8c89-4cb3-9992-41223b2c0ece.PNG)

터미널에서 `aws configure --profile <프로필 이름>`을 입력해 프로젝트 배포에 사용될 프로필을 설정한다.

- Default region name: ap-northeast-2 // 서울

![13](https://user-images.githubusercontent.com/56298540/209683241-d1898799-b97a-435d-a38f-266debe09782.PNG)

`aws configure list-profiles`명령어를 통해 생성된 프로필을 확인할 수 있다.

![14](https://user-images.githubusercontent.com/56298540/209684158-4a0b55a5-ed0b-427c-819c-732027ea6a62.PNG)

`aws s3 sync build/ s3://<aws 페이지에서 생성한 버킷 이름> --delete --profile <사용할 프로필 이름>`
: aws 페이지에서 작성한 버킷의 객체를 모두 지우고 현재 루트에 있는 build파일을 모두 업로드 한다.

![15](https://user-images.githubusercontent.com/56298540/209684735-ef843314-8642-4c33-bcc3-0001460fee42.PNG)

aws 페이지에서도 파일들이 업로드 된것을 확인할 수 있다.
프로젝트의 내용이 변경된 경우, build하고 다시 버킷에 파일을 업로드하면 변경된 내용을 확인할 수 있다.

<h3>5. 본격적으로 CD 파이프라인 구축하기</h3>

```yml
name: CI/CD

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  CICD:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@main
      - run: npm ci
      - run: npm run test
      - run: echo SUCCESS
      - run: npm run build
      - name: deploy to s3
         uses: jakejarvis/s3-sync-action@master // 이부분을 main으로 바꾸면 error발생
         with:
            args: --delete // 버킷에 있는 모든 객체 삭제
         env: // 환경변수 세팅
            AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
            AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
            AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
            AWS_REGION: 'ap-northeast-2'
            SOURCE_DIR: 'build'
```

엑세스 키 비밀번호를 숨기기 위해 깃헙에서 자체적으로 제공해주는 기능을 사용한다.
![21](https://user-images.githubusercontent.com/56298540/209705093-19c24a68-efd8-40bb-b5f5-aa3998b7fedf.PNG)

Settings> secrets/Actions > New repository secret
중요. 수정은 가능하지만 원래 저장했던 내용은 볼 수 없다.
![22](https://user-images.githubusercontent.com/56298540/209705547-05681444-5d0c-4b4f-a6ad-daf25412a054.PNG)

환경변수는 생성했던 버킷 이름, ID, 비밀번호를 설정하면 된다.

main 브랜치에 push를 날리면
![23](https://user-images.githubusercontent.com/56298540/209706474-f1d6c590-e149-439f-b7e2-809f7a5aa948.PNG)

actions탭에서 CD가 성공적으로 구축된 것을 확인할 수 있다.

## 📄 팀원들과 토론할 점

- develope 브랜치에 push & pr할때 CI 작동

* CD는 어느 이벤트에 작동하도록 설정해야 하는지?

## 출처

- 원티드 프리온보딩 프론트엔드 인턴십 강의

* [드림코딩 - CI/CD 5분 개념 정리](https://www.youtube.com/watch?v=0Emq5FypiMM)

- [드림코딩 - 제발 깃허브 액션 모르는 개발자 없게 해주세요](https://www.youtube.com/watch?v=iLqGzEkusIw) :star: 정리 Good!
- [Github Actions 공식문서](https://docs.github.com/en/actions)

- [CI/CD란 무엇인가](https://artist-developer.tistory.com/24)
- [어쩐지 오늘은 - Github Action 사용법 정리](https://zzsza.github.io/development/2020/06/06/github-action/) :star: 정리 Good!
- [DaleSeo - Jest로 기본적인 테스트 작성하기](https://www.daleseo.com/jest-basic/)
- [Windows(OS) PC에 AWS CLI 설치하기](https://longtermsad.tistory.com/43)

* [GitHub Docs - Understanding GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)
