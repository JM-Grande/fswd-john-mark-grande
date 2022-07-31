import React, { useState, useEffect } from "react";
import Email from "../Email";
import Button from "../Button";
const Forgot = () => {
  const [isFormValidForgot, setFormValidForgot] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);

  useEffect(() => {
    setFormValidForgot(isEmailValid);
  }, [isEmailValid]);

  return (
    <React.Fragment>
      <h1>Forgot</h1>
      <Email setEmailValid={setEmailValid} />
      <Button name={"Sent New Password"} isEnabled={isFormValidForgot} />
    </React.Fragment>
  );
};

export default Forgot;
