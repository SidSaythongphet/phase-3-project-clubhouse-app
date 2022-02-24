import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import StyledButton from '../../styled_components/StyledButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';


const DeleteAccountItem = ({ setLoggedIn }) => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()


    const handleClickOpen = () => {
        setOpen(true)
    }
  
    const handleClose = () => {
        setOpen(false)
    }

    const handleDelete = () => {
        fetch(`/users/${localStorage.user_id}`, {
            method: "DELETE"
        })
            .then(resp => resp.json())
            .then(() => {
                navigate(`/`)
                setLoggedIn(false)
                localStorage.removeItem('user_id')
            })
    }
  
    return (
      <>
        <StyledButton icon={ <DeleteIcon/> } color='secondary' text='Delete Account' onClick={handleClickOpen}/>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you would like to delete this account?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <StyledButton icon={ <DeleteIcon/> } color='error' text='Yes' onClick={ handleDelete }/>
            <StyledButton icon={ <CancelIcon/> } color='primary' text='No' onClick={ handleClose }/>
          </DialogActions>
        </Dialog>
      </>
    );
  }
export default DeleteAccountItem