import React, { useState } from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

//  버튼 // 마이크 이미지
// poa 로 위치시키기
const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 2rem;
  height: ${(props) => props.theme.layout.mobile.footerHeight};
  background-color: ${(props) => props.theme.layout.mobile.test};
  & input {
    width: initial;
  }
  & input:focus {
    width: 100%;
  }
`;

const ExpandableDiv = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
  flex: 1;
  background-color: orange;
  //margin-top: -${(props) => props.height}px;
  margin-top: calc(-${(props) => props.height}px + 26px);
`;

const StyledTextarea = styled(TextareaAutosize)`
  //transition: height 0.3s cubic-bezier(0.28, 0.73, 0.97, 0.52);
  box-sizing: border-box;
  z-index: 10;
  width: 100%;
  overflow-y: auto;
  resize: none;
  border: none;
  //position: absolute;
  //top: 0;
  //left: 0;
  &:focus {
    outline: none;
  }
`;

function MChatFooter({ onAddMessage }) {
  const [inputValue, setInputValue] = useState("");
  const [currentHeight, setCurrentHeight] = useState(0);
  const handleSetInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddMessage = () => {
    // 앞뒤 스페이스 제거
    if (inputValue.trim() !== "") {
      console.log(inputValue);
      onAddMessage(inputValue);
      setInputValue("");
    }
  };
  const handleEnter = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      handleAddMessage();
    }
  };
  const onHeightChange = (height) => {
    console.log(height);
    setCurrentHeight(height);
  };
  return (
    <StyledFooter>
      <ExpandableDiv height={currentHeight}>
        <StyledTextarea
          placeholder="텍스트입력"
          onChange={handleSetInput}
          onKeyDown={handleEnter}
          value={inputValue}
          onHeightChange={onHeightChange}
          maxRows={10}
          autoFocus
        />
      </ExpandableDiv>
      <button type="button" onClick={handleAddMessage}>
        보내기
      </button>
      <button type="button">마이크이미지</button>
    </StyledFooter>
  );
}

export default MChatFooter;
