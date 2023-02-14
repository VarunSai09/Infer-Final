import "./addProfilePic.css";
import { useState } from "react";
import React from "react";
export default function AddProfilePic({ open, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [profileImage,setProfileImage]=useState([]);
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
      // window.location.reload();
    } else {
      reader.readAsDataURL(selectedFile);

      reader.onload = () => {
        const imageData = reader.result.replace(
          /^data:image\/[a-z]+;base64,/,
          ""
        );
        console.log(imageData);
        setProfileImage(imageData);
        // window.location.reload();
         fetch('https://c5rbbler50.execute-api.us-east-1.amazonaws.com/v4/save-profile-inno', {
        method: 'POST',
        body: JSON.stringify({ image: imageData, UserId:id }),
      })
        .then((response) => response.json())
        // .then((data) => {
        //   // Handle the response from the Lambda function
        // });
      };
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
