import React from 'react'
import {Button as OutlineKMRButton} from '@mui/material';
import {Download as BrouchureIcon} from '@mui/icons-material';


const OutlineButton = ({children , click}) => {
  return (
    <>
    <OutlineKMRButton 
     variant='outlined'
     onClick={click}
     sx={{
        border:'2px solid aqua',
        color:'aqua',
        px:'10px',
        '&:hover':{
            border:'2px solid aqua'
        }
     }}
    >
    <BrouchureIcon />
     Brouchure
    </OutlineKMRButton>
     
    </>
  )
}

export default OutlineButton