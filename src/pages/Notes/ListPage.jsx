// _author_ = "Varun Sai Reddy T"
// _copyright_ = "Copyright (C) 2023 Infer Solutions, Inc"
// _version_ = "1.0"

//importing libraries and modules
import React from "react";

//importing pages
import Post from "./Post";

const ListPage = ({ posts }) => {
  const results = posts.map((post) => <Post key={post.DocumentID} post={post} />); //mapping the data frpm api response 

  return <main>{results}</main>;
};
export default ListPage;
