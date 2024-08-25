import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, Card, CardContent } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './Contact.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: '#ffffff',
  },
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [allMessages, setAllMessages] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Load all messages from localStorage when the component mounts
    const savedData = JSON.parse(localStorage.getItem('contactData')) || [];
    setAllMessages(savedData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save data to local storage
      const savedData = JSON.parse(localStorage.getItem('contactData')) || [];
      savedData.push(formData);
      localStorage.setItem('contactData', JSON.stringify(savedData));

      // Update state with new message
      setAllMessages(savedData);
      setShowMessage(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Something went wrong:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ mt: 10, mb: 20 }}>
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
          <Typography variant="h6" align="center" color="success.main" sx={{ mt: 4 }}>
            Your message has been sent successfully!
          </Typography>
        )}

        <Typography variant="h5" gutterBottom align="center" sx={{ mt: 5 }}>
          All Messages
        </Typography>
        {allMessages.map((message, index) => (
          <Card key={index} sx={{ mt: 2, backgroundColor: '#f4f6f8', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <strong>Name:</strong> {message.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Email:</strong> {message.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Phone:</strong> {message.phone}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                <strong>Message:</strong> {message.message}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </ThemeProvider>
  );
};

export default Contact;
