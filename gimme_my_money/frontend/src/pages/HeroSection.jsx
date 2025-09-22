import { Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import bgImage from '/src/assets/bg_gmm2.jpeg'; // Correctly import the image

function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        overflow: 'hidden', // Ensure no overflow of content
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1, // Position the image behind other content
          opacity: 0.7, // Adjust opacity of the background image
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
          zIndex: 0, // Ensure overlay is above the image
        }}
      />

      {/* Content */}
      <Box
        sx={{
          zIndex: 1, // Ensure content is on top
          padding: '0 2rem',
        }}
      >
        <Typography variant="h2" component="h1" sx={{ fontWeight: "bold" }}>
          Gimme-My-Money: #1 Crowdfunding Platform
        </Typography>
        <Typography variant="h3" component="h3" sx={{ mt: 2 }}>
          Join us in making a difference!
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 4 }}>
          <Link to="/campaigns" style={{ color: 'inherit', textDecoration: 'none' }}>Go to Campaigns</Link>
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;


// import { AppBar, Toolbar, Button, TextField, Box, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
// import bgImage from '/src/assets/bg_gmm.jpg'; 

// function HeroSection() {
//   return (
//     <div>
//       {/* Navbar */}
    

//       {/* Hero Section */}
//       <Box
//         sx={{
//           backgroundImage: `url(${bgImage})`,
//           height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           textAlign: 'center',
//           bgcolor: '#f0f0f0', // optional background color
//         }}
//       >
//         <Typography variant="h2" component="h1" sx={{fontWeight: "bold"}}>
//           Gimme-My-Money: #1 Crowdfunding Platform
//         </Typography>
//         <Typography variant="h3" component="h3" sx={{ mt: 2,  }}>
//           Join us in making a difference!
//         </Typography>
//         <Button variant="contained" color="primary" sx={{ mt: 4 }}>
//           Go to Campaigns
//         </Button>
//       </Box>
//     </div>
//   );
// }

// export default HeroSection;
