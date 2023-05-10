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
          console.log(response.data.UserId);
          const UserId = response.data.UserId;
          localStorage.setItem("UserId", UserId);
          history.push("/home");
        }
        //  else if (response.status == 400) {
      //     // result.preventDefault();
      //     setError("Ener both email and password");
      //   } else if (response.status == 401) {
      //     // result.preventDefault();
      //     setError("Enterd details are incorrect");
      //   } else if (response.status == 520) {
      //     // result.preventDefault();
      //     setError("Forbidden");
      //   } else {
      //     setError("");
      //   }

      //   // Navigate("/home")
 
      })
      // .catch((response) => {
      //   console.log(response);
      // });
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
        {error && (
          <div style={{ color: "red", position: "relative", bottom: "11px" }}>
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
