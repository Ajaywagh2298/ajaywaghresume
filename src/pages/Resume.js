import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Card, CardContent, CardActions, Box, Divider } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { resumeList } from '../data'; // Adjust the import path if needed

const theme = createTheme({
  palette: {
    mode: 'light',
    background: '#ffffff'
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h4: {
      fontSize: '2rem',
    },
    h6: {
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    iconText: {
      fontSize: '0.875rem',
    }
  }
});

const Resume = () => {
  const [open, setOpen] = useState(false);
  const [currentResume, setCurrentResume] = useState(null);

  const handleOpen = (resume) => {
    setCurrentResume(resume);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentResume(null);
  };

  const handleDownload = () => {
    if (currentResume) {
      const link = document.createElement('a');
      link.href = currentResume.link;
      link.download = currentResume.name || 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ p: 4, pb: 6, textAlign: 'center', background: '#fdfefe' }}
      >
        <Typography variant="h4" gutterBottom sx={{ pb: 2 }}>
          Resume
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ pb: 5 }}>
          <Divider />
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2, // Adjusted spacing
            marginBottom: 2, // Adjusted bottom margin
          }}
        >
          {resumeList.length > 0 ? (
            resumeList.map((data) => (
              <Card
                key={data.position}
                sx={{ width: { xs: '100%', sm: '300px' }, mb: 2 }} // Responsive width
                onClick={() => handleOpen(data)}
              >
                <CardContent>
                  <Typography variant="h6" component="div">
                    {data.position}
                  </Typography>
                  <Typography color="textSecondary">
                    {data.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => handleOpen(data)}>
                    View Resume
                  </Button>
                  <Button size="small" color="secondary" onClick={() => handleDownload()} sx={{ ml: 'auto' }}>
                    Download
                  </Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <Typography>No resumes available.</Typography>
          )}
          {currentResume && (
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
              <DialogTitle>Resume: {currentResume.position}</DialogTitle>
              <DialogContent>
                <iframe
                  src={currentResume.link}
                  title="Resume"
                  style={{ width: '100%', height: '60vh' }}
                  frameBorder="0"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDownload} color="primary">
                  Download Resume
                </Button>
                <Button onClick={handleClose} color="secondary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Resume;
