import * as React from 'react';
import { Container, Typography, Grid, TextField, Button, Paper, Box } from '@mui/material';
import FooterBlock from './home_blocks/FooterBlock';
import NavBlock from './home_blocks/NavBlock';

export default function Contact() {
  return (
    <>
    <NavBlock/>
    <Container maxWidth="sm" sx={{ mt: 8 , mb: 8}}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          Have a question or need help? We're here to assist you!
        </Typography>

        <Box sx={{ mt: 4 }}>
          <form noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                  type="email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Button variant="contained" color="primary" size="large">
                Submit
              </Button>
            </Box>
          </form>
        </Box>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h6" align="center">
            Or reach out to us directly:
          </Typography>
          <Typography variant="body2" align="center">
            Email: support@gimme-my-money.com
          </Typography>
          <Typography variant="body2" align="center">
            Phone: +1 (800) 123-4567
          </Typography>
          <Typography variant="body2" align="center">
            Address: 123 Crowdfunding Lane, Innovation City, 54321
          </Typography>
        </Box>
      </Paper>
    </Container>
    <FooterBlock/>
    </>
  );
}
