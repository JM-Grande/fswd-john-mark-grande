import React from "react";

const Email = (props) => {
  const validateEmail = (email) => {
    if (email.length > 0) {
      props.setEmailValid(true);
    } else {
      props.setEmailValid(false);
    }
  };

  return (
    <div>
      <h5>Email:</h5>
      <input
        type="text"
        className="email"
        onChange={(event) => {
          validateEmail(event.target.value);
        }}
      />
    </div>
  );
};

export default Email;
