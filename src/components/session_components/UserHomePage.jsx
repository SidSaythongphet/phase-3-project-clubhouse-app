import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Avatar } from '@mui/material';


const UserHomePage = ({ loggedIn, currentUser }) => {
  
  const homeLoggedIn = () => {
    const { first_name, last_name, username, clubs } = currentUser

    return (
      <Paper>
        <Avatar
          alt={ first_name + last_name }
          sx={{ width: 100, height: 100 }}
        >
          { first_name[0] + last_name[0]}</Avatar>
        <Typography>Full Name: { first_name } { last_name }</Typography>
        <Typography>Userame: { username }</Typography>
        <Typography>My Clubs</Typography>
        { clubs.map(club => <Typography key={ club.id }>{ club.club_title }</Typography>) }
      </Paper>
    )
  }

  return (
    <>
      { loggedIn ? homeLoggedIn() : <h1>Not Logged In</h1> }
    </>
  )
}

export default UserHomePage