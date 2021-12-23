import React from 'react'; 
import {Box, Container, Typography, IconButton} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return(
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
            <IconButton >
            <LinkedInIcon hover style={{color:"#BCB8B1", paddingRight: '5px'}} fontSize='large' onClick={()=> window.open('https://www.linkedin.com/in/adam-secord-2b56726b/', '_blank')} />
            </IconButton>
            <IconButton>
            <GitHubIcon style={{color:"#BCB8B1", paddingRight: '5px'}}  fontSize='large' onClick={()=> window.open('https://github.com/asecord92', '_blank')} />
            </IconButton>
            <IconButton>
            <TwitterIcon  style={{color:"#BCB8B1", paddingRight: '5px'}} fontSize='large' onClick={()=> window.open('https://twitter.com/SecordOut', '_blank')}/>
            </IconButton>
            </Typography>
          </Typography>
        </Container>
      </Box>
    )
}

export default Footer;