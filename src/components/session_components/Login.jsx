import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


const Login = ({ loginUser, users, currentUser }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
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
      const user = users.find(user => user.username.toLowerCase() === formData.username.toLowerCase())
      if (user && user.password === formData.password) {
        loginUser(user)
        navigate(`/home/ + ${currentUser.last_name} + "_" + ${currentUser.id}`)
      } else {
        alert('Invalid credentials')
      }
    }

    return (
        <Paper
            component="form"
            noValidate
            autoComplete="off"
            >
            <Stack>
                <Typography>Login</Typography>
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
                <Button onClick={ handleClick } >
                    Login
                </Button>
            </Stack>
        </Paper>
    )
}

export default Login