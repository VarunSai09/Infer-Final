import "./addProfilePic.css";
import { useState } from "react";
import React from "react";
export default function AddProfilePic({ open, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [profileImage, setProfileImage] = useState([]);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  if (!open) {
    return null;
  }
  const handleSubmit = () => {
    const reader = new FileReader();
    const id = localStorage.getItem("UserId");

    if (selectedFile == null) {
      onClose();
    } else {
      reader.readAsDataURL(selectedFile);

      reader.onload = () => {
        const imageData = reader.result.replace(
          /^data:image\/[a-z]+;base64,/,
          ""
        );

        setProfileImage(imageData);

        fetch(
          "https://fhnsgxnpa9.execute-api.us-east-1.amazonaws.com/v1/updateprofileimage",
          {
            method: "POST",
            body: JSON.stringify({ Image: imageData, UserId: id }),
          }
        ).then((result) => {
          console.log(result);
          console.log(result.body[0]);
       
          
          window.location.reload()
      
        })
        

      };
      alert("Image Updated and Profile picture will update soon");
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
