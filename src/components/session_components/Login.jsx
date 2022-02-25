import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import StyledButton from '../../styled_components/StyledButton';
import Alert from '@mui/material/Alert';

const Login = ({ loginUser, users }) => {
    const [showAlert, setShowAlert] = useState(false)
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
            setShowAlert(!showAlert)
            setTimeout(() => {
                setShowAlert(showAlert => !showAlert)
            }, 5000)
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
                                <Typography variant="h4" align='center'>Login</Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    required
                                    id="outlined-username-required"
                                    label="Username"
                                    name="username"
                                    value={ formData.username }
                                    variant='filled'
                                    fullWidth
                                    color='primary'
                                    onChange={ handleChange }
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    required
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    value={ formData.password }
                                    variant="filled"
                                    fullWidth
                                    onChange={ handleChange }
                                />
                            </Grid>
                            <Grid item xs={12} align='center'>
                                <StyledButton text="Login" onClick={ handleClick }/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                { showAlert ? <Alert severity="error">Invalid Username/Password</Alert> : null }
            </Grid>
        </Grid>
    )
}

export default Login