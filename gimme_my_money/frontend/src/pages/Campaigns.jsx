import { Container } from "@mui/material";
import FeaturedBlock from "./camp_blocks/FeaturedBlock";
import FooterBlock from "./home_blocks/FooterBlock";
import NavBlock from "./home_blocks/NavBlock";
import StartCampBlock from "./home_blocks/StartCampBlock";


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