import React, { useEffect } from 'react';
import { AppBar, Toolbar, Link, CssBaseline, Typography} from '@mui/material';


function Nav(props) {
    const {currentPage, setCurrentPage} = props;
    useEffect(()=> {
        document.title = `${currentPage}`
    }, [currentPage])
    return (
        <header>
            <CssBaseline/>
                <AppBar position= 'static' elevation={0} style={{cursor:'pointer'}}>
                    <Toolbar sx= {{flexWrap: 'wrap', justifyContent:'space-between'}}>
                    <Typography variant='h2'onClick={()=> setCurrentPage('About Me')}>Adam Secord</Typography>
                    <nav style={{display:'block', flexWrap:'nowrap'}}>
                        <Link
                            variant= 'button'
                            underline='none'
                            color='text.primary'
                            onClick={()=> setCurrentPage('About Me')}
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            About Me
                        </Link>
                        
                        <Link
                            variant= 'button'
                            underline='none'
                            color='text.primary'
                            onClick={()=> setCurrentPage('Contact Me')}
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Contact
                        </Link>
                        <Link
                            variant= 'button'
                            underline='none'
                            color='text.primary'
                            onClick={()=> setCurrentPage('Portfolio')}
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Portfolio
                        </Link>
                        <Link
                            variant= 'button'
                            underline='none'
                            color='text.primary'
                            onClick={()=> window.open('https://asecord92.github.io/react-portfolio/resume.pdf','_blank')}
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Resume
                        </Link>
                    </nav>
                 </Toolbar>
            </AppBar>
           
        </header>
    )
}

export default Nav;