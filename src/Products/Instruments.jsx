import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';
import sn from "../images/sn.jpg";
import Drumscard from "./Drumscard"
import bg from "../images/bg.jpg";

const defaultTheme = createTheme();

 function Instruments() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
             // backgroundImage: `url(${bg})`, 
            pt: 4,
            pb: 2,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h5"
              variant="h5"
              align="center"
              color="chocolate"
              sx={{fontWeight:"bolder", fontFamily:"cursive"}}
              gutterBottom

            >
             Musical Instruments
            </Typography>
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" sx={{width:"20%", backgroundColor:"darkorange"}}>New</Button>
              <Button variant="outlined" sx={{width:"20%", border:"2px solid darkorange", color:"darkorange"}}>Used</Button>
            </Stack>
          </Container>
        </Box>

        <Drumscard/>
        
      </main>
      </ThemeProvider>
  );
};

export default Instruments;
