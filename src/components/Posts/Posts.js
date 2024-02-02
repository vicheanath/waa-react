import React, { useContext } from "react";
import Post from "../Post/Post";
import style from "./Posts.module.css";
import { PostContext } from "../../context/PostContext";

const Posts = ({ posts }) => {
  const {setPostId} = useContext(PostContext)

  const loadedPosts = posts.map((post,index) => {
    return (
      <Post
        onClick={() => setPostId(post.id)}
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
