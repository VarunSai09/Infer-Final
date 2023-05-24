import React from "react";

import NotesNav from "./Notes-Nav";

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
    const id=localStorage.getItem("UserId")
    retreiveSavedPosts(id).then((result) => {
      console.log(result)
      if(result.status===200){
      console.log((result.data.response.SavedPosts))
      setPosts(result.data.response.SavedPosts);
      setSearchResults(result.data.response.SavedPosts);
      }
      
    });
  }, []);
  return (
    <>
      
      <NotesNav />
      <div className="Notes-Display">
        <ListPage posts={posts} />
      </div>
    </>
  );
}
