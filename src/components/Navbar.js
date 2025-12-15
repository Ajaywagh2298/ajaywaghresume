import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import userImage from './user.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleImageClick = () => {
    setIsImageClicked(true);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClose = (e) => {
    if (e.target.className.includes('modal')) {
      setIsImageClicked(false);
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#fdfefe' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              src={userImage}
              alt="Ajay Wagh"
              sx={{ cursor: 'pointer' }}
              onClick={handleImageClick}
            />
            <Typography
              variant="h6"
              sx={{ marginLeft: 2, fontWeight: 'bold', color: '#000' }}
            >
              Ajay Wagh
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <List sx={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
              <ListItem component={Link} to="/" button>
                <ListItemText primary="Profile"  sx={{color: '#000'}}/>
              </ListItem>
              <ListItem component={Link} to="/exp" button>
                <ListItemText primary="Experience" sx={{color: '#000'}} />
              </ListItem>
              <ListItem component={Link} to="/projects" button>
                <ListItemText primary="Project" sx={{color: '#000'}}/>
              </ListItem>
              <ListItem component={Link} to="/resume" button>
                <ListItemText primary="Resume" sx={{color: '#000'}} />
              </ListItem>
              <ListItem component={Link} to="/images" button>
                <ListItemText primary="Image Gallery" sx={{color: '#000',width: 105}} />
              </ListItem>
              <ListItem component={Link} to="/contact"  button>
                <ListItemText primary="Contact Us" sx={{color: '#000',width: 90}} />
              </ListItem>
                <ListItem button component={Link} to="/study" onClick={handleDrawerToggle}>
            <ListItemText primary="Study Us" />
          </ListItem>
            </List>
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', md: 'none' }, color :'#000'  }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none', color :'#000' } }}
      >
        <List>
          <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button component={Link} to="/exp" onClick={handleDrawerToggle}>
            <ListItemText primary="Experience" />
          </ListItem>
          <ListItem button component={Link} to="/projects" onClick={handleDrawerToggle}>
            <ListItemText primary="Project" />
          </ListItem>
          <ListItem button component={Link} to="/resume" onClick={handleDrawerToggle}>
            <ListItemText primary="Resume" />
          </ListItem>
          <ListItem button component={Link} to="/images" onClick={handleDrawerToggle}>
            <ListItemText primary="Image Gallery" />
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={handleDrawerToggle}>
            <ListItemText primary="Contact Us" />
          </ListItem>
        <ListItem button component={Link} to="/study" onClick={handleDrawerToggle}>
            <ListItemText primary="Study Us" />
          </ListItem>
        </List>
      </Drawer>

      {/* Modal for the larger image view */}
      {isImageClicked && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content">
            <img src={userImage} alt="Ajay Wagh" className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
