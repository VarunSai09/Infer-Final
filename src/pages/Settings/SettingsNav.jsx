import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Settings-Nav.css";
function SettingsNav() {
  return (
    <Navbar className="navbar-settings" bg="light" expand="lg">
      <img
        className="Logo"
        src="https://www.infersol.com/wp-content/uploads/2020/02/logo.png"
        alt="Logo"
      />
      <div id="Settings-Nav">
        <p id="Settings">Settings</p>
      </div>
    </Navbar>
  );
}

export default SettingsNav;
