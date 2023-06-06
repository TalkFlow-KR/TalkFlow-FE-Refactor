import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 62px;
  background-color: tan;
`;
function MHeader() {
  return (
    <StyledHeader>
      <button type="button">뒤로가기 버튼</button>
      <h1>
        <a href="#!">로고이미지</a>
      </h1>
      <button type="button">버튼</button>
    </StyledHeader>
  );
}

export default MHeader;
