import React from "react";
import Post from "./Post";

const ListPage = ({ savedPosts }) => {
  const results = savedPosts.map((post) => <Post key={post.id} post={post} />);

  return <main>{results}</main>;
};
export default ListPage;
