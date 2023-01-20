/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import index from "../redux/reducers/index"
import { useSelector } from "react-redux";

export default function AdminRoute({ children }) {
    const userLogin = useSelector((state) =>state.userLogin);
    const { userInfo} = userLogin;
  return userInfo && userInfo.isAdmin ? children : <Navigate to="/signin" />;
}