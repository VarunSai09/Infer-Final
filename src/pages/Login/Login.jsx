import React, { useState, useEffect } from "react";
import FormHeader from "./Formheader";
import { useHistory } from "react-router-dom";

import axios from "axios";
import "./Login-styles.css";

const Login = (props) => {
  // const Navigate=useNavigate('');
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("UserId")) {
      localStorage.removeItem("UserId");
    }
  });
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const handleSignup = (e) => {
    history.push("/signup");
  };
  const handleApi = () => {
    axios
      .post(
        "https://j17uufls85.execute-api.ap-south-1.amazonaws.com/Infer-Prototype/userlogin",
        {
          email: email,
          password: password,
        }
      )
      .then((result) => {

        if (result.data.statusCode == 200) {
          const user_data = result.data.body[0];


          localStorage.setItem("UserId", user_data.UserId);
          history.push("/home");
        } else if (result.data.statusCode == 400) {
          // result.preventDefault();
          setError("Ener both email and password");
        } else if (result.data.statusCode == 401) {
          // result.preventDefault();
          setError("Enterd details are incorrect");
        } else {
          setError("");
        }

        // Navigate("/home")
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
    
        <div className="loginform">
          <img className="infer-logo-Login"
            alt="Infer-logo"
            src="https://www.infersol.com/wp-content/uploads/2020/02/logo.png"
          />
          <p id="version">Version 1.0</p>
          <FormHeader />
          <div className="input-fields-login">
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
              </form>
              </div>
              {error && <div style={{ color: "red",position: "relative",bottom: "11px"}}>{error}</div>}


            <div className="remembrer-links">
              <div className="remember">
                {/* <div className="remember-inside"> */}
                <input type="checkbox" id="box" className="check-box" />
                {/* </div> */}
                <label className="remember-label" for="box">
                  Remember Me
                </label>
                <a id="forgot" href="/">Forgot Password</a>
              </div>
               
              
              </div>
              <div className="Login-Button" id="button">
                <button onClick={handleApi}>Login</button>
              </div>
              <div id="register-user">
                <p>New User?</p>
                <a onClick={handleSignup} className="register-user-link">
                  Register here
                </a>
              </div>
           
          
          <label className="copyright-Login">
            ©Copyright Infer Solutions, Inc. All Rights Reserved
          </label>
        </div>
      </div>

  );
};
export default Login;
