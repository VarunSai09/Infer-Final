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
 
      if(result.data.statusCode===200){
      setPosts(result.data.body[0]);
      setSearchResults(result.data.body[0]);
      }
      
    });
  }, []);
  return (
    <>
      <Navbar />
      <SavedNav />
      <div className="SavedContent-Display">
        <ListPage posts={posts} />
      </div>
    </>
  );
}
