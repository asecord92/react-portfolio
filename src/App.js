import Nav from './components/Nav/index';
import About from './components/About/index';
import Contact from './components/Contact/index';
import Portfolio from './components/Portfolio/index'
import { useState } from 'react';
import { Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';


function App() {

  const [currentPage, setCurrentPage] = useState('About Me')
  return (
    <>
    <div style={{minHeight: '100%'}}>
    <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    <main style={{paddingBottom:'20px'}}>
      {currentPage ==='About Me' && <About/> }
      {currentPage === 'Contact Me' && <Contact/>}
      {currentPage === 'Portfolio' && <Portfolio/>}
    </main>
    
    <footer style={{position:'fixed', height:'40px',bottom:'0', width:'100%'}}>
        <Typography align='center' gutterBottom>
        <LinkedInIcon style={{paddingRight: '5px'}} fontSize='large' onClick={()=> window.open('https://www.linkedin.com/in/adam-secord-2b56726b/', '_blank')} />
        <GitHubIcon style={{paddingRight: '5px'}}  fontSize='large' onClick={()=> window.open('https://github.com/asecord92', '_blank')} />
        <TwitterIcon  style={{paddingRight: '5px'}} fontSize='large' onClick={()=> window.open('https://twitter.com/SecordOut', '_blank')}/>

      </Typography>
    </footer>
    </div>
    </>
  );
}

export default App;
