import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { SignInStyle, Card } from "./signUp.styles";
import Form from "../../components/Form";

const SignIn = () => {
	return (
		<SignInStyle>
			<Form signIn />
		</SignInStyle>
	);
};

export default SignIn;
