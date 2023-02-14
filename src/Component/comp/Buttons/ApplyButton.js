import React from 'react'
import { Button as KMRApplyButton } from '@mui/material'
import {ArrowForward as ArrowForwardIcon } from '@mui/icons-material'



const ApplyButton = ({children , onClick, sx}) => {

  return (
    <>
{/* ------------------------------Light Mode-------------------------------- */}
    <KMRApplyButton
      onClick={onClick}
      sx={{ 
        bgcolor:'aqua',
        color:'white',
        '&:hover' :{
            bgcolor:'aqua',
        },
        px:2,
        justifyContent:"space-between",
        width:'150px',
        ...sx
        
      }}
     >
       <ArrowForwardIcon />  Apply 
    </KMRApplyButton>
{/* -----------------------------Dark Mode----------------------------------- */}
    {/* <KMRApplyButton
      onClick={onClick}
      sx={{ 
        bgcolor:'none',
        border:'2px solid aqua',
        color:'aqua',
        '&:hover' :{

            border:'2px solid aqua',
        },
        px:2,
        justifyContent:"space-between",
        width:'150px',
        ...sx
        
      }}
     >
       <ArrowForwardIcon />  Apply 
    </KMRApplyButton> */}
    </>
  )
}

export default ApplyButton