import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const StartCampBlock = () => {
    return (
        <Box
            sx={{
                textAlign: 'center',
                py: 6,
                px: 3,
                bgcolor: 'lightgrey',
                borderRadius: 2,
                boxShadow: 3,
            }}
        >
            <Typography 
                variant="h2"
                component="h2"
                sx={{
                    mb: 3,
                    fontWeight: 'bold',
                    color: '#333',
                }}
            >
                Campaigns
            </Typography>
            <Typography 
                variant="body1"
                component="p"
                sx={{
                    mb: 4,
                    maxWidth: '600px',
                    mx: 'auto',
                    fontSize: '1.2rem',
                    lineHeight: 1.6,
                    color: '#555',
                }}
            >
                Campaigning has never been easier. We offer a simple
                4-step setup procedure, easy authorization, and transaction
                safety. That means you'll have the funds before you can film
                a "Gimme-my-money" TikTok.
            </Typography>
            <Button 
                component={Link}
                to="/new-campaign"
                variant="contained" 
                size="large"
                sx={{
                 
                    color: '#fff',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    ':hover': {
                        bgcolor: '#1565c0',
                    },
                }}
            >
                Start Campaign
            </Button>
        </Box>
    );
}
 
export default StartCampBlock;


// import { Box, Button, Typography } from "@mui/material";

// const StartCampBlock = () => {
//     return (<>
//     <Box sx={{textAlign: 'center'}}>
//         <Typography 
//         variant="h2"
//         component="h2"
//         sx={{padding: '2%'}}>

//         Campaigns
//         </Typography>
//         <Typography 
//         variant="p"
//         component="p"
//         sx={{padding: '2%'}}>

//         Campaigning has never been more easy. We offer a simple
//         4-step setup procedure, easy authorization and transaction
//         safety. That means you'll have the funds before you can film
//         a "Gimme-my-money" tiktok. 
//         </Typography>
//     <Button variant="contained">
//         Start Campaign
//     </Button>
//     </Box>
//     </>  );
// }
 
// export default StartCampBlock;