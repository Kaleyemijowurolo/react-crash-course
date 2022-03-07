import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { SignUpStyle, Card } from "./signUp.styles";
import Form from "../../components/Form";
import { Router, useRoutes } from "react-router-dom";


const SignUp = () => {
  Router= new useRoutes()
	return (
		<SignUpStyle>
		<Form onClick={() => Router.push("dashboard")} />  
		</SignUpStyle>
	);
};

export default SignUp;
