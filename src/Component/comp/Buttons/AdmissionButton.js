import React from 'react'
import {Button as KMRAdmissionButton} from '@mui/material';
import {SchoolOutlined  as AdmissionIcon} from '@mui/icons-material';
// import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';


const AdmissionButton = ({sx, onClick,Iconsx }) => {
  return (
    <>
    <KMRAdmissionButton 
    onClick={onClick}
    size='small' 
    sx={{ 
        fontSize: '11px', 
        color: "common.black",
        ...sx
     }} 
        >
      <AdmissionIcon fontSize='medium'  sx={{ color: "aqua", mr: 1 , ...Iconsx}} />
        Admission
    </KMRAdmissionButton>
    </>
  )
}

export default AdmissionButton