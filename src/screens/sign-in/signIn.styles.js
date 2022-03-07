import styled from "styled-components";
import { colors, fontSizes, fontWeights, fonts } from "../../lib/theme";
import BG from "../../assets/bg.jpg";

export const SignInStyle = styled("div")`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-image: url(${BG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  header {
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fontSizes.h4};
    font-weight: ${fontWeights.medium};
  }

  main {
    height: 60%;
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
`;
