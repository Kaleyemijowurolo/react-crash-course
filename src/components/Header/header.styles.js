import styled from "styled-components";
import { colors, fontSizes } from "../../lib/theme";

export const MainHeaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: ${colors.bg.component}!important;

  .header_logo {
    display: flex;
    flex-basis: 18%;
    font-size: 3rem;
    text-indent: 1rem;
    font-weight: bold;
    align-items: center;
    color: ${colors.text.light};
    /* border: 0.9px solid ${colors.border.dark}; */
  }

  .header_search {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 1.8rem;

    .input_wrapper {
      background-color: ${colors.bg.darkMode};
      width: 50%;
      height: 40px;
      display: flex;
      border-radius: 3px;
      padding: 0 1rem 0 0;
      align-items: center;

      svg {
        margin: 0 1rem;
        cursor: pointer;
        font-size: 20px;
        color: ${colors.border.light};
      }

      input {
        flex: 1;
        height: 100%;
        border: none;
        outline: none;
        background-color: transparent;
        color: ${colors.text.light};

        &::placeholder {
          color: ${colors.btn.primary};
          font-weight: bold;
          font-size: ${fontSizes.buttonText};
        }
      }
    }
    .menu {
      display: none;
      cursor: pointer;
      border-radius: 3px;
      margin-right: 1rem;
      padding: 0.25rem 0.7rem;
      color: ${colors.border.light};
      background-color: ${colors.bg.darkMode};
      svg {
        font-size: 30px;
      }
    }
  }

  .header_notification {
    flex-basis: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 0.9px solid ${colors.border.light};
    border-left: 0.9px solid ${colors.border.light};

    svg {
      font-size: 2rem;
      cursor: pointer;
      border-radius: 50%;
      padding: 5px;
      color: ${colors.border.light};
      &:hover {
        background-color: ${colors.bg.darkMode};
      }
    }
  }

  .header_user {
    display: flex;
    flex-basis: 13%;
    align-items: center;
    justify-content: center;

    .user_image {
      width: 30px;
      height: 30px;
      overflow: hidden;
      border-radius: 50%;
      object-fit: contain;
      border: 2px solid ${colors.border.light};

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }

    .user_name {
      font-size: 12px;
      padding: 0 0.5rem;
      /* text-align: center; */
      text-transform: capitalize;
      color: ${colors.text.light};
    }
  }

  @media screen and (max-width: 940px) {
    .header_search > .input_wrapper {
      width: 100%;
      margin-right: 1.5rem;
    }

    .header_user {
      display: flex;
      flex-direction: column;

      .user_name {
        padding: 0.5rem 0;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .header_search {
      justify-content: flex-end;
      .input_wrapper {
        width: max-content;
        padding: 0;
        input {
          display: none;
        }
      }
      .menu {
        display: block;
      }
    }
    .header_notification,
    .header_user {
      display: none;
    }
  }
`;
