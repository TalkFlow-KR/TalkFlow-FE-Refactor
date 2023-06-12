import styled from "styled-components";

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
export default StyledMain;
