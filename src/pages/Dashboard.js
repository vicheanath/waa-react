import React, { useEffect, useState } from "react";
import Posts from "../components/Posts/Posts";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import PostDetail from "./PostDetail";
import { fetchService } from "../service/fetchServices";

const Dashboard = () => {
  const [postDetail, setPostDetail] = useState(null);
  const [posts, setPosts] = useState([]);

  const [createPost, setCreatePost] = useState({});

  const handelSetPost = (p) => {
    getPost(p.id);
  };
  const loadPosts = async () => {
    await fetchService.get("posts").then((data) => {
      setPosts(data);
    });
  };

  const deletePost = async (id) => {
    await fetchService.DELETE(`posts/${id}`).then((data) => {
      loadPosts();
    });
  };

  const getPost = async (id) => {
    await fetchService.get(`posts/${id}`).then((data) => {
      setPostDetail(data);
    });
  };

  const handleCreatePost = async (data) => {
    await fetchService.post(`posts`, data).then((data) => {
      loadPosts();
    });
  };

  const handleChangeField = (e) => {
    const { name, value } = e.target;
    setCreatePost({ ...createPost, [name]: value });
  };

  const addComment = async (id, name) => {
    await fetchService.post(`posts/${id}/comments`, {
      name: name,
    });
    getPost(id);
  }

  useEffect(() => {
    loadPosts();
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <Input
        type="text"
        name="title"
        onChange={(e) => handleChangeField(e)}
        placeholder="Please enter a title"
      />
      <Input
        name="author"
        type="text"
        placeholder="Please enter a author"
        onChange={(e) => handleChangeField(e)}
      />
      <Input
        name="body"
        type="textarea"
        placeholder="Please enter a body"
        onChange={(e) => handleChangeField(e)}
      />
      <Button onClick={() => handleCreatePost(createPost)}>Add Post</Button>
      {postDetail != null ? (
        <PostDetail
          post={postDetail}
          deletePost={deletePost}
          comments={postDetail.comments}
          addComment={addComment}
        />
      ) : (
        <Posts posts={posts} handelSetPost={handelSetPost} />
      )}
    </div>
  );
};

export default Dashboard;
