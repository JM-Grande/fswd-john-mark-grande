import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//reducer
import { itemDetailReducer, itemListReducer } from "./reducers/itemReducers.js";
import { cartReducer } from "./reducers/cartReducers.js";
import {
  deleteProfileReducer,
  updateProfileReducer,
  userLoginReducer,
  userProfileReducer,
  userRegisterReducer,
} from "./reducers/userReducer.js";

const reducer = combineReducers({
  // list of reducers
  itemList: itemListReducer,
  itemDetail: itemDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,
  updateProfile: updateProfileReducer,
  deleteProfile: deleteProfileReducer,
});
//cart localStorage
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

//user localStorage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
  userProfile: { user: userInfoFromStorage },
};

// const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
