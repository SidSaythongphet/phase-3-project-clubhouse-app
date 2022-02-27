import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography, } from '@mui/material'
import EventContainer from '../event_components/EventContainer';
import PostContainer from '../post_component/PostContainer';
import ClubPageHeader from './ClubPageHeader';

const ClubPage = ({ onJoinClub, onQuitClub, currentUser }) => {
  const [club, setClubPage] = useState([])
  const [members, setMembers] = useState([])
  const [events, setEvents] = useState([])

  const existingMember = members.map(member => member.id).includes(parseInt(localStorage.user_id))

  useEffect(() => {
    const club = localStorage.getItem('club_id')
    if (club) {
      fetch(`/clubs/${club}`)
        .then(resp => resp.json())
        .then(club => {
          setClubPage(club)
          setMembers(club.users)
          setEvents(club.events)
        })
    }
  }, [])

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent])
  }

  return (
    <Container >
      {!club
        ?
        <Typography>Loading</Typography>
        :
        <Grid container spacing={3} display='flex' flexDirection='row'>
          <Grid item xs={12}>
            <ClubPageHeader club={ club } members={ members } setMembers={ setMembers } onJoinClub={ onJoinClub } onQuitClub={ onQuitClub } currentUser={ currentUser } existingMember={ existingMember }/>
          </Grid>
          {
            existingMember
            ?
            <Grid item xs={12} container spacing={3}>
              <Grid item xs={4}>
                <EventContainer events={ events } onAddEvent={ handleAddEvent }/>
              </Grid>
              <Grid item xs={8} container spacing={2} direction='column'>
                <PostContainer/>    
              </Grid>
            </Grid>
            :
            <Grid item xs={12} container  justifyContent= 'center' alignContent='center' sx={{height:'500px'}}>
              <Typography variant='h4'>Join the club!</Typography>
            </Grid>
          }
        </Grid>
      }
    </Container>
  )
}

export default ClubPage