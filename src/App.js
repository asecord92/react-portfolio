import Nav from './components/Nav/index';
import About from './components/About/index';
import Contact from './components/Contact/index';
import Portfolio from './components/Portfolio/index'
import { useState } from 'react';
import { Typography, Container, Box,} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import './App.css'


function App() {

  const [currentPage, setCurrentPage] = useState('About Me')
  return (
    <>
    <Box
      style={{backgroundColor:"#BCB8B1"}}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        
      }}
    >
      
      <Container component="main"  maxWidth="xl">
        <Typography variant="h2" component="h1" gutterBottom>
          <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            {currentPage ==='About Me' && <About/> }
            {currentPage === 'Contact Me' && <Contact/>}
            {currentPage === 'Portfolio' && <Portfolio/>}
        </Typography>
      </Container>
          <Box
              component="footer"
              sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor:'#463F3A'
              }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
          <Typography align='center' gutterBottom>
            <LinkedInIcon style={{color:"#BCB8B1", paddingRight: '5px'}} fontSize='large' onClick={()=> window.open('https://www.linkedin.com/in/adam-secord-2b56726b/', '_blank')} />
            <GitHubIcon style={{color:"#BCB8B1", paddingRight: '5px'}}  fontSize='large' onClick={()=> window.open('https://github.com/asecord92', '_blank')} />
            <TwitterIcon  style={{color:"#BCB8B1", paddingRight: '5px'}} fontSize='large' onClick={()=> window.open('https://twitter.com/SecordOut', '_blank')}/>

            </Typography>
          </Typography>
        </Container>
      </Box>
      </Box>
    
    </>
  );
}

export default App;
