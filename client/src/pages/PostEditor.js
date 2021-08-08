import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography, Container, Box } from '@material-ui/core';
import { default as React } from 'react';
import Editor from '../components/EditorJs';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
 
function PostEditor() {
  return (
    <React.Fragment>
      <Container
        style={{ backgroundColor: '#f3f3f3', minHeight: "100vh" }}
        maxWidth="xl">
            <Grid container md={12}>
                <Grid item md={8}>
                <Box p={5} textAlign="center">
                <Box
                    width='60vw'
                    minHeight='75vh'
                    borderRadius='10px'
                    mt={2}
                    style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #cccccc'
                    }}>
                    <Editor />
                </Box>
                     <Button variant="contained" color="primary"  startIcon={<CloudUploadIcon />} style={{marginTop:'17px',backgroundColor:'green'}}>
                        publish
                    </Button>
                </Box>
                </Grid>
                <Grid item md={4}>
                    <Typography style={{marginTop:'40%'}}>
                        <b>Writing a Great Post Title</b><br/>
                        Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.
                        Use keywords where appropriate to help ensure people can find your post by search.
                        </Typography>
                </Grid>
            </Grid>
      </Container>
    </React.Fragment>
  );
}
 
export default PostEditor;