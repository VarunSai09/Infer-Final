// _author_ = "Varun Sai Reddy T"
// _copyright_ = "Copyright (C) 2023 Infer Solutions, Inc"
// _version_ = "1.0"


//importing libraries and modules
import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import axios from "axios";

//importing pages&styles
import "./Login-styles.css";
import FormHeader from "./Formheader";

const Login = (props) => {
  // const Navigate=useNavigate('');
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("UserId")) {      {/* checking if userID is present or not and deleting it*/}
      localStorage.removeItem("UserId");
    }
  });
  const handleEmail = (e) => {          {/* Taking input value*/}
    setEmail(e.target.value);
  };
  const handlePass = (e) => {           {/* Taking input value*/}
    setPassword(e.target.value);
  };
  const handleSignup = (e) => {         {/* Handling the signup button*/}
    history.push("/signup");
  };  
  const handleApi = () => {           {/* Login API call*/}
    axios
      .post(
        "https://fhnsgxnpa9.execute-api.us-east-1.amazonaws.com/v1/signin",
        {
          Email: email,
          Password: password,
        }
      )

      .then((response) => {
        console.log(response)
        
        if (response.status == 200) {
          console.log(response);
          console.log(response.data.response.UserId);
          const UserId = response.data.response.UserId;       {/* setting userID for login validation and user details retreival*/}
          localStorage.setItem("UserId", UserId);   
          history.push("/home");
        } })
      .catch(error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      const statusCode = error.response.status;
      switch (statusCode) {
        case 400:
          // Handle 400 Bad Request error
          console.error('Bad Request');
          break;
        case 401:
          // Handle 401 Unauthorized error
          console.error('Unauthorized');
          break;
        case 500:
          // Handle 500 Internal Server Error
          console.error('Internal Server Error');
          break;
        // Add more cases for other status codes as needed
        default:
          // Handle other status codes
          console.error('An error occurred:', error.response.data);
      }
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Error:', error.message);
    }
    console.error('Error config:', error.config);
  }); 
  };
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="Login-Page">
      <div className="loginform">
        <img
          className="infer-logo-Login"
          alt="Infer-logo"
          src="https://www.infersol.com/wp-content/uploads/2020/02/logo.png"
        />
        <p id="version">Version 1.0</p>
        <FormHeader />      
        <div className="input-fields-login">
          <form onSubmit={handleSubmit}>      {/*Handling the data to assign values */}
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
        {error && (                                           
          <div style={{ color: "red", position: "relative", bottom: "11px" }}>      {/* display of error message if arised*/}
            {error}
          </div>
        )}

        <div className="remembrer-links">
          <div className="remember">
            {/* <div className="remember-inside"> */}
            <input type="checkbox" id="box" className="check-box" />
            {/* </div> */}
            <label className="remember-label" for="box">
              Remember Me
            </label>
            <a id="forgot" href="/">
              Forgot Password
            </a>
          </div>
        </div>
        <div className="Login-Button" id="button">
          <button onClick={handleApi}>Login</button>      {/*Calling the API to hanfle LOgin*/}
        </div>
        <div id="register-user">
          <p>New User?</p>
          <a onClick={handleSignup} className="register-user-link">   {/* New User registreation redirected to signup page*/}
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
