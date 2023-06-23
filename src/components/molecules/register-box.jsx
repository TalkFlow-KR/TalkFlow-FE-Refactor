// import React, { useEffect, useState } from "react";
// import {
//   AiOutlineCheck,
//   AiOutlineClose,
//   AiOutlineQuestion,
// } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
//
// function RegisterBox() {
//   const navigate = useNavigate();
//   const emailRageX = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
//
//   const [checkEmoji, setCheckEmoji] = useState(<AiOutlineQuestion />);
//   const [isValid, setIsValid] = useState(-1);
//   const [emailValue, setEmailValue] = useState("");
//   const [isValidEmail, setIsValidEmail] = useState(false);
//   const [passwordValue, setPasswordValue] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [userNameValue, setUserNameValue] = useState("");
//   // 회원가입 성공/실패
//   const [isSuccess, setIsSuccess] = useState("");
//   const onChange = (e, setState, valid, setValid) => {
//     const { value } = e.target;
//     if (valid) {
//       setValid(valid.test(value));
//     }
//     setState(value);
//     setCheckEmoji(<AiOutlineQuestion />);
//   };
//   const onShow = () => {
//     setShowPassword(!showPassword);
//   };
//   const onAuthEmail = async () => {
//     console.log(emailValue);
//     const res = await axios.post("/signup/checkemail", {
//       email: emailValue,
//     });
//     console.log(res.data);
//     // 중복이 아닐경우
//     if (res.data) {
//       setIsValid(1);
//       setCheckEmoji(<AiOutlineCheck style={{ color: "#2ea043" }} />);
//     } else {
//       setIsValid(0);
//       setCheckEmoji(<AiOutlineClose style={{ color: "#e23e32" }} />);
//     }
//   };
//   const goIndex = () => {
//     navigate("/");
//   };
//   const onSubmit = async () => {};
//   // 유효성 검사후 가입 버튼 활성화
//   useEffect(() => {
//     if (!(isValidEmail && isValidPhone && passwordValue.length < 9)) {
//       setIsDisable(true);
//     } else {
//       setIsDisable(false);
//     }
//   }, [isValidEmail, isValidPhone, passwordValue]);
//   useEffect(() => {
//     if (isSuccess === "success") {
//       notify("회원가입 성공 ! 로그인 페이지로 이동합니다.");
//       navigate("/successregister");
//     } else if (isSuccess === "fail") {
//       notify("입력하신 정보가 올바르지 않습니다.");
//     }
//   }, [isSuccess, navigate, notify]);
//
//   return <div />;
// }
//
// export default RegisterBox;

import React, { useState } from "react";
import { AiFillAlert } from "react-icons/ai";
import {
  Article,
  Button,
  Container,
  InputItem,
  Row,
  Title,
  Alert,
  Input,
  LabelText,
  P,
  Span,
  AlertArticle,
  Login,
} from "./register-box.styled";
import { BUTTON_TYPE, INPUT_TYPE } from "../../constants/variant";
import LOCALE from "../../constants/locale";

function RegisterBox() {
  const [isInputError, setIsInputError] = useState([
    { id: 0, nameError: false },
    { id: 1, usernameError: false },
    { id: 2, userEmailError: false },
    { id: 3, userPasswordError: false },
    { id: 4, isCheckboxError: false },
  ]);
  const [inputValues, setInputValues] = useState({
    [INPUT_TYPE.NAME_INPUT.NAME]: "",
    [INPUT_TYPE.USERNAME_INPUT.NAME]: "",
    [INPUT_TYPE.PASSWORD_INPUT.NAME]: "",
    [INPUT_TYPE.EMAIL_INPUT.NAME]: "",
    [INPUT_TYPE.CHECKBOX_INPUT.NAME]: false,
  });
  const handleInputsChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setInputValues((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  };
  const getErrorString = (i) => {
    if (i === 0) {
      return LOCALE.SIGNUP.ERROR.USER_NAME_EMPTY;
    }
    if (i === 1) {
      return LOCALE.SIGNUP.ERROR.EMAIL_ERROR;
    }
    if (i === 2) {
      return LOCALE.SIGNUP.ERROR.NAME_EMPTY;
    }
    if (i === 3) {
      return LOCALE.SIGNUP.ERROR.PW_SHORT;
    }
    if (i === 4) {
      return LOCALE.SIGNUP.ERROR.AGREE_TERMS;
    }
    return null;
  };
  const onSubmit = () => {
    console.log("test", Object.values(isInputError));
    if (inputValues[INPUT_TYPE.NAME_INPUT.NAME] === "") {
      setIsInputError((prev) => ({
        ...prev,
        nameError: true,
      }));
    }
    if (inputValues[INPUT_TYPE.USERNAME_INPUT.NAME] === "") {
      setIsInputError.usernameError = true;
      setIsInputError((prev) => ({
        ...prev,
        usernameError: true,
      }));
    }
    if (inputValues[INPUT_TYPE.PASSWORD_INPUT.NAME] === "") {
      setIsInputError((prev) => ({
        ...prev,
        passwordError: true,
      }));
    }
    if (inputValues[INPUT_TYPE.EMAIL_INPUT.NAME] === "") {
      setIsInputError((prev) => ({
        ...prev,
        userEmailError: true,
      }));
    }
    if (inputValues[INPUT_TYPE.CHECKBOX_INPUT.NAME] === false) {
      setIsInputError((prev) => ({
        ...prev,
        isCheckboxError: true,
      }));
    } else {
      console.log("회원가입 성공 ");
      console.log(inputValues[INPUT_TYPE.NAME_INPUT.NAME]);
      console.log(isInputError);
    }
  };

  return (
    <Container>
      <Alert>
        {LOCALE.SIGNUP.ASK_LOGIN}
        <Login>{LOCALE.SIGNUP.LOGIN}</Login>
      </Alert>
      <Article>
        <Title>{LOCALE.SIGNUP.TITLE}</Title>
        <P>{LOCALE.SIGNUP.SUBTITLE}</P>
        <P>{LOCALE.SIGNUP.TEXT}</P>
      </Article>
      <AlertArticle>
        {Object.values(isInputError).map((error, index) => {
          const isError = Object.values(error).includes(true);
          if (isError) {
            return (
              <P key={error.id}>
                <AiFillAlert />
                {getErrorString(index)}
              </P>
            );
          }
          return null;
        })}
      </AlertArticle>
      <Article>
        <Row>
          <InputItem>
            {/* username */}
            <LabelText htmlFor="username">
              <Span>{LOCALE.SIGNUP.USERNAME}</Span>
            </LabelText>
            <br />
            <Input
              type={INPUT_TYPE.USERNAME_INPUT.TYPE}
              id={INPUT_TYPE.USERNAME_INPUT.ID}
              name={INPUT_TYPE.USERNAME_INPUT.NAME}
              value={inputValues[INPUT_TYPE.USERNAME_INPUT.NAME]}
              onChange={handleInputsChange}
            />
          </InputItem>
          <InputItem>
            {/* realname */}
            <LabelText htmlFor="rname">
              <Span>{LOCALE.SIGNUP.NAME}</Span>
            </LabelText>
            <br />
            <Input
              type={INPUT_TYPE.NAME_INPUT.TYPE}
              id={INPUT_TYPE.NAME_INPUT.ID}
              name={INPUT_TYPE.NAME_INPUT.NAME}
              value={inputValues[INPUT_TYPE.NAME_INPUT.NAME]}
              onChange={handleInputsChange}
            />
          </InputItem>
        </Row>
      </Article>
      <Article>
        <Row>
          <InputItem>
            {/* email */}
            <LabelText htmlFor="email">
              <Span>{LOCALE.SIGNUP.EMAIL}</Span>
            </LabelText>
            <br />
            <Input
              type={INPUT_TYPE.EMAIL_INPUT.TYPE}
              id={INPUT_TYPE.EMAIL_INPUT.ID}
              name={INPUT_TYPE.EMAIL_INPUT.NAME}
              value={inputValues[INPUT_TYPE.EMAIL_INPUT.NAME]}
              onChange={handleInputsChange}
            />
          </InputItem>
        </Row>
      </Article>
      <Article>
        <Row>
          <InputItem>
            {/* password */}
            <LabelText htmlFor="password">
              <Span>{LOCALE.SIGNUP.PASSWORD}</Span>
            </LabelText>
            <br />
            <Input
              type={INPUT_TYPE.PASSWORD_INPUT.TYPE}
              id={INPUT_TYPE.PASSWORD_INPUT.ID}
              name={INPUT_TYPE.PASSWORD_INPUT.NAME}
              value={inputValues[INPUT_TYPE.PASSWORD_INPUT.NAME]}
              onChange={handleInputsChange}
            />
          </InputItem>
        </Row>
      </Article>
      <Article>
        <Row>
          <InputItem>
            {/* checkbox */}
            <Input
              type="checkbox"
              id="check"
              checked={inputValues[INPUT_TYPE.CHECKBOX_INPUT.IS_CHECKED]}
              onChange={handleInputsChange}
            />
            <LabelText htmlFor="check">{LOCALE.SIGNUP.AGREE_TERMS}</LabelText>
          </InputItem>
        </Row>
      </Article>
      <Article>
        <Row>
          <InputItem>
            <Button variant={BUTTON_TYPE.BUTTON} onClick={onSubmit}>
              {LOCALE.SIGNUP.SIGNUP_BUTTON}
            </Button>
          </InputItem>
        </Row>
      </Article>
    </Container>
  );
}

export default RegisterBox;
