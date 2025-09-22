import { Container } from "@mui/material";
import FeaturedBlock from "./FeaturedBlock";
import FooterBlock from "./FooterBlock";
import NavBlock from "./NavBlock";
import StartCampBlock from "./StartCampBlock";


const Campaigns = () => {
    return (
    <>
    <NavBlock/>
    <FeaturedBlock/>
    <Container sx={{ mt: 5, mb: 8}}>
    <StartCampBlock/>
    </Container>
    <FooterBlock/>

    </>  );
}
 
export default Campaigns;