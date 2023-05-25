import React from "react";

import SavedNav from "./Saved-Nav";
import BounceLoader from "react-spinners/BounceLoader";

import {retreiveSavedPosts} from "../../api/retreiveSavedPosts"
import { useState, useEffect } from "react";
import ListPage from "./ListPage";
import Navbar from "../../components/Navbar";
import { useHistory } from "react-router-dom";

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
    setResultsLoading(true)
    const id=localStorage.getItem("UserId")
    retreiveSavedPosts(id).then((result) => {
      console.log(result)
      if(result.status===200){
        setResultsLoading(false)
      console.log((result.data.response))
      setPosts(result.data.response);
      setSearchResults(result.data.response);
      }
      
    });
  }, []);
  return (
    <>

      <SavedNav />
      <div className="SavedContent-Display">
        {resultsLoading && <BounceLoader color="#787e83" display="flex" size={70} id="saved-loader"  />}
        {posts?
        <ListPage posts={posts} />
:<></>}</div>

    </>
  );
}
