import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

import PostAddIcon from '@mui/icons-material/PostAdd';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';


const Navigation = () => {
    return (
        <Grid item xs='auto' md='auto'>
            <List dense>
                <ListItem button>
                    <ListItemIcon>
                        <PostAddIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Add post"
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PermIdentityIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Profile"
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FavoriteBorderIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Favorites"
                    />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ArticleOutlinedIcon color='primary' />
                    </ListItemIcon>
                    <ListItemText
                        primary="My posts"
                        color=''

                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Log out"
                    />
                </ListItem>

            </List>

        </Grid>
    )
}
export default Navigation;