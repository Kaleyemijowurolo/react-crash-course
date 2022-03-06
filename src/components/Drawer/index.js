import React from "react";
import { DrawerWrapper, AbsoluteButton } from "./drawer.styles";
import {
  BsApp,
  BsApple,
  BsAward,
  BsBadgeAd,
  BsBoxArrowLeft as ArrowLeft,
  BsBoxArrowRight as ArrowRight,
} from "react-icons/bs";

const drawerData = [
  {
    icon: <BsApple />,
    label: "Dashboard",
  },
  {
    icon: <BsApp />,
    label: "Product",
  },
  {
    icon: <BsAward />,
    label: "Dashboard",
  },
  {
    icon: <BsBadgeAd />,
    label: "Product",
  },
];

const Drawer = ({ height, width, toggle, setToggle }) => {
  return (
    <DrawerWrapper toggleWidth={toggle} width={width} height={height}>
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

export default Drawer;
