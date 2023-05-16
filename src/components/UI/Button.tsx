import { ReactNode } from "react";
import styled from "styled-components";

type props = {
  children: ReactNode;
  className?: string;
  isBgColor: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  disabled?: boolean;
};

const Button = ({
  children,
  className,
  isBgColor,
  type,
  onClick,
  disabled,
}: props) => {
  const clickHandler = (): void => {
    onClick();
  };

  return (
    <StyledButton
      isbgcolor={isBgColor ? 1 : 0}
      className={className}
      onClick={clickHandler}
      type={type}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ isbgcolor: number }>`
  background-color: ${({ isbgcolor }) => (isbgcolor ? "#73BBFB" : "#ffffff")};
  color: ${({ isbgcolor }) => (isbgcolor ? "#ffffff" : "#73BBFB")};
  border: 1px solid #73bbfb;
  border-radius: 5px;
`;

export default Button;
