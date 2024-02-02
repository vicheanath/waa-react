import React, { useContext, useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { fetchService } from "../service/fetchServices";
import { PostContext } from "../context/PostContext";

const PostDetail = ({ deletePost, addComment, updatePost }) => {
  const [comment, setComment] = useState("");
  const [post, setPost] = useState(null);
  const { postId: id } = useContext(PostContext);

  const { title, author, content, comments } = post || {};

  useEffect(() => {
    fetchService.get(`posts/${id}`).then((data) => {
      setPost(data);
    });
  }, [id]);

  return (
    <div>
      <h1>Post Detail</h1>
      <p>{id}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{author}</p>

      <Button variant={"danger"} onClick={() => deletePost(id)}>
        Delete post
      </Button>
      <Button variant={"Secondary"} onClick={() => updatePost(id)}>
        Update post
      </Button>

      <div>
        <h2>Comments</h2>
        <Input
          type="textarea"
          placeholder="Add comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <Button onClick={() => addComment(id, comment)}>Add comment</Button>

        {comments && <Comments comments={comments} />}
      </div>
    </div>
  );
};

export default PostDetail;


const Comments = React.memo(({ comments }) => {
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div
          key={comment.id}
          style={{
            padding: "10px",
            border: "1px solid black",
          }}
        >
          <p>{comment.id}</p>
          <p>{comment.name}</p>
        </div>
      ))}
    </div>
  );
});