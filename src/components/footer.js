import React from 'react';
import { Box, Container, Typography} from '@mui/material';

const Footer = () => {
  return (
    <Box 
    component="footer" 
    sx={{ 
      backgroundColor: 'background.default', 
      color: '#212f3d', 
      py: 2, 
      px: { xs: 4, md: 4 } 
    }}
  >
    <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography sx={{color: '#212f3d'}} variant="body2">&copy; 2024 Ajay Wagh. All rights reserved.</Typography>
      <Box sx={{ display: 'flex', gap: 4 }}>
        
      </Box>
    </Container>
  </Box>
  );
};

export default Footer;
