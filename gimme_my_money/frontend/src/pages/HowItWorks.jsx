import * as React from 'react';
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';
import NavBlock from './home_blocks/NavBlock';
import FooterBlock from './home_blocks/FooterBlock';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <>
    <NavBlock/>
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          How It Works
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          Campaigning has never been easier. We offer a simple 4-step setup procedure, easy authorization, and transaction safety. That means you'll have the funds before you can film a "Gimme-my-money" TikTok.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Step 1
                </Typography>
                <Typography variant="body2">
                  <strong>Create Your Campaign</strong><br />
                  Sign up, fill in the details, and launch your campaign in minutes.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Step 2
                </Typography>
                <Typography variant="body2">
                  <strong>Share Your Story</strong><br />
                  Use our tools to share your campaign with friends, family, and the world.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Step 3
                </Typography>
                <Typography variant="body2">
                  <strong>Receive Support</strong><br />
                  Watch the contributions roll in as your backers support your cause.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Step 4
                </Typography>
                <Typography variant="body2">
                  <strong>Get Your Funds</strong><br />
                  Easy authorization and secure transactions mean you get your funds fast.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 4 }} align="center">
          <Typography variant="body1" >
            And that's it! You're ready to bring your ideas to life with "Gimme-My-Money."
             Start your campaign today and join a community that's changing the world, one project at a time.
          </Typography>
          <Button variant="contained" sx={{mt: "2%"}}>
    <Link to="/new-campaign">   Start A Campaign Today!</Link>
    </Button>
        </Box>
       
      </Paper>
  
    </Container>
    
    <FooterBlock/>
    </>
  );
}
