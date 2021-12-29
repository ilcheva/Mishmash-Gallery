import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';


export default function ImgMediaCard() {
    return (
        // TO DO title with icons 
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                component="img"
                alt="painting"
                // height="240"
                image="\img\enzo-tommasi-wlxJ4idMTUk-unsplash.jpeg"
            />
            <CardContent sx={{
                display: 'flex',
                alignContent: 'space-between',
                flexDirection: 'row',
                justifyContent: ' space-between'
            }}>

                <Typography align='justify' variant="h5" sx={{ p: 1.5 }} noWrap>
                    Title
                </Typography>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </CardContent>

        </Card>
    );
}
