---
title: "[모여봐요 코딩의 늪] useState 비동기 에러 처리하기"
excerpt: "모코숲 useState 비동기 관련 trouble shooting"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - coding-swamp
tags:
  - ["모코늪", "useState", "비동기"]
last_modified_at: 2023-03-21T08:06:00-05:00
---

## 🐞 문제발생

사용자의 프로필을 수정하는 과정에서 `useState`를 사용해 form을 변경하는데, state가 업데이트 되지 않았다.

### ▪ 문제 코드

```ts
 ...
const initialEditForm = {
  profileUrl: '',
  imageFile: null,
  username: '',
  imageUrl: '',
}

const [memberForm, setMemberForm] = useState(initialEditForm)

...

const onChangeProfileImg = useCallback(
    async (e: ChangeEvent<HTMLElement>) => {
      const ImageFiles = (e.target as HTMLInputElement).files
      if (ImageFiles && ImageFiles[0]) {
        const url = URL.createObjectURL(ImageFiles[0])
        setMemberForm({ ...memberForm, imageFile: ImageFiles[0] }) // 문제부분
        setMemberForm({ ...memberForm, imageUrl: url })
      }
    },
    [imgInputRef],
  )

```

이 부분을 해결하려고 imageFile만 담는 state를 생성했을 때는 값이 바뀌는 것을 확인했는데,
도대체 왜 처음 작성했던 코드에서는 state가 변경되지 않는지 너무 궁금해서 꽤 오래 코드를 수정하고 손봤다.

그래도 해결이 안되서 [오키](https://okky.kr/questions/1417086#answer-661188)에 질문글을 작성하고 이유를 알 수 있었다.

## 🔨 문제해결

문제는 **`useState`의 비동기 처리 방식**이었다.

`useState`가 비동기로 동작한다는 것을 어렴풋이 알고있었지만 어떻게 처리가 진행되는지 몰라서 문제가 어디서 발생했는지 정확히 모르고 애먼 코드들만 뜯어보고 답답해했다.<br/> 왜 `imageUrl`은 변경이 적용되고 첫번째 setState를 호출해서 적용한 `imageFile`은 변경이 안될까?

💡 useState는 비동기적으로 처리가 진행되기 때문에 useState를 두번 호출할 때, 마지막 호출시 처음 state의 변경분은 반영되지 않기 때문이다!

리액트는 성능을 최적화하기 위해 setState가 연속 호출되면 배치처리를 통해 한번에 렌더링한다고 한다.

> 배치(batch)란? 리액트가 여러개의 state 업데이트를 하나의 리렌더링으로 묶는 것

따라서, 위 코드에서 문제가 발생한 이유는 기존 `memberForm`에 imageFile이 더해진 상태로 변경된 것이 state에 적용되기 전에 **다시 `memberForm`을 재사용**하기 때문에 imageFile에 관한 변경사항이 적용되지 않고 imageUrl이 더해진 값으로 state가 적용되기 때문이었던 것이다.

### ▪ 변경된 코드

```ts
setMemberForm({ ...memberForm, imageFile: ..., imageUrl: url })
```

setState를 한번만 호출해서 비동기 상황을 발생시키지 않게 고쳤고, 문제는 해결되었다.<br/>
비동기에 관한 삽질은 api통신을 할 때만 생길줄 알았던 내 안일한 생각이 가장 큰 문제였다.<br/>
안다고 다 아는게 아니라는 것을 다시 한번 뇌에 새기게 되었다.
