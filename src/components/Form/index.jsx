import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FormStyle, Card } from "./form.styles";
import { Link } from "react-router-dom";

const Form = ({ to = "/", signIn, signUp, onClick }) => {
  return (
    <FormStyle signIn={signIn}>
      <Card signIn={signIn}>
        <header>
          {signIn ? (
            <>{"Welcome"} &#129309;&#127995;</>
          ) : (
            "Create Account with Us"
          )}{" "}
        </header>
        <main>
          <div className="username_pass">
            <div className="input_wrapper">
              <Input text label={"Email"} placeholder={"example@ihelp.com"} />{" "}
            </div>
            <div className="input_wrapper">
              <Input password label={"password"} placeholder={"password"} />{" "}
            </div>
          </div>
          {/* ----------------------------------------------------- */}
          {signIn ? null : (
            <>
              <div className="mini_input">
                <div className="input_wrapper">
                  <Input text label={"first name"} placeholder={"John"} />{" "}
                </div>
                <div className="input_wrapper">
                  <Input text label={"last name"} placeholder={"Doe"} />{" "}
                </div>
              </div>

              {/* ----------------------------------------------------- */}

              <div className="radio">
                <div className="input_wrapper">
                  <input type="radio" name="choice" id="male" value={"male"} />
                  <label htmlFor="male">{"Male"}</label>
                </div>

                <div className="input_wrapper">
                  <input
                    type="radio"
                    name="choice"
                    id="female"
                    value={"female"}
                  />
                  <label htmlFor="female">{"Female"}</label>
                </div>
              </div>
              {/* ----------------------------------------------------- */}

              <div className="news_letter">
                <div className="input_wrapper">
                  <input type="checkbox" name="newletter" id="" />
                  <label htmlFor="female">
                    {"I want to receive newsletter"}
                  </label>
                </div>
              </div>
            </>
          )}
        </main>

        <footer>
          <Link to={to}>
            <Button
              onClick={onClick}
              style={{ width: "100%" }}
              primary
              text={signIn ? "Sign In" : "Create Account"}
            />
          </Link>
        </footer>
        <div style={{ float: "right" }}>
          {signIn ? (
            <>
              {"I Dont have an account?"}
              <Link to={"/sign-up"}> {"Create Account"}</Link>
            </>
          ) : (
            <>
              {"Already have an account?"}
              <Link to={"/sign-in"}> {"Sign In"}</Link>
            </>
          )}
        </div>
      </Card>
    </FormStyle>
  );
};

export default Form;
