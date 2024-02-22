// packages/design-system/src/Button.tsx
import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import * as S from "./styles";

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <S.Container>
      <S.Nav>
        <a href="/">Home</a>
        <a href="/recipient">수급자</a>
        <a href="/employee">직원</a>
      </S.Nav>
      {children}
    </S.Container>
  );
};

export default DashboardLayout;
