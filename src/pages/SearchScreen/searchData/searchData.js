import React, { useState } from "react";
import Data from "./Data";
const SearchData = ({ googleData, searchTerm }) => {
  
  return (
    <div>
      {/* <p className="results-count" id="results-count">
        Showing top
        <span className="google-count">{googleData.length} </span> search
        results for <span className="google-count">"{searchTerm}"</span>
      </p> */}
      {googleData ? googleData.map((data, id) => (
        <Data data={data} key={id} searchTerm={searchTerm} />
      )):<div className="No-SearchResults"><h3>Sorry there are no results </h3></div>}
    </div>
  );
};
export default SearchData;
