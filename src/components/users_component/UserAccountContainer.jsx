import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import UpdateForm from './UpdateForm';
import DeleteAccountItem from './DeleteAccountItem';

const UserAccountContainer = ({ currentUser, setLoggedIn }) => {
    const { first_name, last_name, username } = currentUser
    const [userDisplay, setUserDisplay] = useState(username)

    const onUpdate = (updatedUser) => {
      setUserDisplay(updatedUser.username)
    }

    return (
        <Box 
            sx={{ 
                height: '350px',
                maxWidth: '350px',
                bgcolor: 'background.paper', 
                borderRadius:'15px', 
                padding: '20px 0 10px',
                marginBottom: '50px' 
            }} 
        >
            <Grid container spacing={3} sx={{ height: '100%' }}>
                <Grid item xs={12}>
                    <Avatar
                        alt={ first_name + last_name }
                        sx={{ width: 100, height: 100, margin: 'auto'}}
                    >
                        { first_name[0] + last_name[0] } 
                    </Avatar>
                </Grid>
                <Grid item container alignItems="center">
                    <Grid item xs={6}>
                        <Typography variant='h6' align="right" sx={{paddingRight: '20px'}}>Full Name:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>{ first_name } { last_name }</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h6' align="right" sx={{paddingRight: '20px'}}>Username:</Typography> 
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>{ userDisplay }</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} container justifyItems="flex-start" alignItems="center">
                    <UpdateForm currentUser={ currentUser } onUpdate={ onUpdate }/>
                    <Grid item xs={6}>
                        <DeleteAccountItem setLoggedIn={ setLoggedIn }/>        
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default UserAccountContainer