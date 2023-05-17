import React from "react";
import "../src/Styles.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

// import Navbar from "./components/Navbar";

// import { useState,useEffect } from "react";
// import { useHistory } from "react-router-dom";


export default function App(props) {
  // const history = useHistory();
 
  return (
    <div className="App">
      
      
      {/* <Login /> */}
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}
