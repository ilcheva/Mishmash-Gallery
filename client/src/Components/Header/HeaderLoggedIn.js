import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const HeaderLoggedIn = () => {
    return (
        <header>
            <Typography align="left" variant='h3' sx={{ fontWeight: '900', fontSize: '34' }}>
                mishmash
            </Typography>
            <Typography align="right" variant='button'>
                <Button variant="text">UserName</Button>
                <IconButton >                    
                    <ExpandMoreIcon />
                </IconButton>
            </Typography>
        </header>
    )
}
export default HeaderLoggedIn;