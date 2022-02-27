import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Divider, Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import StyledButton from '../../styled_components/StyledButton';
import StyledBox from '../../styled_components/StyledBox';


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
            <Grid item xs={11} sm={10} md={6} lg={5} xl={4}>
                <StyledBox>
                    <Stack
                        direction="column"
                        justifyContent="space-evenly"
                        alignItems="stretch"
                        spacing={2}
                        minHeight="500px"
                    >
                        <Typography variant="h4" align='center'>Create Account</Typography>
                        <Divider orientation='horizontal'/>
                        <Stack spacing={3} justifyContent="space-between" direction='row'>
                            <TextField
                                required
                                id="outlined-first-name-required"
                                label="First Name"
                                name="first_name"
                                value={ formData.first_name }
                                variant='filled'
                                fullWidth
                                onChange={ handleChange }
                            />
                            <TextField
                                required
                                id="outlined-last-name-required"
                                label="Last Name"
                                name="last_name"
                                value={ formData.last_name }
                                variant='filled'
                                fullWidth

                                onChange={ handleChange }
                            />
                        </Stack>
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
                        <Divider orientation='horizontal'/>
                        <StyledButton text="Create Account" onClick={ handleClick }/>
                    </Stack>
                </StyledBox>
            </Grid>
        </Grid>
    )
}

export default SignUp