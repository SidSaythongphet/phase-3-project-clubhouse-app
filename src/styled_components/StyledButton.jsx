import React from 'react';
import Button from '@mui/material/Button';

const StyledButton = ({ text, icon, color, size, href, onClick, disabled, sx }) => {
    return (
        <Button 
            variant="contained"
            onClick={ onClick }
            startIcon={ icon }
            color={ color }
            size={ size } 
            href={ href }
            style={{
                margin: '10px 5px',
                borderRadius: '25px',
            }}
            disabled={ disabled }
            sx={ sx }
            
        >
            { text }
        </Button>
    )
}

export default StyledButton