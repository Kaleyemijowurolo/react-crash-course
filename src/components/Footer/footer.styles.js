import styled from "styled-components";
import { colors, fontSizes } from "../../lib/theme";

export const FooterWrapper = styled("div")`
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.bg.darkMode};
  font-size: ${fontSizes.smallBody};
`;
