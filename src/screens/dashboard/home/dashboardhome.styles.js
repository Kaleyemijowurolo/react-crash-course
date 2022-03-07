import styled from "styled-components";
import { colors } from "../../../lib/theme";

export const Overlay = styled.div`
  left: 0;
  top: 0;
  padding: 0;
  width: 100vw;
  z-index: 999;
  display: flex;
  overflow: scroll;
  height: 100vh;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: #00000099;

  @media screen and (max-width: 460px) {
    overflow: scroll;
  }
`;
export const DashboardHomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 940px) {
    justify-content: space-evenly;
  }

  @media screen and (max-width: 730px) {
    overflow: scroll;
    padding: 0 0.5rem;
    justify-content: center;
  }
`;

export const HomeCard = styled.div`
  width: 320px;
  height: 420px;
  margin-top: 1rem;
  border-radius: 6px;
  background-color: ${colors.bg.component};

  header,
  footer {
    height: 35%;
    padding: 0.3rem 1rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo_holder {
      padding: 5px;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
    }
    .logo_text {
      display: flex;
      max-width: 50%;
      flex-wrap: wrap;
      font-size: 1.5rem;
      margin-left: 10px;
      font-weight: bolder;
      text-transform: uppercase;
      color: ${colors.text.light};
    }
  }

  main {
    height: 30%;
    display: flex;
    align-items: center;
    padding: 0.3rem 1rem;
    justify-content: center;
    border-top: 1.5px solid ${colors.bg.darkMode};
    border-bottom: 1.5px solid ${colors.bg.darkMode};

    div {
      color: ${colors.text.sub};
      font-size: 13px;
    }
  }

  footer {
    padding-bottom: 2rem;
    position: relative;

    .analytics {
      min-height: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .analytics_container {
        width: 50%;
        height: 50%;
      }
      div:nth-child(1) {
        color: ${colors.text.sub};
        font-size: 13px;

        padding: 5px 0;
      }
      div:last-child {
        padding: 3px 0;
        font-size: 14px;
      }
    }

    .analytics_content {
      color: ${colors.text.light};
    }

    .bold {
      font-weight: bolder;
    }
    .like,
    .true {
      right: 12px;
      bottom: 10px;
      padding: 5px;
      display: flex;
      cursor: pointer;
      width: max-content;
      position: absolute;
      border-radius: 100%;
      box-sizing: border-box;
      border: 0.1px solid ${colors.btn.heart};

      svg {
        color: ${colors.btn.heart};
        font-size: 1.2rem;
      }
    }
    .false {
      border: 0.1px solid ${colors.bg.darkMode};
      svg {
        color: ${colors.bg.darkMode};
      }
    }
  }
`;

export const Card = styled.div`
  width: 550px;
  height: 600px;
  border-radius: 6px;
  background-color: ${colors.bg.component};

  header,
  main,
  footer {
    padding: 0.3rem 2rem;
  }
  header {
    display: flex;
    height: 10%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1.5px solid ${colors.bg.darkMode};

    .logo_holder {
      padding: 5px;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;

      .logo_text {
        margin-left: 10px;
        color: ${colors.text.light};
        font-size: 1rem;
        font-weight: bolder;
        text-transform: uppercase;
      }
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      .close,
      .minimize {
        cursor: pointer;
        padding: 0 5px;

        svg {
          color: ${colors.bg.darkMode};
          font-size: 1.5rem;
        }
      }
    }
  }

  main {
    height: 75%;
    padding-top: 2rem;
    /* border: 0.3px solid; */

    .analytics_title,
    .info_heading,
    .web_company_title {
      font-size: 15px;
    }

    .title > .title_heading {
      text-transform: capitalize;
    }

    .title,
    .analytics,
    .info,
    .web_company {
      div:nth-child(1) {
        color: ${colors.text.light};
        padding: 3px 0;
      }
      div:last-child {
        padding: 3px 0;
      }
    }

    .title_content,
    .analytics_content,
    .info_content,
    .web_company_content {
      font-size: 13px;
      color: ${colors.text.sub};
    }

    .analytics {
      height: 20%;
      display: flex;
      align-items: center;

      .total {
        margin: 0 2.5rem;
      }
    }

    .web_company {
      height: 25%;
      display: flex;
      align-items: center;

      div {
        min-width: 30%;
      }
    }

    .shares {
      min-height: 15%;
      display: flex;

      div {
        padding: 5px 0;
      }
      .shares_title {
        color: ${colors.text.sub};
      }
      .shares_content {
        display: flex;
        font-size: 15px;
        border-radius: 4px;
        width: max-content;
        align-items: center;
        padding: 0.5rem 1.5rem;
        justify-content: center;
        color: ${colors.text.light};
        background-color: ${colors.bg.darkMode};
      }
    }
  }

  footer {
    height: 15%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;

    .add_to_cart {
      margin: 0 10px;
    }
  }

  @media screen and (max-width: 600px) {
    width: 400px;
    height: 600px;
  }
  @media screen and (max-width: 460px) {
    width: 90%;
    min-height: 90%;
  }
`;

export const Button = styled.button`
  height: 40px;
  border: none;
  cursor: pointer;
  min-width: 100px;
  padding: 0 20px;
  border-radius: 4px;
  border: ${({ type }) =>
    type === "primary" ? "none" : `0.3px solid ${colors.bg.darkMode}`};
  background-color: ${({ type }) =>
    type === "primary" ? `${colors.btn.primary}` : "transparent"};
  color: ${({ type }) =>
    type === "primary" ? `${colors.text.light}` : `${colors.btn.primary}`};

  &:hover {
    opacity: 0.8;
  }
`;
