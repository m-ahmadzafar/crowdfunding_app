import * as React from 'react';
import { Box, Card, CardContent, Typography } from "@mui/material";

const CampCard = (props) => {
    const myCampCard = (
        <React.Fragment>
            <Card sx={{
                color: "black",
                bgcolor: "white",
                minHeight: "45vh",
                width: "100%",
                maxWidth: "350px",
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s ease-in-out",
                '&:hover': {
                    transform: "scale(1.05)",
                },
            }}>
                <CardContent sx={{ padding: 2 }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 2,
                    }}>
                        <img 
                            src='https://placehold.co/250x150/EEE/31343C' 
                            alt='Campaign' 
                            style={{
                                width: "100%", 
                                height: "auto", 
                                borderRadius: "8px",
                                objectFit: "cover",
                            }} 
                        />
                    </Box>
                    <Typography variant='h5' sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                        {props.header}
                    </Typography>
                    <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                        {props.content}
                    </Typography>
                </CardContent>
            </Card>
        </React.Fragment>
    );

    return (
        <>
            {myCampCard}
        </>
    );
}

export default CampCard;


// import * as React from 'react';
// import { Box, Card, CardContent, Typography } from "@mui/material";


// const CampCard = (props) => {
//     const myCampCard = (
//         <React.Fragment>
//          <Card sx={{
//             color: "black",
//             bgcolor: "lightgrey",
//             minHeight: "45vh",
//             width: "45vh",
//             overflow: "clip"
//             }}>
//         <CardContent>
       
//         <Box sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginBottom: '5%'
           
//         }}>
//         <img src='https://placehold.co/250x150/EEE/31343C' alt='hi'style={{borderRadius: "2%"} }/>
//         </Box>
//         <Typography variant='h4'>
//         {props.header}
//         </Typography>
        
//         <Typography variant='p'>
//         {props.content}
//         </Typography>
//     </CardContent>


//     </Card>
//         </React.Fragment>
//     );
//     return ( <>
//     {myCampCard}
//     </> );
// }
 
// export default CampCard;