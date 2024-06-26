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
          <div className="TagFrame-Saved">
            <p id="Tags">Tags : </p>
            <label className="Tags">{post.Tag}</label>
          </div>
          {post.SavedNotes ? <p>Notes:  "{post.SavedNotes}"</p>:<p>Context:  "{post.Context}"</p>}
        </div>

      </div>
    </>
  );
};
export default Post;

