import { Typography, Divider, Box, Container } from '@mui/material'
import React from 'react'
import CreateEvent from './CreateEvent'
import EventItem from './EventItem'


const EventList = ({ events, onAddEvent }) => {
  const sorted_events = [...events].sort((a,b) => new Date(a.event_date) - new Date(b.event_date)).reverse()
  const renderEvents = sorted_events.map(event => {
    return (
      <Box
        key={ event.id }
        style={{
          margin: '5px 0',
          borderRadius: '15px', 
          background: 'linear-gradient(200deg, rgba(2,0,36,1) 0%, rgba(9,79,121,1) 50%, rgba(58,124,138,1) 100%)'
        }}
      >
        <EventItem event={ event } />
        <Divider variant="middle" />
      </Box>
    )
  })

  return (
    <>
      <Box sx={{ width: '100%', bgcolor: 'background.paper', borderRadius:'5px' }} style={{paddingBottom: '20px', marginBottom: '50px'}}>
        <Container>
          <Typography>EventList</Typography>
          <CreateEvent onAddEvent={ onAddEvent }/>
          { renderEvents }
        </Container>
      </Box>
    </>
  )
}

export default EventList