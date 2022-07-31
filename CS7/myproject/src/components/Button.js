import React from "react";

const Button = (props) => {
  return <button disabled={!props.isEnabled}>{props.name}</button>;
};

export default Button;
