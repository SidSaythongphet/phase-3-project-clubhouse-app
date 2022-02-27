import React from 'react';
import { Box, Container } from '@mui/material'


const StyledBox = ({ children, minHeight = '350px'}) => {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        minHeight,
        bgcolor: 'background.paper', 
        borderRadius:'15px', 
        padding: '10px 0',
      }} 
    >
      <Container>
          { children }
      </Container>
    </Box>
  )
}

export default StyledBox