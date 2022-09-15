import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid' // Grid version 1
// import Grid2 from '@mui/material/Unstable_Grid2' // Grid version 2
import Typography from '@mui/material/Typography'

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={10}>
        <img
          src="https://cdn.britannica.com/30/94430-050-D0FC51CD/Niagara-Falls.jpg"
          alt="falls"
          className="img"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Immerse into the Falls
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography variant="body2" component="p">
              5 hours
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  )
}

export default TourCard
