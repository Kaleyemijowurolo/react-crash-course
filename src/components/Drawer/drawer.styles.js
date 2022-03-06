import styled from "styled-components";
import { colors } from "../../lib/theme";
import Button from "../Button";

export const DrawerWrapper = styled("aside")`
  width: 100%;
  height: 100%;
  position: relative;

  ul {
    display: flex;
    cursor: pointer;
    padding: 1rem 0px;
    align-items: center;
    color: ${colors.text.light};
    transition: all 200ms ease-in-out;
    background-color: ${({ bgColor }) =>
      bgColor ? bgColor : colors.bg.component};

    &:hover {
      background-color: ${({ hoverBgColor }) =>
        hoverBgColor ? hoverBgColor : colors.bg.darkMode};
      color: ${({ hoverTextColor }) =>
        hoverTextColor ? hoverTextColor : colors.text.light};
    }

    .icon {
      padding: 0 10px;
    }
  }
`;

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

  &:hover {
    opacity: 1;
    border: solid ${colors.border.dark};
  }
`;
