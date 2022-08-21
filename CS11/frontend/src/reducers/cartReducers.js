import {
  CART_APPEND_ITEM,
  CART_REMOVE_ITEM,
} from "../constants/cartConstants.js";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_APPEND_ITEM:
      const newItem = action.payload;
      const itemInCart = state.cartItems.find((item) => item.id === newItem.id);

      if (itemInCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === itemInCart.id ? newItem : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (items) => items.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
