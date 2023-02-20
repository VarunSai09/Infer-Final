import React from "react";
import Post from "./Post";

const ListPage = ({ posts }) => {
  const results = posts.map((post) => <Post key={post.DocumentID} post={post} />);

  return <main>{results}</main>;
};
export default ListPage;
