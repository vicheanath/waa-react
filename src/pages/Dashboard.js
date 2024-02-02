import React, { useEffect, useRef, useState } from "react";
import Posts from "../components/Posts/Posts";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import PostDetail from "./PostDetail";
import { fetchService } from "../service/fetchServices";
import { PostContext } from "../context/PostContext";

const Dashboard = () => {
  const [postId, setPostId] = useState(null);
  const [posts, setPosts] = useState([]);
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
      // setPostDetail(data);
    });
  };

  const handleCreatePost = async () => {
    const data = {};
    const form = formRef.current;
    for (let element of form.elements) {
      if (element.name) {
        data[element.name] = element.value;
      }
    }
    console.log(data);

    await fetchService.post(`posts`, data).then((data) => {
      loadPosts();
    });
  };

  const addComment = async (id, name) => {
    await fetchService.post(`posts/${id}/comments`, {
      name: name,
    });
    getPost(id);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const formRef = useRef(null);





  return (
    <React.Fragment>
      <PostContext.Provider value={{ postId, setPostId }}>
        <h1>Dashboard</h1>
        <form ref={formRef}>
          <Input
            type="text"
            name="title"
            placeholder="Please enter a title"
          />
          <Input
            name="author"
            type="text"
            placeholder="Please enter a author"
          />
          <Input
            name="body"
            type="textarea"
            placeholder="Please enter a body"
          />
         
        </form>
        <Button onClick={() => handleCreatePost()}>Add Post</Button>
        {postId != null ? (
          <PostDetail
            post={postId}
            deletePost={deletePost}
            addComment={addComment}
          />
        ) : (
          <Posts posts={posts} />
        )}
      </PostContext.Provider>
    </React.Fragment>
  );
};

export default Dashboard;
