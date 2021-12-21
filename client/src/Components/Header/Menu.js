import List from '@mui/material/List';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

import PostAddIcon from '@mui/icons-material/PostAdd';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

// Color fot text when selected and spacing between icons and text


const text = {
    color: "#1976d2"
}

const Navigation = () => {
    return (
        <Grid item xs='auto' md='auto'>
            <List dense disablePadding >
                <ListItemButton selected>
                    <ListItemIcon>
                        <PostAddIcon color='primary' />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ style: text }}
                        primary="Add post"
                    />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <PermIdentityIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Profile"
                    />
                </ListItemButton>
                <ListItemButton >
                    <ListItemIcon>
                        <FavoriteBorderIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Favorites"
                    />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ArticleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="My posts"
                        color=''

                    />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Log out"
                    />
                </ListItemButton>

            </List>

        </Grid>
    )
}
export default Navigation;