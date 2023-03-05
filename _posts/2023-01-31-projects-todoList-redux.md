---
title: "[TodoList-Project] 툴킷없이 리덕스 사용해서 전역상태 관리하기"
excerpt: "툴킷을 사용하지 않고 redux만을 이용한 전역상태 관리"
toc: true
toc_sticky: true

categories:
  - Projects
tags:
  - ["TodoList", "Redux"]
last_modified_at: 2023-01-31T08:06:00-05:00
---

## 📄 리덕스 툴킷을 사용하지 않은 이유

리덕스를 인강을 통해서 배웠지만 처음엔 이해가 잘 안갔다. 리듀서, 액션 등등 새로운 키워드가 많았고 컨셉도 어려웠다. 배우고 꾸준히 사용해보지 않아서 고이 묻어둔 상태였는데 원티드에서 리덕스를 다루게 되어 다시 꺼내 보았다. 그렇게 리덕스를 사용해서 만든 과제물에 대해 팀원분에게 피드백을 듣게 되었고 리덕스의 컨셉을 이해하지 않았다는 것을 알게 되었다.

기존의 나는 api를 호출할 때 store에서 따로 상태관련 로직을 작성하지 않았다.
예를 들어 Post요청을 한다고 가정했을 때, 데이터를 Put요청을 통해 수정하고 바로 다시 Get요청으로 데이터를 불러와 변경된 데이터를 화면에 렌더링해서 보여줬다. 이 과정에서는 api호출이 총 두번 발생한다.

하지만 store에서 상태 관리 로직을 작성한다면 따로 Get요청을 하지 않아도 클라이언트단에서 변경된 데이터를 바로 렌더링 할 수 있었다. 같은 과정이지만 api요청이 한번으로 줄어들게 되는 것이었다. 단점으로는 코드가 무거워진다는 부분이 있지만 api호출이 줄어드는 만큼 확실히 사용자 입장에선 더 빠르게 느껴질 것 같다.

## 📄 기존의 리덕스 사용 방식

```ts
const commentSlice = createSlice({
  name: "comment",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComment.fulfilled, (state, action) => action.payload);
    builder.addCase(createComment.fulfilled, (state, action) => action.payload);
    builder.addCase(editComment.fulfilled, (state, action) => action.payload);
    builder.addCase(deleteComment.fulfilled, (state, action) => action.payload);
  },
});

export default commentSlice;
```

redux-toolkit에서 제공하는 `createAsyncThunk`를 이용해 비동기 로직을 처리하고 댓글의 상태를 관리하는 리듀서를 작성했다.
상태 관련 로직이 전혀 없기 때문에 리듀서가 깔끔하고 각 액션이 어떤 일을 수행하는지 알 수 없다.

## 📄 개선된 리덕스 사용 방식

```ts
const todoReducer = (
  state: TodoParam[] = initialState,
  action: TodoActionType
) => {
  switch (action.type) {
    case GET_TODOS:
      return action.payload;
    case CREATE_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.todo, isCompleted: false }
          : todo
      );
    case DONE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    default:
      return state;
  }
};
```

리덕스를 제대로 다시 공부하기 위해 툴킷을 사용하지 않고 구현해보았다.
한번 Get요청을 통해 받아온 데이터를 관리하는 리듀서를 만들었다.
상태가 변경될때마다 새로고침을 하는게 아니라면 다시 Get요청을 하지 않아도 되니 api요청이 훨씬 줄어들었다.

지금은 규모가 작은 프로젝트지만 큰 프로젝트의 경우라면 관련 로직이 꽤 길어질 것 같은데 그때도 이렇게 관리를 하는게 맞는지 궁금해졌다. 이 부분은 좀더 찾아봐야 알 것 같다.
