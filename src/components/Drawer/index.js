import React from "react";
import { DrawerWrapper, AbsoluteButton } from "./drawer.styles";
import {
  BsApp,
  BsApple,
  BsAward,
  BsBadgeAd,
  BsBoxArrowLeft as ArrowLeft,
  BsBoxArrowRight as ArrowRight,
  BsCurrencyBitcoin as Bitcoin,
} from "react-icons/bs";
import { MdSpaceDashboard as Dashboard } from "react-icons/md";
import { Link, useRoutes } from "react-router-dom";

const drawerData = [
  {
    icon: <Dashboard />,
    label: "Dashboard",
    to: "/dashboard",
  },
  {
    icon: <BsApp />,
    label: "Product",
    to: "/product",
  },
  {
    icon: <Bitcoin />,
    label: "Bitcoin",
    to: "/bitcoin",
  },
  {
    icon: <BsAward />,
    label: "Services",
    to: "/services",
  },
  {
    icon: <BsBadgeAd />,
    label: "Advertisement",
    to: "/advertisement",
  },
];

const Drawer = ({ height, width, toggle, setToggle }) => {
  // const router = useRoutes();
  return (
    <DrawerWrapper toggleWidth={toggle} width={width} height={height}>
      {drawerData.map(({ icon, label, to }, idx) => {
        const classname = "";
        // router.asPath === to ? "active" : "";
        return (
          <Link to={to} key={idx}>
            <ul title={label} className={`li_wrapper ${"classname"}`}>
              <div className="icon">{icon}</div>
              <li>{label}</li>
            </ul>
          </Link>
        );
      })}
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
