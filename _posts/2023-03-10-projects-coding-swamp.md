---
title: "[모여봐요 코딩의 늪] 사용자 폼 관련 Slice 리팩토링 (state 객체로 관리하기)"
excerpt: "redux에서 관리하는 state를 객체로 다시 구조화"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - coding-swamp
tags:
  - ["모코늪", "redux-toolkit", "데이터구조"]
last_modified_at: 2023-03-10T08:06:00-05:00
---

## ❔ 리팩토링 이유

좋은 코드는 코드만 보고 어떤 일을 하는지 알 수 있는 코드라고 배웠다.

하지만 나의 코드는 코드만 보고 무슨일을 하는 지 알 수 없었다.

### 기존의 MemberForm 데이터 구조

#### 💾 store/member/memberFormSlice.ts

```js
const initialMemberForm = {
  value: [
    { key: "imageFile", value: null, isValidate: true },
    { key: "username", value: "", isValidate: false, emailAuth: false },
    { key: "email", value: "", isValidate: false },
    { key: "password", value: "", isValidate: false },
  ],
};
```

데이터 구조가 이렇게 되어있으면 값에 접근할 때 값의 이름이 아니라 `index`로 접근해야 했다.

처음 프로젝트를 시작할때 `File` 타입에 `null`이 할당되지 않아 객체 안에 굳이 `key`라는 이름의 `key`를 생성했다.

```ts
imageFile: File: null; // error
```

아마 내가 'imageFile'의 타입을 오로지 File로만 했던 모양인데 시간이 지나고 보니 코드가 굉장히 가독성이 없다는 것이 보였다.

#### 💾 Components/SignUpForm

```ts
const result: UserParam = {
  imageFile: userData[0].value,
  username: userData[1].value!,
  email: userData[2].value!,
  password: userData[3].value!,
};
```

`userData`에 `index`로 접근하기 때문에 해당 변수가 어떤 값을 가지고 있는지 알 수 없다.

이를 고치기 위해선 memberForm의 state 구조를 변경해야 했다.

## ❕ 리팩토링 결과

#### 💾 store/member/memberFormSlice.ts

```ts
const initialMemberForm = {
  memberForm: {
    imageFile: null,
    username: "",
    email: "",
    password: "",
  } as Omit<MemberFormParam, "profileUrl" & "imageUrl">,
  emailAuth: false,
  isEditMode: false,
};
```

#### 💾 Components/SignUpForm

```ts
const result: UserParam = {
  imageFile: memberForm.imageFile,
  username: memberForm.username,
  email: memberForm.email,
  password: memberForm.password,
};
```

값에 이름으로 접근하니 어떤 데이터가 할당되는지 알 수 있게 되었다.

## 💬 나의 생각

분명 코드를 작성할 때는 최선인 것 같았는데 지나고 보니 아닌 경우가 꽤 많다.

완성된 프로젝트라 하더라도 다시 보고 리팩토링을 계속 해주는 것이 좋겠다.
