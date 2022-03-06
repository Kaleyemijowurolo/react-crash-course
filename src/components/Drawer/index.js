import React from "react";
import { DrawerWrapper, AbsoluteButton } from "./drawer.styles";
import {
  BsBoxArrowLeft as ArrowLeft,
  BsBoxArrowRight as ArrowRight,
} from "react-icons/bs";
const drawerData = [
  {
    icon: "icon",
    label: "Dashboard",
  },
  {
    icon: "icon",
    label: "Product",
  },
];
const SideBar = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <DrawerWrapper>
      {drawerData.map(({ icon, label }) => (
        <ul>
          <div className="icon">{icon}</div>
          <li>{label}</li>
        </ul>
      ))}
      <AbsoluteButton
        text={toggle ? <ArrowRight /> : <ArrowLeft />}
        onClick={() => setToggle(!toggle)}
        primary
      />
    </DrawerWrapper>
  );
};

export default SideBar;
