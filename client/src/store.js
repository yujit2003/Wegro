import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducer,
  productsReducer,
  governementPolicyReducer,
} from "./component/reducers/productReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  policy: governementPolicyReducer
});

let initialState = {}

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
