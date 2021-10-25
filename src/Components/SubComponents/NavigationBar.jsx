import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import { useState } from 'react';

export default function NavigationBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.pagename}
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem><Link className="navlink" to="/">Home</Link></MenuItem>
            <MenuItem><Link className="navlink" to="/Login">Login</Link></MenuItem>
            <MenuItem><Link className="navlink" to="/Register">Register</Link></MenuItem>
            <MenuItem><Link className="navlink" to="/Homepage">Homepage</Link></MenuItem>
            <MenuItem><Link className="navlink" to="/Changepassword">Changepassword</Link></MenuItem>
            <MenuItem><Link className="navlink" to="/Logout">Logout</Link></MenuItem>            
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
