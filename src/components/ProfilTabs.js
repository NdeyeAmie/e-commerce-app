/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Toast from "./Toats";

const ProfilTabs = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Toastobjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    console.warn(params);
    let result = await fetch(
      `/api/users/profile/${params.id}`
    );
    result = await result.json();
    // console.warn(result);
    setUsername(result.username);
    setEmail(result.email);
    setPassword(result.password);
    setConfirmPassword(result.confirmPassword);
  };

  const updateUser = async () => {
    console.warn(username, email, password, confirmPassword);
    let result = await fetch(
      `/api/users/profile${params.id}`,
      {
        method: "Put",
        body: JSON.stringify({ username, email, password, confirmPassword }),
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );
    result = await result.json();
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="my-5 py-5">
      <Toast />
      
      <form className="row form-container" onSubmit={updateUser}>
        <div className="col-md-6 w-2 mt-3 ">
          <div className="form">
            <label for="account-fn">Username</label>
            <input
              className="form-control"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6 w-2 mt-3">
          <div className="form">
            <label for="account-email">E-mail Address</label>
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6 w-2 mt-3 ">
          <div className="form">
            <label for="account-pass">New Password</label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6 w-2 mt-3">
          <div className="form">
            <label for="account-confirm-pass">Confirm Password</label>
            <input
              className="form-control"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        
        <button type="submit" className="btn btn-outline  w-2 mt-3">
          Update Profile
        </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilTabs;
