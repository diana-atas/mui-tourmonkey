import './App.css'
import TourCard from './components/TourCard'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid' // Grid version 1
// import Grid2 from '@mui/material/Unstable_Grid2' // Grid version 2

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  )
}

export default App
