import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Divider, Grid, Stack } from '@mui/material';
import StyledButton from '../../styled_components/StyledButton';
import Alert from '@mui/material/Alert';
import StyledBox from '../../styled_components/StyledBox';

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
            <Grid item xs={11} sm={10} md={6} lg={5} xl={4}>
                <StyledBox>
                    <Stack
                        direction="column"
                        justifyContent="space-evenly"
                        alignItems="stretch"
                        spacing={2}
                        minHeight="500px"
                    >
                        <Typography variant="h4" align='center'>Login</Typography>
                        <Divider orientation='horizontal'/>
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
                        <Divider orientation='horizontal'/>
                        <StyledButton text="Login" onClick={ handleClick }/>
                    </Stack>
                </StyledBox>
                { showAlert ? <Alert severity="error">Invalid Username/Password</Alert> : null }
            </Grid>
        </Grid>
    )
}

export default Login