import "./addNote.css";
import React from "react";
export default function AddNote({ open, onClose }) {
  // const history=useHistory('')
  // function handleSubmit(e){
  //   e.preventDefault();
  //   history.push('/saved')
  // }
  if (!open) return null;

  return (
    <>
      <div className="body"> </div>
      <div className="add-note-popup">
        <h3 className="header-title">Add a Note</h3>
        <h3 className="note-title">Note title</h3>
        <div>
          <input
            id="add-note-input"
            type="text"
            className="input-box"
            placeholder="start typing here"
          />
        </div>

        <div className="buttons">
          <button className="save-button">Save Changes</button>
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
