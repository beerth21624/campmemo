import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography, Container, Box } from '@material-ui/core';
import React, { useState, useRef, useContext, useEffect } from 'react';
import { AuthContext } from '../context/authContext/AuthContext';
// import Editor from '../components/EditorJs';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
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
import { storage } from '../components/firebase';

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
  root: {
    [theme.breakpoints.only('xs')]: {
      padding: 0,
    },
  },
  input: {
    display: 'none',
    right: 0,
  },
  addCoverImg: {
    textAlign: 'left',
    margin: '2rem 0 1rem 4rem',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.only('sm')]: {
      margin: '1rem 1rem 1rem 1rem',
    },
    [theme.breakpoints.only('xs')]: {
      margin: '1rem 0 1rem 1rem',
    },
  },
  btnAdd: {
    [theme.breakpoints.only('xs')]: {
      width: '120px',
      fontSize: '12px',
      textAlign: 'center',
    },
  },
  previewImg: {
    width: '100px',
    height: '90px',
    marginLeft: '10px',
    overflow: 'hidden',
    objectFit: 'cover',
    borderRadius: '10px',
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
  },
  previewImg2: {
    width: '160px',
    height: '90px',
    marginLeft: '10px',
    overflow: 'hidden',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  boxWriter: {
    width: 'auto',
    backgroundColor: '#ffffff',
    border: '1px solid #cccccc',
    [theme.breakpoints.up('lg')]: {
      width: '60vw',
    },
    //
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
    fontFamily: 'Roboto',
    fontWeight: '600',
    resize: 'none',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '70vw',
      fontSize: '1.4rem',
    },
  },
  saveButton: {
    marginTop: '17px',
    backgroundColor: '#FF7F50',
    color: 'white',
  },
  saveButtonNoImg: {
    marginTop: '17px',
    backgroundColor: '#FFCEAE',
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
    fontFamily: 'Roboto',
    [theme.breakpoints.down('sm')]: {
      width: '70vw',
      fontSize: '1rem',
    },
  },
  recomment: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

function PostEditor() {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  // const title = useRef('');
  const [title, setTitle] = useState('');
  const desc = useRef('');

  const [filePic, setFilePic] = useState(
    'http://www.tourismchiangmai.org/chiangmaigreencard/public/image/3a2334ddfdd0fe64b6287a916fa0d5ef.png'
  );
  const [previewImg, setPreviewImg] = useState('');
  const [alertNoTitle, setAlertNoTitle] = useState(false);

  const [category, setCategory] = useState('camping');
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const callUser = async () => {
      const authorUser = await GetUserContextService(user);
      setUserData(authorUser);
    };
    callUser();
  }, []);

  useEffect(() => {
    if (title) {
      setAlertNoTitle(false);
    }
  }, [title]);
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const createPost = await axios.post('post', {
        title: title,
        desc: desc.current.value,
        photo: filePic,
        userId: userData._id,
        category: category,
        author: userData.username,
        authorPic: userData.photo,
      });
      createPost && window.location.replace('/');
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  const handleFilePic = (e) => {
    const filePic = e.target.files[0];
    if (filePic) {
      // setFilePic(e.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(filePic);
      reader.onloadend = () => {
        setPreviewImg(reader.result);
      };

      Upload(filePic);
    }
  };

  const Upload = (filePic) => {
    const uploadTask = storage.ref(`images/${filePic.name}`).put(filePic);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(filePic.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            // return url;
            setFilePic(url);
          });
      }
    );
  };

  const handleSaveNoImg = () => {
    if (!title) {
      setAlertNoTitle(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{ backgroundColor: '#f3f3f3', minHeight: '100vh' }}
        maxWidth="xl"
      >
        <Grid container md={12}>
          <Grid item xl={8} lg={8} md={12} xs={12}>
            <Box p={5} textAlign="center" className={classes.root}>
              <Box
                className={classes.boxWriter}
                minHeight="75vh"
                borderRadius="10px"
                mt={2}
              >
                <div className={classes.addCoverImg}>
                  <input
                    accept="image/*"
                    id="fileImg"
                    multiple
                    type="file"
                    className={classes.input}
                    onChange={handleFilePic}
                  />
                  <label htmlFor="fileImg">
                    <Button
                      variant="outlined"
                      color="primary"
                      component="span"
                      className={classes.btnAdd}
                    >
                      Add a cover image
                    </Button>
                  </label>

                  {previewImg && (
                    <>
                      <img
                        className={classes.previewImg}
                        src={previewImg}
                        alt=""
                      />
                      <img
                        className={classes.previewImg2}
                        src={previewImg}
                        alt=""
                      />
                    </>
                  )}
                </div>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextareaAutosize
                    className={classes.postTitles}
                    aria-label="empty textarea"
                    placeholder="New post title here..."
                    // ref={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  {/* <Editor /> */}
                  <TextareaAutosize
                    type="text"
                    aria-label="minimum height"
                    minRows={19}
                    placeholder="Tell your story"
                    className={classes.textarea}
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
                {title ? (
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<CloudUploadIcon />}
                    className={classes.saveButton}
                    onClick={handleSave}
                  >
                    publish
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    className={classes.saveButtonNoImg}
                    onClick={handleSaveNoImg}
                  >
                    publish
                  </Button>
                )}
                {alertNoTitle && (
                  <Typography style={{ color: 'red', marginTop: 10 }}>
                    please enter title!
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} lg={4}>
            <Typography
              style={{ marginTop: '40%' }}
              className={classes.recomment}
            >
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
