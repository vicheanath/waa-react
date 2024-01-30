import React,{useEffect, useState} from "react";
import Posts from "../components/Posts/Posts";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import PostDetail from "./PostDetail";

const POST = [
  {
    id: 1,
    title: "My first post",
    author: "John Doe",
  },
  {
    id: 2,
    title: "My second post",
    author: "John Doe",
  },
  {
    id: 3,
    title: "My third post",
    author: "John Doe",
  },
];

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [postDetail, setPostDetail] = useState(null);
  const [posts, setPosts] = useState(POST);

  const updateFirstPost = (title) => {
    const updatedPost = [...posts];
    updatedPost[0].title = title;
    setPosts(updatedPost);
  };

  const handelSetPost = (p) => {
    setPostDetail(p);
  }

  console.log(postDetail)
  return (
    <div>
      <h1>Dashboard</h1>
      <Input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter some title"
      />
      <Button onClick={() => updateFirstPost(title)}>Update first post</Button>

      {postDetail != null ? (
        <PostDetail
          id={postDetail.id}
          title={postDetail.title}
          author={postDetail.author}
        />
      ) : (
        <Posts posts={posts} handelSetPost={handelSetPost} />
      )}
      
    </div>
  );
};

export default Dashboard;
