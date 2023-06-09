import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  background-color: #fff;
  padding: 8px;
`;
const OverlayDiv = styled.div`
  transform: translateX(${(props) => props.X});
  transition: 0.45s transform cubic-bezier(0.28, 0.73, 0.97, 0.52);
  position: absolute;
  top: 6px;
  left: 12px;
  background-color: #e0e8f9;
  width: 56px;
  height: 30px;
  z-index: 10;
  border-radius: 40px;
`;
const Button = styled.button`
  position: relative;
  background-color: transparent;
  border: 0;
  margin: 0 20px;
  z-index: 20;
`;

function ButtonBubble() {
  const [currentX, setCurrentX] = useState("0");
  const [language, setLanguage] = useState(null);
  const handleButton = (number, value) => {
    setCurrentX(`${number}px`);
    setLanguage(value);
    console.log(language);
  };
  return (
    <Wrapper className="user">
      <Button type="button" onClick={() => handleButton(0, "english")}>
        영어
      </Button>
      <Button type="button" onClick={() => handleButton(80, "chinese")}>
        중국어
      </Button>
      <Button type="button" onClick={() => handleButton(160, "japanese")}>
        일본어
      </Button>
      <OverlayDiv className="divide" X={currentX} />
    </Wrapper>
  );
}

export default ButtonBubble;
