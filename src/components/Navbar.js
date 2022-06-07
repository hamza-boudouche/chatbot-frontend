import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from "react-router-dom";
import logo from "../assets/Image1.png";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import account from "../assets/logo.jpeg";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

import User from "../assets/user.png";
import Profile from '../components/Profile';
import { Toolbar } from '@mui/material';
const Navbar = () => {
  const { user, isAuthenticated, loginWithRedirect, logout, } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const logoutWithRedirect = () => logout({ returnTo: window.location.origin, });

  const handleClick = (event) => { setAnchorEl(event.currentTarget); };

  const handleClose = () => { setAnchorEl(null); };

  const [show, setShow] = useState(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    
  };


  return (
    <div className="navbar">
      <Link to={"/"} className="logo"><img className="logoimg" src={logo}></img></Link>
      <div className="navlist">
        <ul>
          {isAuthenticated && (
            <li className="nav-element"> <Link to="/chat">Chat</Link></li>
          )}
          <li className="nav-element " ><Link to={"/Features"}>Fonctionnalités</Link></li>
          <li className="nav-element"><Link to={"AboutUs"}>A propos</Link></li>

          {!isAuthenticated && (
            <li className="nav-elementor" onClick={() => loginWithRedirect()}>Se connecter</li>
          )}
          {isAuthenticated && (
            <>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <img
                    src={user.picture || "https://cdn-icons-png.flaticon.com/512/1250/1250689.png"
                    }
                    alt="Profile"
                    className="nav-user-profile rounded-circle"
                    width="40" style={{
                      borderRadius: "50%",
                      margin: "1rem",
                      width: "3rem",
                      height: "3rem"
                    }} />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <PersonIcon fontSize="small" />
                  </ListItemIcon>
                  {/* <button onClick={() => { setShow(true) }}> Profile</button> */}

                  <Link  to="" onClick={() => { setShow(true) }}>Profile</Link> 
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ChatIcon fontSize="small" />
                  </ListItemIcon>
                  <Link to="/chat">Chat</Link>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  <Link to="/settings">Settings</Link>
                </MenuItem>
                <MenuItem onClick={() => logoutWithRedirect()}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </ul>
      </div>

      <Modal open={show} onClose={() => { setShow(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        
        <Box sx={style}>
        <Toolbar sx={{
          top : '0%',
          backgroundColor: '#c96d17' }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => { setShow(false) }}
            aria-label="close"
            sx={{ height: '50px', width: '50px', left: '95%' }}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Profile
          </Typography>
        </Toolbar>
        <Box  sx={{ bgcolor: 'background.paper',p: 4  }}>
          <Profile />
        </Box>
      </Box>
      {/*  */}


    </Modal>
    </div >
  );
};

export default Navbar;
