import { Typography, Divider, Box, Container, Grid } from '@mui/material'
import { format, compareAsc } from 'date-fns'
import React from 'react'
import CreateEvent from './CreateEvent'
import EventItem from './EventItem'


const EventContainer = ({ events, onAddEvent }) => {
  const today = format(new Date(), 'yyyy, MM, dd')
  const sorted_events = [...events].sort((a,b) => new Date(a.event_date) - new Date(b.event_date)).reverse()
  const upcoming = [...sorted_events].filter(event => compareAsc(new Date(format(new Date(event.event_date), 'yyyy, MM, dd')), new Date(today)) === 1)
  const past = [...sorted_events].filter(event => compareAsc(new Date(format(new Date(event.event_date), 'yyyy, MM, dd')), new Date(today)) === 0 || compareAsc(new Date(format(new Date(event.event_date), 'yyyy, MM, dd')), new Date(today)) === -1)
  
  const renderUpcomingEvents = upcoming.map(event => {
    return (
      <EventItem key={ event.id } event={ event } />
    )
  })

  const renderPastEvents = past.map(event => {
    return (
      <EventItem key={ event.id } event={ event } />
    )
  })
 console.log(renderPastEvents)

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', borderRadius:'5px' }} style={{paddingBottom: '20px', marginBottom: '50px'}}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" align="center">Events</Typography>
          </Grid>
          <Grid item xs={12}>
            <CreateEvent onAddEvent={ onAddEvent }/>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              { renderUpcomingEvents.length > 0 ? <Divider>Upcoming</Divider> : null }
            </Grid>
            { renderUpcomingEvents }
            <Grid item xs={12}>
              { renderPastEvents.length > 0 ? <Divider>Past</Divider> : null }
            </Grid>
            { renderPastEvents }
          </Grid>
        </Grid>
      </Container>
    </Box>  
  )
}

export default EventContainer