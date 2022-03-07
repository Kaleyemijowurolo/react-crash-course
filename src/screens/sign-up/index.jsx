import React from "react";
import { SignUpStyle } from "./signUp.styles";
import Form from "../../components/Form";

const SignUp = () => {
  return (
    <SignUpStyle>
      <Form to="/sign-in" />
    </SignUpStyle>
  );
};

export default SignUp;
