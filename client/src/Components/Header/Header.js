// import * as React from 'react';
// import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { Typography, Box, AppBar, Toolbar } from '@mui/material';




const Header = () => {
    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='fixed' color='inherit' sx={{ boxShadow: 0 }}>
                    <Toolbar sx={{ m: 1 }}>

                        <Typography textAlign='left' variant='h3' component='div' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontWeight: '900', fontSize: '34' }}>
                            mishmash
                        </Typography>

                        <Button variant="outlined" sx={{ mr: 1 }}>Login</Button>

                        <Button variant="outlined"sx={{ mr: 1 }}>Register</Button>
                    </Toolbar>
                </AppBar>

            </Box>
        </header>
    )
}
export default Header;