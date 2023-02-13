import React from "react";

import SavedNav from "./Saved-Nav";
import { getPosts } from "./axios";
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
    getPosts().then((json) => {
      setPosts(json);
      setSearchResults(json);
    });
  }, []);
  return (
    <>
      <Navbar />
      <SavedNav />
      <div className="SavedContent-Display">
        <ListPage savedPosts={savedPosts} />
      </div>
    </>
  );
}
