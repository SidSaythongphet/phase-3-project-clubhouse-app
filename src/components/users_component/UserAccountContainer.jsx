import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import UpdateForm from './UpdateForm';
import DeleteAccountItem from './DeleteAccountItem';
import StyledBox from '../../styled_components/StyledBox';

const UserAccountContainer = ({ currentUser, setLoggedIn }) => {
    const { first_name, last_name, username } = currentUser
    const [userDisplay, setUserDisplay] = useState(username)

    const onUpdate = (updatedUser) => {
      setUserDisplay(updatedUser.username)
    }

    return (
        <StyledBox>
            <Grid container spacing={3} sx={{ height: '350px' }} alignContent='center'>
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
        </StyledBox>
    )
}

export default UserAccountContainer