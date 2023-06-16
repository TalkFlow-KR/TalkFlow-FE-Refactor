import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//

const mainContainer = styled.main`
  margin: 0 auto;
  padding: ${(props) => props.theme.layout.gap.base}px;
`;

//

function LoginBox() {
  const navigate = useNavigate();
  const passwordInputRef = useRef(null);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPwInput, setShowPwInput] = useState(false);
  // const [top, setTop] = useState("2.4rem");

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleNavRegister = () => {
    navigate("/register");
  };
  const handleSubmit = () => {};
  const handleEmailEnter = (e) => {
    if (e.key === "Enter") {
      if (emailValue.length === 0) {
        return;
      }
      // console.log(top);
      setShowPwInput(true);
      if (passwordInputRef.current) {
        passwordInputRef.current.focus();
      }
      // setTop("30%");
      // console.log(top);
    }
  };
  const onClear = () => {
    setEmailValue("");
    setShowPwInput(false);
  };
  const handleEmailValueChange = (e) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordValueChange = (e) => {
    setPasswordValue(e.target.value);
  };
  // useEffect(() => {
  //   if (showPwInput) {
  //     setTop("5.4rem");
  //     if (passwordInputRef.current) {
  //       passwordInputRef.current.focus();
  //     }
  //   }
  // }, [showPwInput]);

  return (
    <main>
      <h1>Login</h1>
      <input
        autoFocus
        type="text"
        name="hmUserEmail"
        id="userEmail"
        placeholder="Email"
        value={emailValue}
        onChange={handleEmailValueChange}
        onKeyDown={handleEmailEnter}
        autoComplete="false"
      />
      <button type="button" onClick={onClear}>
        초기화
      </button>
      <br />
      <input
        ref={passwordInputRef}
        type={showPassword ? "text" : "password"}
        name="pw"
        id="pw"
        value={passwordValue}
        placeholder="Password"
        onChange={handlePasswordValueChange}
      />
      <button type="button" onClick={onShowPassword}>
        패스워드보기{" "}
      </button>
      <br />
      <button type="button" onClick={handleSubmit}>
        Login
      </button>
      <p>
        처음이신가요?
        <span
          role="presentation"
          onClick={handleNavRegister}
          onKeyDown={handleNavRegister}
        >
          회원가입 하기
        </span>
      </p>
    </main>
  );
}

export default LoginBox;
