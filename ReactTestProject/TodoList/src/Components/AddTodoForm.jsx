import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import { Link, NavLink, Navigate, useNavigate , Route, Routes } from "react-router-dom";


function AddTodoForm(props){

  const [addingError, setAddingError] = useState(false);
  const [open, setOpen] = useState(false);
  const addingBar = useRef(null)
  const URL = 'http://localhost:8001/initialTodos/'
  const navigate = useNavigate();
    
  
  const goToList = () => {
      navigate('/todos/list');
    };
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  async function createTodo(ev){
    ev.preventDefault();
    try{
        const { data } = await axios.post(URL, {
            title: addingBar.current.value,
            labels: ["1", "2", "3"],
            isComplete: false,
            })
        addingBar.current.value = ''
        goToList()
    }catch (err) {
      setAddingError(true)
      setOpen(true)
    }
  }

  return (
    <>
      <form className="add-form" onSubmit={createTodo} >
        <TextField id="outlined-basic" label="Add task here" variant="outlined" inputRef={addingBar} />
        <AddBoxIcon
          onClick={createTodo}
          sx={{
            fontSize: '2rem',
            cursor: 'pointer',
            color: 'green'
          }}
        />
      </form>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={'adding error'}
      />
    </>
  )
}

  export default AddTodoForm;