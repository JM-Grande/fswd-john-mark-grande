import React from "react";
import { Alert, AlertTitle } from "@mui/material";

const Message = ({ severity, children }) => {
  return (
    <Alert severity={severity}>
      <AlertTitle>{severity}</AlertTitle>
      {children}
    </Alert>
  );
};

export default Message;
