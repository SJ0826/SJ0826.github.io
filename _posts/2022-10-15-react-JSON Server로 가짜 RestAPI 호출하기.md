---
title: "JSON Server로 가짜 RestAPI 호출하기"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["JSON", "RestAPI"]
last_modified_at: 2022-10-15T08:06:00-05:00
---

## 📄 JSON Server로 가짜 RestAPI 호출하기

프론트 작업을 할때 매번 백엔드를 개발해서 RestAPI를 호출하는 대신 JSON Server를 사용하면 손쉽게 연습용 RestAPI를 호출할 수 있는 방법이 있습니다.

## 📄 JSON 서버 만들기

### 1. data.json 폴더 만들기

폴더 안에 사용할 데이터를 작성합니다.

```json
{
  "posts": [
    {
      "id": 1,
      "title": "JSON 연습 1",
      "body": "JSON 연습하기"
    },
    {
      "id": 2,
      "title": "JSON 연습 2",
      "body": "JSON 연습하기"
    },
    {
      "id": 3,
      "title": "JSON 연습 3",
      "body": "JSON 연습하기"
    }
  ]
}
```

### 2. 작성한 파일을 기반으로 서버를 연다.

`$ npx json-server ./data.json --port 4000`

이렇게 터미널에 입력하면
가짜 `API` 서버가 `4000` 포트로 열립니다.

### 3. axios를 사용하여 API 요청하기

프로젝트에 REST API Client인 `axios`를 설치합니다.

`$ yarn add axios`

만들어진 서버를 `axios`를 사용하여 호출해서 데이터를 받아옵니다.

```js
// post.js
import axios from "axios";

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
  const response = await axios.get("http://localhost:4000/posts");
  return response.data;
};
```

## 출처

- 패스트캠퍼스 for velopert
