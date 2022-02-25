import React from 'react'
import ClubListItem from './ClubListItem'
import { Link } from 'react-router-dom'
import { Grid, Box, Container, Typography, Divider } from '@mui/material'

const ClubListContainer = ({ clubs, usersClubs }) => {

  const renderClubs = clubs.map(club => <ClubListItem key={ club.id } club={ club } />)

  return ( 
    <Box 
      sx={{ 
        width: '100%', 
        minHeight: '350px',
        bgcolor: 'background.paper', 
        borderRadius:'15px', 
        padding: '20px 0 10px',
        marginBottom: '50px' 
      }} 
    >
      <Container>
        {
          usersClubs && usersClubs.length === 0 
          ?
          <>
            <Typography align='center' variant='h4'> <Link to="/createclub" style={{ textDecoration: "none" }}>Create</Link> or Join a Club</Typography>
            <Divider sx={{margin: '25px 0'}}/>
          </>
          :
          null
        }
        <Grid container>
          { renderClubs }
        </Grid>
      </Container>
    </Box>
  )
}

export default ClubListContainer