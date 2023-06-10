import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MCreate from "../../pages/mobile/m-create";

const dummy = [
  {
    id: 1,
    sender: "ai",
    message:
      "이용하실 채팅 언어를 선택 하실 수 있습니다.\n +버튼을 이용해서 추가적인 언어를 입력하실수 있으세요 (영문 입력)",
  },
  { id: 2, sender: "user", message: ["영어", "일본어", "중국어"] },
  {
    id: 3,
    sender: "ai",
    message:
      "원하시는 채팅 테마를 선택 하실 수 있습니다.\n +버튼을 이용해서 추가적인 테마를 입력하실수 있으세요 (영문 입력)",
  },
  { id: 4, sender: "user", message: ["헬스", "공원", "백화점"] },
  {
    id: 5,
    sender: "ai",
    message: "대화 상대를 골라주세요. \n",
  },
  { id: 6, sender: "user", message: ["여성", "군인", "래퍼"] },
];
function MCreateContainer() {
  const createChat = useSelector((state) => state.createChat);
  const dispatch = useDispatch();

  return <MCreate messages={dummy} />;
}

export default MCreateContainer;
