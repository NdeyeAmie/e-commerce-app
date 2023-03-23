import React, { useState } from "react";
import Loading from "../Loading";
import Message from "../Message";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/actions/userAction";

const Signup = () => {
  window.scrollTo(0, 0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  // const [error, setError] = useState(false)
  // const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;
  // console.log({userLogin});
  // console.log({location});

  //  useEffect(() =>{
  //      if(userInfo)
  //   navigate("/" )
  //  },[userInfo, navigate], );

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    if (password !== confirmPassword) {
      setMessage("le mot de passe ne correspond pas");
    } else {
      dispatch(register(username, email, password));
    }
  };

  const loginTo = () => {
    register(userInfo);
    navigate("/");
  };

  // const [formvalue, setFormvalue] = useState({username: '', email: '',password:''})
  // const handleInput =(e)=>{
  //     const {name, value}= e.target;
  //     setFormvalue({...formvalue,[name]:value});
  //    //console.log(formvalue);
  // }
  // const handleFormsubmit = (e)=>{
  //     e.preventDefault(); 

  // }
  //         // console.log(formvalue);
  //         fetch('http://localhost:5000/api/auth/register', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     //'token': 'Bearer'

  //   },
  //   body: JSON.stringify(formvalue),
  // })
  //   .then((response) => response.json())
  //   .then((response) => {
  //     console.log('Success:', response);
  //   })
  //   localStorage.setItem("userInfo", JSON.stringify(formvalue))
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-secondary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <span className="fa fa-user-plus me-1"></span>S'inscrire
      </button>
      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
              S'inscrire

              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-secondary w-100 mb-4">
                <span className="fa fa-google me-2"></span> Sign up With Google
              </button>
              <button className="btn btn-secondary w-100 mb-4">
                <span className="fa fa-instagram me-2"></span> Sign up With
                Instagram
              </button>
              {error && <Message variant="danger">{error}</Message>}
              {loading && <Loading />}
              {message && <Message variant="danger">{message}</Message>}
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInput"
                    className="htmlForm-label w-100 "
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="htmlForm-control"
                    id="exampleInput"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="htmlForm-label w-100 "
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="htmlForm-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="htmlForm-text">
                    Vos donnés resterons privé.
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="htmlForm-label w-100 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="htmlForm-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="htmlForm-label w-100 "
                  >
                    Confirme Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="htmlForm-control"
                    id="exampleInputPassword1"
                  />
                </div>
                {/* <div className="mb-3 htmlForm-check">
                                    <input type="checkbox" className="htmlForm-check-input" id="exampleCheck1" />
                                    <label className="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div> */}
                <button
                  onClick={loginTo}
                  type="submit"
                  className="btn
                                 btn-outline-secondary w-100 mt-5"
                >
                  S'inscrire

                </button>
              </form>
              <p>Avez un compt!</p>
              <Link to="/login">Connexion</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
