import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import ClubList from '../club_components/ClubList';
import UpdateForm from './UpdateForm';
import DeleteAccountItem from './DeleteAccountItem';


const UserHomePage = ({ currentUser, usersClubs, setLoggedIn }) => {
    const { first_name, last_name, username } = currentUser
    const [userDisplay, setUserDisplay] = useState(username)


    const onUpdate = (updatedUser) => {
      setUserDisplay(updatedUser.username)
    }

    return (
      <>
        {
          !currentUser 
          ?
          <Typography align='center'>Loading profile...</Typography>
          :
          <Grid container spacing={5} display='flex' justifyContent='center' style={{ margin: '0'}}>
            <Grid item xs={10} sm={7} md={5} lg={4} style={{padding: '10px'}} container display='flex' alignContent='flex-start'>
              <Grid item xs={12} style={{height: '50px'}}>
                <Typography variant='h5' style={{ fontWeight: 'bold', marginLeft: '25%', height: '1px' }}>My Account</Typography>
              </Grid>
              <Grid item xs={12} container justifyContent='center'>
                <Box
                  elevation={3}
                  style={{
                    height: '320px',
                    minWidth: '320px',
                    maxWidth: '500px',
                    padding: '20px 5px 10px',
                    borderRadius: '25px', 
                    background: 'linear-gradient(200deg, rgba(2,0,36,1) 0%, rgba(9,79,121,1) 50%, rgba(58,124,138,1) 100%)'
                  }}
                >
                  <Grid container spacing={3} justifyContent='center'>
                    <Grid item xs={12}>
                      <Avatar
                        alt={ first_name + last_name }
                        sx={{ width: 100, height: 100 }}
                        style={{ margin: 'auto' }}

                        >
                        { first_name[0] + last_name[0] } 
                      </Avatar>
                    </Grid>
                    <Grid item>
                      <Typography align='center' variant='h6'>Full Name:</Typography>
                      <Typography align='center' style={{ color: '#fefefe', backgroundColor: 'rgba(255, 255, 255, 0.10)', fontWeight: 'bold', padding: '0 15px', minInlineSize: '250px', borderRadius: '25px' }} gutterBottom>{ first_name } { last_name }</Typography>
                      <Typography align='center' variant='h6'>Username:</Typography> 
                      <Typography align='center' style={{ color: '#fefefe', backgroundColor: 'rgba(255, 255, 255, 0.10)', fontWeight: 'bold', padding: '0 15px', minInlineSize: '250px', borderRadius: '25px' }}>{ userDisplay }</Typography>
                    </Grid>
                    <Grid item>
                      <UpdateForm currentUser={ currentUser } onUpdate={ onUpdate }/>
                      <DeleteAccountItem setLoggedIn={ setLoggedIn }/>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={10} sm={7} md={7} lg={8} style={{padding: '10px'}} container display='flex' alignContent='flex-start'>
              <Grid item xs={12} style={{height: '50px'}}>
                <Typography variant='h5' style={{ fontWeight: 'bold', marginLeft: '20px' }}>My Clubs</Typography>
              </Grid>
              <Grid item container justifyContent='flex-start'>  
                <Box
                  elevation={3}
                  style={{
                    minHeight: '500px',
                    minWidth: '320px',
                    maxWidth: '960px',
                    padding: '20px 5px 10px',
                    borderRadius: '25px',
                    background: 'linear-gradient(200deg, rgba(2,0,36,1) 0%, rgba(9,79,121,1) 50%, rgba(58,124,138,1) 100%)'
                  }}
                  sx={{ width: '100%' }}
                >
                  <ClubList clubs={ usersClubs } />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        }
      </>
    )

}

export default UserHomePage