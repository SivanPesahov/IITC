import React from "react"
import LinearProgress from '@mui/material/LinearProgress';

function TodoStatistics(props){

    const {todoList} = props
    
    function returnCompletedTodos(){
      return todoList.reduce((acc, todoItem) => {
        if(todoItem.isComplete) acc += 1
        return acc
      }, 0)
    }

    return (
      <>
        <h2 className="message">Total number of tasks: {todoList.length}</h2>
        <h2 className="message">Completed tasks: {returnCompletedTodos()}</h2>
        <h2 className="message">Uncompleted tasks: {todoList.length - returnCompletedTodos()}</h2>
        <div className="progress-bar-container">
            <LinearProgress variant="determinate" value={(returnCompletedTodos()*100)/(todoList.length)} sx={{
          width:'98%',
          borderRadius: '5px',
          height: '10px', 
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'green', 
          },
          backgroundColor: 'lightgray', 
        }}/>
        </div>
      </>
    )   
  }

  export default TodoStatistics;