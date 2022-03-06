import React from "react";
import Button from "./src/components/Button";
import Username from ".src/components/Input";
import Password from ".src/components/Input";
import Email from ".src/components/Input";
const test = () => {
  return (
    <div>
      <Button
        style={{ color: "red", backgroundColor: "cyan", width: "50vw" }} //otherProps
        text={"primary"} //button text
        primary
      />
      <Button text={"secondary"} />

      {/* Input */}
      <Email
        width={"25%"}
        label={"Email"}
        placeholder={"example@sudo_init.com"}
      />
      <Username
        text
        width={"25%"}
        label={"username"}
        placeholder={"enter username"}
      />
      <br />
      <Password
        password
        width={"50%"}
        label={"password"}
        placeholder={"enter password"}
      />
    </div>
  );
};

export default test;
