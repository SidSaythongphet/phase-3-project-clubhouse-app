import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ButtonGroup } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const NavBar = ({ loggedIn, currentUser, logoutUser }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const navBarLoggedIn = () => {
        return (
            <>
                <Button color="inherit" onClick={ () => logoutUser() }><Link to="/">Logout</Link></Button>
                <Avatar>{ currentUser.first_name[0] + currentUser.last_name[0]}</Avatar>
            </>
        )
    }

    const navBarLoggedOut = () => {
        return (
            <ButtonGroup>
                <Button color="inherit"><Link to="/signup">Sign Up</Link></Button>
                <Button color="inherit"><Link to="/login">Login</Link></Button>
            </ButtonGroup>
        )
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
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
                        <MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/createclub">Create Club</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/club">Club</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/clublist">Club List</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/club/events">Club Events</Link></MenuItem>
                    </Menu>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Club House
                    </Typography>
                    { loggedIn ? navBarLoggedIn() : navBarLoggedOut() }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar