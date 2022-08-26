import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  DELETE_PROFILE_FAIL,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_SUCCESS,
} from "../constants/userConstants.js";
import axios from "axios";
import { USER_API_URL } from "../constants/apiConstants.js";

//login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const { data } = await axios({
      method: "post",
      baseURL: USER_API_URL,
      url: "/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        password,
      },
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// end of login

//logout
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
};
//end of logout

//registration
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const { data } = await axios({
      method: "post",
      baseURL: USER_API_URL,
      url: "/",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        name,
        email,
        password,
      },
    });

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//end of registration

//get - display user profile
export const getUserProfile = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_PROFILE_REQUEST,
    });

    const {
      userLogIn: { userInfo },
    } = getState();

    const { data } = await axios({
      method: "get",
      baseUrl: USER_API_URL,
      url: `/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    });

    dispatch({
      type: USER_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//end of get - display user profile

//update profile
export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_PROFILE_REQUEST,
    });

    const {
      userLogIn: { userInfo },
    } = getState();

    const { data } = await axios({
      method: "put",
      baseUrl: USER_API_URL,
      url: `/profile`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
      data: user,
    });

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//end of update profile

//delete profile
export const deleteUserProfile = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    await axios({
      method: "delete",
      baseUrl: USER_API_URL,
      url: `/profile`,
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });

    dispatch({
      type: DELETE_PROFILE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//end of delete profile
