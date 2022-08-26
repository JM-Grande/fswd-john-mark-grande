import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  styled,
  Button,
} from "@mui/material";

import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions.js";
import Form from "../Form.js";
import Message from "../Message.js";

//styled components
const MainBox = styled(Box)({
  height: "100vh",
  margin: "0 auto",
});

const FormStack = styled(Stack)({
  margin: "0 auto",
  border: ".5px solid gray",
  padding: "3em",
  borderRadius: "30px",
});

const SignButton = styled(Button)({
  margin: "1em 0",
  backgroundColor: "black",
  color: " white",
  padding: "1em",
  "&:hover": { color: " black", border: ".5px solid gray" },
});

//end of styled components

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { isLoading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, password));
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
        <Form isLoading={isLoading} error={error} />
        {message && <Message>{message}</Message>}

        <Typography variant="h4" textAlign="center" mt="2em" mb="2em">
          Sign Up
        </Typography>
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
              type="email"
              id="standard-basic"
              label="Email"
              variant="standard"
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              type="password"
              id="standard-basic"
              label="Password"
              variant="standard"
              onChange={(event) => setPassword(event.target.value)}
            />
            <TextField
              type="password"
              id="standard-basic"
              label="Confirm Password"
              variant="standard"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <TextField
              type="text"
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={(event) => setName(event.target.value)}
            />

            <SignButton
              sx={{
                maxWidth: { xs: "100%", sm: "50%", md: "25%" },
              }}
              type="submit"
            >
              Sign Up
            </SignButton>
          </FormStack>
        </Box>
      </MainBox>
    </>
  );
};

export default Registration;
