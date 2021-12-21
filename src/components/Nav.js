import React from 'react';
import { AppBar, Button, Toolbar, Link, CssBaseline} from '@mui/material';


function Nav() {
    return (
        <header>
            <CssBaseline/>
            <Toolbar sx= {{flexWrap: 'wrap', display: 'flex',}}>
                <AppBar style={{height:'10%'}}>
                    <nav>
                        <Link
                            variant= 'button'
                            underline='none'
                            color='text.primary'
                            href='/'
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Adam Secord
                        </Link>
                        
                        <Link
                            variant= 'button'
                            underline='none'
                            color='text.primary'
                            href='#'
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            About Me
                        </Link>
                        <Link
                            variant= 'button'
                            underline='none'
                            color='text.primary'
                            href='#'
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Contact
                        </Link>
                        <Link
                            variant= 'button'
                            underline='none'
                            color='text.primary'
                            href='#'
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Portfolio
                        </Link>
                        <Link
                            variant= 'button'
                            underline='none'
                            color='text.primary'
                            href='#'
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Resume
                        </Link>
                    </nav>
                </AppBar>
            </Toolbar>
        </header>
    )
}

export default Nav;