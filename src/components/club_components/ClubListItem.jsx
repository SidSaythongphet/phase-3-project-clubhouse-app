import React from 'react'
import { Paper, Typography } from '@mui/material'

const ClubListItem = ({ club }) => {
    return (
        <Paper>
            <Typography>{ club.club_title }</Typography>
            <Typography>{ club.description }</Typography>
        </Paper>
    )
}

export default ClubListItem