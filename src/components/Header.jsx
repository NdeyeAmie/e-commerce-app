import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import CartBtn from './buttons/CartBtn';
import Login from './buttons/Login';
//import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import { NavDropdown, } from 'react-bootstrap';
import { logout } from '../redux/actions/userAction';
//import Signup from './buttons/Signup';

const Header = () => {

  // const navigate = useNavigate()
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  // useEffect(() =>{  
  //        if(userInfo)
  //     navigate("/signup" )
  //    },[userInfo, navigate], );


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">

          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse"
            id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page"
                  to="/">Acceuille</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>

            </ul>
            <div className="img-logo">
              <img src="assets/logo.png" className="d-block w-30" alt="logo" height="70px" />
            </div>
            {/* <NavLink className="navbar-brand mx-auto fw-bold" 
      to="/">MYASHOP</NavLink> */}

             <Login /> 
            {userInfo ? (
              <NavDropdown title={userInfo.username}>
                <NavLink className="nav-link" to="/profil">
                  <NavDropdown.Item href="/profil">profil</NavDropdown.Item>
                </NavLink>
                <NavDropdown.Item onClick={logoutHandler}>
                  Deconnection
                </NavDropdown.Item>
                {/* <NavLink className="nav-link" to="/dashboard">
          <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
          </NavLink> */}
              </NavDropdown>
            ) : (
              // <NavLink to="/login">
              //   <button type="button" className="btn btn-outline-secondary ms-auto"
              //     data-bs-toggle="modal" data-bs-target="#loginModal">
              //     <span className='fa fa-sign-in me-1'></span>Login
              //   </button>
              // </NavLink>
              <Link className="nav-link" to="/login">
                <button type="button" className="btn btn-outline-secondary ms-auto"
                  data-bs-toggle="modal" data-bs-target="#loginModal">
                  <span className='fa fa-sign-in me-1'></span>Login
                </button>                  
                    </Link>
              )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin" id="admin-nav-dropdown">
                <NavLink className="nav-link" to="admin/dashboard">
                  <NavDropdown.Item href="/admin/dashboard">Dashboard</NavDropdown.Item>
                </NavLink>
                <NavLink className="nav-link" to="/admin/orderlist">
                  <NavDropdown.Item href="/admin/orderlist">Orders</NavDropdown.Item>
                </NavLink>
                <NavLink className="nav-link" to="/admin/userlist">
                  <NavDropdown.Item href="/admin/userlist">Users</NavDropdown.Item>
                </NavLink>
              </NavDropdown>
            )}
            {/* <Signup/> */}
            <CartBtn />
          </div>

        </div>
      </nav>
    </>
  )
}

export default Header
