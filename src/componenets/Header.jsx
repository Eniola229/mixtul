import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, styled, useMediaQuery, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import theme from './Theme';
import Link from '@mui/material/Link';
import Shop from "../Pages/Shop";

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#992D00', // Very dark orange
});

const CenterContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
});

const RightContainer = styled('div')({
  display: 'flex',
  alignItems: 'right',
  justifyContent:"spaceAround"

});

const LeftContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',

});

const StyledIconButton = styled(IconButton)({
  marginRight: 2,
});

const Header = () => {

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <LeftContainer>
         <Link href="/" sx={{color:"white", textDecoration:"none"}}> 
         <Typography  variant="h6" sx={{fontWeight:"bold", fontStyle:"italic", fontFamily:"cursive", letterSpacing:2}} component="div" color="inherit">
            Mixtul
          </Typography>
         </Link>

        </LeftContainer>

        <CenterContainer sx={{ display: isSmallScreen ? "none" : "flex",}}>

          <Link href="/" sx={{color:"white", textDecoration:"none"}}> 
             <Button color="inherit">Home</Button>
          </Link>
          <Link href="/Shop" sx={{color:"white", textDecoration:"none"}}> 
             <Button color="inherit">Shop</Button>
          </Link>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
            
        </CenterContainer>

        <RightContainer sx={{ marginLeft: isSmallScreen ? 'auto' : 0}}>
        
          <StyledIconButton sx={{marginLeft:"1rem"}} color="inherit" aria-label="Shopping Cart">
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon />
            </Badge>
          </StyledIconButton>

          <Button color="inherit" sx={{background:"chocolate", marginLeft:"1rem"}}>Login</Button>

        </RightContainer>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
