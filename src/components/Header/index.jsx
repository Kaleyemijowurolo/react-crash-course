import React, { useState } from "react";
import { MainHeaderWrapper } from "./header.styles";
import {
  IoIosNotificationsOutline,
  IoIosSearch,
  IoIosMenu,
} from "react-icons/io";
import { BsApple } from "react-icons/bs";
// import Data from "../../data.json";

const DashboardHeader = () => {
  // const [userData, setUserData] = useState({});

  // React.useEffect(() => {
  //   fetch("../../data.json")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response.user, "response");
  //       setUserData(response.user);
  //     });
  // }, []);
  return (
    <MainHeaderWrapper>
      <div className="header_logo">
        {" "}
        <BsApple />
        {"Sudo"}
      </div>
      <div className="header_search">
        <div className="input_wrapper">
          <IoIosSearch />
          <input type="text" placeholder="Search here" />
        </div>
        <div className="menu">
          <IoIosMenu />
        </div>
      </div>
      <div className="header_notification">
        <IoIosNotificationsOutline />
      </div>
      <div className="header_user">
        <div className="user_image">
          <img src={"/assets/kk.jpg"} alt="logo" />
        </div>
        <div className="user_name">{"Kayode"}</div>
      </div>
    </MainHeaderWrapper>
  );
};

export default DashboardHeader;
