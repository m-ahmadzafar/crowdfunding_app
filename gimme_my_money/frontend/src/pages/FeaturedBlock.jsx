import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import CampCard from "./CampCard";
import DataTable from "./DataTable";

const FeaturedBlock = () => {
    return (
        <>
            {/* Campaigns Header and Search Box */}
            <Box
                sx={{
                    bgcolor: "lightgrey",
                    minHeight: "20vh",
                    mb: 4,
                    mt: 5,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 4,
                    py: 2,
                    borderRadius: 2,
                }}
            >
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                        fontWeight: 'bold',
                        color: '#333',
                    }}
                >
                    Campaigns
                </Typography>
                <TextField
                    variant="outlined"
                    placeholder="Search campaigns..."
                    size="medium"
                    sx={{
                        bgcolor: 'white',
                        borderRadius: 1,
                        width: '300px',
                    }}
                />
            </Box>

            {/* Featured Campaigns Section */}
            <Typography
                variant="h4"
                sx={{
                    mb: 4,
                    textAlign: "center",
                    fontWeight: 'bold',
                    color: '#333',
                }}
            >
                Featured Campaigns
            </Typography>

            <Container sx={{
                mb: 6,
                display: "flex",
                justifyContent: "space-evenly",
            }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <CampCard
                                header={`Campaign ${index + 1}`}
                                content="This campaign helps feed children in xyz country."
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Top 10 Campaigns Section */}
            <Typography
                variant="h4"
                sx={{
                    mb: 4,
                    textAlign: "center",
                    fontWeight: 'bold',
                    color: '#333',
                }}
            >
                Top 10 Campaigns
            </Typography>

            <Container>
                <DataTable />
            </Container>
        </>
    );
}

export default FeaturedBlock;


// import { Box, Container, Grid, TextField, Typography } from "@mui/material";
// import CampCard from "./CampCard";
// import DataTable from "./DataTable";

// const FeaturedBlock = () => {
//     return (
//     <>
    
//     <Box sx={{
//         bgcolor: "lightgrey",
//         minHeight: "20vh",
//         mb: "2%",
//         mt: "5%",
//         display: "flex",
//         justifyContent: "space-evenly",
//         alignItems: "center",
//         width: "100%"
//     }}>

//         <Typography
//         variant="h3"
//         component="h2">
//             Campaigns
//         </Typography>
//         <TextField
//             variant="outlined"
//             placeholder="Search..."
//             size="medium"
//             sx={{ bgcolor: 'white', borderRadius: 1 }}
//           />

//     </Box>
//     <Typography variant="h4" sx={{
//         mb: "2%",
//         textAlign: "center"
//     }}>
//         Featured Campaigns
//     </Typography>

//     <Container sx={{
//        mb: "5%",
//        display: "flex",
//        justifyContent: "space-evenly",
//        overflow: ""
//     }}>

   
//     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//         <Grid item xs={6} sm={6}  md={4} lg={3}>
//         <CampCard header="Campaign" content="This campaigns helps feed children in xyz country."/>
//         </Grid>
//         <Grid item xs={6} sm={6}  md={4} lg={3}>
//         <CampCard header="Campaign" content="This campaigns helps feed children in xyz country."/>
//         </Grid>
//         <Grid item xs={6} sm={6}  md={4} lg={3}>
//         <CampCard header="Campaign" content="This campaigns helps feed children in xyz country."/>
//         </Grid>
//         <Grid item xs={6} sm={6}  md={4} lg={3}>
//         <CampCard header="Campaign" content="This campaigns helps feed children in xyz country."/>
//         </Grid>
//     </Grid>

//     </Container>
//     <Typography variant="h4" sx={{
//         mb: "2%",
//         textAlign: "center"
//     }}>
//         Top 10 Campaigns
//     </Typography>
//     <Container>
//     <DataTable/>
//     </Container>
//     </>
//       );
// }
 
// export default FeaturedBlock;