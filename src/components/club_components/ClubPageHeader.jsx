import React, { useState } from 'react'
import { Grid, Typography, Tooltip, Stack } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import StyledButton from '../../styled_components/StyledButton';
import Collapse from '@mui/material/Collapse';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StyledBox from '../../styled_components/StyledBox';


const ClubPageHeader = ({ 
    club, 
    members, 
    setMembers, 
    onJoinClub,
    onQuitClub, 
    currentUser, 
    existingMember 
}) => {
    const { club_title, description } = club
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
      setExpanded(!expanded)
    }

    const memberAvatar = members.map(member => {
        return (
            <Tooltip key={ member.id } title={ member.first_name + ' ' + member.last_name} >
                <Avatar >{ member.first_name[0] + member.last_name[0]}</Avatar>
            </Tooltip>
        )
    })
    
    const handleJoin = () => {
        fetch(`/users_clubs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user_id: parseInt(localStorage.user_id),
                club_id: parseInt(localStorage.club_id)
            })
        })
            .then(resp => resp.json())
            .then(() => {
                onJoinClub(club)
                setMembers([...members, currentUser])
            })
    }

    const handleQuit = () => {
        fetch(`/users_clubs/user_${localStorage.user_id}/club_${localStorage.club_id}`, {
            method: "DELETE"
        })
            .then(resp => resp.json())
            .then((removedClub) => {
                onQuitClub(removedClub)
                setMembers(members.filter(member => member.id !== currentUser.id))
                setExpanded(!expanded)
            })
    }

    return (
        <StyledBox>
            <Grid container justifyContent='flex-start' alignItems='flex-start' sx={{ height: '350px', padding: '15px 0'}}>
                <Grid item xs={9} sx={{height: '50%'}}>      
                    <Stack spacing={2}>
                        <Typography variant='h4' fontWeight='bold'>{ club_title }</Typography>
                        { members.length > 1 ? <Typography>{ members.length } Members</Typography> : <Typography>{ members.length } Member</Typography> }
                    </Stack>          
                </Grid>
                <Grid item xs={3} container justifyContent='right' whiteSpace='nowrap'>                
                    { !existingMember ? <StyledButton text='Join Club' onClick={ handleJoin }/> : <StyledButton icon={<MoreHorizIcon/>} onClick={ handleExpandClick }/> }
                    <Collapse in={expanded} timeout="auto" orientation='horizontal' unmountOnExit>
                        <StyledButton text='Quit Club' color='secondary' onClick={ handleQuit }/>
                    </Collapse>
                </Grid>
                <Grid item xs={8} sx={{height: '50%'}}>                
                    <Typography variant='h6' gutterBottom>Description</Typography>
                    <Typography>{ description }</Typography>
                </Grid>
                <Grid item xs={4} alignSelf='flex-end'>                
                    <AvatarGroup max={10}>
                    { memberAvatar }
                    </AvatarGroup>
                </Grid>
            </Grid>
        </StyledBox>
    )
}

export default ClubPageHeader