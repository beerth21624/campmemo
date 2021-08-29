import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import NewPostCard from './NewPostCard';
import axios from 'axios';

const NewPost = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const postData = await axios.get('/post/new');
      setPost(postData.data);
    };
    fetchPost();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      marginTop="30px"
      marginLeft="20px"
    >
      <Typography variant="h5" gutterBottom>
        <b>Recent post</b>
      </Typography>
      {post.map((post) => (
        <NewPostCard key={post._id} post={post} />
      ))}
    </Box>
  );
};
export default NewPost;
