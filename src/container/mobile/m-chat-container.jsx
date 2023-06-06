import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MChat from "../../pages/mobile/m-chat";
import { messageActions } from "../../store/message";

const dummy = [
  { id: 1, sender: "ai", message: "test" },
  { id: 2, sender: "user", message: "test2" },
  { id: 3, sender: "ai", message: "test3" },
  { id: 4, sender: "user", message: "test4" },
  { id: 5, sender: "ai", message: "test5" },
  { id: 6, sender: "user", message: "test6" },
];

function MChatContainer() {
  const message = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("mMainContainer 컴포넌트 로딩완료", message);
    console.log(message.length);
    //  fetch 로 서버에서 데이터를 가져오기
    // const getData = async () => {
    //   const fetch = await 주소
    //   const data = fetch.json();
    // };
    if (!message.length) {
      dispatch(messageActions.setMessages(dummy));
      console.log("완료", message);
    }
    // 현재 프론트상에서 작업할 떄는, useEffect를 한번 렌더링,
    // 서버 연결 후에는 화면에 보여주고, 다른 useEffect 이용해서 서버에서 받아올것.
  }, []);
  return <MChat />;
}

export default MChatContainer;
