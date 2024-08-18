import React from 'react';
import { Box, Typography, Button, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import NavBlock from './home_blocks/NavBlock';
import FooterBlock from './home_blocks/FooterBlock';
const CampaignDetails = ({ campaign }) => {

  // props use title, amountRaised, goal, contributors, description, paymentMethods
  // other db fields: img_URL, vid_URL, rewards, type 
  return (
    <>
    <NavBlock/>
    <Box sx={{ m: 20, mt: 8, mb: 8, padding: 4, bgcolor: '#f7f7f7', borderRadius: 2, borderStyle: "solid" }}>
      {/* Campaign Header */}
      <Typography variant="h3" component="h1" sx={{ color: '#005500', fontWeight: 'bold', marginBottom: 3 }}>
        {campaign.title}
      </Typography>

      {/* Campaign Stats */}
      <Grid container spacing={4} sx={{ marginBottom: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, backgroundColor: '#e0f7e9' }}>
            <Typography variant="h6" component="div" sx={{ color: '#004400', fontWeight: 'bold' }}>
              Amount Raised
            </Typography>
            <Typography variant="h4" component="div" sx={{ color: '#005500' }}>
              ${campaign.amountRaised} / ${campaign.goal}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, backgroundColor: '#e0f7e9' }}>
            <Typography variant="h6" component="div" sx={{ color: '#004400', fontWeight: 'bold' }}>
              Contributors
            </Typography>
            <Typography variant="h4" component="div" sx={{ color: '#005500' }}>
              {campaign.contributors}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Campaign description */}
      <Typography variant="h4" component="div" sx={{ color: '#004400', fontWeight: 'bold', marginBottom: 2 }}>
        Campaign Description
      </Typography>
      <Typography variant="body1" component="div" sx={{ marginBottom: 4 }}>
        {campaign.description}
      </Typography>

      {/* Ways to Contribute */}
      <Typography variant="h4" component="div" sx={{ color: '#004400', fontWeight: 'bold', marginBottom: 2 }}>
        Ways to Contribute
      </Typography>
      <List sx={{ marginBottom: 4 }}>
        {campaign.paymentMethods.map((option, index) => (
          <ListItem key={index}>
            <ListItemText primary={option} />
          </ListItem>
        ))}
      </List>

      {/* Contribute Button */}
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        margin:  "1%"
      }}>
      <Button variant="contained" color="primary" sx={{ bgcolor: '#005500', color: 'white', paddingX: 4, paddingY: 1.5 }}>
        Contribute Now
      </Button>
      <Button 
      variant="contained" color="primary" sx={{ bgcolor: '#005500', color: 'white', paddingX: 4, paddingY: 1.5 }}>
    <Link  to="/campaigns" >Back</Link>     
      </Button>
      
      </Box>
    </Box>
    <FooterBlock/>
    </>
  );
};

export default CampaignDetails;
