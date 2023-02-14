import React from 'react'
import { Button as KMRButton } from '@mui/material'

const Button = (props,{children , click, sx}) => {
  return (
    <>
    <KMRButton  
    sx={{ 
        bgcolor:'primary.main', 
        height:"30px", 
        color:"common.white", 
        px:"10px",
        '&:hover':{bgcolor:"primary.main"} , 
        ...sx}}  
        onclick={click}  
        
    >
        {props.children}
    </KMRButton>
    </>
  )
}

export default Button