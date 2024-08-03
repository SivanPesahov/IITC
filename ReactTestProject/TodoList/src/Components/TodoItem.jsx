import axios from "axios";
import React, { useState, useRef, forwardRef } from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import HelpIcon from '@mui/icons-material/Help';
import { Link, NavLink, Navigate, useNavigate , Route, Routes } from "react-router-dom";

function TodoItem ({todoItem, settodoList, todoList, isDetail}){
    
    const [editTodo, setEditTodo] = useState(todoItem.title);
    const [editError, setEditError] = useState(false);
    const [open, setOpen] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [currentTodoId, setCurrentTodoId] = useState(null);
    const URL = 'http://localhost:8001/initialTodos/'
    const changingBar = useRef(null)
    const navigate = useNavigate();
    
  
    const goToList = () => {
        navigate('/todos/list');
      };

    const TopNavLink = forwardRef((props, ref) => {
        const { href, children } = props;
        return (
            <NavLink
            style={({ isActive }) => {
                return isActive ? { color: "salmon" } : {};
            }}
            to={href}
            >
            {children}
            </NavLink>
        );
    })

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const handleClickOpen = (todoID) => {
        setCurrentTodoId(todoID);
        setOpenDialog(true);
      };

      const handleCloseAlert = (agree) => {
        setOpenDialog(false);
        if (agree) {
          deleteTodo(currentTodoId);
          goToList()
        }
      };

    async function deleteTodo(todoID){
        try{
            await axios.delete(URL + todoID)
            settodoList((prevTodos) => {
                return prevTodos.filter((todo) => todo.id !== todoID);})
            goToList()
        } catch(err){
            setDeleteError(true)
            setOpen(true)     
        }
    }

    async function lineThroughTodo(todoToUpdate){
        try {
            const { data : updatedTodo } = await axios.patch(URL + todoToUpdate.id, {isComplete: !todoToUpdate.isComplete})
            settodoList((prevTodos) => {
                return prevTodos.map((todo) => {
                    if(todo.id === todoToUpdate.id){
                        return updatedTodo
                    }
                    return todo
                })
            })
        }catch (err){
            console.log(err);
            alert("Cant Toggle!");
        }
    }
  
    async function updateTodo(todoItemToChange){
        try{
            const {data : updatedTodo} = await axios.patch(URL + todoItemToChange.id, {title: changingBar.current.value})
            settodoList((prevTodos) => {
                return prevTodos.map((todo) => {
                    if(todo.id === todoItemToChange.id){
                        return updatedTodo
                    }
                    return todo
                })
            })
        }catch (err){
            setEditError(true)
            setOpen(true) 
        }
    }

    function getLabels(todoItem){
        return todoItem.labels.map((lable, key) => {return (
        <Chip label={lable} key={key}></Chip>)})
    }
  
    return (
      <>
        <li key={todoItem.id} className="todo-item">
            <Checkbox checked={todoItem.isComplete} onChange={() => lineThroughTodo(todoItem)}
             sx={{
                color: 'green',
                '&.Mui-checked': {
                    color: 'green',
                },
        }}/>

            <div className="">
                <div className="task-labels-container">
                    <label style={{marginRight:'0.5rem', textDecoration: todoItem.isComplete ? 'line-through' : 'none' }}>{todoItem.title}</label>
                    <Stack direction="row" spacing={1}>
                        {isDetail ? getLabels(todoItem) : null}
                    </Stack>
                </div>
              <TextField id="outlined-basic" label="Edit here" variant="outlined" inputRef={changingBar} />
            </div>

            <div className="btn-container">
                <Tooltip title="Update">
                    <EditIcon onClick={() => {updateTodo(todoItem)}}
                        sx={{
                        fontSize: '2rem',
                        cursor: 'pointer',
                        color: 'blue'
                        }}
                    />
                </Tooltip>
                <Tooltip title="Delete">
                    <RemoveCircleIcon
                        onClick={() => {handleClickOpen(todoItem.id)}}
                        sx={{
                        fontSize: '2rem',
                        cursor: 'pointer',
                        color: 'red'
                        }}
                    />
                </Tooltip>     
                <Tooltip title="Details">
                    {!isDetail ? <TopNavLink href= { "/todos/" + todoItem.id }>Details</TopNavLink> : null}
                </Tooltip>     
                                        
            </div>
    
            <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message={editError ? 'edit error' : 'removing error'}  
            />

            <Dialog
                open={openDialog}
                onClose={() => handleCloseAlert(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirm removing"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Pressing 'AGREE' will remove the taske complitly!
                    </DialogContentText>
                </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleCloseAlert(false)}>Disagree</Button>
                        <Button onClick={() => handleCloseAlert(true)} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>

        </li>
      </>
    )
  }


  export default TodoItem;