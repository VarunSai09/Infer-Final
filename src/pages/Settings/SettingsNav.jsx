// _author_ = "Varun Sai Reddy T"
// _copyright_ = "Copyright (C) 2023 Infer Solutions, Inc"
// _version_ = "1.0"

//importing libraries and modules
import React from "react";
import Navbar from "react-bootstrap/Navbar";

//immorting pages
import "./Settings-Nav.css";
function SettingsNav() {
  return (
    <Navbar className="navbar-settings" bg="light" expand="lg">
      <img
        className="Settings-Logo"
        src="https://www.infersol.com/wp-content/uploads/2020/02/logo.png"
        alt="Logo"
      />
      <div id="Settings-Nav">
        <p id="Settings-Nav-Content">Settings</p>
      </div>
    </Navbar>
  );
}

export default SettingsNav;
