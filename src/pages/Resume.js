import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Link, Card, CardContent, CardActions, Box, Divider } from '@mui/material';
import { resumeList } from '../data'; // Adjust the import path if needed
import { createFilterOptions } from '@mui/material/Autocomplete'; // Verify if this is the correct path
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    mode: 'light',
    background: '#ffffff'
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h5: {
      fontSize: 28,
    },
    body1: {
      fontSize: 20,
    },
    body2: {
      fontSize: 18,
    },
    smallBody: {
      fontSize: 18,
      fontFamily: 'Josefin Slab, serif',
    },
    iconText: {
      fontSize: 14
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
        sx={{ p: 15, pb: 20, textAlign: 'center', background: '#fdfefe', maxHeight: '100%' }}
      >
        <Typography variant="h4" gutterBottom sx={{ pb: 2 }}>
          Resume
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ pb: 5 }}>
          <Divider />
        </Typography>
        <div
          className="resume-container"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '18px', 
            marginBottom: '16px',
            padding: '16px',
            background: '#fdfefe',
            flexWrap: 'wrap', 
          }}
        >

          {resumeList.length > 0 ? (
            resumeList.map((data) => (
              <Card
                key={data.position}
                style={{ width: '300px', marginBottom: '16px' }} // Adjust the width and margin as needed
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
                  <Button size="small" color="secondary" onClick={() => handleDownload(data.link, data.name)} sx={{ alignItems : 'right'}}>
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
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default Resume;

