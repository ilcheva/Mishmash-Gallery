// import * as React from 'react';
// import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';



const Header = () => {
    return (
        <header>
            <Typography align="left" variant='h3' >
                mishmash
            </Typography>
            <Typography align="right" variant='button'>
                <Button variant="outlined">Login</Button>
                <Button variant="outlined">Register</Button>
            </Typography>
        </header>
    )
}
export default Header;