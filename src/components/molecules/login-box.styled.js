import styled from "styled-components";
import { Button as ButtonAtom } from "../atoms/Button/button";
import { Input as InputAtom } from "../atoms/Input/input";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 500px;
  padding: 10px;
  background-color: #aaa;
  height: 200px;
`;
export const Title = styled.h1`
  margin-bottom: 40px;
`;
export const Item = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: teal;
  min-width: 360px;
`;
export const InputTitle = styled.label`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  span {
    font-size: 14px;
    margin: 4px;
  }
`;
export const InputBox = styled.div`
  display: flex;
`;
export const Input = styled(InputAtom)`
  flex: 1;
  width: inherit;
  padding: 8px 16px;
  outline: none;
  border: 0;
  border-radius: 8px;
  height: 30px;
`;
export const Register = styled.p`
  background-color: orangered;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  span {
    font-size: small;
    font-weight: 700;
  }
`;
export const StyledButton = styled(ButtonAtom)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  z-index: 10;
  background-color: red;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  margin: auto 0;
`;
