import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Avatar, Box, Grid, Container, Link, CardHeader, Breadcrumbs, Chip, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { emphasize, styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import PublicIcon from '@mui/icons-material/Public';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoadingPopup from './LoadingPopup';
import { userData, experienceData, educationData, skillsData, certificationsData, achievementsData, imagesList } from '../data';

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

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

function Home() {

  const [loading, setLoading] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const navigate = useNavigate();

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesList.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imagesList.length) % imagesList.length)
  }
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

        <SocialMediaCards userData={userData} />
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
          gap={6}
          mt={1}
          sx={{
            flexWrap: 'wrap',
            padding: 2, // Add padding to prevent items from touching the edges
          }}
        >
          {experienceData.length > 0 ? (
            experienceData.map((data, index) => (
              <Card
                key={index}
                sx={{
                  width: {
                    xs: '100%', // Full width on extra-small screens
                    sm: '45%',  // 2 columns on small screens
                    md: '30%',  // 3 columns on medium screens
                    lg: '22%',  // More columns on large screens
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
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'scale(1.05)',
                    cursor: 'pointer',
                  },
                  marginBottom: {
                    xs: 2, // Space between rows on mobile
                    sm: 3, // Spacing for small screens
                    md: 4, // Spacing for medium screens
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
                      mb: 1, // Margin-bottom for spacing between avatar and text
                    }}
                  />
                  <Typography sx={{ fontSize: 14, color: '#212f3d', fontWeight: 'bold' }}>
                    {data.companyName}
                  </Typography>
                  <Typography sx={{ fontSize: 12, color: '#212f3d', mt: 0.5 }}>
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
          <Grid item xs={12} sm={10} md={8}>
            {educationData.length > 0 ? (
              educationData.map((data, index) => (
                <Card key={index} sx={{ p: 2, boxShadow: 3, mb: 4 }}>
                  <CardContent>
                    <Box display="flex" alignItems="center" gap={2}>
                      <Avatar
                        src={data.imageURL}
                        alt={data.institution}
                        sx={{ width: 48, height: 48, objectFit: 'cover' }}
                      />
                      <Box>
                        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                          {data.degree}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                          {data.institution}
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                      <Typography variant="body2" color="textSecondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                        {data.period}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                        {data.total} Years
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography variant="body2" color="textSecondary">
                No education data available.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>

      <Box
        id="education"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '25vh',
          background: '#fdfefe',
          padding: '30px',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
          Certification
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
          {certificationsData.length > 0 ? (
            certificationsData.map((cert, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    },
                    padding: 0.5,
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar
                        src={cert.companyLogo}
                        alt={`${cert.companyName} logo`}
                        sx={{ width: 50, height: 50 }}
                      />
                    }
                    title={
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="body" sx={{ fontWeight: 'bold', fontSize: 14 }}>
                          {cert.title}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                          }}
                        >
                          <Typography color="#2c3e50" sx={{ fontSize: 12 }}>
                            {cert.companyName}
                          </Typography>
                          <Typography sx={{ fontSize: 10, display: 'flex', alignItems: 'center', color: '#2c3e50' }}>
                            {
                              cert.date ? (< > <CalendarTodayIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                                {new Date(cert.date).toLocaleString('default', { year: 'numeric', month: 'long', day: 'numeric' })} </>) : (<PublicIcon fontSize="small" sx={{ marginRight: 0.5 }} />)
                            }
                          </Typography>
                        </Box>
                      </Box>
                    }
                    sx={{ paddingBottom: 1 }}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', gap: 0.4, flexWrap: 'wrap' }}>
                      {cert.skill.map((skill, index) => (
                        <Breadcrumbs aria-label="breadcrumb" key={index}>
                          <StyledBreadcrumb
                            component="div"
                            href="#"
                            label={skill}
                            icon={<CodeIcon fontSize="small" sx={{ fontSize: 12 }} />}
                            sx={{ fontSize: 10 }}
                          />
                        </Breadcrumbs>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="body2" color="text.secondary">
              No certification data available.
            </Typography>
          )}
        </Grid>


      </Box>

      <Box
        id="education"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '25vh',
          background: '#fdfefe',
          padding: '30px',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
          Achievements
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
          {achievementsData.length > 0 ? (
            achievementsData.reverse(),
            achievementsData.map((achievement, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  key={index}
                  sx={{
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    },
                    padding: 2,
                  }}
                >
                  <CardHeader
                    title={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: 15, color: '#5d6d7e', fontWeight: 'bold' }}>
                          {achievement.achievements}
                        </Typography>
                        {achievement.type === 'edu' ? (
                          <SchoolIcon sx={{ fontSize: 14, marginLeft: 1, color: '#f7dc6f' }} />
                        ) : (
                          <WorkIcon sx={{ fontSize: 14, marginLeft: 1, color: '#16a085' }} />
                        )}
                      </Box>
                    }
                  />
                  <CardContent>
                    <Typography color="#5d6d7e" sx={{ fontSize: 10, fontWeight: 'bold' }}>
                      {achievement.year}
                    </Typography>
                    <Typography sx={{ color: '#5d6d7e', fontSize: 10 }}>
                      {achievement.org}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="body2" color="text.secondary">
              No certification data available.
            </Typography>
          )}
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

const SocialMediaCards = ({ userData }) => (
  <Box
    display="flex"
    flexDirection="row"
    flexWrap="wrap" // Allows cards to wrap to the next line on small screens
    justifyContent="center"
    alignItems="center"
    gap={6}
    mt={1}
    sx={{
      '@media (max-width: 600px)': {
        gap: 2, // Reduce gap on small screens
      },
    }}
  >
    {[{
      icon: <LinkedInIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      label: 'LinkedIn',
      href: userData.linkedin,
    }, {
      icon: <GitHubIcon sx={{ fontSize: 40, color: '#566573' }} />,
      label: 'GitHub',
      href: userData.github,
    }, {
      icon: <InstagramIcon sx={{ fontSize: 40, color: '#e74c3c' }} />,
      label: 'Instagram',
      href: userData.instagram,
    }, {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: '#1abc9c' }} />,
      label: 'Location',
      href: userData.locationUrl,
    }].map((card, index) => (
      <Card
        key={index}
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
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            boxShadow: 6,
            transform: 'scale(1.05)',
            cursor: 'pointer',
          },
          '@media (max-width: 600px)': {
            minWidth: 80, // Adjust size for small screens
            minHeight: 80,
            paddingTop: 1,
          },
        }}
        component="a"
        href={card.href}
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
          {card.icon}
          <Typography sx={{ fontSize: 12, color: '#212f3d', mt: 1 }}>
            {card.label}
          </Typography>
        </CardContent>
      </Card>
    ))}
  </Box>
);

export default Home;
