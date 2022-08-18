import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//reducer
import { itemDetailReducer, itemListReducer } from "./reducers/itemReducers.js";

const reducer = combineReducers({
  // list of reducers
  itemList: itemListReducer,
  itemDetail: itemDetailReducer,
});

const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
