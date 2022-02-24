import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import StyledButton from '../../styled_components/StyledButton';
import SettingsIcon from '@mui/icons-material/Settings';

const UpdateForm = ({ currentUser, onUpdate }) => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        username: currentUser.username,
        password: currentUser.password
    })
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleClickOpen = () => {
      setOpen(true);
    }
  
    const handleClose = () => {
      setOpen(false);
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        fetch(`/users/${currentUser.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify(formData)
          })
              .then(resp => resp.json())
              .then(updatedUser => {
                    onUpdate(updatedUser)
                    handleClose()
                })
    }
  
    return (
        <>
            <StyledButton icon={ <SettingsIcon/> } onClick={handleClickOpen} text='Settings'/>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Account</DialogTitle>
                <DialogContent 
                component="form"
                >
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
                </DialogContent>
                <DialogActions>
                    <StyledButton text='Cancel' onClick={handleClose}/>
                    <StyledButton text='Update' type='submit' onClick={handleUpdate}/>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default UpdateForm