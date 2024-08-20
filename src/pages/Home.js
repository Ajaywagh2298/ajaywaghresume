import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Avatar, Box, Grid, Container, Link, LinearProgress, CircularProgress } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CodeIcon from '@mui/icons-material/Code';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoadingPopup from './LoadingPopup';
import { userData, experienceData, educationData, skillsData } from '../data';

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

function Home() {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      // Simulate a delay for loading
      navigate('/resume');
    }, 400); // Adjust the delay as needed
  }
  return (
    <ThemeProvider theme={theme}>
      <Box py={{ xs: 14, md: 16, lg: 14, background: '#fdfefe' }} component="section">
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6} textAlign="center">
              <Avatar
                alt="Jane Doe"
                src={userData.image}
                sx={{
                  width: 400,
                  height: 400,
                  mx: 'auto',
                  borderRadius: '50%',
                }}
              />
              <Typography variant="h4" component="h2" fontWeight="bold" mt={2}>
                {userData.name}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {userData.position}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography variant="smallBody" color="textSecondary" paragraph>
                I am a skilled Backend Engineer with over two years of experience at Eazy ERP, specializing in Node.js  with a solid foundation in Full Stack development.
                My passion lies in both coding and creative writing, driving me to constantly innovate and learn. I thrive on tackling challenging projects that foster growth and success.
                I’m eager to connect and explore new opportunities where I can contribute my skills and expertise.
              </Typography>
              <Box textAlign="center">
                <Link href="#" underline="none">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      height: 40,
                      px: 8,
                      textTransform: 'none',
                      fontWeight: 'medium',
                      boxShadow: 3,
                      ':hover': { backgroundColor: 'primary.main' },
                    }}
                    onClick={handleClick}
                  >
                    Download Resume
                  </Button>
                  <LoadingPopup open={loading} onClose={() => setLoading(false)} />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box py={{ lg: 6 }} component="section" sx={{ background: "#fdfefe" }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Column layout on mobile, row on larger screens
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 4, md: 8 }, // Adjust spacing between items for different screen sizes
            mt: 4, // Adjust top margin
            mb: 4, // Adjust bottom margin
            p: 2, // Add padding inside the container
            background: '#fdfefe',
          }}
        >
          <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            <Grid item xs={6} sm={4} md="auto">
              <Box textAlign="center">
                <Typography variant="smallBody" color="text.primary" fontWeight="bold">
                  {userData.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md="auto">
              <Box textAlign="center">
                <Typography variant="smallBody" color="text.primary" fontWeight="bold">
                  {userData.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md="auto">
              <Box textAlign="center">
                <Typography variant="smallBody" color="text.primary" fontWeight="bold">
                  {userData.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={6} // Adjust gap for spacing between buttons
          mt={1}
        >
          <Card
            sx={{
              minWidth: 100,
              minHeight: 100,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              background: '#fdfefe',
              boxShadow: 3,
              borderRadius: 2,
              paddingTop: 2,
              transition: 'transform 0.3s ease-in-out', // Smooth transition for scaling
              '&:hover': {
                boxShadow: 6, // Increases shadow on hover
                transform: 'scale(1.05)', // Slightly scale up the card
                cursor: 'pointer',
              },
            }}
            component="a"
            href={userData.linkedin}
            target="_blank"
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 1,
                margin: 0,
              }}
            >
              <LinkedInIcon sx={{ fontSize: 40, color: '#3498db' }} />
              <Typography sx={{ fontSize: 12, color: '#212f3d', mt: 1 }}>
                LinkedIn
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              minWidth: 100,
              minHeight: 100,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              background: '#fdfefe',
              boxShadow: 3,
              borderRadius: 2,
              paddingTop: 2,
              transition: 'transform 0.3s ease-in-out', // Smooth transition for scaling
              '&:hover': {
                boxShadow: 6, // Increases shadow on hover
                transform: 'scale(1.05)', // Slightly scale up the card
                cursor: 'pointer',
              },
            }}
            component="a"
            href={userData.github}
            target="_blank"
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 1,
                margin: 0,
              }}
            >
              <GitHubIcon sx={{ fontSize: 40, color: '#566573' }} />
              <Typography sx={{ fontSize: 12, color: '#212f3d', mt: 1 }}>
                GitHub
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              minWidth: 100,
              minHeight: 100,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              background: '#fdfefe',
              boxShadow: 3,
              borderRadius: 2,
              paddingTop: 2,
              transition: 'transform 0.3s ease-in-out', // Smooth transition for scaling
              '&:hover': {
                boxShadow: 6, // Increases shadow on hover
                transform: 'scale(1.05)', // Slightly scale up the card
                cursor: 'pointer',
              },
            }}
            component="a"
            href={userData.instagram}
            target="_blank"
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 1,
                margin: 0,
              }}
            >
              <InstagramIcon sx={{ fontSize: 40, color: '#e74c3c' }} />
              <Typography sx={{ fontSize: 12, color: '#212f3d', mt: 1 }}>
                Instagram
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              minWidth: 100,
              minHeight: 100,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              background: '#fdfefe',
              boxShadow: 3,
              borderRadius: 2,
              paddingTop: 2,
              transition: 'transform 0.3s ease-in-out', // Smooth transition for scaling
              '&:hover': {
                boxShadow: 6, // Increases shadow on hover
                transform: 'scale(1.05)', // Slightly scale up the card
                cursor: 'pointer',
              },
            }}
            component="a"
            href={userData.locationUrl}
            target="_blank"
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 1,
                margin: 0,
              }}
            >
              <LocationOnIcon sx={{ fontSize: 40, color: '#1abc9c' }} />
              <Typography sx={{ fontSize: 12, color: '#212f3d', mt: 1 }}>
                Location
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Box
        sx={{ py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fdfefe' }}
      >
        <Box
          sx={{ mb: 4, textAlign: 'center' }}
        >
          <Typography variant="h4" gutterBottom>
            Experience
          </Typography>
          <Typography variant="body1" color="textSecondary">
            My professional journey and the companies I've had the privilege to work with.
          </Typography>
        </Box>
        {/* --------------------------------------------------------- */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={6} // Adjust gap for spacing between buttons
          mt={1}
          sx={{
            flexWrap: 'wrap', // Enable wrapping of items
          }}
        >
          {experienceData.length > 0 ? (
            experienceData.map((data, index) => (
              <Card
                key={index}
                sx={{
                  width: {
                    xs: '100%', // Full width on extra-small screens
                    sm: '45%', // 2 columns on small screens
                    md: '30%', // 3 columns on medium screens
                    lg: '22%', // More columns on large screens
                  },
                  minWidth: 220,
                  minHeight: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  background: '#fdfefe',
                  boxShadow: 3,
                  borderRadius: 2,
                  paddingTop: 2,
                  transition: 'transform 0.3s ease-in-out', // Smooth transition for scaling
                  '&:hover': {
                    boxShadow: 6, // Increases shadow on hover
                    transform: 'scale(1.05)', // Slightly scale up the card
                    cursor: 'pointer',
                  },
                  marginBottom: {
                    xs: 2, // Add space between rows on mobile
                    sm: 3, // Adjust spacing for small screens
                    md: 4, // Adjust spacing for medium screens
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 1,
                    margin: 0,
                  }}
                >
                  <Avatar
                    alt={data.companyName}
                    src={data.companyLogo}
                    sx={{
                      width: 60,
                      height: 60,
                      mx: 'auto',
                      borderRadius: '50%',
                    }}
                  />
                  <Typography sx={{ fontSize: 14, color: '#212f3d', mt: 1, fontWeight: 'bold' }}>
                    {data.companyName}
                  </Typography>
                  <Typography sx={{ fontSize: 12, color: '#212f3d', mt: 1 }}>
                    {data.designation}
                  </Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="body2" color="textSecondary">
              No experience data available.
            </Typography>
          )}
        </Box>

        {/* ------------------------------------------------------ */}
      </Box>
      <SkillsList skillsData={skillsData} />
      <Box
        id="education"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '25vh',
          background: '#fdfefe'
        }}
      >
        <Typography variant="h4" gutterBottom SX={{ mb: 2 }}>
          Education
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item xs={12} sm={8} md={6}>
            {educationData.length > 0 ? (educationData.map((data) => (
              <Card sx={{ p: 1, boxShadow: 3, mb: 4 }}>
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar
                      src={data.imageURL}
                      alt={data.institution}
                      sx={{ width: 48, height: 48, objectFit: 'cover' }}
                    />
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        {data.degree}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {data.institution}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                    <Typography variant="body2" color="textSecondary">
                      {data.period}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {data.total} Years
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))) : (
              <Typography variant="body2" color="textSecondary">
                No experience data available.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

const SkillsList = ({ skillsData }) => {
  const renderStars = (level) => {
    level = parseInt(level);
    const stars = [];
    for (let i = 1; i <= 6; i++) {
      let star = i <= level ? <CodeIcon key={i} sx={{ color: "#2c3e50", fontSize: 14 }} /> : <CodeIcon key={i} sx={{ color: "#d5d8dc", fontSize: 14 }} />;
      stars.push(star);
    }
    return stars;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        py: { xs: 6, md: 4 },
        background: '#fdfefe',
        pd: 5,
      }}
    >
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
        <Typography variant="body1" color="textSecondary">
          The technologies and tools I'm proficient in.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)', // 2 columns on mobile
            sm: 'repeat(3, 1fr)', // 3 columns on small screens
            md: 'repeat(4, 1fr)', // 4 columns on medium screens
            lg: 'repeat(8, 1fr)', // 8 columns on large screens
          },
          gap: 6,
          justifyContent: 'center',
          alignItems: 'center',
          mt: 1,
        }}
      >
        {skillsData.length > 0 ? (
          skillsData.map((data, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 120,
                minHeight: 80,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                background: '#fdfefe',
                boxShadow: 3,
                borderRadius: 2,
                paddingTop: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: 1,
                  margin: 0,
                }}
              >
                <Box
                  component="img"
                  src={data.icon}
                  alt={data.name}
                  sx={{
                    width: 50,
                    height: 50,
                  }}
                />
                <Typography sx={{ fontSize: 14, color: '#212f3d', mt: 0.5, fontWeight: 'bold' }}>
                  {data.name}
                </Typography>
                <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
                  {renderStars(data.level)}
                </Box>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary">
            No experience data available.
          </Typography>
        )}
      </Box>
    </Box>

  );
};

export default Home;
