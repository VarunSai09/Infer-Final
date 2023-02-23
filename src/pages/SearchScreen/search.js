import React from "react";
import Navbar from "../../components/Navbar";
import SearchPage from "./SearchPage";
import { Redirect } from "react-router-dom";
function search({ searchTerm,setSearch, googleData }) {
  return (
    <>
      <Navbar />
      {searchTerm !== "" ? (
        <SearchPage searchTerm={searchTerm} setSearch={setSearch} googleData={googleData} />
      ) : (
        <Redirect to={"/home"} />
      )}
    </>
  );
}
export default search;
