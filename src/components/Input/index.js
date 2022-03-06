import React from "react";
import { StyledInput, InputWrapper } from "./input.styles";

const Input = ({ text, password, label, width, height, placeholder }) => (
  <InputWrapper>
    <label>{label}</label>
    <StyledInput
      type={text ? "text" : password ? "password" : ""}
      placeholder={placeholder}
      width={width}
      height={height}
    />
  </InputWrapper>
);
export default Input;
