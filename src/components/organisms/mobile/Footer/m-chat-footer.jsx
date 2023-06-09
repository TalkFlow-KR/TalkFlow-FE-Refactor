import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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
  z-index: 10;
  flex: 1;
  background-color: orange;
  height: ${(props) => props.height};

  margin-top: calc(-${(props) => props.margin} + 26px);
`;
const StyledTextarea = styled.textarea`
  width: 100%;
  overflow-y: hidden;
  resize: none;
  border: none;
  &:focus {
    outline: none;
  }
`;
function MChatFooter({ onAddMessage }) {
  const [inputValue, setInputValue] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("0px");
  const [marginValue, setMarginValue] = useState("0px");
  const heightRef = useRef(0);
  const marginRef = useRef(0);
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
  useEffect(() => {
    const currentHeight = heightRef.current;
    const setHeight = `${currentHeight.scrollHeight}px`;
    setTextareaHeight(setHeight);
    if (!inputValue) {
      setMarginValue("0");
      setTextareaHeight("27px");
    } else if (setHeight !== textareaHeight) setMarginValue(setHeight);
  }, [inputValue]);

  const handleEnter = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      handleAddMessage();
      setMarginValue("0px");
      setTextareaHeight("0px");
    }
    // } else if (e.key === "Enter") {
    //   setInputValue((prevValue) => `${prevValue}\n`);
    // }
  };

  return (
    <StyledFooter>
      <ExpandableDiv
        ref={marginRef}
        height={textareaHeight}
        margin={marginValue}
      >
        <StyledTextarea
          ref={heightRef}
          placeholder="메시지를 입력하세요."
          onChange={handleSetInput}
          onKeyDown={handleEnter}
          value={inputValue}
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
