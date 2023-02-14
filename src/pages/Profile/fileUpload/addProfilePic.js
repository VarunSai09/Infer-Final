import "./addProfilePic.css";
import { useState } from "react";
import React from "react";
export default function AddProfilePic({ open, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  if (!open) {
    return null;
  }
  const handleSubmit = () => {
    const reader = new FileReader();
    if (selectedFile == null) {
      onClose();
    }
    reader.readAsDataURL(selectedFile);

    reader.onload = () => {
      const imageData = reader.result.replace(
        /^data:image\/[a-z]+;base64,/,
        ""
      );
      console.log(imageData);
      window.location.reload();
    };
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
