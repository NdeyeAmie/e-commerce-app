// // import React from "react";
// // import { Link, NavLink } from "react-router-dom";
// // import CartBtn from "./buttons/CartBtn";
// // import Login from "./buttons/Login";
// // import { useDispatch, useSelector } from "react-redux";
// // import { NavDropdown } from "react-bootstrap";
// // import { logout } from "../redux/actions/userAction";
// // import Signup from "./buttons/Signup";

// // const Header = () => {
// //   // const navigate = useNavigate()
// //   const userLogin = useSelector((state) => state.userLogin);
// //   const { userInfo } = userLogin;
// //   const dispatch = useDispatch();

// //   const logoutHandler = () => {
// //     dispatch(logout());
// //   };

// //   // useEffect(() =>{
// //   //        if(userInfo)
// //   //     navigate("/signup" )
// //   //    },[userInfo, navigate], );

// //   return (
// //     <>
// //       <nav className="navbar navbar-expand-lg bg-light">
// //         <div className="container-fluid ">
// //           <button
// //             className="navbar-toggler"
// //             type="button"
// //             data-bs-toggle="collapse"
// //             data-bs-target="#navbarTogglerDemo01"
// //             aria-controls="navbarTogglerDemo01"
// //             aria-expanded="false"
// //             aria-label="Toggle navigation"
// //           >
// //             <span className="navbar-toggler-icon"></span>
// //           </button>
// //           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
// //             <div className="img-logo">
// //               <NavLink className="nav-link" aria-current="page" to="/">
// //                 <img
// //                   src="assets/logo.png"
// //                   className="d-block w-30"
// //                   alt="logo"
// //                   height="70px"
// //                 />
// //               </NavLink>
// //             </div>
// //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //               <li className="nav-item">
// //                 <NavLink className="nav-link" aria-current="page" to="/">
// //                   Acceuille
// //                 </NavLink>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink className="nav-link" to="/products">Produit
// //                 </NavLink>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink className="nav-link" to="/about">A Propos
// //                 </NavLink>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink className="nav-link" to="/contact">Contact
// //                 </NavLink>
// //               </li>
// //             </ul>
// //             <Login />
// //             {userInfo && userInfo.isAdmin === false ? (
// //               <NavDropdown title={userInfo.username}>
// //                 <NavLink className="nav-link" to="/profil">
// //                   <NavDropdown.Item href="/profil">profil</NavDropdown.Item>
// //                 </NavLink>
// //                 <NavDropdown.Item onClick={logoutHandler}>
// //                   Deconnection
// //                 </NavDropdown.Item>
// //               </NavDropdown>
// //             ) : (
// //               <Link className="nav-link" to="/login">
// //                 <button
// //                   type="button"
// //                   className="btn btn-outline-secondary ms-auto"
// //                   data-bs-toggle="modal"
// //                   data-bs-target="#loginModal"
// //                 >
// //                   <span className="fa fa-sign-in me-1"></span>Connexion
// //                 </button>
// //               </Link>
// //             )}
// //             {userInfo && userInfo.isAdmin && (
// //               <NavDropdown title="Admin" id="admin-nav-dropdown">
// //                 <NavLink className="nav-link" to="admin/dashboard">
// //                   <NavDropdown.Item href="/admin/dashboard">
// //                     Dashboard
// //                   </NavDropdown.Item>
// //                 </NavLink>
// //                 <NavLink className="nav-link" to="/dashboard/all-products">
// //                   <NavDropdown.Item href="/dashboard/all-products">
// //                     Tout les Produit
// //                   </NavDropdown.Item>
// //                 </NavLink>
// //                 <NavLink className="nav-link" to="/dashboard/add-products">
// //                   <NavDropdown.Item href="/dashboard/add-products">
// //                     Ajouter Un Produit
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item onClick={logoutHandler}>
// //                     Deconnection
// //                   </NavDropdown.Item>
// //                 </NavLink>
// //               </NavDropdown>
// //             )}
// //             <Signup />
// //             <CartBtn />
// //           </div>
// //         </div>
// //       </nav>
// //     </>
// //   );
// // };

// // export default Header;

// import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import { Link, NavLink } from "react-router-dom";
// import CartBtn from "./buttons/CartBtn";
// import Login from "./buttons/Login";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../redux/actions/userAction";
// import Signup from "./buttons/Signup";
// import logo from "../image/logo.png"

// function Header () {
// //   // const navigate = useNavigate()
//    const userLogin = useSelector((state) => state.userLogin);
//    const { userInfo } = userLogin;
//    const dispatch = useDispatch();

//    const logoutHandler = () => {
//      dispatch(logout());
//    };

// //   // useEffect(() =>{
// //   //        if(userInfo)
// //   //     navigate("/signup" )
// //   //    },[userInfo, navigate], );

//   return (
//     <>
//     <Navbar bg="light" expand="lg" collapseOnSelect style={{ position: "fixed", zIndex: "999" }}>
//       <Container className="container-fluid m-0">
//        <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//         <Navbar.Brand href="/"><img src={logo} alt="logo" height={70}  /></Navbar.Brand>
//           <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
//             <Nav.Link href="/">Acceuille</Nav.Link>
//             <Nav.Link href="/products">Produit</Nav.Link>
//             <Nav.Link href="/about">A Propos</Nav.Link>
//             <Nav.Link href="/contact">Contact</Nav.Link>
//              </Nav>
//            <Login/>
//              {
//              userInfo && userInfo.isAdmin === false ? (
//                <NavDropdown title={userInfo.username}>
//                  <NavLink className="nav-link" to="/profil">
//                    <NavDropdown.Item href="/profil">profil</NavDropdown.Item>
//                  </NavLink>
//                  <NavDropdown.Item onClick={logoutHandler}>
//                    Deconnection
//                  </NavDropdown.Item>
//                </NavDropdown>
//              ) : (
//               <NavLink className="nav-link" to="/login">
//                   <button
//                     type="button"
//                     className="btn btn-outline-secondary ms-auto"
//                     data-bs-toggle="modal"
//                     data-bs-target="#loginModal"
//                   >
//                     <span className="fa fa-sign-in me-1"></span>Connexion

//                   </button>
//                   </NavLink>
//              )}
//              {userInfo && userInfo.isAdmin && (
//                <NavDropdown title="Admin" id="admin-nav-dropdown">
//                  <NavLink className="nav-link" to="admin/dashboard">
//                    <NavDropdown.Item href="/admin/dashboard">
//                      Dashboard
//                    </NavDropdown.Item>
//                  </NavLink>
//                  <NavLink className="nav-link" to="/dashboard/all-products">
//                    <NavDropdown.Item href="/dashboard/all-products">
//                      Tout les Produit
//                    </NavDropdown.Item>
//                  </NavLink>
//                  <NavLink className="nav-link" to="/dashboard/add-products">
//                    <NavDropdown.Item href="/dashboard/add-products">
//                      Ajouter Un Produit
//                    </NavDropdown.Item>
//                    <NavDropdown.Item onClick={logoutHandler}>
//                      Deconnection
//                    </NavDropdown.Item>
//                  </NavLink>
//                </NavDropdown>
//              )}
//              <Signup />
//              <CartBtn />
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </>
//   );
// }

// export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
import CartBtn from "./buttons/CartBtn";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userAction";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div>
      {/* bg-light */}
      <nav className="navbar navbar-expand-lg bg-light" >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="img-logo">
              <NavLink className="nav-link" aria-current="page" to="/">
                <img
                  src="assets/logo.png"
                  className="d-block w-30"
                  alt="logo"
                  height="70px"
                />
              </NavLink>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Acceuille{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/products"
                >
                  Produits
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  A Propos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="navbar-brand mx-auto fw-bold" to="/"></NavLink>
          {userInfo && userInfo.isAdmin === false ? (
            <NavDropdown title={userInfo.username}>
              <NavLink className="nav-link" to="/profil">
                <NavDropdown.Item href="/profil">profil</NavDropdown.Item>
              </NavLink>
              <NavDropdown.Item onClick={logoutHandler}>
                Deconnection
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Login />
          )}
          {userInfo && userInfo.isAdmin && (
            <NavDropdown title="Admin" id="admin-nav-dropdown">
              <NavLink className="nav-link" to="admin/dashboard">
                <NavDropdown.Item href="/admin/dashboard">
                  Dashboard
                </NavDropdown.Item>
              </NavLink>
              <NavLink className="nav-link" to="/dashboard/all-products">
                <NavDropdown.Item href="/dashboard/all-products">
                  Tout les Produit
                </NavDropdown.Item>
              </NavLink>
              <NavLink className="nav-link" to="/dashboard/add-products">
                <NavDropdown.Item href="/dashboard/add-products">
                  Ajouter Un Produit
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>
                  Deconnection
                </NavDropdown.Item>
              </NavLink>
            </NavDropdown>
          )}
          <Signup />
          <CartBtn />
        </div>
      </nav>
    </div>
  );
};

export default Header;
