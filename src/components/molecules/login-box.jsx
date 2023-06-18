import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  InputBox,
  InputTitle,
  Title,
  StyledInput,
  StyledButton,
  Item,
  Register,
} from "./login-box.styled";

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
    <Container>
      <Title>Login</Title>
      <Item>
        <InputTitle htmlFor="email">
          <span>email</span>
        </InputTitle>
        <InputBox>
          <StyledInput>
            <input type="text" placeholder="email@email.com" id="email" />
          </StyledInput>
          <StyledButton>
            <button>C</button>
          </StyledButton>
        </InputBox>
      </Item>
      <br />
      <Item>
        <InputTitle htmlFor="pw">
          <span>password</span>
        </InputTitle>
        <InputBox>
          <StyledInput>
            <input type="text" placeholder="password" id="pw" />
          </StyledInput>
          <StyledButton>
            <button>C</button>
          </StyledButton>
        </InputBox>
      </Item>
      <Register>
        처음이신가요 <span> 회원가입하기 </span>
      </Register>
    </Container>
  );
}

export default LoginBox;
