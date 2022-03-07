import React from "react";
import { StyledInput, InputWrapper } from "./input.styles";
import {
  AiFillEye as Reveal,
  AiFillEyeInvisible as Hide,
} from "react-icons/ai";

const Input = ({
  text,
  radio,
  label,
  width,
  height,
  checkbox,
  password,
  placeholder,
}) => {
  const [eyeState, setEyeState] = React.useState(true);
  return (
    <InputWrapper>
      <label>{label}</label>
      <StyledInput
        width={width}
        height={height}
        placeholder={placeholder}
        type={
          text
            ? "text"
            : password
            ? `${eyeState ? "password" : "text"}`
            : radio
            ? "radio"
            : checkbox
            ? "checkbox"
            : "text"
        }
      />
      {password ? (
        <div className="reveal_password">
          {eyeState ? (
            <Reveal onClick={() => setEyeState(!eyeState)} />
          ) : (
            <Hide onClick={() => setEyeState(!eyeState)} />
          )}
        </div>
      ) : null}
    </InputWrapper>
  );
};
export default Input;
