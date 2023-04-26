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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  // const [userData, setUserData] = useState("");

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
    console.log("Clicked")
    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      console.log("error");
    } else if (password === passwordConfirm) {
      console.log("Registering.......")
       axios
      .post(
        "https://j17uufls85.execute-api.ap-south-1.amazonaws.com/Infer-Prototype/userregister",
        {
            name: name,
      email: email,
      passwordConfirm: passwordConfirm,
      mobileNumber: mobileNumber,
        }
      )
      .then((result) => {
        console.log(result.data)
        if(result.data.statusCode==401){
          setError(result.data.body)
        }
        else if(result.data.statusCode==200){
          // localStorage.setItem("UserId", result.data.UserId);
          // const UserId=localStorage.getItem(UserId)
          // console.log(UserId)
          console.log(result.data)
          const user = result.data;
          console.log(user.UserId);

          localStorage.setItem("UserId", user.UserId);
          history.push("/home")
        }
        
      })
      // setUserRegister(name, email, passwordConfirm, mobileNumber);
      // if(response !== undefined){
      //   console.log(response)
      // }
      // if(result_1.data.status)
      //  const result_1 = await registerUser
    } else {
      setError("");
    }
  }

  return (
    <div className="Signup-Page">
      <div id="signupform" >
        <div className="signupform">
          <img
            alt="Infer-logo"
            src="https://www.infersol.com/wp-content/uploads/2020/02/logo.png"
          />
          <p id="version">Version 1.0</p>
          <FormHeader />
          <div className="input-fields input-boxes">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  id="username"
                  className="username"
                  placeholder="Enter your name"
                />
              </div>
              <div className="row">
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
                  value={mobileNumber}
                  onChange={(event) => setMobileNumber(event.target.value)}
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
              </form>
              </div>
              {error && <div style={{ color: "red",position: "relative",bottom: "25px"}}>{error}</div>}
              <div className="row-button-Signup" id="button" >
                <button onClick={handleSubmit} >Signup</button>
              </div>
            

  
              <div id="registerd-user">
                <p>Already have an account</p>
                <a onClick={handleApi} className="registerd-user-login">
                  Login
                </a>

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
