import React from "react";
import { FooterWrapper } from "./footer.styles";

const Footer = ({ ...otherProps }) => {
  // get date automatically yearly
  const getDate = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <FooterWrapper otherProps={otherProps}>
      <div>
        &copy; {"Sudo_Init"} {getDate()} {" | "}
      </div>
      <div> {" iHelp NG "}</div>
    </FooterWrapper>
  );
};

export default Footer;
