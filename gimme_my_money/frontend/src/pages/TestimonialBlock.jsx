import * as React from 'react';
import { Box, Button, Container, Typography } from "@mui/material";
import CardSubBlock from './CardSubBlock';

const TestimonialBlock = () => {
    return (
        <>
            <Box
                sx={{
                    textAlign: 'center',
                    py: 6,
                    borderRadius: 2,
                }}
            >
                <Typography 
                    variant="h2"
                    component="h2"
                    sx={{
                        mb: 2,
                        fontWeight: 'bold',
                        color: '#333',
                    }}
                >
                    Testimonials
                </Typography>
                <Typography 
                    variant="body1"
                    component="p"
                    sx={{
                        maxWidth: '800px',
                        mx: 'auto',
                        color: '#555',
                        lineHeight: 1.6,
                    }}
                >
                    Here's what our clients have to say about our services.
                </Typography>
            </Box>

            <Container
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                    mb: 8,
                }}
            >
                <CardSubBlock header="John Cena" content="Great product. Made me lots of money."/>
                <CardSubBlock header="Randy Orton" content="Raised some funds for the new project. Cool!"/>
                <CardSubBlock header="Jeff Hardy" content="Mo Money, Mo Problems? WRONG! This works great."/>
                <CardSubBlock header="Rey Mysterio" content="I can now pay for 619s for life."/>
            </Container>

         
        </>
    );
}

export default TestimonialBlock;


// import * as React from 'react';
// import { Box, Button, Container, Typography } from "@mui/material";
// import CardSubBlock from './CardSubBlock';

// const TestimonialBlock = () => {
//     return (
//     <>
  
//    <Box sx={{textAlign: 'center'}}>
//         <Typography 
//         variant="h2"
//         component="h2"
//         sx={{padding: '2%'}}>

//         Testimonials
//         </Typography>
//         <Typography 
//         variant="p"
//         component="p"
//         sx={{padding: '2%'}}>

//         Heres what our clients have to say about our services.
//         </Typography>
//     </Box>
  
//    <Container sx={{
//     display: "flex",
//     justifyContent: "space-evenly",
//     marginBottom: '5%'
//    }}>  
   
//   <CardSubBlock header="John Cena" content="Great product. Made my lotsa money."/>
//   <CardSubBlock header="Randy Orton" content="Raised some mula for the new project. Cool!"/>
//   <CardSubBlock header="Jeff Hardy" content="Mo Money, Mo Problems? WRONG! This works great"/>
//   <CardSubBlock header="Rey Mysterio" content="I can now pay for 619s for life."/>


//    </Container>
 
//     </>
//       );
// }
 
// export default TestimonialBlock;