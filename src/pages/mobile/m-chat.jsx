import React from "react";
import styled from "styled-components";
import MChatHeader from "../../components/organisms/mobile/Header/m-chat-header";
import MChatFooter from "../../components/organisms/mobile/Footer/m-chat-footer";
import MChatBox from "../../components/organisms/mobile/m-chat-box";
// 말풍성 생성시 스크롤 맨밑으로
// input 크기 넓어지면 커지는 동적 width /height
const Container = styled.div`
  background-color: #ddd;
  height: 100%;
  //width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
`;
function MChat({ messages, onAddMessage }) {
  // mChat 부분 테스트
  return (
    <Container>
      {/* 모바일 헤더 부분 */}
      <MChatHeader />
      {/* <header> */}
      {/*   <button type="button">뒤로가기 버튼</button> */}
      {/*   <h1> */}
      {/*     <a href="#!">로고이미지</a> */}
      {/*   </h1> */}
      {/*   <button type="button">버튼</button> */}
      {/* </header> */}
      {/* 모바일 채팅 부분 */}
      <MChatBox messages={messages} />
      <MChatFooter onAddMessage={onAddMessage} />
    </Container>
  );
}

export default MChat;
