import React, { useEffect, useState } from "react";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineQuestion,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterBox() {
  const navigate = useNavigate();
  const emailRageX = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const [checkEmoji, setCheckEmoji] = useState(<AiOutlineQuestion />);
  const [isValid, setIsValid] = useState(-1);
  const [emailValue, setEmailValue] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userNameValue, setUserNameValue] = useState("");
  // 회원가입 성공/실패
  const [isSuccess, setIsSuccess] = useState("");
  const onChange = (e, setState, valid, setValid) => {
    const { value } = e.target;
    if (valid) {
      setValid(valid.test(value));
    }
    setState(value);
    setCheckEmoji(<AiOutlineQuestion />);
  };
  const onShow = () => {
    setShowPassword(!showPassword);
  };
  const onAuthEmail = async () => {
    console.log(emailValue);
    const res = await axios.post("/signup/checkemail", {
      email: emailValue,
    });
    console.log(res.data);
    // 중복이 아닐경우
    if (res.data) {
      setIsValid(1);
      setCheckEmoji(<AiOutlineCheck style={{ color: "#2ea043" }} />);
    } else {
      setIsValid(0);
      setCheckEmoji(<AiOutlineClose style={{ color: "#e23e32" }} />);
    }
  };
  const goIndex = () => {
    navigate("/");
  };
  const onSubmit = async () => {};
  // 유효성 검사후 가입 버튼 활성화
  useEffect(() => {
    if (!(isValidEmail && isValidPhone && passwordValue.length < 9)) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [isValidEmail, isValidPhone, passwordValue]);
  useEffect(() => {
    if (isSuccess === "success") {
      notify("회원가입 성공 ! 로그인 페이지로 이동합니다.");
      navigate("/successregister");
    } else if (isSuccess === "fail") {
      notify("입력하신 정보가 올바르지 않습니다.");
    }
  }, [isSuccess, navigate, notify]);

  return <div />;
}

export default RegisterBox;
