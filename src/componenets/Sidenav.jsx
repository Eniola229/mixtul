import React from 'react';
import { List, ListItem, ListItemIcon } from '@mui/material';
import {
  Home as HomeIcon,
  ShoppingCart as ShoppingCartIcon,
  Info as InfoIcon,
  ContactSupport as ContactSupportIcon,
} from '@mui/icons-material';

const Sidenav = () => {
  const iconList = [
    { icon: <HomeIcon sx={{color:"white", fontSize:"40px"}} />, text: 'Home' },
    { icon: <ShoppingCartIcon sx={{color:"white", fontSize:"40px", marginTop:"1rem"}} />, text: 'Shop' },
    { icon: <InfoIcon sx={{color:"white", fontSize:"40px", marginTop:"1rem"}} />, text: 'About' },
    { icon: <ContactSupportIcon sx={{color:"white", fontSize:"40px", marginTop:"1rem"}} />, text: 'Contact' },
  ];

  const sidebarHeight = 100; // Set the height of the sidebar as needed

  const topPosition = `calc(50% - ${sidebarHeight / 2}px)`;

  return (
    <List style={{ position: 'fixed', left: 0, top:"30%",   backgroundColor: 'rgba(0, 0, 0, 0.5)', }}>
      {iconList.map((item, index) => (
        <ListItem button key={item.text}>
          <ListItemIcon>{item.icon}</ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
};

export default Sidenav;
