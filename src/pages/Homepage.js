import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Header from '../components/Header';
import Money from '../components/Money';
import Card from '../components/Card';

function Homepage() {
  return (
    <React.Fragment >
      <CssBaseline  />
      <Container  maxWidth="md">
        <Header />
        <Money />
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh'}} >
            <Card />
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default Homepage