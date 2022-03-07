import React from "react";
import Drawer from "../../components/Drawer";
import { DashboardWrapper } from "./dashboard.styles";
import DashboardHeader from "../../components/Header";

const Dashboard = ({ children }) => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <DashboardWrapper toggle={toggle}>
      <header>
        <DashboardHeader />
      </header>

      <main>
        <aside id="aside">
          <Drawer toggle={toggle} setToggle={setToggle} />
        </aside>
        <section>{children}</section>
        <footer></footer>
      </main>
    </DashboardWrapper>
  );
};

export default Dashboard;
