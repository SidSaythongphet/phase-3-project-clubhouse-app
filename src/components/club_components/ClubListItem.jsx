import React from 'react'
import { Typography, Grid, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import GroupsIcon from '@mui/icons-material/Groups';

const ClubListItem = ({ club }) => {
    return (
        <Grid item xs={12}>
            <Box style={{ color: '#fefefe', backgroundColor: 'rgba(255, 255, 255, 0.40)', fontWeight: 'bold', padding: '0 15px', minInlineSize: '250px', borderRadius: '25px' }}>
                <Grid container display='flex'>
                    <Grid item>
                        <GroupsIcon/>
                    </Grid>
                    <Grid>
                        <Typography onClick={ () => localStorage.setItem('club_id', club.id) }><Link to={'/club/' + club.club_title}style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>{ club.club_title }</Link></Typography>
                        <Typography>{ club.description }</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

export default ClubListItem