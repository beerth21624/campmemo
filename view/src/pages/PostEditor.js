import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography, Container, Box } from '@material-ui/core';
import React, { useState, useRef, useContext, useEffect } from 'react';
import { AuthContext } from '../context/authContext/AuthContext';
// import Editor from '../components/EditorJs';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { PostContextSave } from '../context/postContextSave/PostContextSave';
import axios from 'axios';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { TextareaAutosize } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { GetUserContextService } from '../context/getUserContext/GetUserContextService';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E9967A',
    },
    secondary: {
      main: '#a36955',
    },
  },
});
const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
    right: 0,
  },
  addCoverImg: {
    textAlign: 'left',
    margin: '2rem 0 1rem 4rem',
    display: 'flex',
    alignItems: 'center',
  },
  previewImg: {
    width: '80px',
    height: '80px',
    display: 'none',
    marginLeft: '10px',
    overflow: 'hidden',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  postTitles: {
    overflow: 'auto',
    border: 'none',
    width: '50vw',
    '&::placeholder': {
      color: 'gray',
    },
    '&:focus': {
      outline: 'none',
    },
    fontSize: '2.2rem',
    fontWeight: '600',
    resize: 'none',
    marginBottom: '10px',
  },
  saveButton: {
    marginTop: '17px',
    backgroundColor: '#FF7F50',
    color: 'white',
  },
  textarea: {
    border: 'none',
    width: '50vw',
    '&:focus': {
      outline: 'none',
    },
    resize: 'none',
    paddingBottom: '40px',
    fontSize: '1.3rem',
  },
}));

function PostEditor() {
  const classes = useStyles();
  // const { saveContent } = useContext(PostContextSave);
  const { user } = useContext(AuthContext);
  const title = useRef('');
  const desc = useRef('');
  const filePic = useRef('');

  const [category, setCategory] = useState('');
  const [userData, setuserData] = useState({});

  useEffect(() => {
    const callUser = async () => {
      const authorUser = await GetUserContextService(user);
      setuserData(authorUser);
    };
    callUser();
  }, []);
  console.log(userData);
  const handleSave = async (e) => {
    // const saveEditor = await saveContent.save();
    e.preventDefault();
    try {
      const createPost = await axios.post('post', {
        title: title.current.value,
        desc: desc.current.value,
        photo:
          'https://images.unsplash.com/photo-1496545672447-f699b503d270?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbXBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        userId: '611e33b8902b51ea97af1089',
        category: category,
        author: userData.username,
      });
      console.log(createPost);
      createPost && window.location.replace('/');
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
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
                <div className={classes.addCoverImg}>
                  <input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    className={classes.input}
                    // onChange={(e) => setFilePic(e.target.value)}
                    ref={filePic}
                  />
                  <label htmlFor="contained-button-file">
                    <Button variant="outlined" color="primary" component="span">
                      Add a cover image
                    </Button>
                  </label>
                  <img
                    className={classes.previewImg}
                    src="https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtcGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextareaAutosize
                    className={classes.postTitles}
                    aria-label="empty textarea"
                    placeholder="New post title here..."
                    // onChange={(e) => setTitle(e.target.value)}
                    ref={title}
                  />

                  {/* <Editor /> */}
                  <TextareaAutosize
                    type="text"
                    aria-label="minimum height"
                    minRows={19}
                    placeholder="Tell your story"
                    className={classes.textarea}
                    // onChange={(e) => setDesc(e.target.value)}
                    ref={desc}
                  />
                </form>
              </Box>
              <Box display="flex" flexDirection="column" padding="30px 5%">
                <Typography variant="h5" gutterBottom>
                  Category:
                </Typography>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-age-native-simple">
                    categlory default camping
                  </InputLabel>
                  <Select native onChange={handleChange} label="categlory">
                    <option aria-label="None" value="" />
                    <option value="camping">camping</option>
                    <option value="trekking">trekking</option>
                    <option value="climbing">climbing</option>
                    <option value="fishing">fishing</option>
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<CloudUploadIcon />}
                  className={classes.saveButton}
                  onClick={handleSave}
                >
                  publish
                </Button>
              </Box>
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
    </ThemeProvider>
  );
}

export default PostEditor;
