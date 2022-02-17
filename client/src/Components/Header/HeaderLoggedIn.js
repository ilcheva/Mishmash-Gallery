import Button from '@mui/material/Button';
import { Typography, AppBar, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom'



const HeaderLoggedIn = () => {
    return (
        <AppBar position='fixed' color='inherit' sx={{ boxShadow: 1, px: 10 }}>
            <Toolbar  >

                <Typography textAlign='left' variant='h3' component='div' sx={{ flexGrow: 1, display: { sx: 'none', sm: 'block' }, fontWeight: '900', fontSize: '34' }}>
                    mishmash
                </Typography>


                {/* TO DO Dropdown Menu */}
                <Typography align="right" variant='button'>
                    <Button variant="text">UserName</Button>
                    <IconButton >
                        <ExpandMoreIcon />
                    </IconButton>
                </Typography>

            </Toolbar>
        </AppBar>

    )
}
export default HeaderLoggedIn;