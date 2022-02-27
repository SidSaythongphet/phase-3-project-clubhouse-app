import { Grid, Typography } from '@mui/material'
import React,{ useEffect, useState } from 'react'
import PostItem from './PostItem'
import PostForm from './PostForm';
import StyledBox from '../../styled_components/StyledBox';



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
            <StyledBox minHeight='50px'>
                <PostForm handleNewPost={ handleNewPost }/>
            </StyledBox>
        </Grid>
        <Grid item >
            <StyledBox>
                <Typography variant="h6" align="center">Message Board</Typography>
                { renderPosts }
            </StyledBox>
        </Grid>
    </>
  )
}

export default PostContainer