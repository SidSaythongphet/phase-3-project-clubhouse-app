import React, { useState } from 'react'
import Box from '@mui/material/Box';
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
        <Box style={{padding: '10px'}} >
            <Grid container justifyContent="flex-end">
                <Grid item>                    
                    <StyledButton text={ !expanded ? "Comment" : "Close"} icon={ <ExpandMoreIcon /> } onClick={handleExpandClick} size="small" />
                </Grid>
            </Grid>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Box>
                    <Grid container display="flex" justifyContent="center">
                        <Grid item xs={9}>                    
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
                            <StyledButton text="Send" icon={ <SendIcon/>} onClick={ handleClick }/>
                        </Grid>
                    </Grid> 
                </Box>
            </Collapse>
        </Box>
    )
}

export default PostForm