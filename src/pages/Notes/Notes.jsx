// _author_ = "Varun Sai Reddy T"
// _copyright_ = "Copyright (C) 2023 Infer Solutions, Inc"
// _version_ = "1.0"

//importing libraries and modules
import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";

//importing pages
import {retreiveSavedPosts} from "../../api/retreiveSavedPosts"
import ListPage from "./ListPage";
import NotesNav from "./Notes-Nav";


export default function Notes() {
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
    setResultsLoading(true)   //setting the loading spinner active
    const id=localStorage.getItem("UserId")
    retreiveSavedPosts(id).then((result) => {  //Saved posts retreival API call
      if(result.status===200){
        setResultsLoading(false); //stting the loading spinner false
      setPosts(result.data.response);   //response for  API assigned to a constant
      setSearchResults(result.data.response);
      }
      
    });
  }, []);
  return (
    <>
      
      <NotesNav />
      <div className="Notes-Display">
        {resultsLoading && <BounceLoader color="#787e83" display="flex" size={70} id="notes-loader"  />}  {/* If loading spinnner is displayed */}
        {posts? //checcking if posts are available or not
        <ListPage posts={posts} />
        :<></>}
      </div>
    </>
  );
}
