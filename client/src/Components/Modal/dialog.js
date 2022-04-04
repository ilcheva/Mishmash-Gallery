import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';


import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            // hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}




const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    {/* <CloseIcon /> */}
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
    const [value, setValue] = React.useState('1');
    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} sx={{ m: 1 }} index={0} >
                Login
            </Button>
            <Button variant="outlined" onClick={handleClickOpen} sx={{ m: 1 }}>
                Register
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} >
                    <Tabs value={value} onChange={handleChange} aria-label="login register tabs" centered variant='fullWidth'>
                        <Tab label="Login" {...a11yProps(0)} />

                        <Tab label="Register" {...a11yProps(1)} />
                    </Tabs>
                </BootstrapDialogTitle>
                <TabPanel value={value} index={0}>

                    <TextField id="email" variant="outlined" placeholder="Email" fullWidth sx={{ my: 1, px: 1 }} />

                    <TextField id="password" variant="outlined" placeholder="Password" fullWidth sx={{ my: 1, px: 1 }} />


                    <DialogActions sx={{ justifyContent: 'space-between', m: 0, p: 0 }}>
                        <Button variant="contained" size='medium' autoFocus onClick={handleClose}>
                            Log in
                        </Button>
                        <Button>
                            Forgot password?
                        </Button>
                    </DialogActions>

                </TabPanel>
                <TabPanel value={value} index={1}>

                    <TextField id="outlined-basic" variant="outlined" placeholder="Email" fullWidth sx={{ my: 1 }} />

                    <TextField id="outlined-basic" variant="outlined" placeholder="Password" fullWidth sx={{ my: 1 }} />
                    <TextField id="outlined-basic" variant="outlined" placeholder="Repeat password" fullWidth sx={{ my: 1 }} />


                    <DialogActions sx={{ justifyContent: 'space-between', p: 0 }} >
                        <Button variant="contained" size='medium' autoFocus onClick={handleClose}>
                            Register
                        </Button>

                    </DialogActions>

                </TabPanel>

            </BootstrapDialog>
        </div>
    );
}
