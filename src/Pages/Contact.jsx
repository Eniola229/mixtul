// Contact.js
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  styled,
} from '@mui/material';
import cbg from "../images/cbg.jpg";

const StyledBox = styled(Box)({
  backgroundImage: `url(${cbg})`,
  backgroundSize: 'cover',
  width:"100%",
  minHeight: '100vh',
  display: 'flex',
  marginTop:"2rem",
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledFormContainer = styled(Box)({
  maxWidth: 600,
  padding: '40px',
  backgroundColor: 'transpirent',
  borderRadius: '8px',
  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
});

const StyledHeading = styled(Typography)({
  marginBottom: '20px',
  color: 'chocolate',
  fontWeight:"bolder",
  textShadow:"1px 1px white"
});

const StyledTextField = styled(TextField)({
  marginBottom: '20px',
  color:"white",
  border:"1px solid chocolate",
  placeholder:"white"
});

const StyledButton = styled(Button)({
  marginTop: '20px',
  width:"100%",
  backgroundColor:"chocolate",
  height:"50px",
  '&:hover': {
    backgroundColor: 'darkorange',
  },
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    window.location.href = `mailto:joshuaadeyemi445@gmailcom?subject=Contact%20Form&body=${name}%0A${email}%0A${message}`;
  };

  return (
    <StyledBox>
      <Container>
        <StyledFormContainer>
          <StyledHeading variant="h4" align="center">
            Contact Us
          </StyledHeading>
          <form onSubmit={handleSubmit}>
            <StyledTextField
              label="Name"
              name="name"
              sx={{color:"white"}}
              fullWidth
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
            />
            <StyledTextField
              label="Email"
              name="email"
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
            />
            <StyledTextField
              label="Message"
              name="message"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              value={formData.message}
              onChange={handleChange}
            />
            <StyledButton
              type="submit"
              variant="contained"
              color="primary"
            >
              Send Message
            </StyledButton>
          </form>
        </StyledFormContainer>
      </Container>
    </StyledBox>
  );
};

export default Contact;
