import React, { useState } from "react";


function TodoItem ({todoItem, settodoList, todoList}){

    const [editTodo, setEditTodo] = useState(todoItem.title);
  
    function lineThroughTodo(taskID){
      const newList = todoList.map((todoItem) =>{
        if (todoItem.id === taskID){
          let boolianToReverse = todoItem.isComplete
          return {
            ...todoItem, 
            isComplete : !boolianToReverse}
        }
        return todoItem
      })
      settodoList(newList)
    }
  
    function deleteTodo(todoID){
      settodoList(todoList.filter((todoItem) => todoItem.id !== todoID));
    }
  
    function updateTodo(todoID){
      const newTodos = todoList.map((todoItem) => {
        if (todoItem.id === todoID) {
          return {
            ...todoItem,
            title: editTodo
          };
        }
        return todoItem;
      });
  
      settodoList(newTodos);
    }
  
    return (
      <>
        <li key={todoItem.id} className="todo-item">
            <input type="checkbox" checked={todoItem.isComplete} onChange={() => lineThroughTodo(todoItem.id)}/>
            <div className="task-container">
              <label style={{ textDecoration: todoItem.isComplete ? 'line-through' : 'none' }}>{todoItem.title}</label>
              <input type="text" id={todoItem.id} onChange={(ev) => setEditTodo(ev.target.value)} />
            </div>
            <div className="btn-container">
              <button onClick={() => updateTodo(todoItem.id)}>Update Task</button>
              <button onClick={() => deleteTodo(todoItem.id)}>Delete Task</button>
            </div>
        </li>
      </>
    )
  }

  export default TodoItem;