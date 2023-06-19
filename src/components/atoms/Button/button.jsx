import React from "react";
import styled from "styled-components";
import { BUTTON_TYPE } from "../../../constants/variant";

export const StyledButton = styled.button``;
function Button({ children, variant }) {
  const type = variant || BUTTON_TYPE.BUTTON;
  return <StyledButton type={type}>{children}</StyledButton>;
}

export default Button;
