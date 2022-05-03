import React from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { deleteData } from '../features/dataSlice';

const DeleteData = ({ deleteOne, setOpenConfirm, isConfirm, isNotConfirm }) => {

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteData(deleteOne.id))
    setOpenConfirm(false)
  }

  return (
    <Modal 
      open={isConfirm} 
      onClose={isNotConfirm} 
      sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{background: 'white', padding: '1rem', borderRadius: 5, width: '50rem', height: '20rem', display: 'flex', flexDirection: 'column', gap: '2rem', overflow: 'scroll'}}>
        <h2 style={{color: 'black'}}>Are you sure?</h2>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <p>Id: {deleteOne.id}</p>
          <p>Title: {deleteOne.title}</p>
          <p>State: {deleteOne.state}</p>
          <p>Url: {deleteOne.url}</p>
          <div style={{display: 'flex', gap: '1rem'}}>
            <Button onClick={handleSubmit}>Delete</Button>
            <Button onClick={isNotConfirm}>Cancel</Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteData