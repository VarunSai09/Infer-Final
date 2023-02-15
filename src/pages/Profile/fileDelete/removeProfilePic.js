import "./removeProfilePic.css";
import { useState } from "react";
import axios from "axios"
import React from "react";
export default function RemoveProfilePic({ open, onClose }) {
  if (!open) {
    return null;
  }
  const handleSubmit = () => {
    const id = localStorage.getItem("UserId");
    console.log(id);
    axios.post("https://c5rbbler50.execute-api.us-east-1.amazonaws.com/v4/delete-profile-picture",{userId:id})
    // fetch(
    //   "https://c5rbbler50.execute-api.us-east-1.amazonaws.com/Deploy/delete-profile-picture",
    //   {
    //     method: "POST",
    //     body: { userId: id },
    //   }
    // )
    // window.location.reload();
    onClose();
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
  //   return (
  //    <>
  //       <div className="remove-profilepic-body"></div>
  //         <h3>Are you sure you want to remove Profile Pic?</h3>
  //         <div className="buttons_removeProfilePopUp">
  //           <button
  //             className="RemoveFile_removeProfilePopUp"
  //             onClick={handleSubmit}
  //           >
  //             Submit
  //           </button>
  //           <button className="CancelFile_removeProfilePopUp" onClick={onClose}>
  //             Cancel
  //           </button>
  //         </div>

  //     </>
  //   );
}
