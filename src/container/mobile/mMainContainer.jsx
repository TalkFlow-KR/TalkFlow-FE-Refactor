import React, { useEffect, useState } from "react";
import MMain from "../../pages/mobile/mMain";

function MMainContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("컴포넌트 로딩완료");
  }, []);
  return <MMain data={data} />;
}

export default MMainContainer;
