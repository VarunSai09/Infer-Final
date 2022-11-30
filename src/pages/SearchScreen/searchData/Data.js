import React from "react";
import * as FaIcons from "react-icons/fa";
const Data = ({ data, searchTerm }) => {
  return (
    <>
      <div className="SearcContent">
        <div className="note">
          <div className="search-title-header">
            <a href="{data.htmlFormattedUrl}" id="Search-Title">
              {data.title}
            </a>
            <label for="Search-Title" href="" className="save-post">
              <FaIcons.FaRegBookmark />
            </label>
          </div>
          <div className="TagFrame">
            <p id="Tags">Tags : </p>
            <p className="Tags">{searchTerm}</p>
          </div>
          <p>{data.snippet}</p>
        </div>
      </div>
    </>
  );
};

export default Data;
