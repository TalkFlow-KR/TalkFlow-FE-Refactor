import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
`;

// props 받아서 polymorphic 컴포넌트 만들기
function Input(props) {
  return (
    <div>
      <StyledInput />
    </div>
  );
}

export default Input;
