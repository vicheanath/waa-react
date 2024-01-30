import React from "react";
import Button from "../components/Button/Button";

const PostDetail = ({ id, title, author }) => {
  return (
    <div>
      <h1>Post Detail</h1>
      <p>{id}</p>
      <h2>{title}</h2>
      <p>{author}</p>
      <Button onClick={() => console.log("Delete post")}>Delete post</Button>
      <Button onClick={() => console.log("Edit post")}>Edit post</Button>
    </div>
  );
};

export default PostDetail;
