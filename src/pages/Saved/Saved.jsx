import React from "react";

import SavedNav from "./Saved-Nav";

import {retreiveSavedPosts} from "../../api/retreiveSavedPosts"
import { useState, useEffect } from "react";
import ListPage from "./ListPage";
import Navbar from "../../components/Navbar";
import { useHistory } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSearchResults] = useState([]);

  const history = useHistory("");
  useEffect(() => {
    
    if (!localStorage.getItem("UserId")) {
      history.push("/");
    }
  });

  useEffect(() => {
    const id=localStorage.getItem("UserId")
    retreiveSavedPosts(id).then((result) => {
      console.log(result)
      if(result.status===200){
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
        {posts?
        <ListPage posts={posts} />
:<></>}</div>
    </>
  );
}
