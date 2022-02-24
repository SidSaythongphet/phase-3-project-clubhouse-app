import React from 'react';
import { Typography, Grid, Card, CardMedia } from '@mui/material';

const Home = () => {
  return (
    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="stretch">
      <Grid item >
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="600"
            image="https://images.unsplash.com/photo-1644497769455-01bf542bbfeb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=benjamindem-haoOUocLCQk-unsplash.jpg"
            alt="paint photo"
          />
          <Typography gutterBottom variant="h5" component="div">
            Join a Club
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Create or search through existing clubs to find a group of people that are interested in the things you are!
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
            Chat with Friends
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Connect with your friends!
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
            See Upcoming Events
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Events can be created for clubs to indicate future meetings and their objectives.
          </Typography>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home