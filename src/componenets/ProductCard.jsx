import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/system';
import theme from './Theme';

const StyledCard = styled(Card)({
  display: 'flex',
  borderRadius: 8,
  boxShadow: 4,
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  width: '100%',
  objectFit: 'cover',
  borderRadius: 8,
});

const StyledCardContent = styled(CardContent)({
  flex: '1 0 auto',
});

const ProductCard = ({ product }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledCard>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <StyledCardMedia
            component="img"
            alt=""
            height="140"
            image="{product.image}"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <StyledCardContent>
            <Typography variant="h6" component="div">
             HJIiiii
            </Typography>
            <Typography color="textSecondary">
              lol
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Price: 2222222
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Rating: 6
            </Typography>
          </StyledCardContent>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default ProductCard;
