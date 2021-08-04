import React from 'react';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import NewPostCard from './NewPostCard';

const NewPost=()=>{
    return(
             <Box
             display='flex'
             flexDirection='column'
             marginTop='30px'
             marginLeft='20px'
             >
                 <Typography variant='h5' gutterBottom><b>Recent post</b></Typography>
                 <NewPostCard />
                 <NewPostCard />
                 <NewPostCard />
                 <NewPostCard />
                 <NewPostCard />
             </Box>
    )
}
export default NewPost