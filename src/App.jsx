import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MChatContainer from "./container/mobile/m-chat-container";
import theme from "./style/theme";
import MCreateContainer from "./container/mobile/m-create-container";
import MLogin from "./pages/auth/m-login";

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
            <Route path="/" element={<MLogin />} />
            <Route path="/login" element={<MLogin />} />
            <Route path="/chat" element={<MChatContainer />} />
            <Route path="/create" element={<MCreateContainer />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Main>
  );
}

export default App;
