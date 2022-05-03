import React, { useCallback, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const NewData = ({isCloseModal, openModal}) => {

  const [ title, setIsTitle ] = useState('')
  const [ state, setIsState ] = useState('')

  const titleValue = useCallback((e) => {
    setIsTitle(e.target.value)
  },[]);

  const stateValue = useCallback((e) => {
    setIsState(e.target.value)
  },[]);

  return (
    <Modal 
      open={openModal} 
      onClose={isCloseModal} 
      sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{background: 'white', padding: '1rem', borderRadius: 5, width: '30rem', height: '35rem', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        <h2 style={{color: 'black'}}>Add new Issue</h2>
        <form style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <TextField id="title" label="Title" variant="standard" color='secondary' value={title} onChange={(e) => titleValue(e)} required/>
          <TextField id="state" label="State" variant="standard" color='secondary' value={state} onChange={(e) => stateValue(e)} required/>
          <TextField id="url" label="Url" variant="standard" color='secondary'/>
          <TextField id="created" label="Created at" variant="standard" color='secondary'/>
          <TextField id="updated" label="Updated at" variant="standard" color='secondary'/>
          <div style={{display: 'flex', gap: '1rem'}}>
            <Button type='submit' disabled={title && state ? false : true}>Save</Button>
            <Button>Cancel</Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default NewData