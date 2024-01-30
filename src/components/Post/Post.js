import React from "react";
import "./Post.css";

const Post = ({ id, title, author ,onClick}) => {
  return (
    <div className="Post" onClick={onClick}>
      <h2>{id}</h2>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Post;
