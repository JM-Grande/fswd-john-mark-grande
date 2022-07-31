import React, { useState, useEffect } from "react";
import Forgot from "./Forgot";
import { Routes, Route, Link } from "react-router-dom";
import Email from "../Email";
import Password from "../Password";
import Button from "../Button";

const Login = () => {
  const [isFormValidLogIn, setFormValidLogIn] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);

  useEffect(() => {
    setFormValidLogIn(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  return (
    <>
      <h1>Login</h1>
      <Email setEmailValid={setEmailValid} />
      <Password setPasswordValid={setPasswordValid} />
      <Button name={"Log In"} isEnabled={isFormValidLogIn} />
      <Link to="/forgot">Forgot Password?</Link>
      <Routes>
        <Route path="forgot" element={<Forgot />} />
      </Routes>
    </>
  );
};

export default Login;
