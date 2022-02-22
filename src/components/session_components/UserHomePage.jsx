import React, { useEffect } from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import StyledButton from '../../styled_components/StyledButton';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import ClubList from '../club_components/ClubList';


const UserHomePage = ({ currentUser, currentClub, usersClubs }) => {
    const { first_name, last_name, username } = currentUser
    
    return (
      <Container style={{padding:'0 24px'}}>
        {
          !currentUser 
          ?
          <Typography align='center'>Loading profile...</Typography>
          :
          <Grid container spacing={3} display='flex' justifyContent='center'>
            <Grid item xs={10} sm={7} md={5} lg={4} style={{padding: '10px'}}>
              <Typography gutterBottom variant='h5' style={{ fontWeight: 'bold', marginLeft: '20px' }}>My Account</Typography>
              <Paper
                elevation={3}
                style={{
                  height: '320px',
                  minWidth: '320px',
                  padding: '20px 5px 10px',
                  borderRadius: '25px', 
                  background: 'linear-gradient(200deg, rgba(2,0,36,.9) 20%, rgba(9,79,121,0.75)65%, rgba(0,212,255,.9) 85%)'
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
                    <Typography align='center' variant='h6'>Userame:</Typography> 
                    <Typography align='center' style={{ color: '#fefefe', backgroundColor: 'rgba(255, 255, 255, 0.10)', fontWeight: 'bold', padding: '0 15px', minInlineSize: '250px', borderRadius: '25px' }}>{ username }</Typography>
                  </Grid>
                  <Grid item >
                    <StyledButton icon={ <SettingsIcon/> } text='Settings'/>
                    <StyledButton icon={ <DeleteIcon/> } color='secondary' text='Delete Account'/>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={10} sm={7} md={7} lg={8} style={{padding: '10px'}}>
              <Typography gutterBottom variant='h5' style={{ fontWeight: 'bold', marginLeft: '20px' }}>My Clubs</Typography>
              <Paper
                elevation={3}
                style={{
                  minHeight: '500px',
                  minWidth: '320px',
                  padding: '20px 5px 10px',
                  borderRadius: '25px',
                  background: 'linear-gradient(200deg, rgba(2,0,36,.9) 20%, rgba(9,79,121,0.75)65%, rgba(0,212,255,.9) 85%)'
                }}
              >
                <ClubList clubs={ usersClubs } currentClub={ currentClub }/>
              </Paper>
            </Grid>
          </Grid>
        }
      </Container>
    )

}

export default UserHomePage