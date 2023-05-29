// _author_ = "Varun Sai Reddy T"
// _copyright_ = "Copyright (C) 2023 Infer Solutions, Inc"
// _version_ = "1.0"

//importing modules and libraries
import React, { useState } from "react";
import axios from "axios";

//importing pages

import StarIcon from "@material-ui/icons/Star";
export default function AddNote({ open, onClose, post }) {
  const [rating, setRating] = useState(post.Rating);
  const DocumentID = post.DocumentId;
  
  if (!open) {
    return null;
  }
  const handleClick = () => {
    const UserId = localStorage.getItem("UserId");

    if (UserId !== undefined) {
      axios
        .post(
          "https://fhnsgxnpa9.execute-api.us-east-1.amazonaws.com/v1/ratearticle", //making an API call to rate article
          { DocumentId: DocumentID, Rating:rating,UserId:UserId }
        )
        .then((result) => {
          window.location.reload();
        });
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          onClick={() => setRating(i)}
          style={{ color: i <= rating ? "gold" : "grey", cursor: "pointer" }}
        />
      );
    }
    return stars;
  };

  return (
    <>
      <div className="body"> </div>

      <div className="rate-popup">
        <h4>Rate this article </h4>
        <div class="rate">{renderStars()}</div>
        <div className="review-note">
          <h4 className="review-note-header">Write a review</h4>
          <textarea
            id="review-note-input"
            rows="4"
            cols="50"
            type="text"
            className="input-box-rate"
            placeholder="start typing here"
          />
          <div></div>
        </div>

        <div className="buttons">
          <button className="save-button-rate" onClick={handleClick}>
            Submit Rating
          </button>
          <button className="cancel-button-rate" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
