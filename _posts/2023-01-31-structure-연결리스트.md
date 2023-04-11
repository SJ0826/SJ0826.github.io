---
title: "[자료구조] 연결리스트 (Linked List) by JS"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - structure
tags:
  - ["자료구조", "연결리스트"]
last_modified_at: 2023-01-31T08:06:00-05:00
---

## 📄 연결리스트 (Linked List) 🖇

![연결리스트](https://user-images.githubusercontent.com/56298540/215418108-c86b6195-ea17-4df8-b743-6df1490227f3.jpg)

연결리스트는 노드를 중심으로 구성됩니다.

노드에는 데이터를 담는 변수하나와 다음 노드를 가리키는 변수를 가지고 있습니다.

이렇게 각각의 노드끼리 서로 연결되어 있기 때문에 연결리스트라고 부릅니다.

연결리스트는 첫 노드의 주소만 가지고 있으면 다른 모든 노드에 접근할 수 있습니다.

## 📄 연결리스트의 장점

1. 초기 크기를 알 필요가 없습니다.<br />
   연결리스트에서 데이터를 추가하면 빈 메모리 공간 아무곳에 데이터를 생성합니다. 따라서 배열과 다르게 초기 크기에 신경쓰지 않아도 됩니다.

2. 데이터를 삽입, 삭제할때 배열만큼 오버헤드를 요구하지 않습니다.<br />
   배열에서는 값 사이에 데이터를 삽입하면 데이터가 밀려 비교적 많은 오버헤드가 요구됩니다. 연결리스트는 중간에 데이터를 삽입해도 다음 노드를 가리키는 데이터만 바꿔주면 됩니다.
   > 오버헤드란? 어떤 처리를 하기 위해 들어가는 간접적인 처리 시간 또는 메모리

## 📄 연결리스트의 단점

1. 데이터 참조에는 비효율적입니다.<br />
   배열은 연속적이기 때문에 시작 주소만 알면 뒤에 있는 데이터 접근이 쉽습니다. 예를 들어 한 배열의 4번째 값을 참조한다면, 시작 인덱스 값에서 4만 더해서 데이터를 찾을 수 있습니다.
   반면 연결리스트는 데이터들이 떨어져 있어 바로 접근할 수 없습니다. 네번째 데이터에 접근한다면 첫번째 노드에서 데이터를 찾고 다음노드에서 데이터를 찾는 순서대로 진행됩니다. 따라서 연결리스트에서 데이터를 찾을 때는 O(n)의 성능을 가집니다.

## 📄 배열과 연결리스트의 비교

|             | 배열      | 연결리스트 |
| ----------- | --------- | ---------- |
| 크기        | 고정      | 동적       |
| 주소        | 연속      | 불연속     |
| 데이터 참조 | 빠름 O(1) | 느림 O(n)  |
| 삽입과 삭제 | O(n)      | O(n)       |

데이터의 수가 바뀌지 않고 참조가 자주 일어난다면 배열,

데이터의 삽입과 삭제가 자주 일어나서 데이터의 수가 자주 바뀐다면 연결리스트를 사용하는 것이 좋습니다.

## 📄 연결리스트 자바스크립트로 구현해보기

> 추상 자료형(Abstract Data Type)이란? 어떠한 데이터와 그 데이터에 대한 연산을 표기하는 것 ex) 세탁물과 세탁기 기능

<h3>✔ 연결리스트의 추상자료형</h3>

한글로 된 추상자료형을 자바스크립트로 표현해보자

1. 모든 데이터를 출력하는 기능 > `printAll()`
2. 모든 데이터를 제거하는 기능 > `clear()`
3. 인덱스를 삽입하는 기능 > `insetAt(index, data)`
4. 마지막에 데이터를 삽입하는 기능 > `insertLast(data)`
5. 원하는 인덱스의 데이터를 삭제하는 기능 > `deleteAt(index)`
6. 마지막 데이터를 제거하는 기능 > `deleteLast()`
7. 원하는 인덱스에 있는 데이터를 읽는 기능 > `getNodeAt(index)`

먼저 Node를 클래스로 작성합니다.

노드에는 데이터와 다음 노드를 가리키는 `next`값을 저장합니다.

```js
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
```

다음으로 연결리스트를 나타내는 클래스를 작성합니다.

연결리스트에는 현재 가장 앞쪽에 위치하는 노드를 가리키는 `head`프로퍼티와 연결리스트의 크기를 나타내는 `count`프로퍼티를 정의합니다.

```js
class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }
}
```

### ▪ printAll() | 전체 연결리스트 출력

연결리스트를 출력하되 하나하나의 값을 따로 출력하는게 아니라 한줄로 정리해서 출력합니다.

```js
printAll(){
  let currentNode = this.head;
  let text = "[";

  while(currentNode != null) {
    text += currentNode.data;
    currentNode = currentNode.next;

    if(currentNode != null){
      text += ", ";
    }
  }

  text += "]"
  console.log(text)
}
```

### ▪ clear() | 전체 연결리스트 삭제

연결리스트는 연속적이기 때문에 가장 앞쪽에 위치한 `head`를 없애면 전체 연결리스트가 삭제 됩니다.

```js
clear(){
  this. head = null
}
```

### ▪ insertAt() | 인덱스 삽입

`LinkedList`클래스 안에 `insertAt`메서드를 작성합니다.

```js
insetAt(index, data){
  if(index > this.count || index < 0){
    throw new Error("범위를 넘어갔습니다.")
  }

  let newNode = new Node(data);

  if(index == 0) {
    newNode.next = this.head;
    this.head = newNode;
  } else {
    let currentNode = this.head;

    for(let i = 0; i < index -1; i++){
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
}
```

<h4>✔ index가 현재 연결리스트의 크기보다 크거나 음수인 경우</h4>

연결리스트에 노드를 삽입할 수 없으므로 에러를 발생시킵니다.

<h4>✔ index가 0인 경우</h4>

1. 새로운 노드의 `next`값은 현재 연결리스트의 `head`가 됩니다.
2. 연결리스트의 `head`를 새로운 노드로 설정합니다.

<h4>✔ index가 0이 아닌 경우</h4>

`currentNode`를 삽입할 인덱스 전까지 `head`부터 이동시켜야 합니다.

1. `currentNode`를 선언하고 현재 `head`값을 할당합니다.
2. 삽입하고 싶은 index전까지 반복문을 돌려 `currentNode`를 이동시킵니다.
3. 새로운 노드의 `next`에 `currentNode`의 `next`값을 할당합니다.
4. `currentNode`의 `next`에 새로운 노드의 값을 할당해서 새로운 노드를 연결리스트에 삽입합니다.

### ▪ insertLast(data) | 마지막 노드 삭제

앞서 만들었던 `insertAt`메서드를 이용해 가장 마지막 자리에 새로운 노드를 삽입합니다.

```js
insertLast(data){
  this.insertAt(this.count, data);
}
```

### ▪ deleteAt | 노드 삭제

```js
deleteAt(index){
  if(index >= this.count || index < 0){
    throw new Error("제거할 수 없습니다")
  }

  let currentNode = this.head

  if(index == 0){
    let deleteNode = this.head;
    this.head = this.head.next;
    this.count--;
  } else {
    for(let i = 0; i < index -1; i++){
      currentNode = currentNode.next;
    }

    let deletedNode = currentNode.next; // 제거할 노드는 반환되어야 하므로 변수에 저장
    currentNode.next = currentNode.next.next;
    this.count --;
    return deletedNode
  }
}
```

### ▪ deleteLast() | 마지막 노드 삭제

앞서 만들었던 `deleteAt`함수를 이용해 마지막 노드를 삭제합니다.

```js
deleteLast(){
  return this.deleteAt(this.count - 1);
}
```

## 출처

- [그림으로 배우는 자료구조와 알고리즘](https://www.inflearn.com/course/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B8%B0%EB%B3%B8)
