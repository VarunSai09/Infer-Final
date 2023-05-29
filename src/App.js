// _author_ = "Varun Sai Reddy T"
// _copyright_ = "Copyright (C) 2023 Infer Solutions, Inc"
// _version_ = "1.0"

//importing libraries and modules
import React from "react";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// importing Pages
import "../src/Styles.css";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar";
import Signup from "./pages/SignUp/Signup";
import HomePage from "./pages/Home/HomePage";
import Profile from "./pages/Profile/Profile";
import Saved from "./pages/Saved/Saved";
import Settings from "./pages/Settings/Settings";
import Search from "./pages/SearchScreen/search";
import Notes from "./pages/Notes/Notes";

export default function App() {
  return (
    <div className="App">
      <Switch>
        {" "}
        {/* switching pages*/}
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route                            
          render={({ location }) => { 
            if (location.pathname === "/" || location.pathname === "/signup") {   {/* Checks the location to avoid display of Navbar*/}
              return null;
            }
            return <Navbar />;
          }}
        />
      </Switch>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </div>
  );
}
