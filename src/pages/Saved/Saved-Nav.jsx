// _author_ = "Varun Sai Reddy T"
// _copyright_ = "Copyright (C) 2023 Infer Solutions, Inc"
// _version_ = "1.0"

//importing libraries and modules
import React from "react";
import Navbar from "react-bootstrap/Navbar";
//importing pages
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
