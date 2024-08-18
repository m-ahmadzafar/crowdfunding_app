import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import {Routes,Route, } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import Home from './pages/Home';
import Campaigns from './pages/Campaigns';
import About from './pages/About';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';
import NewCampaignPage from './pages/NewCampaignPage';
import MedicalCampaign from './pages/MedicalCampaign';
import CampaignPageAPI from './pages/CampaignPageAPI';

// const theme = createTheme({
//   typography: {
//     allVariants: {
//       fontFamily: 'Poppins',

//     },
//   },
// });

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Poppins',
    },
  },
  palette: {
    secondary: {
      main: '#4CAF50', // Money green
      contrastText: '#fff', // White text for contrast
    },
    primary: {
      main: '#388E3C', // Darker green for secondary elements
      contrastText: '#fff',
    },
    background: {
      default: '#E8F5E9', // Light green background
    },
    text: {
      primary: '#1B5E20', // Dark green text
      secondary: '#4CAF50',
    },
  },
});



function App() {


  return (
    <>
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home/>}/>
   
      {/* <Route path="/" element={<About/>}/> */}
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/campaigns" element={<Campaigns/>}/>
      <Route path="/campaigns/:id" element={<CampaignPageAPI/> } />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/how-it-works" element={<HowItWorks/>}/>
      <Route path="/new-campaign" element={<NewCampaignPage/>}/>
      <Route path="/med-campaign" element={<MedicalCampaign/>}/>

    </Routes>
    </ThemeProvider>
    </>
  )
}

export default App
