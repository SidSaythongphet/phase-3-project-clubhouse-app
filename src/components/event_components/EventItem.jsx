import React from 'react'
import { format, compareAsc } from 'date-fns'
import { Typography, Box, Grid } from '@mui/material'
import StyledButton from '../../styled_components/StyledButton'

const EventItem = ({ event }) => {
  const today = format(new Date(), 'yyyy, MM, dd')
  const event_date = format(new Date(event.event_date), 'yyyy, MM, dd')
  const eventOpen = compareAsc(new Date(event_date), new Date(today)) === 1 ? true : false


  return (
    <Grid item>
      <Box 
        sx={{
          width: '100%', 
          minHeight: '75px',
          margin: '5px 0',
          borderRadius: '15px', 
          background: 'linear-gradient(200deg, rgba(2,0,36,1) 0%, rgba(9,79,121,1) 50%, rgba(58,124,138,1) 100%)'
        }}
      >
        <Grid container justifyContent='center' alignItems='center' sx={{ minHeight: '115px' }}>
          <Grid item>
            <Typography
              sx={{
                margin: '5px',
                padding: '5px',
                color: 'whitesmoke',
              }}
            >
              { event.event_title }
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                color: 'whitesmoke',
              }}            
            >
              { new Date(event.event_date).toDateString() }
            </Typography>
          </Grid>
          <Grid item xs={12} container justifyContent='center'>
            <Grid item >
              <StyledButton size='small' text={ event.event_title } disabled={ eventOpen } color='secondary' />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}

export default EventItem