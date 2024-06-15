import React from "react"

function TodoStatistics(props){

    const {todoList} = props
    
    function returnCompletedTodos(){
      return props.todoList.reduce((acc, todoItem) => {
        if(todoItem.isComplete) acc += 1
        return acc
      }, 0)
    }
    
    return (
      <>
        <h2 className="message">Total number of tasks: {todoList.length}</h2>
        <h2 className="message">Total number of completed tasks: {returnCompletedTodos()}</h2>
        <h2 className="message">Total number of uncompleted tasks: {todoList.length - returnCompletedTodos()}</h2>
      </>
    )
    
  }

  export default TodoStatistics;