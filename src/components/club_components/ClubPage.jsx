import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import EventList from '../event_components/EventList';

const ClubPage = ({ onJoinClub }) => {
  const [club, setClubPage] = useState([])
  const [members, setMembers] = useState([])
  const [events, setEvents] = useState([])
  const { club_title, description } = club
  
  const memberAvatar = members.map(member => <Avatar key={ member.id }>{ member.first_name[0] + member.last_name[0]}</Avatar>)
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
  
  const handleJoin = () => {
    fetch(`/users_clubs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: parseInt(localStorage.user_id),
        club_id: club.id
      })
  })
      .then(resp => resp.json())
      .then(() => {
        onJoinClub(club)
      })
  }

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent])
  }

  return (
    <Container>
      {!club
        ?
        <Typography>Loading</Typography>
        :
        <Grid container spacing={3} direction='column'>
          <Grid item>
            <Paper>
              <Typography>{ club_title }</Typography>
              { members.length > 1 ? <Typography>{ members.length } Members</Typography> : <Typography>{ members.length } Member</Typography> }
              <AvatarGroup max={5}>
                { memberAvatar }
              </AvatarGroup>
              <Typography>Description</Typography>
              <Typography>{ description }</Typography>
              { !existingMember ? <Button onClick={handleJoin}>Join</Button> : <Button>Leave</Button> }
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Container>
                { existingMember ? <EventList club_id={ club.id } events={ events } onAddEvent={ handleAddEvent }/> : false }
              </Container>
            </Paper>
          </Grid>
        </Grid>
      }
    </Container>
  )
}

export default ClubPage