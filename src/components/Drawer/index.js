import React from "react";
import { DrawerWrapper, AbsoluteButton } from "./drawer.styles";
import {
  BsApp,
  BsApple,
  BsAward,
  BsBadgeAd,
  BsBoxArrowLeft as ArrowLeft,
  BsBoxArrowRight as ArrowRight,
  BsCurrencyBitcoin as Bitcoin
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
    icon: <Bitcoin />,
    label: "Bitcoin",
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
        <ul title={label}>
          <div className="icon">{icon}</div>
          <li>{label}</li>
        </ul>
      ))}
      <AbsoluteButton
        title={toggle ? "Open" : "Close"}
        text={toggle ? <ArrowRight /> : <ArrowLeft />}
        onClick={() => setToggle(!toggle)}
        primary
      />
    </DrawerWrapper>
  );
};

export default Drawer;
