import React from "react";

import NotesNav from "./Notes-Nav";
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
  

  // useEffect(() => {
  //   const id=localStorage.getItem("UserId")
  //   retreiveSavedPosts(id).then((result) => {

  //     if(result.data.statusCode===200){
  //     setPosts(result.data.body[0]);
  //     setSearchResults(result.data.body[0]);
  //     }
      
  //   });
  // }, []);
  
  useEffect(() => {
    setResultsLoading(true)
    const id=localStorage.getItem("UserId")
    retreiveSavedPosts(id).then((result) => {
      if(result.status===200){
        setResultsLoading(false);
      setPosts(result.data.response);
      setSearchResults(result.data.response);
      }
      
    });
  }, []);
  return (
    <>
      
      <NotesNav />
      <div className="Notes-Display">
                {resultsLoading && <BounceLoader color="#787e83" display="flex" size={70} id="notes-loader"  />}

        {posts?
        <ListPage posts={posts} />
        :<></>}
      </div>
    </>
  );
}
