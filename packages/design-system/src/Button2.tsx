// packages/design-system/src/Button.tsx
import React, { ReactNode } from "react";
import styled from "@emotion/styled";

type ButtonProps = {
  children: ReactNode;
};

const StyledButton = styled.button`
  background-color: transparent;
  padding: 10px;
  border: 1px solid #ffff00;
  border-radius: 5px;
`;

const Button2 = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button2;
