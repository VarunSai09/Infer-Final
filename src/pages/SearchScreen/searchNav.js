// _author_ = "Varun Sai Reddy T"
// _copyright_ = "Copyright (C) 2023 Infer Solutions, Inc"
// _version_ = "1.0"

//importing librarires and modules
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import * as BsIcons from "react-icons/bs";

//immporting pages
import "../../components/Searchbar.css";
import "./searchPage.css";
import "./SearchData.css";

const SearchNav= ({ resultsObtained }) => {
  const history = useHistory("");
  const [userid, setUserId] = useState("");
  
  useEffect(() => {
    if (!localStorage.getItem("UserId")) {
      history.push("/");
    }
    const id = localStorage.getItem("UserId");
    setUserId(id);
  }, []);
  const [term, setTerm] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      /^[a-zA-Z0-9].*/.test(term) ||
      /^[a-zA-Z0-9]+[" "]/.test(term) ||
      /^[" "]+[a-zA-Z0-9]/.test(term)
    ) {
      
    }
  };
  return (
    <>
      <Navbar className="navbar-search" bg="light" expand="lg" >
        <img
          className="Logo-Home"
          src="https://www.infersol.com/wp-content/uploads/2020/02/logo.png"
          alt="Logo"
        />
        <p className="Library-mobile Library">Library Search</p>

        <form className="d-flex" id="Search" onSubmit={handleSubmit}>
          <div className="Search">
            
            <input
              placeholder="Search"
              type="text"
              value={term}
              aria-label="Search"
              onChange={(event) => setTerm(event.target.value)}
            ></input>
            <p id="Search-Logo">
              <BsIcons.BsSearch />
            </p>
          </div>
        </form>
      </Navbar>

    </>
  );
};
export default SearchNav;
