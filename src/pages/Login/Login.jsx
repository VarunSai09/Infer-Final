import React, { useState, useEffect } from "react";
import FormHeader from "./Formheader";
import { useHistory } from "react-router-dom";

import axios from "axios";
import "./Login-styles.css";

const Login = () => {
  // const Navigate=useNavigate('');
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
  });
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const handleApi = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);

        // Navigate("/home")
        localStorage.setItem("token", result.data.token);
        history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="Login-Page">
      <div id="loginform" className="loginform">
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
                  value={email}
                  onChange={handleEmail}
                  type="text"
                  id="email"
                  className="email"
                  placeholder="Email"
                />
              </div>
              <div className="row">
                <input
                  value={password}
                  onChange={handlePass}
                  type="password"
                  id="password"
                  className="password"
                  placeholder="Password"
                />
              </div>
              <div className="row" id="button">
                <button onClick={handleApi}>Login</button>
              </div>
            </form>

            <div className="remembrer-links">
              <div className="remember">
                {/* <div className="remember-inside"> */}
                <input type="checkbox" id="box" className="check-box" />
                {/* </div> */}
                <label className="remember-label" for="box">
                  Remember Me
                </label>
              </div>
              <p id="forgot">
                <a href="/">Forgot Password</a>
              </p>
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
