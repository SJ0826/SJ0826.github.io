---
title: "[React] 줄글 props로 넘겨 줄바꿈하기"
excerpt: ""
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - JavaScript
tags:
  - ["props", "줄바꿈"]
last_modified_at: 2023-04-13T08:06:00-05:00
---

## 📄 줄글 props로 넘겨 줄바꿈하는 방법

1. 줄바꿈하는 곳에 `\n`을 입력한다.

```js
const GetStart = () => {
  const description = `메세지가 도착했습니다는 익명 렌덤 메신저 💌 입니다.\n쉽게 뱉을 수 없었던 비밀 또는 모르는 누군가에게 보낼 응원의 메세지
					모두 좋아요.\n 💡 rule 1 메세지는 단 한명에게만 전달됩니다.\n 💡 rule 2 먼저 메세지를 보내야 익명의 누군가에게 메세지를 받을
					수 있습니다.\n 💡 rule 3 메세지의 상대방은 매번 바뀝니다.`;
  return (
    <div className="start__container">
      <Logo />
      <SpeechBubble text={description} />
    </div>
  );
};

export default GetStart;
```

2. 텍스트가 들어가는 태그 css에 `white-space: pre-line`을 설정한다.

```css
.start__description__content {
  background-color: $back-ground-light;
  white-space: pre-line; // 💡
  padding: 1em;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  color: black;
}
```
