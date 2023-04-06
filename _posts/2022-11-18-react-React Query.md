---
title: "[React] 리액트 쿼리 (React Query)"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["React Query"]
last_modified_at: 2022-11-18T08:06:00-05:00
---

## 📄 React Query

리액트 쿼리는 **Server State를 관리하는 라이브러리**입니다.

리액트 쿼리를 사용하면 React 프로젝트에서 Server 와 Client 사이 비동기 로직들을 손쉽게 다룰 수 있습니다.

## 📄 React Query 의 주요 특징

- Client에서 제어하거나 소유하지 않은 원격의 공간에서 관리되고 유지됨
- Fetching 이나 Updating에 비동기 API가 필요함
- 다른 사람들과 공유되는 것으로 사용자가 모르는 사이에 변경될 수 있다.
- 신경 쓰지 않는다면 잠재적으로 " out of date"가 될 가능성을 지님

서버 상태는 서버에서 관리되는 데이터들을 뜻합니다.<br>
서버와 DB에서 관리되는 데이터를 다른 사용자가 변경했을 때, 클라이언트가 fetching을 하지 않으면 화면에 변경사항이 업데이트 되지 않습니다.
리액트 쿼리를 사용하면 데이터가 변결될 때마다 fetching하지 않아도 변경사항을 화면에 업데이트할 수 있습니다.

---

## 📄 useMutation

`useMutation`은 데이터 **생성, 업데이트, 삭제**를 할 때 사용합니다.

```ts
import { useMutation } from "react-query";

const { data, isLoading, mutate, mutateAsync } = useMutation(
  mutationFn,
  options
);

mutate(variabels, {
  onError,
  onSettled,
  onSuccess,
});
```

```ts
// Todo 등록하기
const addTodo = useMutation(postTodoList);
// Todo 완료 적용하기
const doneTodo = useMutation(async () => patchTodoList);
// Todo 삭제하기
const deleteTodo = useMutation(async () => deleteTodoList);
```

### ▪ useMutation의 Options

✔ `mutationFn: (variables: TVariables) => Promise<TData>`

- 비동기 작업을 수행하고 프로미스를 반환하는 함수.
- api 요청하는 함수를 작성하면 된다.
- variables는 mutate가 전달하는 객체

✔ `onMutate: (variables: TVaribles) => Promise<TContext | void> | TContext | void`

- onMutate는 mutation 함수가 실행되기 전에 실행된다.
- mutation 함수가 받을 동일한 변수가 전달된다.
- mutation의 성공을 바라며 미리 UI부터 변화시켜주는 optimistic update 기능을 사용할 때 유용하다.

✔ `onSuccess: (data: TData, variables: TVariables, context?: TContext) => Promise<unknown> | void`

- onSuccess는 mutation이 성공하고 결과를 전달할 때 실행된다.

✔ `onError: (err: TError, variables: TVariables, context?: TContext) => Promise<unknown> | void`

- onError는 mutation이 error를 만났을 때 실행된다.

✔ `onSettled: (data: TData, error: TError, variables: TVariables, context?: TContext) => Promise<unknown> | void`

- onSettled는 mutation이 성공해서 성공한 데이터 또는 error가 전달될 때 실행된다.

### ▪ useMutation의 Returns

✔ `mutate: (variables: TVariables, { onSuccess, onSettled, onError}) => void`

- mutate를 호출해서 mutation을 실행시킬 수 있다.
- variables는 mutationsFn에 전달하는 객체이다.
- onSuccess, onSuccess, onSettled, onError는 useMutation option과 같다.

```ts
useMutation(addTodo, {
  onSuccess: (data, variables, context) => {
    // I will fire first
  },
  onError: (error, variables, context) => {
    // I will fire first
  },
  onSettled: (data, error, variables, context) => {
    // I will fire first
  },
});

mutate(todo, {
  onSuccess: (data, variables, context) => {
    // I will fire second!
  },
  onError: (error, variables, context) => {
    // I will fire second!
  },
  onSettled: (data, error, variables, context) => {
    // I will fire second!
  },
});
```

✔ `mutateAsync: (variables: TVaribles, { onSuccess, onSettled, onError}) => Promise<TData>`

- mutate와 같으나 promise를 반환한다.

```ts
// 예시
const onSubmitCreate = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault;
  // 호출 순서를 보장하기 위해 mutateAsync를 사용해 Promise를 반환하게 하였다.
  await addTodo.mutateAsync({ text: createInput });
  refetch();
  setIsOpenCreate(false);
  setCreateInput("");
};
```

## 출처

- [hyolog 리액트쿼리-useMutation](https://velog.io/@kimhyo_0218/React-Query-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%BF%BC%EB%A6%AC-useMutation-%EA%B8%B0%EB%B3%B8-%ED%8E%B8)
