import Card from './Card'
import { Grid, Container } from '@mui/material'
const Home = () => {
    return (
        <Container>
            <Grid container spacing={6} justifyContent="center" alignItems="center"  >
                <Grid item xs={4} sx={{ p: 0 }}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
            </Grid >
        </Container>
    )
}
export default Home;