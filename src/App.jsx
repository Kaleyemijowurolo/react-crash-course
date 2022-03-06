import React from "react";
import styled from "styled-components";
import Dashboard from "./screens/dashboard";
import SignIn from "./screens/sign-in";
import SignUp from "./screens/sign-up";

const AppWrapper = styled("div")`
  /* width: 20vw; */
  /* display: flex; */
  /* border: solid; */
  /* height: 100vh; */
  /* align-items: center; */
  /* justify-content: center; */
`;

const App = () => {
  return (
    <AppWrapper>
      <SignUp />
      {/* <Dashboard /> */}
    </AppWrapper>
  );
};

export default App;
