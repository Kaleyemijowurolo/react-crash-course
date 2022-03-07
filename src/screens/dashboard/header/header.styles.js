import styled from "styled-components";
import { colors } from "../../../lib/theme/colors";

export const HeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  li {
    flex: 1;
    color: ${colors.text.light};
    display: flex;
    cursor: pointer;
    font-size: 12px;
    list-style: none;
    height: max-content;
    padding: 0.8rem 10px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.bg.component};
    border-right: 2px solid ${colors.bg.darkMode};
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${colors.btn.primary};
    }
  }

  li:last-child {
    border-right: none;
  }
  .active {
    border-bottom: 1px solid ${colors.btn.primary};
    color: ${colors.btn.primary};
  }

  @media screen and (max-width: 940px) {
    padding: 1rem 0;
    overflow: scroll;
    height: max-content;
  }
`;
