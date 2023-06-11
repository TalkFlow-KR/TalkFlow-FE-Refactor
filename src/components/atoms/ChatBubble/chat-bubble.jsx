import React from "react";
import styled from "styled-components";

export const Message = styled.div`
  margin: 1rem 0;
  .ai {
    display: flex;
    justify-content: flex-start;
  }
  .user {
    display: flex;
    justify-content: flex-end;
    margin-right: 8px;
  }
`;
export const Bubble = styled.div`
  & span {
    //word-wrap: break-word;
    //word-break: break-all;
    padding: 4px;
  }
  &.ai > span {
    display: inline-block;
    height: 100%;
    text-align: left;
    background-color: #fff;
    border-radius: 8px;
    margin-left: 8px;
    word-wrap: break-word;
    max-width: 60%;
  }
  &.user > span {
    height: 100%;
    background-color: #aaa;
    border-radius: 8px;
    max-width: 60%;
  }
`;
export const Name = styled.p`
  margin-bottom: 4px;
  font-weight: 700;
  &.ai {
    display: flex;
    justify-content: flex-start;
    margin-left: 12px;
  }
  &.user {
    display: flex;
    justify-content: flex-end;
    margin-right: 12px;
  }
`;
function ChatBubble({ value }) {
  // 객체로 받아오는 message 에서 \n 파악후 문장 자르기
  const checkEnterMessage = (message) => {
    if (message.includes("\n")) {
      return message.split("\n").map((text) => (
        <span key={value.id}>
          {text}
          <br />
        </span>
      ));
    }
    return message;
  };
  return (
    <Message>
      <Name className={value.sender}>{value.sender}</Name>
      <Bubble className={value.sender}>
        <span>{checkEnterMessage(value.message, value.id)}</span>
      </Bubble>
    </Message>
  );
}

export default ChatBubble;
