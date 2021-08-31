import React, { useState } from 'react';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import { Button } from '@material-ui/core';
import { storage } from '../firebase';
import CancelIcon from '@material-ui/icons/Cancel';
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
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    borderRadius: 20,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 8, 6),
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      padding: theme.spacing(1, 0, 3, 2),
    },
  },
  img: {
    width: 150,
    height: 150,
    margin: '20px auto',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  inputImg: {
    display: 'none',
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    marginRight: 10,
  },
  oldData: {
    fontSize: 20,
    margin: 'auto 15px ',
  },
  buttonIcon: {
    borderRadius: '70%',
  },
  button: {
    width: 100,
  },
  close: {
    marginRight: '-30px',
    [theme.breakpoints.only('xs')]: {
      marginRight: '0px',
    },
  },
}));

const EditProfile = ({ profile, open, updated }) => {
  const classes = useStyles();

  const [nameAuthor, setNameAuthor] = useState(profile.nameAuthor);
  const [desc, setDesc] = useState(profile.profileDesc);
  const [image, setImage] = useState(profile.profilePic);

  const [nameMod, setNameMod] = useState(false);
  const [descMod, setDescMod] = useState(false);

  const handleSave = async () => {
    const updateUser = await axios.put('/api/user/updateUser/' + profile._id, {
      image: image,
      nameAuthor: nameAuthor,
      profileDesc: desc,
    });
    updateUser && updated(true);
    updateUser && open(false);
    updateUser && setNameMod(false);
    updateUser && setDescMod(false);
  };

  const handleFilePic = (e) => {
    const filePic = e.target.files[0];
    Upload(filePic);
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
            // return url;
            setImage(url);
          });
      }
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.paper}>
        <Box display="flex" justifyContent="flex-end" className={classes.close}>
          <CancelIcon
            onClick={() => open(false)}
            style={{ cursor: 'pointer' }}
          />
        </Box>
        <h2>Edit profile</h2>
        <Box display="flex" flexDirection="column">
          <label htmlFor="image">
            <img src={image} alt="" className={classes.img} />
          </label>
          <input
            id="image"
            type="file"
            className={classes.inputImg}
            onChange={handleFilePic}
          />
        </Box>

        <form className={classes.root} noValidate autoComplete="off">
          <Box display="flex" flexDirection="row" alignItems="center">
            <label htmlFor="username" className={classes.title}>
              name:
            </label>
            {nameMod ? (
              <TextField
                id="username"
                value={nameAuthor}
                onChange={(e) => setNameAuthor(e.target.value)}
              />
            ) : (
              <p className={classes.oldData}>{nameAuthor}</p>
            )}

            {!nameMod && (
              <Button
                onClick={() => setNameMod(true)}
                className={classes.buttonIcon}
              >
                <CreateIcon />
              </Button>
            )}
          </Box>

          <Box display="flex" flexDirection="row" alignItems="center">
            <label htmlFor="description" className={classes.title}>
              description:
            </label>
            {descMod ? (
              <TextField
                id="description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            ) : (
              <p className={classes.oldData}>{desc}</p>
            )}

            {!descMod && (
              <Button
                onClick={() => setDescMod(true)}
                className={classes.buttonIcon}
              >
                <CreateIcon />
              </Button>
            )}
          </Box>
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
              onClick={() => open(false)}
            >
              cancle
            </Button>
          </Box>
        </form>
      </div>
    </ThemeProvider>
  );
};
export default EditProfile;
