// _author_ = "Varun Sai Reddy T"
// _copyright_ = "Copyright (C) 2023 Infer Solutions, Inc"
// _version_ = "1.0"

//importing libraries and modules
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import axios from "axios";

//importing pages
import AddNote from "./addNote/addNote";
import RateNote from "./rateNote/rateNote";
import "./Saved-Content.css";

const Post = ({ post }) => {
  const [openAddNote, setOpenAddNote] = useState(false);      //Assigning the state of addnote 
  const [openRateNote, setOpenRateNote] = useState(false);     //Assigning the state of rateNote 

  const handleRemove=()=>{      //Making an call for removesavedpost
    const id = localStorage.getItem("UserId");
    const DocumentId=post.DocumentId;
     axios
        .post("https://fhnsgxnpa9.execute-api.us-east-1.amazonaws.com/v1/removesavedpost",
        { UserId: id,DocumentId:DocumentId }
        )
      window.location.reload();
  }
  return (
    <>
      <div className="saved">
        <div className="saved-note">
          <div className="note-header" key={post.DocumentId}>  {/* Displaying the documnets retreived from API  */}
            <a id="saved-title" href={post.UrlId} target="_blank" >
              {post.Title}
            </a>
            <div className="add-delete" id="add-delete">
              <a                                               
                className="add-delete-saved"
                id="add-note-saved"
                onClick={() => setOpenAddNote(true)}
              >                                               {/*Add note for the saved posts*/}
                <FaIcons.FaRegStickyNote />
                <span className="add-note-span">Add a note</span>
              </a>
              <a
                className="add-delete-saved"
                id="rate-note-saved"
                onClick={() => setOpenRateNote(true)}
              >                                                {/*Rate note for the saved posts*/}
                <MdIcons.MdOutlineStarRate className="rate-note-icon" />
                <span className="rate-note-span">Rate Article</span>
              </a>
              <a className="add-delete-saved" id="delete-note" onClick={handleRemove}>  {/*Remove Saved posts*/}
                <MdIcons.MdDeleteForever className="delete-icon" />
                <span className="delete-note-span" />
                Remove
              </a>
            </div>
          </div>
          <p>{post.Context.slice(0,400)}</p>
        </div>
        <AddNote
        
          open={openAddNote}
          post={post}
          onClose={() => setOpenAddNote(false)}
        />
        <RateNote open={openRateNote} post={post} onClose={() => setOpenRateNote(false)} />
      </div>
    </>
  );
};
export default Post;

