import { AppBar, Box, Button, TextField, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavBlock = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'grey', boxShadow: 'none', py: 1 }}>
      <Toolbar>
        {/* Site Name */}
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'white', fontWeight: 'bold' }}>
          GIMME-MY-MONEY
        </Typography>

        {/* Navbar Buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/campaigns">Campaigns</Button>
          <Button color="inherit" component={Link} to="/how-it-works">How It Works</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Box>

        {/* Search Bar */}
        {/* <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          sx={{ bgcolor: 'white', borderRadius: 1, ml: 2 }}
        /> */}
        <Button
        variant="contained"
        
        component={Link}
        to="/new-campaign"
        sx={{
          padding:"1%",
          pl: "2%",
          pr: "2%",
          ml: "2%",
          mr: "2%" ,
          fontSize: " large"
        }}
        >Start A Campaign!</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBlock;


// import { AppBar, Box, Button, TextField, Toolbar } from "@mui/material";
// import { Link } from "react-router-dom";

// const  NavBlock = () => {
//     return (<>
        
//       <AppBar position="static">
//         <Toolbar>
//           {/* Navbar Buttons */}
//           <Box sx={{ flexGrow: 1 }}>
            
//             <Button color="inherit"><Link to={'/'}>Home</Link></Button>
//             <Button color="inherit"><Link to={'/campaigns'}>Campaigns</Link></Button>
//             <Button color="inherit"><Link to={'/how-it-works'}>How It Works</Link></Button>
//             <Button color="inherit"><Link to={'/about'}>About</Link></Button>
//             <Button color="inherit"><Link to={'/contact'}>Contact</Link></Button>

          
//           </Box>
//           {/* Search Bar */}
//           <TextField
//             variant="outlined"
//             placeholder="Search..."
//             size="small"
//             sx={{ bgcolor: 'white', borderRadius: 1 }}
//           />
//         </Toolbar>
//       </AppBar>
//     </>  );
// }
 
// export default NavBlock ;