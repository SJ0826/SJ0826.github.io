---
title: "[Next.js 14] npm 패키지 배포 가이드"
excerpt: "컴포넌트를 패키지로 배포해 다른 프로젝트에 공유하기"
toc: true
toc_sticky: true
sidebar:
nav: "docs"

categories:
  - Nextjs
tags:
  - [
      "npm",
      "배포",
    ]
last_modified_at: 2024-07-10T08:06:00-05:00
---

## ■ 목적
- 어드민 디자인 시스템 컴포넌트와 에셋을 패키지로 배포해 관리
- 아토믹 디자인 패턴을 사용해 컴포넌트를 체계적으로 설계 및 개발
- 컴포넌트 유지보수성을 높이고, 일관된 UI/UX를 제공하며, 개발 속도를 향상

## ■ 프로젝트 환경
- next.js 14
- react 18
- tailwindcss 3.4.1

## ■ 배포 순서

### 1. src/export.ts 를 생성합니다

패키지로 배포할 컴포넌트를 export.ts 파일에 선언합니다. (파일 경로와 이름은 변경가능합니다)

**💾 src/export.ts**
```ts
export {default as SujinButton} from './app/components/common/Button';
```

### 2. tsconfig.build.json 을 생성합니다.

- (기존) tsconfig.json: Next.js 어플리케이션 코드 빌드용
- (생성) tsconfig.build.json: 패키지 배포 코드 빌드용

**💾 tsconfig.build.json**

```ts
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"], // 프로젝트에서 사용할 JavaScript 표준 라이브러리
    "target": "ESNext",  // 컴파일 대상 ECMAScript 버전
    "allowJs": true, // JavaScript 파일을 TypeScript 코드로 포함할 수 있도록 허용
    "skipLibCheck": true, // 외부 라이브러리 타입 검사 건너뛰기
    "strict": true,  // 엄격 모드 활성화
    "noEmit": false, // 컴파일된 출력 파일 생성 여부
    "allowSyntheticDefaultImports": true, // 기본(default) 내보내기를 허용할지 여부
    "esModuleInterop": true, // CommonJS(require)와 ES Module(import) 간의 호환성 설정
    "forceConsistentCasingInFileNames": true, // 파일 이름 대소문자 불일치를 방지
    "noFallthroughCasesInSwitch": true, // switch 문에서 case가 누락되지 않도록 방지
    "module": "esnext", // 사용할 모듈 시스템
    "moduleResolution": "node", // 모듈 해석 방식을 정의
    "resolveJsonModule": true, // JSON 파일을 모듈로 가져오기 허용
    "isolatedModules": true, // 개별 파일을 독립적으로 컴파일
    "jsx": "react-jsx", // React JSX 구문 설정 - React 17+의 새로운 JSX 변환 방식 사용
    "incremental": true, // TypeScript 이전 빌드 결과를 재사용하여 빌드 속도 향상(증분 빌드)
    "outDir": "dist", // 컴파일된 파일의 출력 디렉토리
    "declaration": true, // 타입 정의 파일 생성 여부 (.d.ts)
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [ "**/tailwind.config.ts",  "src/export.ts"],
  "exclude": ["node_modules"]
}

```
- include
  - `**/tailwind.config.ts` : tailwind 설정 (asset, font) 공유
  - `src/export.ts` : 컴포넌트 공유

### 3. package.json을 수정합니다.

**💾 package.json**
```ts
{
  "name": "sujin-design-system",
  "version": "0.1.5", // 패키지를 새로 배포할 때마다 버전을 업그레이드 해야합니다.
  "main": "dist/src/export.js", 
  "types": "dist/src/export.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "dev": "next dev",
    "next:build": "next build",
    "start": "next start",
    "lint": "next lint",
    "build": "rm -rf dist && tsc -p tsconfig.build.json",
    "prepublishOnly": "npm run build"
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.18"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "eslint": "^8",
    "eslint-config-next": "14.2.18"
  }
}
```
- `main`: 패키지를 설치한 후 패키지를 사용할 때 진입점. 가장 먼저 로드되는 파일을 지정.
- `types` : 타입스크립트 타입 정의 파일

package.json을 수정하고 npm run build 스크립트를 실행하면 dist폴더가 생성됩니다.

![image](/assets/image/posts/nextjs-npm-deploy.png)

### 4. npm에 패키지 배포하기

1. `npm login` : 스크립트를 실행하고 브라우저에서 로그인합니다.
2. `npm build` : 패키지에 필요한 빌드파일을 생성합니다.
3. `npm publish` : 생성한 빌드 파일을 npm에 배포합니다.

배포에 성공하면 [npm](https://www.npmjs.com/)에서 배포한 패키지를 확인 할 수 있습니다.

![image](/assets/image/posts/nextjs-npm-deploy-2.png)

### 5. 배포한 패키지 사용하기

먼저 배포한 패키지를 사용할 프로젝트에서 패키지를 다운받습니다.
```ts
npm i sujin-design-system
```

tailwind.config.ts 파일에서 패키지를 presets에 적용합니다.

**💾 tailwind.config.ts**

```ts
import sujin from 'sujin-design-system/dist/tailwind.config';

module.exports = {
  presets: [sujin], // ✅ preset으로 패키지의 tailwind 설정 적용
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

```

설정을 완료하면 패키지의 에셋과 컴포넌트를 사용할 수 있습니다.

```ts
import { SujinButton } from 'sujin-design-system'; // 👍
```
## 참고
- [blacksheepcode - publish_a_react_package_using_nextjs_as_a_base](https://blacksheepcode.com/posts/publish_a_react_package_using_nextjs_as_a_base)
