import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Grid, Box } from '@mui/material';


const Login = ({ loginUser, users }) => {
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
            navigate(`/home/${user.last_name}_${user.id}`)
        } else {
            alert('Invalid credentials')
        }
    }

    return (
        <Grid container justifyContent='center'>
            <Box 
                component="form"
                noValidate
                autoComplete="off"
                elevation={3}
                style={{
                height: '320px',
                minWidth: '320px',
                maxWidth: '500px',
                padding: '20px 5px 10px',
                borderRadius: '25px', 
                background: 'linear-gradient(200deg, rgba(2,0,36,.9) 20%, rgba(9,79,121,0.75)65%, rgba(0,212,255,.5) 85%)'
                }}
                textAlign='center'
                >
                <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={3}
                >
                    <Typography>Login</Typography>
                    <TextField
                        required
                        id="outlined-username-required"
                        label="Username"
                        name="username"
                        value={ formData.username }
                        variant='filled'
                        color='primary'
                        onChange={ handleChange }
                        />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        value={ formData.password }
                        variant="filled"
                        InputProps={{
                            disableUnderline: true,
                        }}
                        onChange={ handleChange }
                        style={{ color: '#fefefe', backgroundColor: 'rgba(255, 255, 255, 0.70)', fontWeight: 'bold', padding: '0 15px', minInlineSize: '250px', borderRadius: '25px' }}
                        />
                    <Button onClick={ handleClick } >
                        Login
                    </Button>
                </Stack>
            </Box>
        </Grid>
    )
}

export default Login