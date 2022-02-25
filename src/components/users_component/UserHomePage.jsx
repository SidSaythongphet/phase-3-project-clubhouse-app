import React from 'react';
import { Grid, Typography } from '@mui/material';
import ClubListContainer from '../club_components/ClubListContainer';
import UserAccountContainer from './UserAccountContainer';


const UserHomePage = ({ currentUser, usersClubs, setLoggedIn }) => {
    return (
      <>
        {
          !currentUser 
          ?
          <Typography align='center'>Loading profile...</Typography>
          :
          <Grid 
            container 
            display="flex" 
            direction="row" 
            justifyContent="center" 
            alignItems="flex-start"
            sx={{gap: "15px"}}
          >
            <Grid item xs={3}>
              <Typography variant='h5' sx={{ fontWeight: 'bold' }}>My Account</Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant='h5' sx={{ fontWeight: 'bold' }}>My Clubs</Typography>
            </Grid>
            <Grid item xs={3} container>
              <UserAccountContainer currentUser={ currentUser } usersClubs={ usersClubs } setLoggedIn={ setLoggedIn } />
            </Grid>
            <Grid item xs={7}>
              <ClubListContainer clubs={ usersClubs } />
            </Grid>
          </Grid>
        }
      </>
    )
}

export default UserHomePage