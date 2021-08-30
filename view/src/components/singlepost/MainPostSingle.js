import React, { useState, useContext, useEffect } from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Comment from './Comment';
import CreateIcon from '@material-ui/icons/Create';
import { TextFields } from '@material-ui/icons';
import { TextareaAutosize } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { storage } from '../firebase';
import axios from 'axios';
import { Box } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/authContext/AuthContext';
import { GetUserContextService } from '../../context/getUserContext/GetUserContextService';

const theme = createTheme({
  palette: {
    primary: {
      main: '#64C9CF',
    },
    secondary: {
      main: '#F6A9A9',
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      order: '1',
    },
  },
  paper: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: '30px',
    padding: '40px',
    [theme.breakpoints.only('sm')]: {
      width: '90%',
    },
    [theme.breakpoints.only('xs')]: {
      width: '77%',
    },
  },
  title: {
    fontSize: '2.3rem',
    fontFamily: 'Roboto',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  coverPic: {
    width: '100%',
    maxHeight: '40vh',
    borderRadius: '20px',
    margin: '20px 0',
  },
  desc: {
    fontSize: '1.3rem',
    fontFamily: 'Roboto',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-all',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.0rem',
    },
  },
  comment: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: '30px',
    padding: '40px',
    marginTop: '20px',
    [theme.breakpoints.only('sm')]: {
      width: '90%',
    },
    [theme.breakpoints.only('xs')]: {
      width: '78%',
    },
  },
  titleEdit: {
    width: '100%',
    fontSize: '2.3rem',
    fontWeight: '600',
    resize: 'none',
    fontFamily: 'Roboto ',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  descEdit: {
    fontSize: '1.3rem',
    fontFamily: 'Roboto',
    whiteSpace: 'pre-wrap',
    width: '100%',
    resize: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.0rem',
    },
  },
  input: {
    display: 'none',
  },
}));

const MainPostSingle = ({ post }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const pathUser = location.pathname.split('/')[3];
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [previewImg, setPreviewImg] = useState('');
  const [titleMod, setTitleMod] = useState(false);
  const [descMod, setDescMod] = useState(false);
  const [modify, setModify] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await GetUserContextService(user);
      if (currentUser) {
        if (currentUser._id === pathUser) {
          setModify(true);
        }
      }
      setTitle(post.title);
      setDesc(post.desc);
      setPreviewImg(post.photo);
    };
    fetchUser();
  }, [post]);

  const handleSave = async () => {
    const saved = await axios.put('/post/update/' + post._id, {
      title,
      desc,
      photo: previewImg,
    });
    saved && setModify(false);
    saved && setTitleMod(false);
    saved && setDescMod(false);
  };

  const handleFilePic = (e) => {
    const filePic = e.target.files[0];
    if (filePic) {
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
            setPreviewImg(url);
          });
      }
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid item container md={7} sm={12} className={classes.root}>
        <Paper className={classes.paper}>
          {modify && titleMod ? (
            <TextareaAutosize
              type="text"
              aria-label="minimum height"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={classes.titleEdit}
              autoFocus
            ></TextareaAutosize>
          ) : (
            <strong className={classes.title}>
              {post.title}
              {modify && (
                <Button onClick={(e) => setTitleMod(true)}>
                  <CreateIcon />
                </Button>
              )}
            </strong>
          )}

          <img className={classes.coverPic} src={previewImg} alt="" />
          {modify && (
            <Box display="flex" justifyContent="center" marginBottom="40px">
              <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                className={classes.input}
                onChange={handleFilePic}
              />
              <label htmlFor="contained-button-file">
                <Button variant="outlined" color="default" component="span" i>
                  update image
                </Button>
              </label>
            </Box>
          )}
          {modify && descMod ? (
            <TextareaAutosize
              type="text"
              aria-label="minimum height"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className={classes.descEdit}
              autoFocus
            ></TextareaAutosize>
          ) : (
            <p className={classes.desc}>
              {post.desc}
              {modify && (
                <Button onClick={(e) => setDescMod(true)}>
                  <CreateIcon />
                </Button>
              )}
            </p>
          )}
          {modify && (
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              marginTop="40px"
              style={{ gap: '10px' }}
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleSave}
              >
                save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                href={'/profile/' + post.userId}
              >
                cancle
              </Button>
            </Box>
          )}
        </Paper>
        <Paper width="30vh" className={classes.comment}>
          <Typography variant="h6">Comment</Typography>
          <Comment />
        </Paper>
      </Grid>
    </ThemeProvider>
  );
};
export default MainPostSingle;
