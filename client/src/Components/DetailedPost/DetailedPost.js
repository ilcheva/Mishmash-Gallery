import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
//Grid should be 12 column  with 30 px spacing for 1140px 

const DetailedPost = () => {
    return (
        <Box component="article" sx={{ border: '1px solid grey' }}>
            <Grid container spacing={0.5} justifyContent="center"
                alignItems="stretch"
            >
                <Grid item xs={5} spacing={1}>
                    <ButtonBase sx={{ width: 1 / 2 }} >
                        <Img alt="complex" src="\img\enzo-tommasi-wlxJ4idMTUk-unsplash.jpeg" />
                    </ButtonBase>
                </Grid>
                <Grid xs container direction="column" justifyContent="flex-start"
                    alignItems="stretch" >
                    <Grid item xs >
                        <Typography gutterBottom variant="h6" component="div" align='left'>
                            Title
                        </Typography>
                        <Typography variant="subtitle1" align='left' gutterBottom>
                            Author
                        </Typography>
                        <Typography variant="body1" color="text.primary" align='left'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, ipsam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, esse!
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2" align='left'>
                            Remove
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

        </Box >
    )
}
export default DetailedPost;