import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers";

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

  const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : [];



const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        spippingAddress:shippingAddressFromStorage,
    },    
    userLogin : {userInfo:userInfoFromStorage}
};
const middleware =[thunk]

const store = createStore(rootReducers,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;