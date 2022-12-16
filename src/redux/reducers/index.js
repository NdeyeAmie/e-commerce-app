import addItem from "./addItem";
import {combineReducers} from "redux";
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from "./userReducers";
import { cartReducer } from "./cartRedurcer";

const rootReducers = combineReducers({
    addItem,
    cart: cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
})



export default rootReducers;