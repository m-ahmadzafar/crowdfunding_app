import React from 'react';
import { Container, TextField, Button, Typography, Grid, Box } from '@mui/material';
import NavBlock from './home_blocks/NavBlock';
import FooterBlock from './home_blocks/FooterBlock';

const NewCampaignPage = () => {
  return (
    <>
    <NavBlock/>
    
    <Container maxWidth="md" sx={{ mt: 5, mb: 8, bgcolor: '#E8F5E9', padding: '20px', borderRadius: '8px' }}>
      {/* Page Title */}
      <Typography variant="h3" component="h1" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#1B5E20', mb: 4 }}>
        Start a New Campaign
      </Typography>

      {/* Form */}
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          {/* Campaign Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Campaign Name"
              placeholder="Enter your campaign's name"
              required
              sx={{ bgcolor: '#fff' }}
            />
          </Grid>

          {/* Campaign Description */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Campaign Description"
              placeholder="Describe your campaign"
              multiline
              rows={4}
              required
              sx={{ bgcolor: '#fff' }}
            />
          </Grid>

          {/* Campaign Goal */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Funding Goal"
              placeholder="Enter the amount you wish to raise"
              type="number"
              required
              sx={{ bgcolor: '#fff' }}
            />
          </Grid>

          {/* Campaign Duration */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Campaign Duration (days)"
              placeholder="Enter the duration of your campaign"
              type="number"
              required
              sx={{ bgcolor: '#fff' }}
            />
          </Grid>

          {/* Campaign Category */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Campaign Category"
              placeholder="Select your campaign category"
              select
              required
              SelectProps={{ native: true }}
              sx={{ bgcolor: '#fff' }}
            >
              <option value=""></option>
              <option value="charity">Charity</option>
              <option value="startup">Startup</option>
              <option value="community">Community</option>
              <option value="education">Education</option>
              <option value="arts">Arts</option>
              <option value="other">Other</option>
            </TextField>
          </Grid>

          {/* Campaign Image */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Campaign Image URL"
              placeholder="Enter the URL for your campaign's image"
              sx={{ bgcolor: '#fff' }}
            />
          </Grid>

          {/* Campaign Video */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Campaign Video URL"
              placeholder="Enter the URL for your campaign's video (optional)"
              sx={{ bgcolor: '#fff' }}
            />
          </Grid>

          {/* Campaign Rewards */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Campaign Rewards"
              placeholder="List the rewards for different contribution levels"
              multiline
              rows={3}
              sx={{ bgcolor: '#fff' }}
            />
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Your Name"
              placeholder="Enter your name"
              required
              sx={{ bgcolor: '#fff' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email Address"
              placeholder="Enter your email address"
              type="email"
              required
              sx={{ bgcolor: '#fff' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Phone Number"
              placeholder="Enter your phone number"
              type="tel"
              required
              sx={{ bgcolor: '#fff' }}
            />
          </Grid>

          {/* Submission Button */}
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Button variant="contained" color="primary" size="large">
                Submit Campaign
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
    <FooterBlock/>
    </>
  );
};

export default NewCampaignPage;
