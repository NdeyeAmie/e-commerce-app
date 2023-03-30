/* eslint-disable no-unused-vars */
//import React, { useEffect } from 'react';
// import { useState } from "react";
// //import axios from "axios";
// import Loading from "../Loading";
// import Message from "../Message";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { login } from "../../redux/actions/userAction";
// import Toast from "../Toats";
// import { NavLink } from "react-router-dom";

// //location renvoie un objet qui représente l'emplacement actuel
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [error, setError] = useState(false)
//   // const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const userLogin = useSelector((state) => state.userLogin);
//   const { error, loading, userInfo } = userLogin;
//   // console.log({userLogin});
//   // console.log({location});

//   //  useEffect(() =>{
//   //      if(userInfo)
//   //   navigate("/" )
//   //  },[userInfo, navigate], );

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     //dispatch
//    await dispatch(login(email, password));
//     navigate("/");
//     document.getElementById('loginModal')
//   };

//   // const loginTo = () => {
//   //   login(userInfo);
//   //   navigate("/");
//   // };
//   //   try {
//   //     const config = {
//   //         Headers : {
//   //             "Content-Type": "application/json",
//   //             //"token":"Bearer"
//   //         },
//   //     };
//   //     setLoading(true);

//   //     const { data}= await axios.post(
//   //         "http://localhost:5000/api/auth/login",
//   //         {
//   //             email,
//   //             password,
//   //         },
//   //         config
//   //         );

//   //     console.log({data});
//   //     localStorage.setItem("userInfo", JSON.stringify(data));
//   //     setLoading(false);
//   // } catch (error) {
//   //       console.log({error});
//   //     setError(error.response.data.message);
//   //     setLoading(false);
//   //   }

//   return (
//     <>
//       <Toast />
//       {/* <!-- Button trigger modal --> */}
//      <button type="button" className="btn btn-outline-secondary ms-auto"
//                 data-bs-toggle="modal" data-bs-target="#loginModal">
//                 <span className='fa fa-sign-in me-1'></span>Login
//             </button>

//       {/* <!-- Modal --> */}
//       <div
//         className="modal fade"
//         id="loginModal"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//               Connexion
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <button className="btn btn-secondary w-100 mb-4">
//                 <span className="fa fa-google me-2"></span> Sign in With Google
//               </button>
//               <button className="btn btn-secondary w-100 mb-4">
//                 <span className="fa fa-instagram me-2"></span> Sign in With
//                 Instagram
//               </button>
//               {error && <Message variant="danger">{error}</Message>}
//               {loading && <Loading />}
//               {Loading}
//               <form onSubmit={submitHandler}>
//                 <div className="mb-3">
//                   <label
//                     htmlFor="exampleInputEmail1"
//                     className="htmlForm-label w-100 "
//                   >
//                     Email address
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter email"
//                     className="htmlForm-control"
//                     id="exampleInputEmail1"
//                     aria-describedby="emailHelp"
//                   />
//                   <div id="emailHelp" className="htmlForm-text">
//                     Vos donnés resterons privés.
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <label
//                     htmlFor="exampleInputPassword1"
//                     className="htmlForm-label w-100"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter password"
//                     className="htmlForm-control "
//                     id="exampleInputPassword1"
//                   />
//                 </div>
//                 <div className="mb-3 htmlForm-check">
//                   <input
//                     type="checkbox"
//                     className="htmlForm-check-input "
//                     id="exampleCheck1"
//                   />
//                   <label
//                     className="htmlForm-check-label"
//                     htmlFor="exampleCheck1"
//                   >
//                     Check me out
//                   </label>
//                 </div>
//                 {/* <NavLink to="/"> */}
//                 <button

//                   type="submit"
//                   className="btn
//                    btn-outline-secondary w-100 mt-5"
//                 >
//                   Envoyer
//                 </button>
//                 {/* </NavLink> */}
//               </form>
//               <p>Nouveaux client</p>
//               <Link to="/signup">s'inscrire</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

// import { useState } from "react";
// //import axios from "axios";
// import Loading from "../Loading";
// import Message from "../Message";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { login } from "../../redux/actions/userAction";
// import Toast from "../Toats";
// import { NavLink } from "react-router-dom";

import React, { useState } from "react";
import Loading from "../Loading";
import Message from "../Message";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/userAction";
import { NavLink } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const submitHandler = async (e) => {
    e.preventDefault();
    //     //dispatch
    await dispatch(login(email, password));
    navigate("/");
  };

  return (
    <div className="my-5 py-3">
      <div className="App">
        <div className="auth-form-container">
          <h2>Connexion</h2>
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loading />}
          {Loading}
          <form className="login-form" onSubmit={submitHandler}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
            <label htmlFor="password">Connexion</label>
            <button type="submit">Envoyer</button>
          </form>
          <br />
          <p className="button">
            Vous n'avez pas de compte ?&nbsp;
            <NavLink className="margin" to="/signup">
              {" "}
              S'inscrire ici.
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
