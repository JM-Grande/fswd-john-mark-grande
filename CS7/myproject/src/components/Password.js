import React from "react";

const Password = (props) => {
  const validatePass = (password) => {
    if (password.length > 0) {
      props.setPasswordValid(true);
    } else {
      props.setPasswordValid(false);
    }
  };

  return (
    <div>
      <h5>Password:</h5>
      <input
        type="text"
        className="password"
        onChange={(event) => {
          validatePass(event.target.value);
        }}
      />
    </div>
  );
};

export default Password;
