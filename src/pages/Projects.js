import React from 'react';
import { projectsData } from '../data';
import { Card, CardHeader, CardContent, IconButton, Typography, Button, Grid } from '@mui/material';
import { CalendarToday, Tag, GitHub, Download } from '@mui/icons-material';

function Projects() {
  return (
    <div style={{ p: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fdfefe',height : '100%'}}>
      <Typography variant="h4" gutterBottom sx={{mt:10}}>
        My Projects
      </Typography>
      <Typography variant="body1" color="textSecondary">
      My professional journey and the Projects I've had the privilege to Developed.
      </Typography>
      <Grid container spacing={3} sx={{p:10}}>
        {projectsData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}  display="flex"
          justifyContent="center"
          alignItems="center"
          gap={6} // Adjust gap for spacing between buttons
          mt={1}>
            <Card style={{ height: '100%' }}>
              <CardHeader
                title={project.name}
                action={
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <IconButton href={project.githubLink} color="#2c3e50">
                      <GitHub />
                    </IconButton>
                    <Button variant="outlined" href={project.pdf} size="small" startIcon={<Download />}>
                      Download PDF
                    </Button>
                  </div>
                }
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {project.details}
                </Typography>
                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CalendarToday style={{ color: 'grey' }} />
                  <Typography variant="body2" color="textSecondary">
                    {project.startDate} - {project.endDate}
                  </Typography>
                </div>
                <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Tag style={{ color: 'grey' }} />
                  <Typography variant="body2" color="textSecondary">
                    {project.techStack.join(', ')}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Projects;
