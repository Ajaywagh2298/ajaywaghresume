import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Divider } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CalendarToday as CalendarTodayIcon, AccessTime as AccessTimeIcon } from '@mui/icons-material';
import { differenceInYears, differenceInMonths, differenceInDays, addMonths } from 'date-fns';
import CodeIcon from '@mui/icons-material/Code';
import { userData, experienceData } from '../data';

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

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate && endDate !== 'Present' ? new Date(endDate) : new Date();
  
    // Calculate the difference in years and months
    const years = differenceInYears(end, start);
    const months = differenceInMonths(end, start) % 12;
    
    // Calculate the difference in days considering the complete months
    const endDateAdjusted = addMonths(start, years * 12 + months);
    const days = differenceInDays(end, endDateAdjusted);
  
    return `${years} years, ${months} months, ${days} days`;
  };

  
const ExperienceList = () => {
    return (
      <ThemeProvider theme={theme}>
        <Box
      sx={{ py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' , background :'#fdfefe'}}
    >
      <Box
        sx={{ mb: 4, textAlign: 'center'}}
      >
        <Typography variant="h4" gutterBottom>
          Experience
        </Typography>
        <Typography variant="body1" color="textSecondary">
          My professional journey and the companies I've had the privilege to work with.
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          {experienceData.length > 0 ? (
            experienceData.map((data) => (
              <Card key={data.companyName} sx={{ p: 1, boxShadow: 3, mb: 5 }}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Box>
                      <Box display="flex" alignItems="center" mb={1}>
                        <img
                          src={data.companyLogo}
                          alt={data.companyName}
                          style={{ width: 28, height: 28, marginRight: 8 }}
                        />
                        <Typography variant="h6">{data.designation}</Typography>
                      </Box>
                      <Typography variant="body2" color="textSecondary">
                        {data.companyName}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1} color="textSecondary">
                      <CalendarTodayIcon fontSize="small" />
                      <Typography variant="body2" sx={{color : '#2c3e50' }}>{data.startDate} : {data.endDate || 'Present'}</Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ my: 1 }} />
                  <Box>
                    <Box display="flex" alignItems="center" gap={1} mb={2} color="textSecondary">
                      <AccessTimeIcon fontSize="small" />
                      <Typography variant="iconText">
                        {`${calculateDuration(data.startDate, data.endDate)}`}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1} mb={2} color="textSecondary">
                      <CodeIcon/>
                      <Typography variant="iconText">
                       {data.skill}
                      </Typography>
                    </Box>
                    <Typography variant="iconText" color="textSecondary">
                      {data.details}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="body2" color="textSecondary">
              No experience data available.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
      </ThemeProvider>
    );
  };

  export default ExperienceList;