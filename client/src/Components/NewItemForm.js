
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Fragment } from 'react';
const NewFormItem = () => {
    return (
        <Fragment>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1,  },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" variant="outlined" placeholder="Title" fullWidth />
                <TextField id="outlined-basic" variant="outlined" placeholder="Description" fullWidth multiline rows={5} />
                <Button variant="contained" size='medium' fullWidth >Save</Button>
            </Box>

        </Fragment>

    )
}
export default NewFormItem;