import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography, Container, Box } from '@material-ui/core';
import React, { useContext } from 'react';
import Editor from '../components/EditorJs';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { PostContextSave } from '../context/postContextSave/PostContextSave';
import axios from 'axios';

function PostEditor() {
  const { saveContent } = useContext(PostContextSave);

  const handleSaveContent = async () => {
    const saveEditor = await saveContent.save();
    try {
      const createPost = await axios.post('post', {
        title: 'test005',
        data: saveEditor,
        photo:
          'https://images.unsplash.com/photo-1496545672447-f699b503d270?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbXBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        userId: '611e33b8902b51ea97af1089',
      });
      console.log(createPost);
      createPost && window.location.replace('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <React.Fragment>
      <Container
        style={{ backgroundColor: '#f3f3f3', minHeight: '100vh' }}
        maxWidth="xl"
      >
        <Grid container md={12}>
          <Grid item md={8}>
            <Box p={5} textAlign="center">
              <Box
                width="60vw"
                minHeight="75vh"
                borderRadius="10px"
                mt={2}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cccccc',
                }}
              >
                <Editor />
              </Box>
              <Button
                variant="contained"
                color="primary"
                startIcon={<CloudUploadIcon />}
                style={{ marginTop: '17px', backgroundColor: 'green' }}
                onClick={handleSaveContent}
              >
                publish
              </Button>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Typography style={{ marginTop: '40%' }}>
              <b>Writing a Great Post Title</b>
              <br />
              Think of your post title as a super short (but compelling!)
              description — like an overview of the actual post in one short
              sentence. Use keywords where appropriate to help ensure people can
              find your post by search.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default PostEditor;
