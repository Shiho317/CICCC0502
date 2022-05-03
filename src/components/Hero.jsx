import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import DataTable from './DataTable';
import { useSelector } from 'react-redux';

const Hero = () => {

  const [ id, setId ] = useState('')

  const datas = useSelector(state => state.data);
  const filter = datas.filter(data => String(data.id).includes(String(id)))

  return (
    <div style={{padding: '1rem', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      <TextField 
        label="Filter issues by id" 
        variant="standard" 
        color='secondary' 
        size="small"
        InputProps={{style: {fontSize: 14}}}
        InputLabelProps={{style: {fontSize: 14}}}
        sx={{width: '100%'}}
        onChange={(e) => setId(e.target.value)}/>
        <DataTable datas={filter}/>
    </div>
  )
}

export default Hero