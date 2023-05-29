// _author_ = "Varun Sai Reddy T"
// _copyright_ = "Copyright (C) 2023 Infer Solutions, Inc"
// _version_ = "1.0"

//importing pages
import "./removeProfilePic.css";

//importing libraries and modules
import { useState } from "react";
import axios from "axios";
import React from "react";

export default function RemoveProfilePic({ open, onClose }) {
  if (!open) {          //Checking if modal or popup is open
    return null;
  }
  const handleSubmit = () => {
    const id = localStorage.getItem("UserId");
    console.log(id);
    axios.post(
      "https://fhnsgxnpa9.execute-api.us-east-1.amazonaws.com/v1/removeprofileimage",   //API call for removing the profile image
      { UserId: id }
    ).then((result) => {
          
          window.location.reload()
        });
    
  };

  return (
    <>
      <div className="remove-profilepic-body"> </div>
      <div className="RemoveProfilePic_popup">
        <h3 className="remove-note-popup">
          Are you sure,you want to remove Profile Pic?
        </h3>
        <div className="buttons_removeProfilePopUp">
          <button
            className="RemoveFile_removeProfilePopUp"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button className="CancelFile_removeProfilePopUp" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
  
}
