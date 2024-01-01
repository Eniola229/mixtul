import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Shopheader = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'chocolate', marginTop: '3rem' }}>
      <Container>
        <Toolbar style={{ justifyContent: 'center', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/drums" color="inherit">Drums</Button>
          <Button component={Link} to="/amplifiers" color="inherit">Mics</Button>
          <Button component={Link} to="/mixers" color="inherit">Mixers</Button>
          <Button component={Link} to="/piano" color="inherit">Piano</Button>
          <Button component={Link} to="/combos" color="inherit">Combos</Button>
          <Button component={Link} to="/speakers" color="inherit">Speakers</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Shopheader;
