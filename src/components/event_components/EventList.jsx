import { Card, Typography } from '@mui/material'
import React from 'react'
import StyledButton from '../../styled_components/StyledButton'
import CreateEvent from './CreateEvent'
import EventItem from './EventItem'
import { format, compareDesc } from 'date-fns'


const EventList = ({ events, club_id, onAddEvent }) => {
  const today = format(new Date(), 'yyyy-MM-dd')
  const dates = events.map(event => event.event_date.split('T')[0])
  const sorted_events = [...events].sort((a,b) => new Date(a.event_date) - new Date(b.event_date)).reverse()
  const renderEvents = sorted_events.map(event => <EventItem key={ event.id } event={ event } />)

  return (
    <div>
      <Typography>EventList</Typography>
      { renderEvents }
      <CreateEvent club_id={ club_id } onAddEvent={ onAddEvent }/>
    </div>
  )
}

export default EventList