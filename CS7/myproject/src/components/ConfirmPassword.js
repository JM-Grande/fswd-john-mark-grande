import React from "react";

const ConfirmPassword = (props) => {
  const confirmPass = (confirmPass) => {
    if (confirmPass.length > 0) {
      props.setConfirmPasswordValid(true);
    } else {
      props.setConfirmPasswordValid(false);
    }
  };
  return (
    <div>
      <h5>Confirm Password:</h5>
      <input
        type="text"
        className="confirmPassword"
        onChange={(event) => {
          confirmPass(event.target.value);
        }}
      />
    </div>
  );
};

export default ConfirmPassword;
