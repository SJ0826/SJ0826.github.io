---
title: "[TodoList-Project] useQuery 적용하고 페이지 업데이트 멈추는 현상"
excerpt: "투두리스트 프로젝트에서 리액트 쿼리 사용시 발생한 에러 해결 과정입니다."
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["TodoList", "react-query", "useQuery", "에러"]
last_modified_at: 2022-11-27T08:06:00-05:00
---

## 🚨 에러 발생 1

리액트 쿼리를 작성했던 투두리스트에 적용했다.

```tsx
// todolist12.tsx

const { data: getTodo } = useQuery<TodoItemType[]>('getTodo', getTodoList)

...

 <TodoList todos={getTodo} onToggleDone={onToggleDone} onClickDelete={onClickDelete} />
```

완료 버튼을 누르거나 삭제 버튼을 누르면 변경 데이터가 바로 브라우저에 보이지 않고 새로고침을 해야 반영이 되었다.

## ❔ 에러 원인 1

react-query의 캐싱 기능 버튼을 눌러도 리렌더링을 하였을때 변경사항이 반영되지 않은 것이다.

## 🔨 에러 해결 1

react-query의 refetch 옵션을 사용하였다.

refetch는 말 그대로 다시 데이터를 fetch하는 것이다.

```tsx
 const { data: getTodo, refetch } = useQuery<TodoItemType[]>('getTodo', getTodoList)

 ...

 const onToggleDone = async (id: number, done: boolean) => {
    await todoStore.toggleDone(id, done)
    refetch()
  }

  const onClickDelete = (id: number) => {
    todoStore.deleteTodo(id)
    refetch()
  }
```

액션을 보내는 함수 가장 뒷 부분에 `refetch()`를 작성하면 변경 사항이 화면에 보여진다.

하지만 곧바로 다른 이슈가 발생했다.

---

## 🚨 에러 발생 2

완료버튼이나 삭제버튼을 연달아 누르면 작동하는 순서가 밀리거나 너무 느리게 반영이 되었다.

## ❔ 에러 원인 2

`todoStore.toggleDone` -> `refetch`로 작동하면 비동기로 진행되기 때문에 순서가 보장되지 않는다.
완료 버튼을 눌렀을때 순서대로 작동되지 않고 `refetch`되고 나서 `toggleDone`이 되어 순서가 얽혀버린것이다.

## 🔨 에러 해결 3

```tsx
const onSubmitCreate = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  await todoStore.createTodo(createInput);
  setIsOpenCreate(false);
  setCreateInput("");
  refetch();
};

const onToggleDone = async (id: number, done: boolean) => {
  await todoStore.toggleDone(id, done);
  refetch();
};

const onClickDelete = async (id: number) => {
  await todoStore.deleteTodo(id);
  refetch();
};
```

방법은 `await`를 걸어서 순서를 보장해주는 것이었다.

`async` 함수로 만들어 `await`를 걸어주니 문제없이 작동했다.
