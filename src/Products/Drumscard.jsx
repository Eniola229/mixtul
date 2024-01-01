// Products.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  styled,
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import sn from "../images/sn.jpg";
import bg from "../images/bg.jpg";
import { Link } from 'react-router-dom';
import Routespages from "../Pages/Routespages"
import Cart from "./Cart";

const StyledCard = styled(Card)({
  maxWidth: 240,
  margin: 'auto',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  transition: 'transform 0.3s',
  marginTop:"3rem",
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 180,
  objectFit: 'cover',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
});

const StyledCardContent = styled(CardContent)({
  padding: '16px',
});

const StyledRating = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginTop: '8px',
  color: 'orange',
});

const StyledAmount = styled(Typography)({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: '#333',
  marginTop: '8px',
});

const StyledButton = styled(Button)({
  backgroundColor: 'chocolate',
  color: '#fff',
  width:"100%",
  textAlign:"center",
  '&:hover': {
    backgroundColor: 'darkorange',
  },
});

const Drumscard = () => {
  const [cartItems, setCartItems] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate(); 



  const handleAddToCart = () => {
    const newItem = { name: 'Product Name', amount: 49.99 };
    setCartItems([...cartItems, newItem]);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleViewCart = () => {
    navigate('/Cart'); 
  };

  return (
    <Container sx={{ py: 6, }} maxWidth="md">
      <Grid container spacing={4}>
        <StyledCard>
          <CardActionArea>
            <StyledCardMedia
              component="img"
              image={sn}
              alt="Product Image"
            />
            <StyledCardContent>
              <Typography gutterBottom variant="h6" sx={{fontWeight:"bolder", color:"chocolate"}} component="div">
               Drum
              </Typography>
              <StyledRating>
                <Typography variant="body2" sx={{color:"orange"}}>
                  ★ 4.5
                </Typography>
              </StyledRating>
              <StyledAmount>
                $49.99 {/* Replace with actual amount */}
              </StyledAmount>
            </StyledCardContent>
          </CardActionArea>
          <CardActions>
            <StyledButton size="small" onClick={handleAddToCart}>
              Add to Cart
            </StyledButton>
          </CardActions>
        </StyledCard>

         <StyledCard>
          <CardActionArea>
            <StyledCardMedia
              component="img"
              image={sn}
              alt="Product Image"
            />
            <StyledCardContent>
              <Typography gutterBottom variant="h6" sx={{fontWeight:"bolder", color:"chocolate"}} component="div">
               Drum
              </Typography>
              <StyledRating>
                <Typography variant="body2" sx={{color:"orange"}}>
                  ★ 4.5
                </Typography>
              </StyledRating>
              <StyledAmount>
                $49.99 {/* Replace with actual amount */}
              </StyledAmount>
            </StyledCardContent>
          </CardActionArea>
          <CardActions>
            <StyledButton size="small" onClick={handleAddToCart}>
              Add to Cart
            </StyledButton>
          </CardActions>
        </StyledCard>

         <StyledCard>
          <CardActionArea>
            <StyledCardMedia
              component="img"
              image={sn}
              alt="Product Image"
            />
            <StyledCardContent>
              <Typography gutterBottom variant="h6" sx={{fontWeight:"bolder", color:"chocolate"}} component="div">
               Drum
              </Typography>
              <StyledRating>
                <Typography variant="body2" sx={{color:"orange"}}>
                  ★ 4.5
                </Typography>
              </StyledRating>
              <StyledAmount>
                $49.99 {/* Replace with actual amount */}
              </StyledAmount>
            </StyledCardContent>
          </CardActionArea>
          <CardActions>
            <StyledButton size="small" onClick={handleAddToCart}>
              Add to Cart
            </StyledButton>
          </CardActions>
        </StyledCard>

         <StyledCard>
          <CardActionArea>
            <StyledCardMedia
              component="img"
              image={sn}
              alt="Product Image"
            />
            <StyledCardContent>
              <Typography gutterBottom variant="h6" sx={{fontWeight:"bolder", color:"chocolate"}} component="div">
               Drum
              </Typography>
              <StyledRating>
                <Typography variant="body2" sx={{color:"orange"}}>
                  ★ 4.5
                </Typography>
              </StyledRating>
              <StyledAmount>
                $49.99 {/* Replace with actual amount */}
              </StyledAmount>
            </StyledCardContent>
          </CardActionArea>
          <CardActions>
            <StyledButton size="small" onClick={handleAddToCart}>
              Add to Cart
            </StyledButton>
          </CardActions>
        </StyledCard>

         <StyledCard>
          <CardActionArea>
            <StyledCardMedia
              component="img"
              image={sn}
              alt="Product Image"
            />
            <StyledCardContent>
              <Typography gutterBottom variant="h6" sx={{fontWeight:"bolder", color:"chocolate"}} component="div">
               Drum
              </Typography>
              <StyledRating>
                <Typography variant="body2" sx={{color:"orange"}}>
                  ★ 4.5
                </Typography>
              </StyledRating>
              <StyledAmount>
                $49.99 {/* Replace with actual amount */}
              </StyledAmount>
            </StyledCardContent>
          </CardActionArea>
          <CardActions>
            <StyledButton size="small" onClick={handleAddToCart}>
              Add to Cart
            </StyledButton>
          </CardActions>
        </StyledCard>

         <StyledCard>
          <CardActionArea>
            <StyledCardMedia
              component="img"
              image={sn}
              alt="Product Image"
            />
            <StyledCardContent>
              <Typography gutterBottom variant="h6" sx={{fontWeight:"bolder", color:"chocolate"}} component="div">
               Drum
              </Typography>
              <StyledRating>
                <Typography variant="body2" sx={{color:"orange"}}>
                  ★ 4.5
                </Typography>
              </StyledRating>
              <StyledAmount>
                $49.99 {/* Replace with actual amount */}
              </StyledAmount>
            </StyledCardContent>
          </CardActionArea>
          <CardActions>
            <StyledButton size="small" onClick={handleAddToCart}>
              Add to Cart
            </StyledButton>
          </CardActions>
        </StyledCard>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
          Item added to cart!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default Drumscard;
