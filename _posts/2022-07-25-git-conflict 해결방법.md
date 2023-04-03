---
title: "Git Conflict 해결 방법"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - Git
tags:
  - ["git conflict", "깃 충돌"]
last_modified_at: 2022-07-25T08:06:00-05:00
---

## 📄 merge conflict

merge를 하는 과정에서 자동적으로 해결이 안되는 충돌이 발생한 상황을 말합니다.<br>
예를 들어, 서로 다른 브랜치에서 동일한 파일을 수정했을 때 충돌이 발생할 수 있습니다.

아래와 같이 merge conflict가 발생한 것을 확인 할 수 있습니다.<br>

![conflict](https://user-images.githubusercontent.com/56298540/180723633-9b986e68-4705-4315-9a79-542f3edda636.PNG)

> Automatic merge failed: 자동 merge가 실패 됨.

`git status`를 입력해 확인해 보면 동시에 수정된 파일을 확인할 수 있습니다.<br>

![conflict2](https://user-images.githubusercontent.com/56298540/180723957-aff2ff2f-e1df-4f60-bf48-f7b40134d3fe.PNG)

`cat (파일명)`을 입력하면 conflict가 발생한 부분을 알려주기 위해 자동으로 삽입된 문자열을 확인할 수 있습니다.<br>

![conflic3](https://user-images.githubusercontent.com/56298540/180724314-bce811c6-fab5-424b-a9c3-240e08dfc0d0.PNG)

## 📄 merge conflict 수동적 해결방법

1. `open 해당 파일 (윈도우: start 해당파일)`명령어를 이용하여 conflict가 발생한 파일을 열어줍니다.<br>
   ![conflict4](https://user-images.githubusercontent.com/56298540/180725882-ee05f677-fc22-4324-958e-780acf6e7826.PNG)

2. 사용할 부분을 제외하고 삭제하거나, 모두 다 사용하고 싶다면 메세지만 삭제 한채 저장한 뒤 파일을 닫습니다.

3. `git add`를 이용해 conflict가 해결되었음을 알려줍니다.<br>
   ![conflict5](https://user-images.githubusercontent.com/56298540/180726593-db48d843-214b-40f5-9bc7-90019901feba.PNG)

4. `git merge --continue`를 입력해 merge를 마무리합니다.
   ![conflict6](https://user-images.githubusercontent.com/56298540/180726814-dd051dab-5d6c-4258-82fb-3c11c22fdc8e.PNG)
   <br><br>

## 📄 merge conflict tool을 이용한 해결방법: vscode

1. `git config --global -e`를 입력해서 vscode를 열어줍니다.

2. 아래 코드를 입력해서 merge tool을 vscode로 다룰 수 있게 적용합니다.<br>
   ![tool2](https://user-images.githubusercontent.com/56298540/180729275-1ed1f4f7-62b5-42ae-82cf-46882b7e6dc0.PNG)

3. conlict가 발생했을 때, `git mergetool`을 입력하면 vscode로 툴이 열리는 것을 확인 할 수 있습니다.

## 📄 merge conflict tool을 이용한 해결방법: p4merge

1. p4merge를 검색 후 다운받습니다.<br><br>

2. 아래 코드를 입력해서 merge tool을 p4code로 다룰 수 있게 합니다.<br>
   ![tool3](https://user-images.githubusercontent.com/56298540/180736047-e8d8a3cc-df98-46d8-b2e8-4dcb9e88f31c.PNG)

3. conlict가 발생했을 때, `git mergetool`을 입력하면 vscode로 툴이 열리는 것을 확인 할 수 있습니다.<br><br>

## 참고

- 드림코딩
