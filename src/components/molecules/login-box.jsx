import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GrPowerReset } from "react-icons/gr";
import { AiFillEye } from "react-icons/ai";

import {
  Container,
  InputBox,
  InputTitle,
  Title,
  Item,
  Register,
  Input,
  InputButton,
  LoginButton,
} from "./login-box.styled";
import { BUTTON_TYPE, INPUT_TYPE } from "../../constants/variant";
import ROUTES from "../../constants/routes";

const API =
  "https://react-http-1adf2-default-rtdb.asia-southeast1.firebasedatabase.app/";
function LoginBox() {
  const navigate = useNavigate();
  const passwordInputRef = useRef(null);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPwInput, setShowPwInput] = useState(false);
  // const [top, setTop] = useState("2.4rem");z

  // useEffect(() => {
  //   if (showPwInput) {
  //     setTop("5.4rem");
  //     if (passwordInputRef.current) {
  //       passwordInputRef.current.focus();
  //     }
  //   }
  // }, [showPwInput]);

  // Login Button
  const handleLogin = async () => {
    const res = await axios.post(API, {
      email: emailValue,
      password: passwordValue,
    });
    console.log(res);
    return res.data;
  };
  // EMAIL INPUT
  const handleEmailValueChange = (e) => {
    setEmailValue(e.target.value);
  };
  const onEmailEnter = (e) => {
    if (e.key === "Enter") {
      if (emailValue.length === 0) {
        return;
      }
      setShowPwInput(true);
      if (passwordInputRef.current) {
        passwordInputRef.current.focus();
      }
    }
  };
  const onClear = () => {
    setEmailValue("");
    setShowPwInput(false);
  };
  // PASSWORD INPUT
  const handlePasswordValueChange = (e) => {
    setPasswordValue(e.target.value);
  };
  const onShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onPasswordEnter = (e) => {
    if (e.key === "Enter") {
      if (passwordValue.length === 0) {
        return null;
      }
      handleLogin();
    }
    return null;
  };
  // Register : navigate to registry
  const handleNavRegister = () => {
    navigate(ROUTES.REGISTER.NAVIGATE);
  };

  // 렌더링
  return (
    <Container>
      <Title>Login</Title>
      <Item>
        <InputTitle htmlFor={INPUT_TYPE.EMAIL_INPUT.ID}>
          <span>{INPUT_TYPE.EMAIL_INPUT.TEXT}</span>
        </InputTitle>
        <InputBox>
          <Input
            variant={INPUT_TYPE.EMAIL_INPUT}
            id={INPUT_TYPE.EMAIL_INPUT.ID}
            value={emailValue}
            onChange={handleEmailValueChange}
            onKeydown={onEmailEnter}
          />
          <InputButton variant={BUTTON_TYPE.BUTTON} onClear={onClear}>
            <GrPowerReset />
          </InputButton>
        </InputBox>
      </Item>
      <br />
      <Item>
        {showPwInput && (
          <>
            <InputTitle htmlFor={INPUT_TYPE.PASSWORD_INPUT.ID}>
              <span>{INPUT_TYPE.PASSWORD_INPUT.TEXT}</span>
            </InputTitle>
            <InputBox>
              <Input
                variant={
                  showPassword
                    ? INPUT_TYPE.PASSWORD_INPUT
                    : INPUT_TYPE.SHOW_PASSWORD_INPUT
                }
                id={INPUT_TYPE.PASSWORD_INPUT.ID}
                value={passwordValue}
                onChange={handlePasswordValueChange}
                onKeydown={onPasswordEnter}
              />
              <InputButton
                variant={BUTTON_TYPE.BUTTON}
                onShowPassword={onShowPassword}
              >
                <AiFillEye />
              </InputButton>
            </InputBox>
          </>
        )}
        <LoginButton variant={BUTTON_TYPE.BUTTON} onClick={handleLogin}>
          LOGIN
        </LoginButton>
      </Item>
      <Register>
        처음이신가요
        <span role="presentation" onClick={handleNavRegister}>
          회원가입하기
        </span>
      </Register>
    </Container>
  );
}

export default LoginBox;
