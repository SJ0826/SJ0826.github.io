---
title: "[React] React Portal"
excerpt: "리액트 포탈을 사용한 모달 관리법"
toc: true
toc_sticky: true
sidebar:
  nav: "docs"

categories:
  - React
tags:
  - ["portal", "modal"]
last_modified_at: 2023-06-14T08:06:00-05:00
---

## 🗒️ React Potal 이란?

- 다른 곳에 있는 element를 렌더링할 수 있다.
- 컴포넌트가 종속되어 있는 돔 트리를 벗어나 외부의 다른 돔으로 렌더한다. (어플리케이션은 하나지만 부분적으로 다른 돔에 마운트)

## 🗒️ useModal hook

```ts
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { styled } from "styled-components";

const useModal = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const openModal = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  interface IProps {
    children: React.ReactNode;
  }

  const ModalPortal: React.FC<IProps> = ({ children }) => {
    const ref = useRef<Element | null>();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
      if (document) {
        // dom에 root-modal이 있으면 가져오기
        const dom = document.querySelector("#root-modal");
        ref.current = dom;
      }
    }, []); // mount

    if (ref.current && mounted && modalOpened) {
      return createPortal(
        <Container>
          <div
            className="modal-background"
            role="presentation"
            onClick={closeModal}
          />
          {children}
        </Container>,
        ref.current
      );
    }
    return null;
  };

  return {
    openModal,
    closeModal,
    ModalPortal,
  };
};

export default useModal;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  .modal-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;
```

## 🗒️ useModal hook 사용하기

```ts
import { styled } from "styled-components";
import AirbnbLogoIcon from "../public/static/svg/logo/logo.svg";
import AirbnbLogoTextIcon from "../public/static/svg/logo/logo_text.svg";
import Link from "next/link";
import palette from "../styles/palette";
import { useState } from "react";
import useModal from "../hooks/useModal";
import SignUpModal from "./auth/SignUpModal";

const Header: React.FC = () => {
  const { openModal, ModalPortal } = useModal();
  return (
    <Container>
      <Link href={"/"}>
        <div className="header-logo-wrapper">
          <AirbnbLogoIcon className="header-logo" />
          <AirbnbLogoTextIcon />
        </div>
      </Link>
      <div className="header-auth-buttons">
        <button
          type="button"
          className="header-sign-up-button"
          onClick={openModal}
        >
          회원가입
        </button>
        <button type="button" className="header-login-button">
          로그인
        </button>
      </div>
      <ModalPortal>
        <SignUpModal />
      </ModalPortal>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  z-index: 10;
  .header-logo-wrapper {
    display: flex;
    align-items: center;
    .header-logo {
      margin-right: 6px;
    }
  }

  .header-auth-buttons {
    .header-sign-up-button {
      height: 42px;
      margin-right: 8px;
      padding: 0 16px;
      border: 0;
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: ${palette.gray_f7};
      }
    }
    .header-login-button {
      height: 42px;
      padding: 0 16px;
      border: 0;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      :hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
      }
    }
  }
`;
```

## 참고

- 클론 코딩으로 시작하는 Next.js
