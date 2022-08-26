import axios from "axios";
import {
  CART_APPEND_ITEM,
  CART_REMOVE_ITEM,
} from "../constants/cartConstants.js";
import { ITEM_API_URL } from "../constants/apiConstants.js";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios({
    method: "get",
    baseURL: ITEM_API_URL,
    url: `/${id}`,
  });

  dispatch({
    type: CART_APPEND_ITEM,
    payload: {
      id: data._id,
      name: data.name,
      brand: data.brand,
      image: data.image,
      price: data.price,
      stock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
