import { Avatar, Typography, Box, Grid, Tooltip } from '@mui/material'
import React from 'react'

const PostItem = ({ post }) => {
    const { content, created_at, updated_at, user } = post

    const myPosts = user.id === parseInt(localStorage.user_id) ? true : false
   
    return (
        <Box>
            <Grid container display="flex" alignItems="flex-end" direction={ myPosts ? "row-reverse" : "row" }>
                <Grid item xs={1} container justifyContent="center">
                    <Tooltip title={ user.first_name + ' ' + user.last_name}>
                        <Avatar sx={{ width: 35, height: 35 }}>{ user.first_name[0] + user.last_name[0]}</Avatar>
                    </Tooltip>
                </Grid>
                <Grid item xs={11} container justifyContent={ myPosts ? "right" : "left" }>
                    <Grid item>
                        <Box
                            style={{
                                margin: '5px 0',
                                maxWidth: '400px',
                                borderRadius: '15px', 
                                background: 'linear-gradient(200deg, rgba(2,0,36,1) 0%, rgba(9,79,121,1) 50%, rgba(58,124,138,1) 100%)'
                            }}
                        >
                            <Typography 
                                align={ myPosts ? "right" : "left" }
                                style={{
                                    margin: '5px',
                                    padding: '5px',
                                    borderRadius: '15px', 
                                    color: 'whitesmoke',
                                }}
                            >
                                { content }
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography  align={ myPosts ? "right" : "left" } variant='body2' gutterBottom>
                            { new Date(created_at).toLocaleString() }
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PostItem