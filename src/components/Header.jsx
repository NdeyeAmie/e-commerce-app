import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import CartBtn from './buttons/CartBtn';
import Login from './buttons/Login';
//import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import { NavDropdown, } from 'react-bootstrap';
import { logout } from '../redux/actions/userAction';
import Signup from './buttons/Signup';

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
      <nav className="navbar-y navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-1">

          {/* <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse"
            id="navbarSupportedContent">
              <div className="img-logo">
              <NavLink className="nav-link" aria-current="page"
                  to="/">
              <img src="assets/logo.png" className="d-block w-30" alt="logo" height="70px" />
              </NavLink>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page"
                  to="/">Acceuille</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Produit</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">A Propos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>

            </ul>
            
            {/* <NavLink className="navbar-brand mx-auto fw-bold" 
      to="/">MYASHOP</NavLink> */}

             <Login /> 
            {userInfo && userInfo.isAdmin === false ? (
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
                <NavLink className="nav-link" to="/dashboard/all-products">
                  <NavDropdown.Item href="/dashboard/all-products">Tout les Produit</NavDropdown.Item>
                </NavLink>
                <NavLink className="nav-link" to="/dashboard/add-products">
                  <NavDropdown.Item href="/dashboard/add-products">Ajouter Un Produit</NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                  Deconnection
                </NavDropdown.Item>
                </NavLink>
              </NavDropdown>
            )}
             <Signup/> 
            <CartBtn />
          </div>

        </div>
      </nav>
    </>
  )
}

export default Header
