---
title: "[메세지가 도착했습니다] Firestore를 사용해 원격으로 DB관리하기"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - random-message
tags:
  - ["Firestore", "DB"]
last_modified_at: 2023-04-25T08:06:00-05:00
---

## 📄 사용 계기

혼자 간단한 토이프로젝트를 만들게 되었는데, 이때 사용할 REST API를 만들기에는 시간이 부족했습니다.

Firestore를 사용하면 어렵지 않고 빠르게 DB를 만들어 통신할 수 있어 사용하게 되었습니다.

## 📄 Firestore DB 구조

Firebase 페이지에서 Firestore를 생성하면 다음과 같은 DB를 만들 수 있습니다.

![image](https://user-images.githubusercontent.com/56298540/234165551-86d0b88f-9ea8-4214-95a2-2a7dfd35cc7a.png)

제가 사용하고 싶던 기능은 다음과 같습니다.

- 메세지 가져오기 (GET)
- 메세지 생성하기 (CREATE)
- 메세지 삭제하기 (DELETE)

## 📄 VSCode에서 Firestore와 통신하기

프로젝트 설정탭에서 **SDK 설정 및 구성**을 확인하면 제품의 SDK를 확인할 수 있습니다.

![image](https://user-images.githubusercontent.com/56298540/234166648-2d3b993c-fed2-480c-a3fe-77039dbdd355.png)

#### 0. npm install firebase

#### 1. src폴더 내에 firebase.js 파일 생성

firestore를 사용해주기 위해 firebase를 초기화 합니다.

저는 SDK를 환경변수로 설정해 가려줬습니다.

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_API_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseDB = getFirestore(firebaseApp);

export { firebaseDB };
```

#### 2. baseDB 설정하기

DB를 사용하는 작업에서 공통으로 사용되는 부분을 따로 만들었습니다.

💾 lib/db/baseDB.ts

```ts
import { firebaseDB } from "../../firebase";
import { collection } from "firebase/firestore";

const baseDB = () => {
  const db = collection(firebaseDB, "Messages");
  return db;
};

export default baseDB;
```

`collection`은 Firestore에서 생성했던 컬렉션 이름을 기준으로 데이터를 관리합니다.

#### 3. 데이터 가져오기 + 삭제하기

저는 가져오자마자 삭제하는 작업을 해야했기 때문에 함수 하나에 동시에 작업했습니다.

💾 lib/db/getMessages.ts

```ts
const getMessage = async () => {
  try {
    const response = await getDocs(baseDB()); // Get 🎉
    const data = response.docs.map((doc) => ({
      ...(doc.data() as docInterface),
      id: doc.id,
    }));
    const selectedData = data[getRandomNum(data.length - 1)];
    await deleteDoc(doc(firebaseDB, "Messages", selectedData.id)); // Delete 🎉
    return selectedData;
  } catch (error) {
    console.error("Error in getMessage:", error);
    return undefined;
  }
};
```

baseDB에서 Docs를 가져와서 데이터를 가져왔습니다.

단점은 Get을 사용하면 모든 데이터를 가져옵니다.

그래서 데이터가 큰 경우에는 성능이 저하 될 수 있습니다.

Firestore은 데이터가 크지 않은 경우에만 사용하는 것이 좋은 것 같습니다.

delete명령을 사용할 때는 인수가 추가 됩니다.

```js
deleteDoc(doc(db, 컬렉션 이름, 해당 id))
```

가져온 데이터의 아이디를 통해 해당 데이터를 삭제할 수 있습니다.

### 데이터 생성(추가)하기

```js
export const createMessage = (message: MessageFormInterface) => {
  addDoc(baseDB(), message);
};
```

데이터 생성은 addDoc라는 명령을 통해 이루어집니다.

---

## 느낀점

생각보다 사용법이 간편해서 수월했습니다.

다만, 언급했던 것처럼 데이터를 한번에 가져와야하니 비효율적으로 느껴졌지만 해당 프로젝트는 많은 데이터 를 요구하는게 아니니 쓸만했습니다.

다음엔 Firebase로 REST API를 만들거나 mongoDB를 배워 직접 API를 만들어 보고 싶습니다:)
