import styled from "styled-components";

export const DashboardWrapper = styled("div")`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  header {
    height: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  main {
    height: 92%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    aside {
      flex: ${({ toggle }) => (toggle ? "0.3" : "1.5")};
      height: 100%;
    }

    section {
      flex: 8;
      height: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }

  footer {
    height: 2%;
  }
`;
