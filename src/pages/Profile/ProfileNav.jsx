import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Profile-Nav.css";
function ProfileNav() {
  return (
    <Navbar className="navbar-profile" bg="light" expand="lg">
      <img
        className="Logo"
        src="https://www.infersol.com/wp-content/uploads/2020/02/logo.png"
        alt="Logo"
      />
      <div id="Profile-Nav">
        <p id="Profile-Nav-Content">Profile</p>
      </div>
      
    </Navbar>
  );
}

export default ProfileNav;
