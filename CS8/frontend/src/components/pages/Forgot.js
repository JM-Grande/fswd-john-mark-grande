import React from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  styled,
} from "@mui/material";

//styled components
const MainBox = styled(Box)({
  height: "100vh",
  margin: "0 auto",
});

const ResetText = styled(Typography)({
  textAlign: "center",
  margin: "2em 0",
});

const FormStack = styled(Stack)({
  margin: "0 auto",
  border: ".5px solid gray",
  padding: "3em",
  borderRadius: "30px",
});

const ForgotButton = styled(Button)({
  marginTop: "2em",
  backgroundColor: "black",
  color: " white",
  padding: "1em",
  "&:hover": { color: " black", border: ".5px solid gray" },
});
//end of styled components

const Forgot = () => {
  return (
    <>
      <MainBox
        sx={{
          maxWidth: { xs: "90%", sm: "80%", md: "50%" },
        }}
      >
        <ResetText variant="h4">Reset Password</ResetText>
        <FormStack
          sx={{
            maxWidth: { xs: "90%", sm: "80%" },
          }}
        >
          <TextField id="standard-basic" label="Email" variant="standard" />

          <ForgotButton
            sx={{
              maxWidth: { xs: "100%", sm: "50%", md: "40%" },
            }}
          >
            Send Password to Email
          </ForgotButton>
        </FormStack>
      </MainBox>
    </>
  );
};

export default Forgot;
