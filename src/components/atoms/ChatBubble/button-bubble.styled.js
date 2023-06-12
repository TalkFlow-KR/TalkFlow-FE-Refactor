import styled from "styled-components";
import { Bubble as ChatBubble, Message as ChatMessage } from "./chat-bubble";

export const Message = styled(ChatMessage)`
  position: relative;
  height: 100%;
  overflow: hidden;

  & span {
    display: inline-flex;
    width: 360px;
    padding: 20px;
    justify-content: space-between;
  }
`;
export const Bubble = styled(ChatBubble)`
  height: 100%;
  & span {
    background-color: #fff !important;
  }
`;
export const OverlayDiv = styled.div`
  transform: translateX(${(props) => props.X});
  transition: 0.15s transform cubic-bezier(0.28, 0.73, 0.97, 0.52);
  position: absolute;
  top: 18px;
  right: -100px;
  background-color: #e0e8f9;
  width: 56px;
  height: 30px;
  z-index: 10;
  border-radius: 40px;
`;
export const Button = styled.button`
  display: block;
  text-align: center;
  position: relative;
  background-color: transparent;
  border: none;
  width: 48px;
  margin: 0 20px;
  z-index: 20;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  color: ${({ isActive }) => (isActive ? "#35469C" : "#999")};
`;
