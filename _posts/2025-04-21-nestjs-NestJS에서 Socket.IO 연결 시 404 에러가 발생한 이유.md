---
title: "[NestJS] NestJS에서 Socket.IO 연결 시 404 에러가 발생하는 이유"
excerpt: "NestJS에서 Socket.IO을 연결할 때는 IoAdapter을 통해 httpServer을 전달해주자"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - NestJS
tags:
  - ["NestJS", "Socket.io", "adapter", "rebook"]
last_modified_at: 2025-04-21T08:06:00-05:00
---


## ◾️문제 상황

[rebook 프로젝트](https://github.com/SJ0826/rebook-api)에서 NestJS + Socket.IO로 실시간 채팅을 구현하려던 도중, <br/>클라이언트에서 WebSocket 연결이 안되고 다음과 같은 에러가 발생했습니다.

```bash
GET {SERVER_URL}/socket.io/?EIO=4&transport=polling 404 (Not Found)
```
<br />
WebSocket 연결 전 polling 요청이 404로 실패하면서 웹소켓 연결 자체가 이루어지지 않았습니다.

## ◾ 문제 원인

404에러 이길래 처음에는 네임스페이스 및 경로 설정 문제인 줄 알았습니다.

Socket.IO는 내부적으로 **HTTP 핸드셰이크를 위해 /socket.io 경로에 polling 요청**을 먼저 보냅니다.

하지만 NestJS는 기본적으로 이 경로를 인식하지 않으며 IoAdapter을 통해 Socket.IO를 Express 서버에 붙여줘야 정상적으로 작동합니다.

**💾 ws.adapter.ts**

```ts

export class SocketIoAdapter extends IoAdapter {
  constructor(
    private readonly app: INestApplication, // NestApplication 객체
    private readonly config: ConfigService, // ConfigService
  ) {
    super(); // ⚠️ HTTP 서버 인스턴스를 super에 전달하지 않았음
  }

  createIOServer(portOrServer: any, options?: ServerOptions) {
    const serverArg =
      typeof portOrServer === 'number' ? undefined : portOrServer;

    const partialOpts: Partial<ServerOptions> = {
      cors: {
        origin: this.config.get('CLIENT_URL') || 'http://localhost:3000',
        credentials: true,
      },
    };

    return serverArg
      ? super.createIOServer(serverArg, partialOpts as ServerOptions)
      : super.createIOServer(portOrServer, partialOpts as ServerOptions);
  }
}

```
* 문제: SocketIoAdapter에서 super()만 호출하고 httpServer를 넘기지 않음
* 결과: /socket.io 핸들러가 Express에 등록되지 않아 polling 요청시 404에러가 발생함

<br />

## ◾️ 해결 방법

### 1. 어댑터에 httpServer 전달

```ts

export class SocketIoAdapter extends IoAdapter {
  constructor(
    private readonly app: INestApplication, // NestApplication 객체
    private readonly config: ConfigService, // ConfigService
  ) {
    super(app.getHttpServer()); // ✅️ HTTP 서버 인스턴스를 super에 전달
  }

  createIOServer(portOrServer: any, options?: ServerOptions) {
    const serverArg =
      typeof portOrServer === 'number' ? undefined : portOrServer;

    const partialOpts: Partial<ServerOptions> = {
      cors: {
        origin: this.config.get('CLIENT_URL') || 'http://localhost:3000',
        credentials: true,
      },
    };

    return serverArg
      ? super.createIOServer(serverArg, partialOpts as ServerOptions)
      : super.createIOServer(portOrServer, partialOpts as ServerOptions);
  }
}

```

### 2. main.ts에 어댑터 등록

```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.enableCors({
    origin: config.get('CLIENT_URL'),
    credentials: true,
  });

  app.useWebSocketAdapter(new SocketIoAdapter(app, configService));

  await app.listen(4000);
}
```

httpServer을 제대로 전달해주고나자 polling -> WebSocket 순으로 요청이 성공했습니다.

<br />

## 📖️ polling -> WebSocket 핸드 셰이크 구조 

### ↔️ polling -> WebSocket 핸드 셰이크란 ?
* Socket.IO 연결 구조의 핵심 개념
* WebSocket 연결전 서버와 먼저 HTTP로 연결하고, 그 다음 Websocket으로 업그레이드 하는 과정

**📌 Socket.IO의 연결 과정**
1. 클라이언트가 먼저 polling 방식으로 서버에 연결 시도
2. 서버가 응답하고, 클라이언트와 서버가 서로 연결 확인
3. 연결이 확인되면, HTTP연결을 Websocket으로 업그레이드

**📌 Socket.IO가 핸드셰이크를 사용하는 이유**
* Websocket을 지원하지 않는 네트워크/브라우저 환경이 아직 존재
* 최초연결은 HTTP로 시작해서 WebSocket 연결 가능성을 판단

## ◾️전체 코드
### ☑️ 서버측 코드 (NestJS)

**💾 chat.gateway.ts**
```ts
@WebSocketGateway({
  cors: {
    origin: '{CLIENT_URL}',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  },
  credentials: true,
})
```
<br />

**💾 ws.adapter.ts**
```ts
import { IoAdapter } from '@nestjs/platform-socket.io';
import { INestApplication, Injectable } from '@nestjs/common';
import { ServerOptions } from 'socket.io';
import { ConfigService } from '@nestjs/config';

// ws 연결 프론트 서버 주소를 동적으로 연결해준다.(dev/prod 구분)
@Injectable()
export class SocketIoAdapter extends IoAdapter {
  constructor(
    private readonly app: INestApplication, // NestApplication 객체
    private readonly config: ConfigService, // ConfigService
  ) {
    super(app.getHttpServer()); // ⚠️ HTTP 서버 인스턴스를 super에 전달
  }

  createIOServer(portOrServer: any, options?: ServerOptions) {
    const serverArg =
      typeof portOrServer === 'number' ? undefined : portOrServer;

    const partialOpts: Partial<ServerOptions> = {
      cors: {
        origin: this.config.get('CLIENT_URL') || 'http://localhost:3000',
        credentials: true,
      },
    };

    return serverArg
      ? super.createIOServer(serverArg, partialOpts as ServerOptions)
      : super.createIOServer(portOrServer, partialOpts as ServerOptions);
  }
}
```

<br />

**💾 main.ts**
```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.enableCors({
    origin: config.get('CLIENT_URL'),
    credentials: true,
  });

  app.useWebSocketAdapter(new SocketIoAdapter(app, config));

  await app.listen(4000);
}
```
<br />

### ☑️ 클라이언트측 코드 (NextJS)

**💾 useChat.ts**

```ts
import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { ChatMessage } from '@/types/chat';
import { getChatMessages } from '@/lib/api/chat';
import { useAuth } from '@/hooks/useAuth';

export function useChat(
  chatRoomId: number | null,
  onMessagesLoaded: React.Dispatch<React.SetStateAction<ChatMessage[]>>
) {
  const { accessToken } = useAuth();
  const socketRef = useRef<Socket>(null);

  useEffect(() => {
    if (!chatRoomId) return;
    // 1. 기존 메세지 조회
    const loadMessages = async () => {
      try {
        const res = await getChatMessages(chatRoomId);
        onMessagesLoaded(res.data);
      } catch (error) {
        console.log('메세지 조회 실패', error);
      }
    };

    // 2. 소켓 연결 및 방 입장
    const connectSocket = () => {
      console.log('🔄 소켓 연결 시도:', { chatRoomId, token: !!accessToken });

      socketRef.current = io('http://localhost:4000', {
        transports: ['websocket'],
        withCredentials: true,
        auth: { token: accessToken },
      });

      socketRef.current.on('connect', () => {
        console.log('✅ 소켓 연결 성공!');
        socketRef.current?.emit('joinRoom', { chatRoomId });
      });

      socketRef.current.on('connect_error', (error) => {
        console.error('❌ 소켓 연결 오류:', error);
      });

      // 메세지 수신
      socketRef.current.on('newMessage', (message: ChatMessage) => {
        console.log('📩 새 메시지 수신:', message);
        onMessagesLoaded((prev) => [...prev, message]);
      });
    };

    loadMessages();
    connectSocket();

    // cleanup
    return () => {
      socketRef.current?.disconnect();
    };
  }, [chatRoomId, onMessagesLoaded]);
}
```

