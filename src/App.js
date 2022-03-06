import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";

const AppWrapper = styled("div")`
  width: 100vw;
  display: flex;
  border: solid;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <AppWrapper>
      <Footer />
    </AppWrapper>
  );
};

export default App;
