import axios from 'axios';

export const GetUserContextService = async (fetchUser) => {
  try {
    const user = await axios.get('/api/private/getuser', {
      headers: {
        authorization: `Bearer ${fetchUser}`,
      },
    });
    return user.data;
  } catch (err) {
    console.error(err);
  }
};
