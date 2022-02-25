import { Container, Grid, Typography, Box } from '@mui/material'
import React,{ useEffect, useState } from 'react'
import PostItem from './PostItem'
import PostForm from './PostForm';



const PostContainer = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const club = localStorage.getItem('club_id')
        if (club) {
          fetch(`/clubs/${club}/posts`)
            .then(resp => resp.json())
            .then(posts => {
              setPosts(posts)
            })
        }

    }, [])

    const handleNewPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const renderPosts = [...posts].reverse().map(post => {
        return (
            <PostItem key={ post.id } post={ post } />
        )
    })

  

  return (
    <>
        <Grid item>
            <Box sx={{ width: '100%', bgcolor: 'background.paper', borderRadius:'5px' }}>
                <Container>
                    <PostForm handleNewPost={ handleNewPost }/>
                </Container>
            </Box>
        </Grid>
        <Grid item >
            <Box sx={{ width: '100%', bgcolor: 'background.paper', borderRadius:'5px' }} style={{paddingBottom: '20px', marginBottom: '50px'}}>
                <Container>
                    <Typography variant="h6" align="center">Message Board</Typography>
                    { renderPosts }
                </Container>
            </Box>
        </Grid>
    </>
  )
}

export default PostContainer