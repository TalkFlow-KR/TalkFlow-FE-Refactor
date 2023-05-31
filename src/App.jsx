import React from "react";
import Test from "./container/Test";
import MMain from "./pages/mobile/mMain";

// 최종출력은 container 폴더안 컴포넌트를 렌더한다.
function App() {
  return (
    <div className="App">
      <Test />
      <hr />
      <MMain />
    </div>
  );
}

export default App;
