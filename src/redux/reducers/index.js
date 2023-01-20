import addItem from "./addItem";
import {combineReducers} from "redux";
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from "./userReducers";
import { cartReducer } from "./cartRedurcer";
import { productAddReducer } from "./productRedurcer";

const rootReducers = combineReducers({
    addItem,
    productadd: productAddReducer,
    cart: cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
})



export default rootReducers;