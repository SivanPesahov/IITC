import React from "react"

function TodoStatistics(props){

    function returnCompletedTodos(){
      return props.todoList.reduce((acc, todoItem) => {
        if(todoItem.isComplete) acc += 1
        return acc
      }, 0)
    }
  
    function returnUncompletedTodos(){
      return props.todoList.reduce((acc, todoItem) => {
        if(!todoItem.isComplete) acc += 1
        return acc
      }, 0)
    }
    
    return (
      <>
        <h2 className="message">Total number of tasks: {props.todoList.length}</h2>
        <h2 className="message">Total number of completed tasks: {returnCompletedTodos()}</h2>
        <h2 className="message">Total number of uncompleted tasks: {props.todoList.length - returnCompletedTodos()}</h2>
      </>
    )
    
  }

  export default TodoStatistics;