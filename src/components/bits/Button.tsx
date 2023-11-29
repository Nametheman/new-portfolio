"use client";
import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  width?: string;
  color?: string;
}
const Button = ({ text, width, color }: ButtonProps) => {
  return (
    <ButtonWrapper
      className="font-sans md:mt-[2rem] md:text-[1rem]"
      $width={width}
      $color={color}
    >
      {text}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button<{ $width?: string; $color?: string }>`
  margin-top: 1rem;
  border: ${({ $color }) =>
    $color ? `1px solid ${$color}` : "1px solid #fff"};
  color: ${({ $color }) => $color || "#dedede"};
  font-size: 0.8rem;
  width: ${({ $width }) => $width || "150px"};
  height: 35px;
`;
