// const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// const ENGINE_ID = process.env.REACT_APP_GOOGLE_ENGINE_ID;

// export const searchData= async(term) => {
//     const data = await fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyAIMBuNrGNeX1F1nznzo5A20PBhnG1rrFU&cx=041aa1aa643a74e35&q=${term}');
//     const  result=data.json();
//     return result;
// }

import axios from "axios";

export const searchData = async (SearchTerm,UserId) => {
  const id=localStorage.getItem("UserId")
  const data = await axios.post(
    " https://fhnsgxnpa9.execute-api.us-east-1.amazonaws.com/v1/findrelevantdocument",
    { SearchTerm ,UserId}
    // {
    //   params: {
    //     key: "AIzaSyAIMBuNrGNeX1F1nznzo5A20PBhnG1rrFU",
    //     cx: "041aa1aa643a74e35",
    //     q: term,
    //   },
    // }
  );
  

  return data;
};
