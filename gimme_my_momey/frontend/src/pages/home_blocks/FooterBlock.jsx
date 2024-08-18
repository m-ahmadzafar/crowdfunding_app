import { Box, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const FooterBlock = () => {
  return (
    <Box
      sx={{
        bgcolor: 'grey',
        py: 4,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
      }}
    >
      {/* Site Name */}
      <Typography variant="h4" component="div" sx={{ mb: 3, fontWeight: 'bold', color: 'white' }}>
        GIMME-MY-MONEY
      </Typography>

      {/* Social Media Icons */}
      <Box sx={{ mb: 3 }}>
        <IconButton color="inherit" href="https://facebook.com" target="_blank">
          <Facebook sx={{ color: '#3b5998' }} />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com" target="_blank">
          <Twitter sx={{ color: '#1da1f2' }} />
        </IconButton>
        <IconButton color="inherit" href="https://instagram.com" target="_blank">
          <Instagram sx={{ color: '#e4405f' }} />
        </IconButton>
        <IconButton color="inherit" href="https://linkedin.com" target="_blank">
          <LinkedIn sx={{ color: '#0077b5' }} />
        </IconButton>
      </Box>

      {/* Page Links */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3, color: "white" }}>
        <Link href="/" color="inherit" underline="hover">
          Home
        </Link>
        <Link href="/campaigns" color="inherit" underline="hover">
          Campaigns
        </Link>
        <Link href="/how-it-works" color="inherit" underline="hover">
          How It Works
        </Link>
        <Link href="/about" color="inherit" underline="hover">
          About
        </Link>
        <Link href="/contact" color="inherit" underline="hover">
          Contact
        </Link>
      </Box>

      <Typography variant="body2" sx={{ color: '#555' }}>
        &copy; {new Date().getFullYear()} Gimme-My-Money. All rights reserved.
      </Typography>
    </Box>
  );
};

export default FooterBlock;
