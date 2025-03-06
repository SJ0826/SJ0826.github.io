---
title: "[NestJS] NestJS가 env 파일을 읽어오지 못했을 때"
excerpt: "빌드 전 envFilePath 경로와 빌드 후 envFilePath 경로가 달라요"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - NestJS
tags:
  - ["NestJS", "env", "error"]
last_modified_at: 2025-02-08T08:06:00-05:00
---

## 🪹 문제상황: 프로젝트가 env 파일에 접근을 하지 못한다.

🐞 error message
```ts
 ERROR [ExceptionHandler] Error: Config validation error: "EMAIL_SERVICE" is required. "EMAIL_AUTH_USER" is required. "EMAIL_AUTH_PASSWORD" is required. "EMAIL_BASE_URL" is required
```
<br />

💾 app.module.ts
```ts
@Module({
  imports: [
    UsersModule,
    EmailModule,
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`], 
      load: [emailConfig],
      isGlobal: true, // 전역모듈로 설정
      validationSchema, // joi를 이용해 유효성검사
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // TypeORM이 구동될 때 인식하도록 할 엔티티 클래스 경로
      synchronize: process.env.DATABASE_SYNCHRONIZE === 'true', // dev | 서비스가 실행될 때 DB가 초기화된다.
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

nest-auth 프로젝트 실행 도중 프로젝트가 env파일을 읽어오지 못했습니다.

`cat src/config/env/.development.env` ⇒ 성공 <br />
`echo $NODE_ENV` ⇒ 성공 (development)

터미널을 통해 env파일을 읽는 것은 성공했지만 ConfigModule에서 env파일에 접근을 하지 못해 경로문제일 것이라 판단했습니다.

<br />

## 🪹 문제 이유: .env 파일 경로 문제
```ts
envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`]
```
**ts-node**를 사용할 경우 **__dirname**은 각각 다음과 같은 위치를 가리킵니다.

- 빌드 전: src 폴더
- 빌드 후: dist 폴더

빌드 후 src폴더일 것이라는 예상과 달리  **__dirname**가 dist 폴더를 가리키게 되어 env파일을 찾지 못하고 에러가 발생한 것입니다.

<br />

## 🪺 문제 해결: envFilePath 경로 재설정
envFilePath 경로를 재설정해 현재 작업 디렉토리(process.cwd())를 기준으로 경로를 지정하겠습니다.

```ts
envFilePath: [path.resolve(process.cwd(), `src/config/env/.${process.env.NODE_ENV}.env`)]
```

문제없이 프로젝트가 실행되었습니다.

![image](/assets/image/posts/nextjs-env-bug.png)