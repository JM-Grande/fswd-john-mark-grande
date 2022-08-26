import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Card,
  styled,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../Form.js";
import Message from "../Message.js";
import {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  logout,
} from "../../actions/userActions.js";

import { UPDATE_PROFILE_RESET } from "../../constants/userConstants.js";

//styled components
const MainBox = styled(Box)({
  // backgroundColor: "red",
  margin: "auto auto",
  marginTop: "5em",
});

const ProfileCard = styled(Card)({
  margin: "0 auto",
});

const StyledAvatar = styled(Avatar)({
  width: 56,
  height: 56,
  margin: "1em 0",
});

const NameStack = styled(Stack)({
  marginBottom: "1em",
});

const Divider = styled(Box)({
  border: "1px solid rgba(0, 0, 0, 0.2)",
  marginBottom: ".5em",
});
// end of styled components

const Profile = () => {
  const navigate = useNavigate();

  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userProfile = useSelector((state) => state.userProfile);
  const { isLoading, error, user } = userProfile;

  const updateProfile = useSelector((state) => state.updateProfile);
  const { success } = updateProfile;

  const handleUpdateDialog = () => {
    setIsUpdateOpen(true);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  const handleDelete = () => {
    dispatch(deleteUserProfile());
    dispatch(logout());
    navigate("/Login");
  };

  useEffect(() => {
    if (!!!userInfo) {
      navigate("/Login");
    } else if (!user.name || !user || success) {
      dispatch({ type: UPDATE_PROFILE_RESET });
      dispatch(getUserProfile());
      setIsUpdateOpen(false);
    } else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [userInfo, navigate, dispatch, user, success]);
  return (
    <>
      <MainBox
        maxWidth={{ xs: "90%", md: "40%" }}
        minHeight={{ xs: "400px", md: "400px" }}
      >
        <ProfileCard
          sx={{
            maxWidth: { xs: "90%", md: "70%" },
          }}
        >
          <Stack alignItems="center">
            <StyledAvatar alt="Profile" src="">
              {!!userInfo ? userInfo.name[0] : null}
            </StyledAvatar>

            <NameStack alignItems="center">
              <Typography variant="h5">
                {!!userInfo ? userInfo.name : null}
              </Typography>
              <Typography variant="span">
                {!!userInfo ? userInfo.email : null}
              </Typography>
            </NameStack>
          </Stack>

          <Divider></Divider>

          <Stack direction="row" justifyContent="space-between">
            <Button onClick={handleUpdateDialog}>EDIT PROFILE</Button>

            <Button onClick={() => setIsDeleteOpen(true)}>
              DELETE PROFILE
            </Button>
          </Stack>
        </ProfileCard>
      </MainBox>

      {/* Modal */}
      <Dialog open={isUpdateOpen}>
        <DialogTitle>UPDATE PROFILE</DialogTitle>
        <Form isLoading={isLoading} error={error}></Form>
        {message && <Message>{message}</Message>}
        <DialogContent>
          <Box
            component="form"
            noValidate
            onSubmit={(event) => handleUpdate(event)}
          >
            <TextField
              autoFocus
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <TextField
              autoFocus
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <TextField
              autoFocus
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={(event) => setPassword(event.target.value)}
            />

            <TextField
              autoFocus
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />

            <DialogActions>
              <Button type="submit">Update</Button>
              <Button onClick={() => setIsUpdateOpen(false)}>CLOSE</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Delete Modal */}
      <Dialog open={isDeleteOpen}>
        <DialogTitle>DELETE PROFILE</DialogTitle>
        <Form isLoading={isLoading} error={error}></Form>
        {message && <Message>{message}</Message>}
        <DialogContent>
          Are you sure you want to delete profile?
          {/* <Box
            component="form"
            noValidate
            onSubmit={(event) => handleUpdate(event)}
          > */}
          <DialogActions>
            <Button onClick={(event) => handleDelete(event)}>Delete</Button>
            <Button onClick={() => setIsDeleteOpen(false)}>Close</Button>
          </DialogActions>
          {/* </Box> */}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Profile;
