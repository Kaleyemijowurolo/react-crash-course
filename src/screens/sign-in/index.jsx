import React from "react";
import { SignInStyle } from "./signIn.styles";
import Form from "../../components/Form";

const SignIn = () => {
  return (
    <SignInStyle>
      <Form to="/dashboard" signIn />
    </SignInStyle>
  );
};

export default SignIn;
