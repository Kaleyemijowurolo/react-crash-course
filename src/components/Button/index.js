import React from "react";
import { ButtonStyle } from "./button.styles";

const Button = ({ primary, text, ...otherProps }) => {
  return (
    <ButtonStyle {...otherProps} primary={primary}>
      {text}
    </ButtonStyle>
  );
};
export default Button;
