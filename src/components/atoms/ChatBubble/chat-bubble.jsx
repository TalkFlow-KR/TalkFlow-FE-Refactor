import React from "react";
import styled from "styled-components";

const Bubble = styled.div`
  margin: 1rem 0;
  &.ai {
    display: flex;
    justify-content: flex-start;
  }
  &.ai > span {
    display: inline-block;
    height: 100%;
    text-align: left;
    background-color: #fff;
    padding: 4px;
    border-radius: 8px;
    margin-left: 8px;
  }
  &.user {
    display: flex;
    justify-content: flex-end;
  }
  &.user > span {
    height: 100%;
    background-color: #aaa;
    padding: 4px;
    border-radius: 8px;
    margin-right: 8px;
  }
`;
function ChatBubble({ value }) {
  return (
    <Bubble className={value.sender}>
      <span>{value.message}</span>
    </Bubble>
  );
}

export default ChatBubble;
