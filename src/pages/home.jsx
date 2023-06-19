import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../constants/routes";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>여기는 홈입니다</h1>
      <h2>첫번째 페이지이며</h2>
      <p>여기서 다른데로 갈수 있죠</p>
      <button type="button" onClick={() => navigate(ROUTES.LOGIN.NAVIGATE)}>
        로그인 하기
      </button>
      <button type="button" onClick={() => navigate(ROUTES.REGISTER.NAVIGATE)}>
        회원가입 하기
      </button>
    </>
  );
}

export default Home;
