import React, { useState } from "react";
import "./Saved-Content.css";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import AddNote from "./addNote/addNote";
const Post = ({ post }) => {
  const [openAddNote, setOpenAddNote] = useState(false);
  // const history=useHistory('')
  //   function handleSubmit(e){
  //     e.preventDefault();
  //     history.push('/saved/add-note')

  // }

  return (
    <>
      <div className="saved">
        <div className="saved-note">
          <div className="note-header">
            <a href="/saved">{post.title}</a>
            <div className="add-delete" id="add-delete">
              <a
                className="add-delete-saved"
                id="add-note-saved"
                onClick={() => setOpenAddNote(true)}
              >
                <FaIcons.FaRegStickyNote />
                <span className="add-note-span">Add a note</span>
              </a>
              <a className="add-delete-saved" id="delete-note">
                <MdIcons.MdDeleteForever className="delete-icon" />
                <span className="delete-note-span" />
                Remove
              </a>
            </div>
          </div>
          <div className="TagFrame-Saved">
            <p id="Tags">Tags : </p>
            <label className="Tags">{post.id}</label>
          </div>
          <p>{post.body}</p>
        </div>
        <AddNote open={openAddNote} onClose={() => setOpenAddNote(false)} />
      </div>
    </>
  );
};
export default Post;

// <div className="note">
//   <h1>{props.title}</h1>
//   <div className="TagFrame">
//     <p>{props.tags}</p>
//     <p className="Tags">{props.Tags}</p>
//   </div>
//   <p>{props.content}</p>
// </div>
