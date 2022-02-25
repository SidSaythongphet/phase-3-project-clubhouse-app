import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, Container, Grid, Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import StyledButton from '../../styled_components/StyledButton';

const CreateClub = ({ onAddClub }) => {
    const [formData, setFormData] = useState({
        club_title: '',
        description: '',
        admin: localStorage.user_id
    })
    const navigate = useNavigate()
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e) => {
        e.preventDefault()

        fetch(`/clubs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then(newClub => {
                onAddClub(newClub)
                localStorage.setItem('club_id',newClub.id)
                navigate(`/club/${newClub.club_title}`)
            })
    } 

    return (
        <Grid container justifyContent="center">
            <Grid item xs={4} style={{ margin: '50px', padding: '50px'}}>
                <Box sx={{ width: '100%', bgcolor: 'background.paper', borderRadius:'5px' }} style={{ padding: '50px 0'}}>
                    <Container>
                        <Stack spacing={3} justifyContent="center">
                            <Typography variant="h4" align='center'>Create a New Club</Typography>
                            <TextField
                                required
                                id="outlined-name-required"
                                label="Club Name"
                                name="club_title"
                                value={ formData.club_title }
                                variant='filled'
                                onChange={ handleChange }
                            />
                            <TextField
                                required
                                id="outlined-description-input"
                                label="Description"
                                type="text"
                                name="description"
                                multiline
                                value={ formData.description }
                                variant='filled'
                                onChange={ handleChange }
                            />
                            <StyledButton text="Create Club" onClick={ handleClick }/>
                            <Divider orientation='horizontal'>Or</Divider>
                            <StyledButton text="Go to Club List" href='/clublist' />
                        </Stack>
                    </Container>
                </Box>
            </Grid>
        </Grid>
    )
}

export default CreateClub