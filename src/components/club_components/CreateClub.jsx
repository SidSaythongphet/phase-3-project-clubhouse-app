import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const CreateClub = ({ currentUser }) => {
    const [formData, setFormData] = useState({
        club_title: '',
        description: '',
        admin: currentUser.id
    })
    
    const handleChange = (e) => {
      console.log(formData)
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
                console.log(newClub)
              })
    }

    return (
        <Paper
            component="form"
            noValidate
            autoComplete="off"
        >
            <Stack>
                <Typography>Create a New Club</Typography>
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
                    value={ formData.description }
                    variant='filled'
                    onChange={ handleChange }
                />
                <Button onClick={ handleClick }>
                    Create Club
                </Button>
            </Stack>
        </Paper>
    )
}

export default CreateClub