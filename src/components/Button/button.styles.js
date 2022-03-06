import styled from "styled-components";
import { fontSizes, colors, borderRadius } from "../../lib/theme";

export const ButtonStyle = styled("button")`
  opacity: 1;
  padding: 1rem 2.5rem;
  text-transform: capitalize;
  border-radius: ${borderRadius.sm};
  transition: all 200ms ease-in-out;
  font-size: ${fontSizes.buttonText};
  border: ${`.5px solid ${colors.bg.darkMode}`};
  background-color: ${({ primary }) =>
    primary ? colors.bg.darkMode : "transparent"};
  color: ${({ primary }) => (primary ? colors.text.light : colors.bg.darkMode)};

  &:hover {
    opacity: 0.8;
  }
`;
