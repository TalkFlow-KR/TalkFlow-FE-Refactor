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

import React from "react";
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
} from "./register-box.styled";

function RegisterBox() {
  return (
    <Container>
      <Alert>이미 회원이신가요 ? 로그인 하기 </Alert>
      <Article>
        <Title>ABCFLOW 회원가입 하기</Title>
        <P>ABCFLOW 오신것을 환영합니다!</P>
        <P>지금 바로 회원가입하고, 무료로 서비스 이용하세요.</P>
      </Article>
      <AlertArticle>
        <P>
          <AiFillAlert />
          Name은 공백이 될 수 없습니다.
        </P>
        <P>
          <AiFillAlert />
          email 양식이 잘못 되었습니다.
        </P>
        <P>
          <AiFillAlert />
          약관에 동의하셔야합니다.
        </P>
        <P>
          <AiFillAlert />
          비밀번호가 너무 짧습니다. (6글자 이상)
        </P>
        <P>
          <AiFillAlert />
          Name은 공백이 될 수 없습니다.
        </P>
      </AlertArticle>
      <Article>
        <Row>
          <InputItem>
            <LabelText htmlFor="username">
              <Span>Username</Span>
            </LabelText>
            <br />
            <Input type="text" id="username" />
          </InputItem>
          <InputItem>
            <LabelText htmlFor="name">
              <Span>Name</Span>
            </LabelText>
            <br />
            <Input type="text" id="name" />
          </InputItem>
        </Row>
      </Article>
      <Article>
        <Row>
          <InputItem>
            <LabelText htmlFor="email">
              <Span>Email</Span>
            </LabelText>
            <br />
            <Input type="text" id="email" />
          </InputItem>
        </Row>
      </Article>
      <Article>
        <Row>
          <InputItem>
            <LabelText htmlFor="password">
              <Span>Password</Span>
            </LabelText>
            <br />
            <Input type="text" id="password" />
          </InputItem>
        </Row>
      </Article>
      <Article>
        <Row>
          <InputItem>
            <Input type="checkbox" id="check" />
            <LabelText htmlFor="check">
              회원가입과 동시에 약관에 동의합니다.
            </LabelText>
          </InputItem>
        </Row>
      </Article>
      <Article>
        <Row>
          <InputItem>
            <Button>계정생성</Button>
          </InputItem>
        </Row>
      </Article>
    </Container>
  );
}

export default RegisterBox;
