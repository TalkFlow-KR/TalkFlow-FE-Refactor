import React from "react";
import MChatHeader from "../../components/organisms/mobile/Header/m-chat-header";
import MChatFooter from "../../components/organisms/mobile/Footer/m-chat-footer";
import MChatBox from "../../components/organisms/mobile/m-chat-box";
import MobileLayout from "../../components/atoms/MobileLayout/mobileLayout";
// 말풍성 생성시 스크롤 맨밑으로
// input 크기 넓어지면 커지는 동적 width /height
function MChat({ messages, onAddMessage }) {
  // mChat 부분 테스트
  return (
    <MobileLayout>
      <MChatHeader />
      <MChatBox messages={messages} />
      <MChatFooter onAddMessage={onAddMessage} />
    </MobileLayout>
  );
}

export default MChat;
