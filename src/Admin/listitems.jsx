import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
//import Routespages from "./Routepages";
import { Link  } from 'react-router-dom';
import Routespages from "../Pages/Routespages";

export const mainListItems = (
  <React.Fragment>
  <Link to="/Home" style={{color:"black", textDecoration:"none"}}>
    <ListItemButton>
         <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText sx={{color:"black", textDecoration:"none"}} primary="Dashboard" />
    </ListItemButton>
    </Link>
     <Link to="/Corders" style={{color:"black", textDecoration:"none"}}>
    <ListItemButton>
     <ListItemIcon>
      <ShoppingCartIcon />
    </ListItemIcon>
       <ListItemText primary="Orders" />
    </ListItemButton>
     </Link>
     <Link to="/Shopproducts" style={{color:"black", textDecoration:"none"}}>
    <ListItemButton>
      <ListItemIcon>
      <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
       </ListItemButton>
     </Link>
     <Link to="/Userlist" style={{color:"black", textDecoration:"none"}}>
    <ListItemButton>
      <ListItemIcon>
      <PeopleIcon />
      </ListItemIcon>
          <ListItemText primary="Users" />
    </ListItemButton>
     </Link>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    {/*<ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>*/}
  </React.Fragment>
);