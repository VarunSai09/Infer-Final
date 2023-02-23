import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Saved-Nav.css";
function SavedNav() {
  return (
    <Navbar className="navbar-saved" bg="light" expand="lg">
      <img
        className="Logo-Saved"
        src="https://www.infersol.com/wp-content/uploads/2020/02/logo.png"
        alt="Logo"
      />
      <div id="Saved-Nav">
        <p id="Articles-Saved">Saved Articles & Research Papers</p>
      </div>
    </Navbar>
  );
}

export default SavedNav;
