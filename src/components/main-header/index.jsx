import React, { useState } from "react";
import { MainHeaderWrapper } from "./main-header.styles";
import {
  IoIosNotificationsOutline,
  IoIosSearch,
  IoIosMenu,
} from "react-icons/io";

const MainHeader = () => {
  const [userData, setUserData] = useState({});

  // React.useEffect(() => {
  //   fetch("Data.json")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response.user, "response");
  //       setUserData(response.user);
  //     });
  // }, []);
  return (
    <MainHeaderWrapper>
      <div className="header_logo">{"Sudo"}</div>
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
          {/* <img
            src={"/assets/kk.jpg"}
            alt="logo"
           
          /> */}
        </div>
        {/* <div className="user_name">{userData.name}</div> */}
      </div>
    </MainHeaderWrapper>
  );
};

export default MainHeader;