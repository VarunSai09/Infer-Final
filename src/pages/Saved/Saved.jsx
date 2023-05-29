// _author_ = "Varun Sai Reddy T"
// _copyright_ = "Copyright (C) 2023 Infer Solutions, Inc"
// _version_ = "1.0"

//importing libraries and modules
import React from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//importing pages
import SavedNav from "./Saved-Nav";
import {retreiveSavedPosts} from "../../api/retreiveSavedPosts"
import ListPage from "./ListPage";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSearchResults] = useState([]);
  const [resultsLoading,setResultsLoading]=useState(false)

  const history = useHistory("");
  useEffect(() => {
    
    if (!localStorage.getItem("UserId")) {
      history.push("/");
    }
  });

  useEffect(() => {
    setResultsLoading(true) //Setting the lading spinner true
    const id=localStorage.getItem("UserId")
    retreiveSavedPosts(id).then((result) => { //Making an API call for retreiveSavedPosts
      if(result.status===200){
        setResultsLoading(false) //Setting the loading spinner false
      setPosts(result.data.response);   //response assigned to constant
      setSearchResults(result.data.response);
      }
      
    });
  }, []);
  return (
    <>

      <SavedNav />
      <div className="SavedContent-Display">
        {resultsLoading && <BounceLoader color="#787e83" display="flex" size={70} id="saved-loader"  />}    {/*Display of loading spinner */}
        
        {posts?
        <ListPage posts={posts} />
:<>No posts avaible</>}</div>

    </>
  );
}
