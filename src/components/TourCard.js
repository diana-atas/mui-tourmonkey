import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid' // Grid version 1
// import Grid2 from '@mui/material/Unstable_Grid2' // Grid version 2
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import { AccessTime } from '@mui/icons-material'

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
            <AccessTime sx={{ width: 12.5 }} />

            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 3,
            }}
          >
            <Rating
              name="read-only"
              value={4.5}
              readOnly
              precision={0.5}
              size={'small'}
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              4.5
            </Typography>
            <Typography variant="body2" component="p" marginLeft={1.5}>
              (655 reviews)
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  )
}

export default TourCard
