import React from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

//styled components
const StyledLink = styled(Link)({
  marginTop: ".5em",
  color: "gray",
});

const MainBox = styled(Box)({
  height: "100vh",
  margin: "0 auto",
});

const LogInText = styled(Typography)({
  textAlign: "center",
  margin: "2em 0",
});

const FormStack = styled(Stack)({
  margin: "0 auto",
  border: ".5px solid gray",
  padding: "3em",
  borderRadius: "30px",
});

const LogInButton = styled(Button)({
  marginTop: "2em",
  backgroundColor: "black",
  color: " white",
  padding: "1em",
  "&:hover": { color: " black", border: ".5px solid gray" },
});
//end of styled components

const Login = () => {
  return (
    <>
      <MainBox
        sx={{
          maxWidth: { xs: "90%", sm: "80%", md: "50%" },
        }}
      >
        <LogInText variant="h4">Log In</LogInText>
        <FormStack
          sx={{
            maxWidth: { xs: "90%", sm: "80%" },
          }}
        >
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />

          <LogInButton
            sx={{
              maxWidth: { xs: "100%", sm: "50%", md: "25%" },
            }}
          >
            Log In
          </LogInButton>
          <StyledLink to="/Forgot">
            <Typography variant="span">Forgot Password ?</Typography>
          </StyledLink>
        </FormStack>
      </MainBox>
    </>
  );
};

export default Login;
