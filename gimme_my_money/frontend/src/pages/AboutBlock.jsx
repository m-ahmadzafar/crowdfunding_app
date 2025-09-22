import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AboutBlock = () => {
    return (
        <>
            <Box
                sx={{
                    textAlign: 'center',
                   
                    py: 6,
                    px: 3,
                   
                    maxWidth: '800px',
                    mx: 'auto',
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
                    About Us
                </Typography>

                <Typography
                    variant="body1"
                    component="p"
                    sx={{
                        mb: 4,
                        color: '#555',
                        lineHeight: 1.6,
                        maxWidth: '700px',
                        mx: 'auto',
                    }}
                >
                    Gimme-my-money is a crowdfunding platform helping people get funded for their for-profit and non-profit ventures. A leading startup in Pakistan, we have the financial expertise required to manage your money and reputation.
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    
                    sx={{
                    
                        color: '#white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        ':hover': {
                            bgcolor: '#1565c0',
                        },
                    }}
                >
                    <Link
                    to="/about">
                    Learn More</Link>
                </Button>
            </Box>
        </>
    );
}

export default AboutBlock;
