import styled from "styled-components";
import { colors, fontSizes } from "../../lib/theme";
import Button from "../Button";

export const DrawerWrapper = styled("aside")`
  display: flex;
  position: relative;
  flex-direction: column;
  transition: all 300ms ease-in-out;
  border: 0.5px solid ${colors.border.dark};
  border-top: none;
  height: ${({ height }) => (height ? height : "100%")};
  width: ${({ width, toggleWidth }) =>
    width
      ? width
      : toggleWidth
      ? "100%"
      : " 100%"}; //dynamically set the with or set 100%, toggleWidth toggles the actual width set on click on the toggleWidth icon
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : colors.bg.component};

  .sign_out {
    flex: 1;
    display: flex;
    margin-bottom: 1rem;
    align-items: flex-end;
    justify-content: center;

    ul {
      flex-basis: 100%;
    }
  }
  ul {
    display: flex;
    cursor: pointer;
    overflow: hidden;
    padding: 1rem 0px;
    align-items: center;
    color: ${colors.text.light};
    transition: all 200ms ease-in-out;

    &:hover {
      background-color: ${({ hoverBgColor }) =>
        hoverBgColor ? hoverBgColor : colors.bg.darkMode};
      color: ${({ hoverTextColor }) =>
        hoverTextColor ? hoverTextColor : colors.text.light};
    }

    .icon {
      display: flex;
      padding: 5px 0;
      font-size: 1.5rem;
      align-items: center;
      justify-content: center;
      width: ${({ toggleWidth }) => (toggleWidth ? "100%" : "20%")};
    }

    li {
      flex: 1;
      text-indent: 1rem;
      text-transform: capitalize;
      transition: all 300ms ease-in-out;
      display: ${({ toggleWidth }) => (toggleWidth ? "none" : "inline-block")};
    }
  }

  .active {
    background-color: ${colors.btn.primary};
    border-left: 2.5px solid ${colors.btn.light};
  }

  @media screen and (max-width: 780px) {
    ul {
      .icon {
        width: 100%;
        font-size: 2rem;
        padding: 0 0.5rem;
      }
      li {
        display: none;
      }
    }
  }
`;

/** Create an absolute Button from the Button component
 * this means the absolute button will have all Button component
 * props and styles and can add other props and styles*/
export const AbsoluteButton = styled(Button)`
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : colors.bg.darkMode};
  justify-content: center;
  align-items: center;
  position: absolute;
  border: solid ${colors.border.light};
  border-radius: 50%;
  right: -1rem;
  /* border: none; */
  display: flex;
  height: 30px;
  width: 30px;
  padding: 0;
  top: 50%;

  /* style the absolute button icon */
  svg {
    font-size: ${fontSizes.smallBody};
  }

  &:hover {
    opacity: 1;
    border: solid ${colors.border.dark};
  }

  /* hide the absolute button on small screen */
  @media screen and (max-width: 780px) {
    display: none;
  }
`;
