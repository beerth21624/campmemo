import axios from 'axios';
import React, { useContext } from 'react';
// import GetUserContext from './GetUserContext';

export const GetUserContextService = async (fetchUser) => {
  //   const { setGetuser } = useContext(GetUserContext);
  console.log(fetchUser);
  try {
    const user = await axios.get('/private/getuser', {
      headers: {
        authorization: `Bearer ${fetchUser}`,
      },
    });
    return user.data;
  } catch (err) {
    console.error(err);
  }
};
