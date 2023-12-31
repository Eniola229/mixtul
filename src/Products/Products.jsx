import React, { useState, useEffect  } from 'react';
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
  Box,
  styled,
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import sn from "../images/sn.jpg";
import bg from "../images/bg.jpg";
import { Link } from 'react-router-dom';
import Routespages from "../Pages/Routespages"
import { collection } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { db } from "../Auth/Firebase";
import { onSnapshot } from 'firebase/firestore'
import CircularProgress from '@mui/material/CircularProgress';

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
  width:230,
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
  fontSize: '1rem',
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

const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);


  //logic for displaying products

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(collection(db, "products"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
          list.push({id: doc.id, ...doc.data()})
      });
      setProducts(list);
      setLoading(false);
    }, 
    (error) => {
       console.log(error);
    } 
    );
    return () => {
      unsub();
    }
  }, [])

  const handleAddToCart = () => {
    const newItem = { name: 'Product Name', amount: 49.99 };
    setCartItems([...cartItems, newItem]);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container sx={{ py: 6, }} maxWidth="md">
     {loading ?
      <Box sx={{justifyContent:"center", alignItems:"center", textAlign:"center", marginTop:"5rem"}}>
          <CircularProgress sx={{justifyContent:"center", color:"chocolate"}} color="success" /> 
      </Box>
     :(
      <Grid container spacing={4}>
     {products.map((product) => (

           <StyledCard key={product.id}>
          <CardActionArea>
            <StyledCardMedia
              component="img"
              image={product.img}
              alt="Product Image"
            />
            <StyledCardContent>
              <Typography gutterBottom variant="h6" sx={{fontWeight:"bolder", color:"chocolate"}} component="div">
               {product.name}
              </Typography>
              <StyledRating>
                <Typography variant="body2" sx={{color:"orange"}}>
                  ★ {product.rate}
                </Typography>
              </StyledRating>
              <StyledAmount variant="body2">
                ₦ {product.ammount}
              </StyledAmount>
              <StyledAmount sx={{color:"green", fontSize:"10px"}}>
                 {product.aval}
              </StyledAmount>
            </StyledCardContent>
          </CardActionArea>
          <CardActions>
            <StyledButton size="small" onClick={handleAddToCart}>
              Add to Cart
            </StyledButton>
          </CardActions>
        </StyledCard>
      ))}
       
      </Grid>
      )}
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

export default Products;
