import React from "react";
import {DashboardWrapper} from "./dashboard.styles";
import Drawer from '../../components/Drawer'
const Dashboard = ({children}) => {
  const [toggle, setToggle] = React.useState(false);

  return <DashboardWrapper toggle={toggle}>
    <header></header>
    <main>
      <aside>
<Drawer toggle={toggle} setToggle={setToggle} />
      </aside>
      <section>{children}</section>
    <footer></footer>
    </main>
  </DashboardWrapper>;
};

export default Dashboard;
