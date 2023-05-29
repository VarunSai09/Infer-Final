// _author_ = "Varun Sai Reddy T"
// _copyright_ = "Copyright (C) 2023 Infer Solutions, Inc"
// _version_ = "1.0"

//importing libraries and modules
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

//importing pages
import "./Notes-Content.css";

const Post = ({ post }) => {
  return (
    <>
      <div className="NotesPage">
        <div className="NotesPage-note">
          <div className="note-header" key={post.DocumentID}>
            <a id="saved-title" href={post.UrlId} target="_blank" >
              {post.Title}
            </a>
          </div>
         
          {post.Notes ? <p>Notes:  "{post.Notes}"</p>:<p>Context:  "{post.Context.slice(0,400)}"</p>}
        </div>

      </div>
    </>
  );
};
export default Post;

