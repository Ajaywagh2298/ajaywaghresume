import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
const theme = createTheme({
  palette: {
    mode: 'light',
    background: '#ffffff'
  }
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response =  {
        ok : true
      }
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      if (response.ok) {
        setSuccessMessage('Thank you for contacting us! Your message has been sent.');
        setShowMessage(true);
        setTimeout(() => {
          navigate('/'); // Redirect to the home page after the animation
        }, 3000); // Duration should match the animation duration
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSuccessMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSuccessMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ mt: 10, mb: 20, maxHeight: '80%' }}>
        <Typography variant="h4" gutterBottom align="center">
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Box mt={4} display="flex" justifyContent="center">
            <Button type="submit" variant="contained" color="primary">
              Send
            </Button>
          </Box>
        </form>
        {showMessage && (
          <div className="flying-message">
            <Typography variant="body1" align="center">
              {successMessage}
            </Typography>
          </div>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Contact;
