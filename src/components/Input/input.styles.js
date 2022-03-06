import styled from "styled-components";
import { borderRadius, colors, fontSizes, indent } from "../../lib/theme";

export const InputWrapper = styled("div")`
  width: 100%;
  position: relative;

  label {
    top: -12px;
    left: 11px;
    padding: 2px 5px;
    position: absolute;
    text-transform: capitalize;
    font-size: ${fontSizes.smallBody};
    background-color: ${colors.text.light};
    border-right: 1px solid ${colors.border.dark};
    border-left: 1px solid ${colors.border.dark};
  }

  .reveal_password{
    top: 13px;
    right:10px ;
    cursor: pointer;
    position: absolute;
  }
`;

export const StyledInput = styled("input")`
  text-indent: ${indent.md};
  color: ${colors.border.dark};
  border-radius: ${borderRadius.md};
  border-color: ${colors.border.dark};
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "40px;")};

  &:focus {
    outline: none;
    color: ${colors.text.light};
    background-color: ${colors.bg.darkMode};
  }

  &::placeholder {
    color: ${colors.text.sub};
  }

`;
