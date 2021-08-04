import React from 'react';
import { Grid } from '@material-ui/core';
import Feature1 from './Feature1'
import Feature2 from './Feature2';

export default function HeaderFeature() {
  return (
           <Grid container md={12} >
                <Feature1 />
                <Feature2 />
           </Grid>
  );
}