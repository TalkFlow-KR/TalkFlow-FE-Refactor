import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MChat from "../../pages/mobile/m-chat";
import { messageActions } from "../../store/message";

const dummy = [
  {
    id: 1,
    sender: "ai",
    message:
      "20글자테스트단어여기까지가스무글자임.\n" +
      "20글자테스트단어여기까지가스무\n글자임." +
      "20글자테\n스트단어여기까지가스무글자임." +
      "20글자테스트단\n어여기까지가스무글자임.",
  },
  { id: 2, sender: "user", message: "test2" },
  { id: 3, sender: "ai", message: "test3" },
  { id: 4, sender: "user", message: "test4" },
  { id: 5, sender: "ai", message: "test5" },
  { id: 6, sender: "user", message: "test6" },
];

function MChatContainer() {
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const handleAddMessage = (message) => {
    dispatch(messageActions.addMessages(message));
  };

  useEffect(() => {
    if (messages.isFirstMount) {
      // fetch 로 서버 데이터 가져오기
      console.log(
        "mMainContainer 첫 로딩",
        messages,
        "첫로딩시 messages.length",
        messages.length
      );
      // 서버데이터 dispatch 하기
      dispatch(messageActions.setMessages(dummy));
      // mount 성공시 첫마운트 false
      dispatch(messageActions.setMount(false));
    } else {
      // input 으로 messages 값 변동 생기면 추가
      console.log("isMount가 false 일때 가져오는 값", messages);
    }
  }, [messages]);

  return <MChat messages={messages.messages} onAddMessage={handleAddMessage} />;
}

export default MChatContainer;
