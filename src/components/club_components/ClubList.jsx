import React from 'react'
import ClubListItem from './ClubListItem'
import { Grid } from '@mui/material'

const ClubList = ({ clubs }) => {

  const renderClubs = clubs.map(club => <ClubListItem key={ club.id } club={ club } />)

  return (
    <Grid container spacing={2} display='flex' flexDirection='column'>
      { renderClubs }
    </Grid>
  )
}

export default ClubList