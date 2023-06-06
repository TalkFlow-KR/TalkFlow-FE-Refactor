import React from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";

const StyledMain = styled.main`
  & section {
    background-color: #eee;
    border-radius: 8px;
    padding: 8px;
    min-height: 720px;
    height: 100%;
  }
  & .chatroom {
    height: 940px;
    min-height: 640px;
    background-color: black;
    overflow-y: auto;
  }
  & section article div {
    margin: 1rem 0;
  }
  & section .ai {
    display: flex;
    justify-content: flex-start;
  }
  & section .ai > span {
    display: inline-block;
    height: 100%;
    text-align: left;
    background-color: #fff;
    padding: 4px;
    border-radius: 8px;
    margin-left: 8px;
  }
  & section .user {
    display: flex;
    justify-content: flex-end;
  }
  & section .user > span {
    height: 100%;
    background-color: #aaa;
    padding: 4px;
    border-radius: 8px;
    margin-right: 8px;
  }
`;
function MChatBox({ messages }) {
  console.log("mCHatBox", messages);
  // const {}
  return (
    <StyledMain>
      <section className="chatroom">
        <article>
          <h2>Room Title</h2>
        </article>
        <article className="chatBubble">
          {messages &&
            Array.isArray(messages) &&
            messages.map((value) => (
              <div className={value.sender} key={value.id}>
                <span>{value.message}</span>
              </div>
            ))}
        </article>
      </section>
    </StyledMain>
  );
}

export default MChatBox;
