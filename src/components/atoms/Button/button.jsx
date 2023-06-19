import React from "react";
import { BUTTON_TYPE } from "../../../constants/variant";

function Button({ children, variant }) {
  const type = variant || BUTTON_TYPE.BUTTON;
  return <button type={type}>{children}</button>;
}

export default Button;
