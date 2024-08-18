import * as React from 'react';
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';
import NavBlock from './home_blocks/NavBlock';
import FooterBlock from './home_blocks/FooterBlock';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>    
    <NavBlock/>
    <Container maxWidth="md" sx={{ mt: 8 , mb: 8}}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          About Gimme-My-Money
        </Typography>
        <Typography variant="h6" gutterBottom align="center">
          Your Go-To Crowdfunding Platform for Turning Ideas into Reality
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="body1" paragraph>
            At Gimme-My-Money, we believe that everyone has the potential to bring their ideas to life. Whether it's an innovative product, a creative project, or a cause that needs support, our platform is designed to help you gather the resources you need to make it happen.
          </Typography>

          <Typography variant="body1" paragraph>
            Founded on the principles of community, transparency, and empowerment, Gimme-My-Money connects creators with backers who share their vision. Our platform provides all the tools you need to launch a successful campaign, from setting up your project page to engaging with your supporters.
          </Typography>

          <Typography variant="body1" paragraph>
            With a user-friendly interface and powerful analytics, you can track your progress, optimize your campaign, and ensure you reach your funding goals. Our team is dedicated to supporting you every step of the way, with expert advice, resources, and a commitment to your success.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is simple: to democratize access to funding and provide a platform where great ideas can thrive. We aim to break down the barriers that prevent creators from realizing their dreams and empower people worldwide to bring their ideas to life.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
            Why Choose Gimme-My-Money?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  User-Friendly Platform
                </Typography>
                <Typography variant="body2">
                  Our platform is designed for ease of use, making it simple to launch and manage your crowdfunding campaign.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Comprehensive Support
                </Typography>
                <Typography variant="body2">
                  From campaign setup to post-launch strategies, we're here to guide you every step of the way.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Powerful Analytics
                </Typography>
                <Typography variant="body2">
                  Gain insights into your campaign's performance with our advanced analytics tools, helping you reach your funding goals faster.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button variant="contained" color="primary" size="large">
            
            <Link to="/new-campaign">Start Your Campaign</Link>
          </Button>
        </Box>
      </Paper>
    </Container>
    <FooterBlock/>
    </>
);
}
