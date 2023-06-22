import styled from "styled-components";
import { StyledInput } from "../atoms/Input/input.styled";
import { StyledButton } from "../atoms/Button/button";

export const Container = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 500px;
  padding: 10px;
  background-color: #aaa;
  height: auto;
`;

export const Article = styled.article`
  width: 100%;
  background-color: palegoldenrod;
  margin: 4px 0;
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
`;

export const InputItem = styled.div`
  display: block;
  flex: 1;
  background-color: orange;
`;

export const Input = styled(StyledInput)`
  width: 100%;
`;

export const Button = styled(StyledButton)`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 20px;
`;
export const LabelText = styled.label``;
export const Span = styled.span``;
export const P = styled.p``;

export const Alert = styled.span``;
export const Login = styled.span``;
export const AlertArticle = styled(Article)`
  position: relative;
  color: red;
  min-height: 40px;
  & ${P} {
    margin: 10px;
  }
`;
