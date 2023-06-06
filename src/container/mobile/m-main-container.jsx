import React, { useEffect, useState } from "react";
import MMain from "../../pages/mobile/m-main";

const dummy = [
  { id: 1, sender: "ai", message: "test" },
  { id: 2, sender: "user", message: "test2" },
  { id: 3, sender: "ai", message: "test3" },
  { id: 4, sender: "user", message: "test4" },
  { id: 5, sender: "ai", message: "test5" },
  { id: 6, sender: "user", message: "test6" },
];

function MMainContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("mMainContainer 컴포넌트 로딩완료");
    setData([dummy]);
  }, []);
  return <MMain data={data} />;
}

export default MMainContainer;
