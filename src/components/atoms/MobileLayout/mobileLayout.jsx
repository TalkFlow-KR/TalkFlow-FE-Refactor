import React from "react";
import styled from "styled-components";

const MobileLayoutStyled = styled.div`
  background-color: #ddd;
  height: 100%;
  //width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
`;
function MobileLayout({ children }) {
  return <MobileLayoutStyled>{children}</MobileLayoutStyled>;
}

export default MobileLayout;
