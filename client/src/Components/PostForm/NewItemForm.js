
import { Box, TextField, Button } from '@mui/material'
import { Fragment } from 'react';
const NewFormItem = () => {
    return (
        <Fragment>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, },
                }}
                noValidate
                autoComplete="off"
            >
                {/* Upload for img */}
                <TextField id="outlined-basic" variant="outlined" placeholder="Title" fullWidth />
                <TextField id="outlined-basic" variant="outlined" placeholder="Description" fullWidth multiline rows={5} />
                <Button variant="contained" size='medium' fullWidth sx={{ ml: 1 }}>Save</Button>
                {/* align button with form */}
            </Box>

        </Fragment>

    )
}
export default NewFormItem;