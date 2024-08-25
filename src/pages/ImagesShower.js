import React, { useState } from 'react';
import { Grid, Card, CardMedia, Modal, Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { imagesList } from '../data';

export default function ImageGallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, mt: 5 }}>
        Image Gallery
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {imagesList.map((image) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={image.id}>
            <Card
              onClick={() => handleOpen(image.url)}
              sx={{
                cursor: 'pointer',
                height: { xs: 150, sm: 200, md: 250 },
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                boxShadow: 3,
                overflow: 'hidden',
                borderRadius: 2,
              }}
            >
              <CardMedia
                component="img"
                image={image.url}
                alt={image.title}
                sx={{ objectFit: 'cover', height: '100%' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal open={open} onClose={handleClose} aria-labelledby="image-modal" closeAfterTransition>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '70%' },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: { xs: 2, sm: 4 },
            borderRadius: 2,
            outline: 'none',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
}
