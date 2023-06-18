import React from "react";
import { Container, StyledInput } from "./input.styled";

// props 받아서 polymorphic 컴포넌트 만들기
function Input({ variant, onChange, onKeydown, ...rest }) {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };
  const handleKeydown = (e) => {
    if (onKeydown) {
      onKeydown(e);
    }
  };
  return (
    <Container>
      <StyledInput
        type={variant ? variant.TYPE : "text"}
        placeholder={variant ? variant.PLACEHOLDER : ""}
        onChange={handleChange}
        onKeyDown={handleKeydown}
        {...rest}
      />
    </Container>
  );
}

export default Input;
