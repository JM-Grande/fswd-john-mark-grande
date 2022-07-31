import React, { useState, useEffect } from "react";
import Email from "./Email";
import Password from "./Password";
import ConfirmPassword from "./ConfirmPassword";
import Names from "./Names";
import Sex from "./Sex";
import Terms from "./Terms";
import Button from "./Button";

const Form = () => {
  const [isFormValid, setFormValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [isNamesValid, setNamesValid] = useState(false);
  const [isSexValid, setSexValid] = useState(false);
  const [isTermsValid, setTermsValid] = useState(false);

  useEffect(() => {
    setFormValid(
      isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid &&
        isNamesValid &&
        isSexValid &&
        isTermsValid
    );
  }, [
    isEmailValid,
    isPasswordValid,
    isConfirmPasswordValid,
    isNamesValid,
    isSexValid,
    isTermsValid,
  ]);

  return (
    <React.Fragment>
      <h1>Getting Started</h1>
      <Email setEmailValid={setEmailValid} />
      <Password setPasswordValid={setPasswordValid} />
      <ConfirmPassword setConfirmPasswordValid={setConfirmPasswordValid} />
      <Names setNamesValid={setNamesValid} />
      <Sex setSexValid={setSexValid} />
      <Terms setTermsValid={setTermsValid} />
      <Button name={"Sign Up"} isEnabled={isFormValid} />
    </React.Fragment>
  );
};

export default Form;
