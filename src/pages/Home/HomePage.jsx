import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as BsIcons from "react-icons/bs";

// import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../../components/Searchbar.css";

export default function HomePage({ setSearch }) {
  const history = useHistory("");
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/");
    }
  });
  const [term, setTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      /^[a-zA-Z0-9].*/.test(term) ||
      /^[a-zA-Z0-9]+[" "]/.test(term) ||
      /^[" "]+[a-zA-Z0-9]/.test(term)
    ) {
      setSearch(term);
    }
  };
  return (
    <>
      <Navbar className="navbar-search" bg="light" expand="lg">
        <img
          className="Logo-Home"
          src="https://www.infersol.com/wp-content/uploads/2020/02/logo.png"
          alt="Logo"
        />
        <p className="Library-mobile Library">Library Search</p>

        <form className="d-flex" id="Search" onSubmit={handleSubmit}>
          <input
            placeholder="Search"
            type="text"
            value={term}
            className="Search"
            aria-label="Search"
            onChange={(event) => setTerm(event.target.value)}
          ></input>
          <p id="Search-Logo">
            <BsIcons.BsSearch />
          </p>
        </form>
      </Navbar>
      <div className="home">
        {/* <img src="" alt="searchIcon" id="searchIcon"/> */}

        <svg
          width="136"
          height="136"
          viewBox="0 0 136 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M83.4527 79.8239L94.4444 90.8131L90.813 94.4445L79.8238 83.4527C75.7349 86.7305 70.649 88.5134 65.4085 88.5059C52.6587 88.5059 42.3111 78.1583 42.3111 65.4085C42.3111 52.6588 52.6587 42.3112 65.4085 42.3112C78.1582 42.3112 88.5059 52.6588 88.5059 65.4085C88.5133 70.6491 86.7305 75.735 83.4527 79.8239ZM78.3045 77.9196C81.5615 74.5702 83.3805 70.0804 83.3731 65.4085C83.3731 55.4818 75.3327 47.4439 65.4085 47.4439C55.4817 47.4439 47.4439 55.4818 47.4439 65.4085C47.4439 75.3327 55.4817 83.3732 65.4085 83.3732C70.0804 83.3805 74.5701 81.5616 77.9196 78.3046L78.3045 77.9196V77.9196Z"
            fill="#CFCFCF"
          />
          <rect
            x="1.5"
            y="1.5"
            width="133"
            height="133"
            rx="66.5"
            stroke="#CFCFCF"
            stroke-width="3"
          />
        </svg>
        <h3>
          Type the name of an article or Reasearch paper in the Search bar{" "}
        </h3>
      </div>
    </>
  );
}
