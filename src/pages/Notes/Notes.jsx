import React from "react";
import "../Saved/noPosts.css"
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
      <NotesNav />
      <div className="Notes-Display">
        {posts.length!==0?<ListPage posts={posts} />:<><div className="no-posts-to-display" ><h1>Sorry there are no posts to display</h1></div></>}
      </div>
    </>
  );
}
