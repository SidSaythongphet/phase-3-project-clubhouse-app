import React from 'react'
import { Typography, Grid, Box, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import GroupsIcon from '@mui/icons-material/Groups';

const ClubListItem = ({ club }) => {
    return (
        <Box 
            sx={{
                width: '100%', 
                minHeight: '75px',
                margin: '5px 0',
                borderRadius: '15px', 
                background: 'linear-gradient(200deg, rgba(2,0,36,1) 0%, rgba(9,79,121,1) 50%, rgba(58,124,138,1) 100%)'
            }}
        >
            <Grid container display='flex' justifyContent='center' alignItems='center' sx={{ height: '100%'}}>
                <Grid item xs={12} md={1}>
                    <GroupsIcon fontSize="large" sx={{ color: 'whitesmoke', paddingLeft: '15px' }}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography onClick={ () => localStorage.setItem('club_id', club.id) }>
                        <Link 
                            to={ '/club/' + club.club_title } 
                            style={{ 
                                margin: '5px',
                                padding: '5px',
                                fontWeight: 'bold', 
                                textDecoration: 'none', 
                                color: 'whitesmoke', 
                            }}
                        >
                            { club.club_title }
                        </Link>
                    </Typography>
                </Grid>
                <Divider orientation='vertical' variant='middle' flexItem/>
                <Grid item xs={12} md={6}>
                    <Typography
                        sx={{ 
                            margin: '5px',
                            padding: '5px',
                            textDecoration: 'none', 
                            color: 'whitesmoke', 
                        }}                        
                    >
                        { club.description }
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ClubListItem