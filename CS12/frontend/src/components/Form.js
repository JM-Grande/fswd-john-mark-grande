import React from "react";
import { Box, Stack } from "@mui/material";
import Message from "./Message.js";
import Loader from "./Loader.js";

const Form = ({ isLoading, error, children }) => {
  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <Box>
          {error && (
            <Stack>
              <Message>{error}</Message>
            </Stack>
          )}
          {children}
        </Box>
      )}
    </React.Fragment>
  );
};

export default Form;
