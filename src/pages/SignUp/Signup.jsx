import React, { useState, useEffect } from "react";
import FormHeader from "./Formheader";
import { useHistory } from "react-router-dom";

import axios from "axios";
import "./Signup-styles.css";

const Login = () => {
  // const Navigate=useNavigate('');
  const history = useHistory("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
  });

  const handleApi = () => {
    history.push("/");
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError("Passwords do not match");
    } else if (password === passwordConfirm) {
      history.push("/");
      // Submit the form
    } else {
      setError("");
    }
  }
  return (
    <div className="Signup-Page">
      <div id="signupform" className="signupform">
        <div className="frame">
          <img
            alt="Infer-logo"
            src="https://www.infersol.com/wp-content/uploads/2020/02/logo.png"
          />
          <p id="version">Version 1.0</p>
          <FormHeader />
          <div className="input-fields">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <input
                  //   value={email}
                  //   onChange={handleEmail}
                  type="text"
                  id="username"
                  className="username"
                  placeholder="Enter your name"
                />
              </div>
              <div className="row">
                <input
                  //   value={email}
                  //   onChange={handleEmail}
                  type="text"
                  id="email"
                  className="email"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="row">
                <input
                  //   value={email}
                  //   onChange={handleEmail}
                  type="text"
                  id="phone-number"
                  className="phone-number"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="row">
                <input
                  //   value={email}
                  //   onChange={handleEmail}
                  type="password"
                  id="password"
                  className="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                />
              </div>
              <div className="row">
                <input
                  //   value={password}
                  //   onChange={handlePass}
                  type="password"
                  id="retype-password"
                  className="retype-password"
                  value={passwordConfirm}
                  onChange={handlePasswordConfirmChange}
                  placeholder="Retype your Password"
                />
              </div>
              {error && <div style={{ color: "red" }}>{error}</div>}
              <div className="row-button" id="button">
                <button>Signup</button>
              </div>
            </form>

            <div className="remembrer-links">
              <div id="registerd-user">
                <p>Already have an account</p>
                <a onClick={handleApi} className="registerd-user-login">
                  Login
                </a>
              </div>
            </div>
          </div>
          <label className="copyright">
            ©Copyright Infer Solutions, Inc. All Rights Reserved
          </label>
        </div>
      </div>
    </div>
  );
};
export default Login;
