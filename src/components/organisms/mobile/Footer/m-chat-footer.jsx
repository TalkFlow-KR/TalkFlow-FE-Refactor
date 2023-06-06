import React, { useState } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 2rem;
  height: ${(props) => props.theme.layout.mobile.footerHeight};
  background-color: ${(props) => props.theme.layout.mobile.test};
  & footer > div {
    display: flex;
    flex: 1;
    background-color: orange;
    width: fit-content;
  }
  & footer > div > input {
    flex: 1 1 0;
    transition: all 0.3s ease-in-out;
    width: initial;
  }
  & footer > div > input:focus {
    width: 100%;
  }
`;
function MChatFooter({ onAddMessage }) {
  const [inputValue, setInputValue] = useState("");

  const handleSetInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddMessage = () => {
    // 앞뒤 스페이스 제거
    if (inputValue.trim() !== "") {
      onAddMessage(inputValue);
      setInputValue("");
    }
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAddMessage();
    }
  };

  return (
    <StyledFooter>
      <div>
        <input
          type="text"
          placeholder="메시지를 입력하세요."
          onChange={handleSetInput}
          onKeyDown={handleEnter}
          value={inputValue}
        />
      </div>
      <button type="button" onClick={handleAddMessage}>
        보내기
      </button>
      <button type="button">마이크이미지</button>
    </StyledFooter>
  );
}

export default MChatFooter;
