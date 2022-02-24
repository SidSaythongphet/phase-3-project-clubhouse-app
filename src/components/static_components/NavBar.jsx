import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import StyledButton from '../../styled_components/StyledButton';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

const NavBar = ({ loggedIn, currentUser, logoutUser }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()

    const { first_name, last_name, id } = currentUser
   
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const navBarLoggedIn = () => {
        return (
            <>
                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}><Link to={ "/home/" + last_name + "_" + id  } style={{ textDecoration: "none" }}>Home</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/createclub" style={{ textDecoration: "none" }}>Create Club</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/clublist" style={{ textDecoration: "none" }}>Club List</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/club/events" style={{ textDecoration: "none" }}>Club Events</Link></MenuItem>
                </Menu>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Club House
                </Typography>
                <StyledButton href="/" size='small' icon={ <LogoutIcon/> } text='Logout' onClick={ () => logoutUser() } />
                <Avatar onClick={ () => navigate(`/home/${last_name}_${id}`) } >{ first_name[0] + last_name[0]}</Avatar>
            </>
        )
    }

    const navBarLoggedOut = () => {
        return (
            <>
                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={ () => navigate('/') }
                >
                    <HomeIcon />
                </IconButton>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Club House
                </Typography>
                <StyledButton href="/signup" size='small' text='Sign Up' />
                <StyledButton href="/login" size='small' text='Login' icon={ <LoginIcon/> }/>
            </>
        )
    }


    return (
        <Box 
            sx={{ flexGrow: 1 }}
            style={{
                margin: '10px 0 100px',
            }}
        >
            <AppBar 
                position="static"
                style={{
                    background: 'linear-gradient(100deg, rgba(2,0,36,1) 0%, rgba(9,79,121,1) 50%, rgba(58,124,138,1) 100%)'
                }}
            >
                <Toolbar>
                    { loggedIn ? navBarLoggedIn() : navBarLoggedOut() }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar