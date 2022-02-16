import Card from './Card'
import { Grid, Item } from '@mui/material'
const Home = () => {
    return (
        <Grid container spacing={8} justifyContent="center" alignItems="center" sx={{ mt: 5 }} >
            <Grid item xs={3}>

                <Card />

            </Grid>
            <Grid item xs={3}>
                <Card />
            </Grid>
            <Grid item xs={3}>
                <Card />
            </Grid>
        </Grid >
    )
}
export default Home;