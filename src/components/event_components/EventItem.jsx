import React from 'react'
import { format, compareAsc } from 'date-fns'
import { Typography } from '@mui/material'
import StyledButton from '../../styled_components/StyledButton'

const EventItem = ({ event }) => {
  const today = format(new Date(), 'yyyy, MM, dd')
  const event_date = format(new Date(event.event_date), 'yyyy, MM, dd')
  const eventOpen = compareAsc(new Date(event_date), new Date(today)) === 1 ? true : false

  return (
    <div>
      <Typography>{ event.event_title }</Typography>
      <Typography>{ new Date(event.event_date).toDateString() }</Typography>
      <StyledButton text={ event.event_title } disabled={ eventOpen }/>
    </div>
  )
}

export default EventItem