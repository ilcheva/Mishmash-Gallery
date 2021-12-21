import { Paper } from "@mui/material"
import { Modal } from "@mui/material"
import { Grid } from "@mui/material"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
// TO DO different components for login and register 
const ModalForm = () => {
    return (
        <Grid container spacing={0.5} justifyContent="center" direction="row" alignItems="center" >
            <Paper variant='elevation'>
                <Box
                    component="form"
                    sx={{ display: 'flex', flexWrap: 'wrap', p: 2 }}
                    noValidate
                    autoComplete="off"
                >
                    <Box component='div' sx={{ borderBottom: 1, ml: 1 }}>
                        {/* TO DO button for login and register */}
                        <Typography sx={{ p: 1 }}>Login</Typography>
                    </Box>
                    <TextField id="outlined-basic" variant="outlined" placeholder="Email" fullWidth sx={{ p: 1 }} />
                    <TextField id="outlined-basic" variant="outlined" placeholder="Password" fullWidth sx={{ p: 1, pt: 0 }} />
                    <Button variant="contained" size='medium' sx={{ ml: 1 }}  >Save</Button>

                </Box>

                <Modal>
                    <TextField id="outlined-basic" variant="outlined" placeholder="Email" fullWidth sx={{ p: 1 }} />

                </Modal>
            </Paper>
        </Grid>
    )
}
export default ModalForm;