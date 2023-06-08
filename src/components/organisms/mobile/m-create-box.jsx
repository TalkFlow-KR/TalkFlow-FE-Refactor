import React, { useEffect, useRef } from "react";
// import React, { useEffect } from "react";
import styled from "styled-components";
import ChatBubble from "../../atoms/ChatBubble/chat-bubble";
// import ChatBubble from "../../atoms/ChatBubble/chat-bubble";
// import { useSelector } from "react-redux";

const StyledMain = styled.main`
  flex-grow: 1;
  width: 100%;
  & section {
    background-color: #eee;
    border-radius: 8px;
    padding: 8px;
    height: 100%;
    max-height: 70vh;
    overflow-y: hidden;
  }
  & .chatBubble {
    // height calc 로 조절해서 사용하기.
    //height: 940px;
    padding: 2rem 1rem;
    overflow-y: auto;
    //background-color: tan;
    max-height: 100%;
  }
`;
function MCreateBox({ messages }) {
  // console.log("mCreateBox", messages);
  // ChatBubble 추가시 스크롤위치 갱신
  const scrollRef = useRef(null);
  useEffect(() => {
    // scrollTop = 현재 스크롤위치
    // scrollHeight = 맨아래 스크롤위치 값
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });
  return (
    <StyledMain>
      <article>
        <h2>Create</h2>
      </article>
      <section className="create-room">
        <article className="chatBubble" ref={scrollRef}>
          {messages &&
            Array.isArray(messages) &&
            messages.map((value) => (
              <ChatBubble value={value} key={value.id} />
            ))}
        </article>
      </section>
      {/* <section className="chatroom"> */}
      {/*   <article className="chatBubble" ref={scrollRef}> */}
      {/*     {messages && */}
      {/*       Array.isArray(messages) && */}
      {/*       messages.map((value) => ( */}
      {/*         <ChatBubble value={value} key={value.id} /> */}
      {/*       ))} */}
      {/*   </article> */}
      {/* </section> */}
    </StyledMain>
  );
}

export default MCreateBox;
