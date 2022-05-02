import React from 'react'
import TextField from '@mui/material/TextField';
import DataTable from './DataTable';

const Hero = () => {
  return (
    <div style={{padding: '1rem', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      <TextField 
        label="Filter issues" 
        variant="standard" 
        color='secondary' 
        size="small"
        InputProps={{style: {fontSize: 14}}}
        InputLabelProps={{style: {fontSize: 14}}}
        sx={{width: '100%'}}/>
        <DataTable/>
    </div>
  )
}

export default Hero