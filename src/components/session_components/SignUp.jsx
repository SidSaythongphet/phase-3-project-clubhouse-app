import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, Container, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import StyledButton from '../../styled_components/StyledButton';

const SignUp = ({ users, loginUser, onAddUser }) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: ''
    })
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e) => {
      e.preventDefault()
      const user = users.find(user => user.username.toLowerCase() === formData.username.toLowerCase())

      if (user) {
          alert("Username unavailable")
      } else {
          fetch(`/users`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify(formData)
          })
              .then(resp => resp.json())
              .then(newUser => {
                onAddUser(newUser)
                loginUser(newUser)
                navigate(`/clublist`)
              })
      }
  }

    return (
        <Grid container justifyContent="center">
            <Grid item xs={4} style={{ margin: '50px', padding: '50px'}}>
                <Box 
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{ 
                        width: '100%', 
                        bgcolor: 'background.paper', 
                        borderRadius:'5px',
                        padding: '50px 0'
                    }} 
                >
                    <Container>
                        <Grid container spacing={3} justifyContent="center">
                            <Grid item xs={12}>
                                <Typography variant="h4" align='center'>Create Account</Typography>
                            </Grid>
                            <Grid item>
                                <Stack spacing={3} justifyContent="center" direction='row' >
                                    <TextField
                                        required
                                        id="outlined-first-name-required"
                                        label="First Name"
                                        name="first_name"
                                        value={ formData.first_name }
                                        variant='filled'
                                        onChange={ handleChange }
                                    />
                                    <TextField
                                        required
                                        id="outlined-last-name-required"
                                        label="Last Name"
                                        name="last_name"
                                        value={ formData.last_name }
                                        variant='filled'
                                        onChange={ handleChange }
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="outlined-username-required"
                                    label="Username"
                                    name="username"
                                    value={ formData.username }
                                    variant='filled'
                                    fullWidth
                                    onChange={ handleChange }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    value={ formData.password }
                                    variant='filled'
                                    fullWidth
                                    onChange={ handleChange }
                                />
                            </Grid>
                            <Grid item xs={12} align='center'>
                                <StyledButton text="Create Account" onClick={ handleClick }/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignUp