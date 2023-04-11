---
title: "[자료구조] 스택(Stack) / 큐(Que) by JS"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - structure
tags:
  - ["자료구조", "스택", "큐"]
last_modified_at: 2023-02-02T08:06:00-05:00
---

## 📄 스택(Stack)

![스택](https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/300px-Data_stack.svg.png)

스택은 가장 먼저 들어온 데이터가 가장 먼저 나중에 나가는 **선입후출**구조 입니다.

코드를 작성할 때 많이 사용하는 `Ctrl + z`를 떠올리면 이해하기 쉽습니다.

## 📄 큐(Que)

큐는 먼저 들어간 데이터가 먼저 나오는 **선입선출**의 규칙을 가지고 있습니다.

일상생활에서 마트 계산대를 생각하면 이해하기 쉽습니다.

운영체제가 프로세스의 작업 요청을 들어온 순서대로 큐에 넣고 CPU가 순서대로 꺼내서 처리합니다.

이를 FIFO 스케줄링이라고 합니다.

## 📄 스택 구현해보기

자바스크립트로 연결리스트를 이용해 스택을 구현합니다.

![연결리스트 코드 구현](<https://github.com/SJ0826/TIL/blob/main/CS/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/%EC%97%B0%EA%B2%B0%EB%A6%AC%EC%8A%A4%ED%8A%B8(Linked%20List).md>)

```js
import { LinkedList } from "./LinkedList.mjs";

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.insertAt(0, data);
  }

  pop() {
    try {
      return this.list.deleteAt(0);
    } catch (e) {
      return null;
    }
  }

  // Top(head)에 있는 데이터를 참조만 하고 데이터를 제거하지는 않는다
  peek() {
    return this.list.getNodeAt(0);
  }

  isEmpty() {
    return this.list.count == 0;
  }
}

export { Stack };
```

## 출처

- 그림으로 배우는 자료구조와 알고리즘
