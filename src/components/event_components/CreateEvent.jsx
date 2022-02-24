import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import StyledButton from '../../styled_components/StyledButton';
import SettingsIcon from '@mui/icons-material/Settings';


const CreateEvent = ({ onAddEvent }) => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        event_title: '',
        club_id: localStorage.club_id,
        event_date: ''
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
        fetch(`/events`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then(newEvent => {
                onAddEvent(newEvent)
                handleClose()
            })
    }

    return (
        <>
            <StyledButton icon={ <SettingsIcon/> } onClick={handleClickOpen} text='Create Event'/>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create Event</DialogTitle>
                <DialogContent 
                    component="form"
                >
                    <TextField
                        required
                        label="Title"
                        name="event_title"
                        value={ formData.event_title }
                        variant='filled'
                        onChange={ handleChange }
                    />
                    <TextField
                        required
                        type="date"
                        name="event_date"
                        value={ formData.event_date }
                        variant='filled'
                        onChange={ handleChange }
                    />

                </DialogContent>
                <DialogActions>
                    <StyledButton text='Cancel' onClick={handleClose}/>
                    <StyledButton text='Create' type='submit' onClick={handleUpdate}/>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CreateEvent