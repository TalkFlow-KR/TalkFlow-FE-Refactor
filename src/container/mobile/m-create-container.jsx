import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MCreate from "../../pages/mobile/m-create";
import { createChatActions } from "../../store/create-chat";

const dummy = [
  {
    id: 1,
    sender: "ai",
    message: "이용하실 채팅 언어를 선택 하실 수 있습니다.",
  },
  { id: 2, sender: "user", message: ["영어", "일본어", "중국어"] },
  {
    id: 3,
    sender: "ai",
    message: "원하시는 채팅 테마를 선택 하실 수 있습니다.",
  },
  { id: 4, sender: "user", message: ["헬스", "공원", "백화점"] },
  {
    id: 5,
    sender: "ai",
    message: "대화 상대를 골라주세요.",
  },
  { id: 6, sender: "user", message: ["여성", "군인", "래퍼"] },
];
function MCreateContainer() {
  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedTheme, setSelectedTheme] = useState();
  const [selectedPartner, setSelectedPartner] = useState();

  const selected = [selectedLanguage, selectedTheme, selectedPartner];
  const onSelectItem = (index, item) => {
    console.log(item, index);
    if (index === 2) {
      setSelectedLanguage(item);
    } else if (index === 4) {
      setSelectedTheme(item);
    } else if (index === 6) {
      setSelectedPartner(item);
    }
  };
  const onSubmit = () => {
    dispatch(createChatActions.setLanguage(selectedLanguage));
    dispatch(createChatActions.setTheme(selectedTheme));
    dispatch(createChatActions.setMount(selectedPartner));
  };
  return (
    <MCreate
      messages={dummy}
      onSubmit={onSubmit}
      onSelectItem={onSelectItem}
      selected={selected}
    />
  );
}

export default MCreateContainer;
