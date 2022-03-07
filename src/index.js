import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import SignIn from './screens/sign-in' 
import SignUp from './screens/sign-up' 
import Dashboard from "./screens/dashboard";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="sign-in" element={<SignIn />} />
    <Route path="sign-up" element={<SignUp />} />
    <Route path="dashboard" element={<Dashboard />} />
    </Routes>
			
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
