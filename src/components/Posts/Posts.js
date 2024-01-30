import React from "react";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = ({ posts,handelSetPost }) => {


  const loadedPosts = posts.map((post,index) => {
    return (
      <Post
        onClick={() => handelSetPost(post)}
        key={index}
        id={post.id}
        title={post.title}
        author={post.author}
      />
    );
  });

  return <div className="Posts">{loadedPosts}</div>;
};


export default Posts;
