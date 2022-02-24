import { Button, Container, Grid, Paper, Typography, Tooltip, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import EventList from '../event_components/EventList';
import PostContainer from '../post_component/PostContainer';


const ClubPage = ({ onJoinClub, currentUser }) => {
  const [club, setClubPage] = useState([])
  const [members, setMembers] = useState([])
  const [events, setEvents] = useState([])
  const { club_title, description } = club
  
  const memberAvatar = members.map(member => {
    return (
      <Tooltip key={ member.id } title={ member.first_name + ' ' + member.last_name} >
        <Avatar >{ member.first_name[0] + member.last_name[0]}</Avatar>
      </Tooltip>
    )
  })
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
        setMembers([...members, currentUser])
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
        <Grid container spacing={3} display='flex' flexDirection='row'>
          <Grid item xs={12}>
            <Box sx={{ width: '100%', bgcolor: 'background.paper', borderRadius:'5px' }}>
              <Container>
                <Typography>{ club_title }</Typography>
                { members.length > 1 ? <Typography>{ members.length } Members</Typography> : <Typography>{ members.length } Member</Typography> }
                <AvatarGroup max={5}>
                  { memberAvatar }
                </AvatarGroup>
                <Typography>Description</Typography>
                <Typography>{ description }</Typography>
                { !existingMember ? <Button onClick={ handleJoin }>Join</Button> : <Button>Leave</Button> }
              </Container>
            </Box>
          </Grid>
          <Grid item xs={12} container spacing={3}>
            <Grid item xs={4}>
                <EventList club_id={ club.id } events={ events } onAddEvent={ handleAddEvent }/>
            </Grid>
            <Grid item xs={8} container spacing={2} direction='column'>
                <PostContainer currentUser={ currentUser }/>    
            </Grid>
          </Grid>
        </Grid>
      }
    </Container>
  )
}

export default ClubPage