import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  styled,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions.js";
import Form from "../Form.js";

// styled components
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

const LogButton = styled(Button)({
  marginTop: "2em",
  backgroundColor: "black",
  color: " white",
  padding: "1em",
  "&:hover": { color: " black", border: ".5px solid gray" },
});

const StyledLink = styled(Link)({
  marginTop: ".5em",
  color: "gray",
});

// end of styled components

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { isLoading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(login(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  return (
    <>
      <MainBox
        sx={{
          maxWidth: { xs: "90%", sm: "80%", md: "50%" },
        }}
      >
        <Form isLoading={isLoading} error={error}></Form>
        <LogInText variant="h4">Log In</LogInText>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={(event) => handleSubmit(event)}
        >
          <FormStack
            sx={{
              maxWidth: { xs: "90%", sm: "80%" },
            }}
          >
            <TextField
              id="standard-basic"
              type="email"
              name="email"
              label="Email"
              variant="standard"
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              id="standard-basic"
              type="password"
              name="password"
              label="Password"
              variant="standard"
              onChange={(event) => setPassword(event.target.value)}
            />

            <LogButton
              sx={{
                maxWidth: { xs: "100%", sm: "50%", md: "25%" },
              }}
              type="submit"
            >
              Log In
            </LogButton>

            <StyledLink to="/Forgot">
              <Typography variant="span">Forgot Password ?</Typography>
            </StyledLink>

            {/* <StyledLink to={redirect ? `/Registration`}>
              <Typography variant="span">Create an account</Typography>
            </StyledLink> */}
          </FormStack>
        </Box>
      </MainBox>
    </>
  );
};

export default Login;
