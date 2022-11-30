import React from "react";
import Data from "./Data";
const SearchData = ({ googleData, searchTerm }) => {
  return (
    <div>
      <p className="results-count">
        Showing top
        <span className="google-count">{googleData?.items.length} </span> search
        results for <span className="google-count">"{searchTerm}"</span>
      </p>
      {googleData?.items.map((data, id) => (
        <Data data={data} key={id} searchTerm={searchTerm} />
      ))}
    </div>
  );
};
export default SearchData;
