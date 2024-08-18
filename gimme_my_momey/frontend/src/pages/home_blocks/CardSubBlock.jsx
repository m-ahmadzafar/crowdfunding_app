import * as React from 'react';
import { Box, Card, CardContent, Typography } from "@mui/material";

const CardSubBlock = (props) => {
    return (
        <Card
            sx={{
                bgcolor: "white",
                boxShadow: 3,
                borderRadius: 2,
                maxWidth: 250,
                minHeight: "30vh",
                overflow: "hidden",
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                },
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: 3,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 2,
                    }}
                >
                    <img
                        src='https://placehold.co/80x50/EEE/31343C'
                        alt='campaign'
                        style={{
                            borderRadius: '8px',
                            width: '100%',
                            maxWidth: '120px',
                        }}
                    />
                </Box>
                <Typography
                    variant='h5'
                    component='h2'
                    sx={{
                        fontWeight: 'bold',
                        mb: 1,
                        color: '#333',
                    }}
                >
                    {props.header}
                </Typography>
                <Typography
                    variant='body2'
                    component='p'
                    sx={{
                        color: '#555',
                        lineHeight: 1.6,
                        mb: 2,
                    }}
                >
                    {props.content}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CardSubBlock;



// import * as React from 'react';
// import { Box, Card, CardContent, Typography } from "@mui/material";


// const CardSubBlock = (props) => {
//     const myCard = (
//         <React.Fragment>
//          <Card sx={{
//             color: "black",
//             bgcolor: "lightgray",
//             minHeight: "30vh",
//             width: "35vh",
//             overflow: "clip"
//             }}>
//         <CardContent>
       
//         <Box sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginBottom: '5%'
           
//         }}>
//         <img src='https://placehold.co/80x50/EEE/31343C' alt='hi'/>
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
//     {myCard}
//     </> );
// }
 
// export default CardSubBlock;