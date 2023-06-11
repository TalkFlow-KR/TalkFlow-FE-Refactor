import React, { useState } from "react";
import styled from "styled-components";
import {
  Message as ChatMessage,
  Bubble as ChatBubble,
  Name,
} from "./chat-bubble";

const Message = styled(ChatMessage)`
  position: relative;
  height: 100%;
  & span {
    background-color: #aaa;
    display: flex;
  }
`;
const Bubble = styled(ChatBubble)`
  height: 100%;
`;
const OverlayDiv = styled.div`
  transform: translateX(${(props) => props.X});
  transition: 0.45s transform cubic-bezier(0.28, 0.73, 0.97, 0.52);
  position: absolute;
  top: 8px;
  right: 192px;
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

function ButtonBubble({ value }) {
  const [currentX, setCurrentX] = useState("0");
  // const [language, setLanguage] = useState("");
  // const [theme, setTheme] = useState("");
  // const [partner, setPartner] = useState("");

  const handleButton = (index, val) => {
    if (index === 0) {
      setCurrentX(`0px`);
    } else if (index === 1) {
      setCurrentX(`80px`);
    } else if (index === 2) {
      setCurrentX(`160px`);
    }
  };
  return (
    <Message>
      {value && (
        <>
          <Name className={value.sender}>{`현재 선택 : ${language}`}</Name>
          <Bubble className="user">
            <span>
              {value.map((item, index) => {
                return (
                  <Button
                    type="button"
                    key={item.id}
                    onClick={() => handleButton(index, item.message)}
                  >
                    {item.message}
                  </Button>
                );
              })}
              {/* <Button */}
              {/*   type="button" */}
              {/*   onClick={() => handleButton(0, value.message[0])} */}
              {/* > */}
              {/*   {value.message[0]} */}
              {/* </Button> */}
              {/* <Button */}
              {/*   type="button" */}
              {/*   onClick={() => handleButton(80, value.message[1])} */}
              {/* > */}
              {/*   {value.message[1]} */}
              {/* </Button> */}
              {/* <Button */}
              {/*   type="button" */}
              {/*   onClick={() => handleButton(160, value.message[2])} */}
              {/* > */}
              {/*   {value.message[2]} */}
              {/* </Button> */}
              <OverlayDiv className="divide" X={currentX} />
            </span>
          </Bubble>
        </>
      )}
    </Message>
  );
}

export default ButtonBubble;
