// _author_ = "Varun Sai Reddy T"
// _copyright_ = "Copyright (C) 2023 Infer Solutions, Inc"
// _version_ = "1.0"

//importing libraries and modules
import { useState } from "react";
import React from "react";

//importing pages
import "./addProfilePic.css";

export default function AddProfilePic({ open, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [profileImage, setProfileImage] = useState([]);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  if (!open) {      //checking if the modal or popup is open or not
    return null;
  }
  const handleSubmit = () => {
    const reader = new FileReader();
    const id = localStorage.getItem("UserId");

    if (selectedFile == null) {
      onClose();
    } else {
      reader.readAsDataURL(selectedFile);   //Adding the image file to upload

      reader.onload = () => {
        const imageData = reader.result.replace(
          /^data:image\/[a-z]+;base64,/,   //Converting the file to base64 format
          ""
        );

        setProfileImage(imageData);

        fetch(
          "https://fhnsgxnpa9.execute-api.us-east-1.amazonaws.com/v1/updateprofileimage",
          { 
            method: "POST",
            body: JSON.stringify({ Image: imageData, UserId: id }),               //Making an API call for profile image update
          }
        ).then((result) => {
          console.log(result);
          console.log(result.body[0]);
        
          
          window.location.reload()
      
        })
        

      };
      alert("Image Updated and Profile picture will update soon");      //Sending an alert to state image update
    }
  };

  return (
    <>
      <div className="add-profilepic-body"> </div>
      <div className="AddProfilePic_popup">
        <input
          type="file"
          className="AddFile_ProfilePic "
          onChange={handleFileChange}
        />
        <div className="buttons_profilePopUp">
          <button className="SubmitFile_ProfilePic" onClick={handleSubmit}>
            Submit
          </button>
          <button className="CancelFile_ProfilePic" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
