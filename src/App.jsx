import React from "react";
// import Test from "./container/Test";
import styled from "styled-components";
import MMain from "./pages/mobile/mMain";
// 최종출력은 container 폴더안 컴포넌트를 렌더한다.

const Main = styled.div`
  width: 100vw;
  height: 100vh;
`;
function App() {
  return (
    <Main className="App">
      {/* <Test /> */}
      {/* <hr /> */}
      <MMain />
    </Main>
  );
}

export default App;
