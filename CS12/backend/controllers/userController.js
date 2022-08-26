import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// login controller
const authUser = asyncHandler(async (request, response) => {
  const { email, password } = request.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    response.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    response.status(401);
    throw new Error("Invalid email and/or password");
  }
});
//end of login controller

//register controller
const registerUser = asyncHandler(async (request, response) => {
  const { name, email, password } = request.body;

  const isUserExisting = await User.findOne({ email });

  if (!isUserExisting) {
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      response.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      response.status(400);
      throw new Error("Invalid User Data");
    }
  } else {
    response.status(401);
    throw new Error("User already exist");
  }
});
//end of register controller

//display User w/ id
const getUserProfile = asyncHandler(async (request, response) => {
  const user = await User.findById(request.user._id);

  if (user) {
    response.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    response.status(401);
    throw new Error("User Not Found");
  }
});
//end of display User w/ id

//update user
const updateUserProfile = asyncHandler(async (request, response) => {
  const user = await User.findById(request.user._id);

  if (user) {
    user.name = request.body.name || user.name;
    user.email = request.body.email || user.email;
    if (request.body.password) {
      user.password = request.body.password;
    }

    const updated = await user.save();

    response.json({
      _id: updated._id,
      name: updated.name,
      email: updated.email,
      isAdmin: updated.isAdmin,
      token: generateToken(updated._id),
    });
  } else {
    response.status(401);
    throw new Error("User Not Found");
  }
});
//end of update user

//delete user
const deleteUserProfile = asyncHandler(async (request, response) => {
  const user = await User.findById(request.user._id);

  if (user) {
    await user.remove();
    response.json({
      message: "User Remove",
    });
  } else {
    response.status(401);
    throw new Error("User Not Found");
  }
});
//end of delete user

export {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
