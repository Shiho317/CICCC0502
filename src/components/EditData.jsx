import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { updateData } from '../features/dataSlice';

const EditData = ({ editData, isOpen, isClose, setOpenEditor }) => {

  const originId = editData.id
  const [ id, setIsId ] = useState(editData.id)
  const [ title, setIsTitle ] = useState(editData.title)
  const [ state, setIsState ] = useState(editData.state)
  const [ url, setIsUrl ] = useState(editData.url)
  const [ created, setIsCreated ] = useState(editData.created)
  const [ updated, setIsUpdated ] = useState(editData.updated)

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateData(
      {
      originId,
      id,
      title,
      state,
      url,
      created,
      updated
      }
    ))
    setOpenEditor(false)
  }

  return (
    <Modal 
      open={isOpen} 
      onClose={isClose} 
      sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{background: 'white', padding: '1rem', borderRadius: 5, width: '30rem', height: '35rem', display: 'flex', flexDirection: 'column', gap: '2rem', overflow: 'scroll'}}>
        <h2 style={{color: 'black'}}>Issue id: {editData.id}</h2>
        <form style={{display: 'flex', flexDirection: 'column', gap: '2rem'}} onSubmit={(e) => handleSubmit(e)}>
          <TextField id="id" label="Id" variant="standard" color='secondary' value={id} onChange={(e) => setIsId(e.target.value)} required/>
          <TextField id="title" label="Title" variant="standard" color='secondary' value={title} onChange={(e) => setIsTitle(e.target.value)} required/>
          <TextField id="state" label="State" variant="standard" color='secondary' value={state} onChange={(e) => setIsState(e.target.value)} required/>
          <TextField id="url" label="Url" variant="standard" color='secondary' value={url} onChange={(e) => setIsUrl(e.target.value)}/>
          <TextField id="created" label="Created at" variant="standard" color='secondary' value={created} onChange={(e) => setIsCreated(e.target.value)}/>
          <TextField id="updated" label="Updated at" variant="standard" color='secondary' value={updated} onChange={(e) => setIsUpdated(e.target.value)}/>
          <div style={{display: 'flex', gap: '1rem'}}>
            <Button type='submit' disabled={title && state ? false : true}>Save</Button>
            <Button onClick={isClose}>Cancel</Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default EditData