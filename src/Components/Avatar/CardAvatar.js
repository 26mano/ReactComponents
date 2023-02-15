import React from 'react'
import {Avatar  as KMRCardavatar} from '@mui/material';

const CardAvatar = ({src, imgalt}) => {
  return (
    <div>
    <KMRCardavatar sx={{width:"60px",height:"60px"}}>
    <img src={src} alt={imgalt} style={{width:"60px"}}/>
    </KMRCardavatar>
    </div>
  )
}

export default CardAvatar