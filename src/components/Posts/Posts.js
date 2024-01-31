import React from "react";
import Post from "../Post/Post";
import style from "./Posts.module.css";

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

  return <div className={style.Posts}>{loadedPosts}</div>;
};


export default Posts;
