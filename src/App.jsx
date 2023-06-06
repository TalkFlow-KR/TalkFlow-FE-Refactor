import React from "react";
// import Test from "./container/Test";
import styled from "styled-components";
import MMainContainer from "./container/mobile/mMainContainer";
// import MMain from "./pages/mobile/mMain";
// 최종출력은 container 폴더안 컴포넌트를 렌더한다.

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: cornsilk;
`;
function App() {
  return (
    <Main className="App">
      {/* <Test /> */}
      {/* <hr /> */}
      {/* <MMain /> */}
      <MMainContainer />
    </Main>
  );
}

export default App;
