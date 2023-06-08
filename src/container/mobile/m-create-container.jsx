import React from "react";
import MCreate from "../../pages/mobile/m-create";

const dummy = [
  {
    id: 1,
    sender: "ai",
    message:
      "이용하실 채팅 언어를 선택 하실 수 있습니다.\n +버튼을 이용해서 추가적인 언어를 입력하실수 있으세요",
  },
  { id: 2, sender: "user", message: "test2" },
  { id: 3, sender: "ai", message: "test3" },
  { id: 4, sender: "user", message: "test4" },
  { id: 5, sender: "ai", message: "test5" },
  { id: 6, sender: "user", message: "test6" },
];
function MCreateContainer() {
  return <MCreate messages={dummy} />;
}

export default MCreateContainer;
