import React from "react";
import style from "./Post.module.css";

const Post = ({ id, title, author ,onClick}) => {
  return (
    <div className={style.Post} onClick={onClick}>
      <h2>{id}</h2>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Post;
