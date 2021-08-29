import React, { useState } from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';

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
    marginBottom: '7px',
    backgroundColor: 'inherit',
    borderRadius: '10px',
    boxShadow: 'none',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    padding: '6px',
    justifyContent: 'flex-start',
  },
  img: {
    width: '200px',
    height: '180px',
    borderRadius: '40px',
  },
  textContainer: {
    marginLeft: '6px',
  },
  text: {
    fontSize: '1.3rem',
    fontWeight: 700,
    lineHeight: 1,
    color: '#191a1f',
    marginBottom: '0.5rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-all',
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
  },
  desc: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-all',
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
  },
  author: {
    marginLeft: '10px',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 20,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 5, 5),
  },
  button: {
    width: 90,
  },
}));

const ProfileCard = ({ post, myUser, updated }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDeletePost = async () => {
    try {
      const success = await axios.delete('/post/delete/' + post._id);
      success && setOpen(false);
      success && updated(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <Box display="flex" flexDirection="row">
          <Link to={'/post/' + post._id} className="link">
            <CardActionArea className={classes.card}>
              <img className={classes.img} src={post.photo} alt="" />
              <div className={classes.textContainer}>
                <Typography variant="h4" className={classes.text}>
                  {post.title}
                </Typography>
                <Typography className={classes.desc}>{post.desc}</Typography>
                <Box
                  display="flex"
                  flexDirection="row"
                  marginTop="5px"
                  color="gray"
                >
                  <Typography variant="caption">
                    {new Date(post.createdAt).toDateString()}
                  </Typography>
                  <Typography variant="caption" className={classes.author}>
                    By <span>{post.author}</span>
                  </Typography>
                </Box>
              </div>
            </CardActionArea>
          </Link>
          {myUser && (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              marginLeft="15px"
              style={{ gap: 15 }}
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                href={'/post/' + post._id + '/' + post.userId}
              >
                <CreateIcon />
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={handleOpen}
              >
                <DeleteIcon />
              </Button>
            </Box>
          )}
        </Box>
      </Card>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h3>Are you sure delete this post?</h3>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              marginTop="40px"
              style={{ gap: '20px' }}
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleDeletePost}
              >
                Yes
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={handleClose}
              >
                No
              </Button>
            </Box>
          </div>
        </Fade>
      </Modal>
    </ThemeProvider>
  );
};
export default ProfileCard;
