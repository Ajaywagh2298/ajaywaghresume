import React, { useState, useEffect } from 'react';
import {
  Grid, Card, CardMedia, Modal, Box, IconButton, Typography, Snackbar, Alert, Dialog, Button, DialogContent
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { imagesList } from '../data';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function ImageGallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleRestrictedAction = (e) => {
    e.preventDefault();
    setSnackbarOpen(true);
    setDialogOpen(true);
  };

  // Disable certain keyboard shortcuts
  const handleKeyDown = (e) => {
    if (
      (e.ctrlKey && (e.key === 's' || e.key === 'p')) || // Ctrl+S, Ctrl+P
      (e.metaKey && (e.key === 's' || e.key === 'p')) || // Cmd+S, Cmd+P (for Mac)
      (e.key === 'PrintScreen') // Print Screen
    ) {
      handleRestrictedAction(e);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Box
      sx={{ padding: 2 }}
      onContextMenu={handleRestrictedAction} // Disable right-click for the entire component
      onCopy={handleRestrictedAction} // Prevent copying
      onCut={handleRestrictedAction} // Prevent cutting
      onPaste={handleRestrictedAction} // Prevent pasting
      onDragStart={handleRestrictedAction} // Prevent dragging
    >
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
                userSelect: 'none', // Disable text selection
                '& img': {
                  pointerEvents: 'none', // Disable dragging images
                },
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
          onContextMenu={handleRestrictedAction} // Disable right-click in the modal
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
                userSelect: 'none', // Disable text selection
              }}
            />
          )}
        </Box>
      </Modal>
      <WarningDialog  open={dialogOpen}
        onClose={handleDialogClose} />
      {/* <Dialog
       
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            padding: 4,
            textAlign: 'center',
            backgroundColor: '#f44336',
            color: 'white',
          }}
        >
          <Typography variant="h5" id="alert-dialog-title">
            Warning!
          </Typography>
          <Typography variant="body1" id="alert-dialog-description" sx={{ mt: 2 }}>
            This action is not allowed. Please respect the content's copyright and do not attempt to save, copy, or screenshot this page.
          </Typography>
          <IconButton
            onClick={handleDialogClose}
            sx={{ position: 'absolute', top: 8, right: 8, color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Dialog> */}
    </Box>
  );
}


function WarningDialog({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        style: { borderRadius: 15, overflow: 'hidden' }
      }}
    >
      <Box
        sx={{
          backgroundColor: '#f44336',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          padding: '16px',
          position: 'relative',
        }}
      >
        <WarningAmberIcon sx={{ fontSize: 50, marginRight: '16px' }} />
        <Typography variant="h5" id="alert-dialog-title" sx={{ fontWeight: 'bold' }}>
          Warning!
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, right: 8, color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ padding: '24px', textAlign: 'center' }}>
        <Typography variant="body1" id="alert-dialog-description" sx={{ mb: 2 ,color : '#5d6d7e'}}>
          This action is not allowed. Please respect the content's copyright and do not attempt to save, copy, or screenshot this page.
        </Typography>
        <Alert severity="error" sx={{ borderRadius: 8 }}>
          Unauthorized actions are strictly prohibited!
        </Alert>
      </DialogContent>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '16px',
        }}
      >
        <Button
          variant="contained"
          color="error"
          onClick={onClose}
          sx={{ textTransform: 'none', fontWeight: 'bold', borderRadius: 5 }}
        >
          I Understand
        </Button>
      </Box>
    </Dialog>
  );
}