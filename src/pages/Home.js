import TourCard from '../components/TourCard'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid' // Grid version 1
import SearchAppBar from '../components/AppBar'
// import Grid2 from '@mui/material/Unstable_Grid2' // Grid version 2
import cities from '../data.json'
import { Typography } from '@mui/material'

const Home = () => (
  <div className="App">
    <SearchAppBar />
    <Container sx={{ marginY: 5 }}>
      {cities.map((city) => (
        <div key={city.name}>
          <Typography
            variant="h4"
            component="h2"
            marginTop={5}
            marginBottom={3}
          >
            Top {city.name} Tours
          </Typography>

          <Grid container spacing={5}>
            {city.tours.map((tour) => (
              <TourCard tour={tour} key={tour.name} />
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  </div>
)

export default Home
