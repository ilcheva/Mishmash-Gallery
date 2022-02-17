// import * as React from 'react';
// import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { Typography, AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomizedDialogs from '../Modal/dialog'


const Header = () => {
    return (


        <AppBar position='fixed' color='inherit' sx={{ boxShadow: 1, px: 10 }}>
            <Toolbar  >

                <Typography textAlign='left' variant='h3' component='div' sx={{ flexGrow: 1, display: { sx: 'none', sm: 'block' }, fontWeight: '900', fontSize: '34' }}>
                    mishmash
                </Typography>
                {/* <Button variant="outlined" > */}

                <Link to='/login' component={CustomizedDialogs} >
                   Login
                </Link>
                {/* </Button> */}
                {/* <Link to='/register' >
                Register
                    {/* <Button variant="outlined" >Register</Button> */}
                {/* </Link> */} 
            </Toolbar>
        </AppBar>

    )
}
export default Header;