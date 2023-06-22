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

import React, { useEffect, useState } from "react";
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
import { BUTTON_TYPE } from "../../constants/variant";
import LOCALE from "../../constants/locale";

function RegisterBox() {
  const [isInputError, setIsInputError] = useState([
    {
      id: 0,
      error: false,
    },
    { id: 1, error: false },
    { id: 2, error: false },
    { id: 3, error: false },
    { id: 4, error: false },
  ]);
  const [nameValue, setNameValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [userEmailValue, setUserEmailValue] = useState("");
  const [userPasswordValue, setUserPasswordValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleNameChange = (e) => setNameValue(e.target.value);
  const handleUsernameChange = (e) => setUsernameValue(e.target.value);
  const handleEmailChange = (e) => setUserEmailValue(e.target.value);
  const handlePasswordChange = (e) => setUserPasswordValue(e.target.value);
  const handleCheckboxChange = (e) => {
    e.preventDefault();
    setIsChecked((prev) => !prev);
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
    if (!isChecked) {
      setIsInputError((prevErrors) => [
        { id: 0, error: true },
        ...prevErrors.slice(1),
      ]);
    }
    if (!nameValue) {
      setIsInputError((prevErrors) => [
        { id: 1, error: true },
        ...prevErrors.slice(1),
      ]);
    }
    if (!usernameValue) {
      setIsInputError((prevErrors) => [
        { id: 2, error: true },
        ...prevErrors.slice(1),
      ]);
    }
    if (!userEmailValue) {
      setIsInputError((prevErrors) => [
        { id: 3, error: true },
        ...prevErrors.slice(1),
      ]);
    }
    if (!userPasswordValue) {
      setIsInputError((prevErrors) => [
        { id: 4, error: true },
        ...prevErrors.slice(1),
      ]);
    }
    console.log("회원가입 성공 ");
    console.log(isInputError);
  };

  useEffect(() => {}, [isInputError]);
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
        {isInputError.map((error, index) =>
          error.error ? (
            <P key={error.id}>
              <AiFillAlert />
              {getErrorString(index)}
            </P>
          ) : null
        )}
      </AlertArticle>
      <Article>
        <Row>
          <InputItem>
            <LabelText htmlFor="username">
              <Span>{LOCALE.SIGNUP.USERNAME}</Span>
            </LabelText>
            <br />
            <Input
              type="text"
              id="username"
              value={usernameValue}
              onChange={handleUsernameChange}
            />
          </InputItem>
          <InputItem>
            <LabelText htmlFor="name">
              <Span>{LOCALE.SIGNUP.NAME}</Span>
            </LabelText>
            <br />
            <Input
              type="text"
              id="name"
              value={nameValue}
              onChange={handleNameChange}
            />
          </InputItem>
        </Row>
      </Article>
      <Article>
        <Row>
          <InputItem>
            <LabelText htmlFor="email">
              <Span>{LOCALE.SIGNUP.EMAIL}</Span>
            </LabelText>
            <br />
            <Input
              type="text"
              id="email"
              value={userEmailValue}
              onChange={handleEmailChange}
            />
          </InputItem>
        </Row>
      </Article>
      <Article>
        <Row>
          <InputItem>
            <LabelText htmlFor="password">
              <Span>{LOCALE.SIGNUP.PASSWORD}</Span>
            </LabelText>
            <br />
            <Input
              type="text"
              id="password"
              value={userPasswordValue}
              onChange={handlePasswordChange}
            />
          </InputItem>
        </Row>
      </Article>
      <Article>
        <Row>
          <InputItem>
            <Input
              type="checkbox"
              id="check"
              checked={isChecked}
              onChange={handleCheckboxChange}
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
