import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import React from 'react';
import HeaderFeature from '../components/Header/HeaderFeature';
import Main from '../components/main/Main';
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <div style={{ backgroundColor: '#F3F3F3', backgroundSize: 'cover' }}>
      <Container maxWidth="lg" style={{ paddingTop: '30px' }}>
        <HeaderFeature />
        <Grid container direction="row" style={{ paddingBottom: '10vh' }}>
          <Main />
          <Sidebar />
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
