import React, { useState } from "react";
import Data from "./Data";
const SearchData = ({ resultsObtained }) => {
  console.log(resultsObtained);
  return (
    <div>
      {/* <p className="results-count" id="results-count">
        Showing top
        <span className="google-count">{googleData.length} </span> search
        results for <span className="google-count">"{searchTerm}"</span>
      </p> */}
      {resultsObtained ? resultsObtained.map((item, index) => (
        
        <Data data={item} key={index}  />
      )):<div className="No-SearchResults"><h3>Sorry there are no results </h3></div>}
    </div>
  );
};
export default SearchData;
