import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ users, loginUser }) => {
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
                loginUser(newUser)
                navigate('/')
              })
      }
  }

    return (
        <Paper
            component="form"
            noValidate
            autoComplete="off"
        >
            <Stack>
                <Typography>Create Account</Typography>
                <Stack direction='row'>
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
                <TextField
                    required
                    id="outlined-username-required"
                    label="Username"
                    name="username"
                    value={ formData.username }
                    variant='filled'
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
                    onChange={ handleChange }
                />
                <Button onClick={ handleClick }>
                    Create Account
                </Button>
            </Stack>
        </Paper>
    )
}

export default SignUp