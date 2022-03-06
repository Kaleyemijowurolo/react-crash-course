import styled from "styled-components";
import { colors, fontSizes } from "../../lib/theme";
import Button from "../Button";

export const DrawerWrapper = styled("aside")`
  position: relative;
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
      text-indent: 1rem;
      transition: all 300ms ease-in-out;
      width: ${({ toggleWidth }) =>
        toggleWidth
          ? "0%"
          : "70%"}; // when toggleWidth is true, set li width to 0% so icon can occupy
    }
  }
`;

/** Create an absolute Button from the Button component
 * this means the absolute button will have all Button component
 * props and styles and can add other props and styles*/
export const AbsoluteButton = styled(Button)`
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : colors.bg.darkMode};
  border-radius: 50%;
  position: absolute;
  right: -1.5rem;
  border: none;
  height: 50px;
  width: 50px;
  padding: 0;
  top: 50%;

  /* style the absolute button icon */
  svg {
    font-size: ${fontSizes.title};
  }

  &:hover {
    opacity: 1;
    border: solid ${colors.border.dark};
  }
`;
