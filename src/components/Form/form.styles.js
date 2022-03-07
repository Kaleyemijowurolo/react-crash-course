import styled from "styled-components";
import { colors, fontSizes, fontWeights } from "../../lib/theme";

export const FormStyle = styled("div")`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;

  header {
    height: 20%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: ${fontSizes.h4};
    color: ${colors.bg.darkMode};
    font-weight: ${fontWeights.medium};
  }

  main {
    height: ${({ signIn }) => (signIn ? "45%" : "60%")};
    /* border: solid green; */

    .input_wrapper {
      padding: 1.5rem 0;
    }

    .mini_input {
      display: flex;
      justify-content: space-between;

      .input_wrapper {
        width: 45%;
      }
    }
    .radio,
    .news_letter {
      label {
        margin-left: 10px;
      }
    }

    .radio {
      display: flex;

      .input_wrapper input {
        border: solid red;
      }

      & .input_wrapper:last-child {
        margin-left: 10px;
      }
    }
  }

  footer {
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 780px) {
    padding: 0 1rem;
  }

  @media screen and (max-width: 300px) {
    header {
      font-size: ${fontSizes.h5};
    }
    footer {
      margin: 1.5rem 0;
    }
  }
`;

export const Card = styled("form")`
  height: ${({ signIn }) => (signIn ? "500px" : "700px")};
  width: 450px;
  background-color: #ffffff80;
  box-shadow: 0px 0px 5px lightgray;
  border-radius: ${fontSizes.small};
  border-top: 8px solid ${colors.bg.darkMode};
  padding: 0 1rem;
  /* overflow-y: scroll; */

  @media screen and (max-width: 780px) {
    width: 100%;
    height: 90%;
  }
`;
