import React, { useState } from "react";
import "./Notes-Content.css";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

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

