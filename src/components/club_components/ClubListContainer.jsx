import React from 'react'
import ClubListItem from './ClubListItem'
import { Link } from 'react-router-dom'
import { Grid, Typography, Divider } from '@mui/material'
import StyledBox from '../../styled_components/StyledBox'

const ClubListContainer = ({ clubs, usersClubs }) => {

  const renderClubs = clubs.map(club => <ClubListItem key={ club.id } club={ club } />)

  return ( 
    <StyledBox>
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
    </StyledBox>
  )
}

export default ClubListContainer