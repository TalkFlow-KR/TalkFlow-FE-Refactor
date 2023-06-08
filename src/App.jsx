import React, { useEffect } from "react";
// import Test from "./container/Test";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MChatContainer from "./container/mobile/m-chat-container";
import theme from "./style/theme";
import MCreateContainer from "./container/mobile/m-create-container";
import MMainContainer from "./container/mobile/m-main-container";
// import MMain from "./pages/mobile/m-main";
// 최종출력은 container 폴더안 컴포넌트를 렌더한다.

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: cornsilk;
`;
function App() {
  useEffect(() => {
    console.log("App.jsx렌더링 테스트");
  }, []);

  return (
    <Main className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MMainContainer />} />
            <Route path="/chat" element={<MChatContainer />} />
            <Route path="/create" element={<MCreateContainer />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Main>
  );
}

export default App;
