import React from "react";
import Navbar from "../../components/Navbar";
import SearchPage from "./SearchPage";
import { Redirect } from "react-router-dom";
function search({ searchTerm, googleData }) {
  return (
    <>
      <Navbar />
      {searchTerm !== "" ? (
        <SearchPage searchTerm={searchTerm} googleData={googleData} />
      ) : (
        <Redirect to={"/home"} />
      )}
    </>
  );
}
export default search;
