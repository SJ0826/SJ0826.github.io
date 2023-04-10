---
title: "[자료구조] 해시(Hash) by JS"
excerpt: "해시 테이블은 (Key, Value)로 데이터를 저장하는 자료구조입니다."
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - structure
tags:
  - ["자료구조", "해시"]
last_modified_at: 2023-04-10T08:06:00-05:00
---

## 📄 해시(Hash)

![해시](https://camo.githubusercontent.com/4e48be3863145cbf9c6ba79ce9ed561f91756b24157426980398351df34bf228/68747470733a2f2f696d67312e6461756d63646e2e6e65742f7468756d622f523132383078302f3f73636f64653d6d746973746f72793226666e616d653d6874747073253341253246253246626c6f672e6b616b616f63646e2e6e6574253246646e25324662317a4f77312532466274714c36484157376a792532466a7042413570506b51466e66695a63504c616b673030253246696d672e706e67)

해시는 **(Key, Value)**로 데이터를 저장하는 자료구조입니다.

주어진 데이터를 **해시함수**에 적용하면 데이터를 기반으로 key를 만들어 해시 테이블에 저장합니다.

해시 함수는 **똑같은** 데이터들을 **똑같이**분류하는 기능을 담당합니다.

## 📄 장점

인덱스를 통한 검색이 이루어져 **속도가 빠르다**는 장점을 가지고 있습니다.

검색이 상수시간에 이루어지므로 **O(1)**의 시간복잡도를 가집니다.

## 📄 자바스크립트로 해시 함수 구현하기

```js
function hashStringToInt(s, tableSize) {
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    // 인덱스의 크기가 커질 경우를 대비해 tableSize로 나눈 값을 쓴다.
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }
  return hash;
}

class HashTable {
  table = new Array(100); // 크기가 100인 Hash Table

  setItem = (key, value) => {
    const index = hashStringToInt(key, this.table.length);
    this.table[index] = value;
  };

  getItem = (key) => {
    const index = hashStringToInt(key, this.table.length);
    return this.table[index];
  };
}
```

## 📄 해시 충돌

해시 충돌은 같은 인덱스에 데이터들이 들어오는 현상입니다.

### ▪ 대처 방법

<h4>✔ Separate Caining</h4>

해당 인덱스의 value에 배열이나 연결리스트를 사용해 값을 **중첩**으로 저장하는 방법입니다.

```js
setItem = (key, value) => {
  const idx = hashStringToInt(key, this.table.length);
  if (this.table[idx]) {
    this.table[idx].push([key, value]);
  } else {
    this.table[idx] = [[key, value]];
  }
};

getItem = (key) => {
  const idx = hashStringToInt(key, this.table.length);
  if (!this.table[idx]) return null;

  // O(n)
  return this.table[idx].find((el) => el[0] === key)[1];
};
```

<h4>✔ Linear Probing</h4>

선형 탐색 데이터는 **다음 버켓(인덱스)자리**에 밀어넣는 방법입니다.

이 방법을 사용하면 최대 테이블 길이만큼만 저장할 수 있다는 단점이 있습니다.

<h4>✔ Resizing</h4>

테이블의 크기를 늘린 후 전체 데이터를 **재정렬**한다.

테이블의 길이가 데이터의 크기에 따라 늘어난다는 특징을 가지고 있습니다.

```js
function hashStringToInt(s, tableSize) {
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }
  return hash;
}

class HashTable {
  table = new Array(3);
  numItems = 0;

  // resizing
  resize = () => {
    const newTable = new Array(this.table.length * 2);

    // 새로 만들어진 해시테이블의 모든 요소 재정렬
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

  setItem = (key, value) => {
    this.numItems++;

    const loadFactor = this.numItems / this.table.length;
    if (loadFactor >= 0.8) {
      // 해시 테이블이 80%이상 차있으면 재정렬한다.
      this.resize();
    }

    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };
}
```

## 참고

- [업비트 투자자보호센터](https://upbitcare.com/academy/education/blockchain/52)

* [노마드 코더 - 개발자라면 꼭 알아야할 Hash table의 모든 것!](https://www.youtube.com/watch?v=HraOg7W3VAM)
