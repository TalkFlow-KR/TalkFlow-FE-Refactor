import React from "react";
import { Container, StyledInput } from "./input.styled";

// props 받아서 polymorphic 컴포넌트 만들기
function Input(props) {
  return (
    <Container>
      <StyledInput type="text" placeholder="sample" />
    </Container>
  );
}

export default Input;
