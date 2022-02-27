import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import StyledButton from '../../styled_components/StyledButton';
import { Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';

const PostForm = ({ handleNewPost }) => {
    const [value, setValue] = useState('')
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
      setExpanded(!expanded)
    }
  
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        fetch(`/posts`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
                content: value,
                user_id: localStorage.user_id,
                club_id: localStorage.club_id
            })
        })
            .then(resp => resp.json())
            .then(newPost => {
                handleNewPost(newPost)
                setValue('')
                setExpanded(!expanded)
            })
    }
    

    return (
        <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={1}>                    
                <StyledButton size="small" text={ !expanded ? "Comment" : "Close"} icon={ <ExpandMoreIcon /> } onClick={handleExpandClick} />
            </Grid>
            <Grid item xs={10}>                    
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Grid container display="flex" justifyContent="flex-start" alignItems="flex-end">
                        <Grid item xs={10}>                    
                            <TextField
                                id="filled-multiline-flexible"
                                label="Comment"
                                multiline
                                maxRows={4}
                                value={ value }
                                variant="filled"
                                onChange={ handleChange }
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={1}>                    
                            <StyledButton size="small" text="Send" icon={ <SendIcon/>} onClick={ handleClick }/>
                        </Grid>
                    </Grid> 
                </Collapse>
            </Grid>
        </Grid>
    )
}

export default PostForm