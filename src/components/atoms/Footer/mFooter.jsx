import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #fff;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 2rem;

  & footer > div {
    display: flex;
    flex: 1;
    background-color: orange;
    width: fit-content;
  }
  & footer > div > input {
    transition: all 0.3s ease-in-out;
    width: initial;
  }
  & footer > div > input:focus {
    width: 100%;
  }
`;
function MFooter() {
  return (
    <StyledFooter>
      <div>
        <input type="text" placeholder="메시지를 입력하세요." />
      </div>
      <button type="button">보내기</button>
      <button type="button">마이크이미지</button>
    </StyledFooter>
  );
}

export default MFooter;
