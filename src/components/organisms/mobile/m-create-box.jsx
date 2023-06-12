import React, { useEffect, useRef } from "react";
// import React, { useEffect } from "react";
import ChatBubble from "../../atoms/ChatBubble/chat-bubble";
import ButtonBubble from "../../atoms/ChatBubble/button-bubble";
import StyledMain from "./m-create-box.styled";

function MCreateBox({ messages, onSelectItem }) {
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
            messages.map((value) =>
              value.sender === "ai" ? (
                <ChatBubble value={value} key={value.id} />
              ) : (
                <ButtonBubble
                  value={value}
                  key={value.id}
                  onSelectItem={onSelectItem}
                />
              )
            )}
        </article>
      </section>
    </StyledMain>
  );
}

export default MCreateBox;
