import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import Link from '@mui/material/Link';
import Contact from "./Contact";
import Footer from "../componenets/Footer";
const About = () => {
  const [paperStyle, setPaperStyle] = useState({
    padding: '30px',
    backgroundColor: '#fafafa',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  });

  useEffect(() => {
    
    setPaperStyle((prevStyles) => ({
      ...prevStyles,
    }));
  }, []);

  return (
    <Container style={{ marginTop: '40px', marginBottom: '40px' }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper style={paperStyle}>
            <Typography variant="h4" style={{ marginBottom: '20px', color: '#333', fontWeight: 'bold' }} gutterBottom>
              About Mixtul Store
            </Typography>
            <Typography variant="body1" style={{ color: '#555', lineHeight: '1.6', marginBottom: '20px' }} paragraph>
              Welcome to our online store! We're on a mission to make your shopping experience exceptional when it comes to shopping musical instrument and sounds eqiupment. 
            </Typography>
            <Typography variant="body1" style={{ color: '#555', lineHeight: '1.6', marginBottom: '20px' }} paragraph>
              At our store, we embrace cutting-edge technologies. We offer a low price range on all our products.
            </Typography>
            <Typography variant="body1" style={{ color: '#555', lineHeight: '1.6', marginBottom: '20px' }} paragraph>
              Thank you for choosing us as your preferred online musical and sounds shopping destination. For any questions or feedback, our dedicated customer support team is here to assist you. Happy shopping!
            </Typography>
             <Link href="/Contact" sx={{color:"white", textDecoration:"none"}}> 
            <Button variant="contained" color="primary" style={{ marginTop: '30px', background:"chocolate", padding: '12px 24px' }}>
              Contact Us
            </Button>
            </Link>

          </Paper>
        </Grid>
      </Grid>
      <Footer/>
    </Container>
  );
};

export default About
