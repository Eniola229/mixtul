// Cart.jsx
import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

const Cart = ({ cartItems }) => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems && cartItems.length > 0 ? (
        <List>
          {cartItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText primary={item.name} secondary={`$${item.amount}`} />
              </ListItem>
              {index < cartItems.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      ) : (
        <Typography variant="subtitle1" align="center">
          Your cart is empty.
        </Typography>
      )}
    </Container>
  );
};

export default Cart;
