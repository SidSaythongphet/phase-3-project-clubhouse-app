import React from 'react';
import { Typography, Grid, Card, CardMedia } from '@mui/material';

const Home = () => {
  

  return (
    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
      <Grid item>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="600"
            image="https://images.unsplash.com/photo-1644497769455-01bf542bbfeb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=benjamindem-haoOUocLCQk-unsplash.jpg"
            alt="paint photo"
          />
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="600"
            image="https://images.unsplash.com/photo-1601469090980-fc95e8d95544?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=marialaura-gionfriddo-50G3FvyQxX0-unsplash.jpg"
            alt="books"
          />
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="600"
            image="https://images.unsplash.com/photo-1628773176076-87433d254580?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=ethan-rougon-kyihBDMUY_M-unsplash.jpg"
            alt="sinatra record"            

          />
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home