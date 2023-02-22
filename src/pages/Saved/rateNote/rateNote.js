import "./rateNote.css";
import React, { useState } from "react";
import axios from "axios"

import StarIcon from '@material-ui/icons/Star';
export default function AddNote({ open, onClose,post }) {
  const [rating, setRating] = useState(post.Rating);
  const DocumentID=post.DocumentID
  // setRating=post.Rating
  // console.log(retreivedRating)
  // const retreivedRating=post.Rating
  console.log(rating)
  if(!open) {
    return null
    };
  const handleClick = () => {
    // setRating(num);
    const userId=localStorage.getItem("UserId")
    
    if (userId !== undefined) {
      axios
        .post(
          "https://c5rbbler50.execute-api.us-east-1.amazonaws.com/new/ratearticle",
          { DocumentId: DocumentID, Rating:rating }
        ).then((result) => {
          
          window.location.reload()
        })
   }
  }

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon 
          key={i} 
          onClick={() => setRating(i)} 
          style={{ color: i <= rating ? 'gold' : 'grey', cursor: 'pointer' }}
        />
      );
    }
    return stars;
  }

return (
    <>
      <div className="body"> </div>
      
      <div className="rate-popup">
        <h4>Rate this article </h4>
        <div class="rate">
          {renderStars()}
        </div>
        <div className="review-note">
          <h4 className="review-note-header">Write a review</h4>
          <input
            id="review-note-input"
            type="text"
            className="input-box"
            placeholder="start typing here"
          />
          <div></div>
        </div>

        <div className="buttons">
          <button className="save-button-rate" onClick={handleClick}>Submit Rating</button>
          <button className="cancel-button-rate" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}





//   return (
//     <div>
//       <h2>Rate this article:</h2>
//       {renderStars()}
//       <p>You rated this article {rating} out of 5.</p>
//     </div>
//   );
// }


   
  
//   const [rated,setRated]=useState("")
//   if (!open) return null;
//   const rateClicked =(e)=>{
    
//   }
//   console.log(rated)
//   return (
//     <>
//       <div className="body"> </div>
      
//       <div className="rate-popup">
//         <h4>Rate this article </h4>
//         <div class="rate">
//           <input type="radio" id="star5" name="rate" value="5" onClick={() => setRated(5)}/>
//           <label for="star5" title="5 star" />
//           <input type="radio" id="star4" name="rate" value="4" onClick={() => setRated(4)}/>
//           <label for="star4" title="4 star" />
//           <input type="radio" id="star3" name="rate" value="3" onClick={() => setRated(3)}/>
//           <label for="star3" title="3 star" />
//           <input type="radio" id="star2" name="rate" value="2" onClick={() => setRated(2)}/>
//           <label for="star2" title="2 star" />
//           <input type="radio" id="star1" name="rate" value="1" onClick={() => setRated(1)}/>
//           <label for="star1" title="1 star" />
//         </div>
//         <div className="review-note">
//           <h4 className="review-note-header">Write a review</h4>
//           <input
//             id="review-note-input"
//             type="text"
//             className="input-box"
//             placeholder="start typing here"
//           />
//           <div></div>
//         </div>

//         <div className="buttons">
//           <button className="save-button-rate">Submit Rating</button>
//           <button className="cancel-button-rate" onClick={onClose}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
