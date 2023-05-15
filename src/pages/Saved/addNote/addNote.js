import "./addNote.css";
import axios from "axios"
import React, { useState } from "react";
export default function AddNote({ open, onClose, post }) {
  const [notes,setNotes]=useState()
  const [newNotes,setNewNotes]=useState()
  const DocumentID=post.DocumentId
  // console.log(DocumentID)
  if (!open) return null;
  const handleSubmit=(e)=>{
    const UserId=localStorage.getItem("UserId")
    
    if (UserId !== undefined) {
      axios
        .post(
          "https://fhnsgxnpa9.execute-api.us-east-1.amazonaws.com/v1/addnote",
          { DocumentId: DocumentID, Note:notes,UserId:UserId }
        ).then((result) => {
          
          window.location.reload()
        })
      
   }
   
  }
  

  return (
    <>
      <div className="body"> </div>
      <div className="add-note-popup">
        <h3 className="header-title">Add a Note</h3>
        <h3 className="note-title">{post.Title}</h3>
        <div className="input-div">
 

          <textarea
            id="add-note-input"
            rows="4" cols="50"
            type="text"
            className="input-box"
            placeholder={"start typing here"}
            value={post.Notes}
            // style={{height: "337.7px"}}
            onChange={(event) => setNotes(event.target.value)}
          />
        </div>

        <div className="buttons-addNote">
          <button className="save-button" onClick={handleSubmit}>Save Changes</button>
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
