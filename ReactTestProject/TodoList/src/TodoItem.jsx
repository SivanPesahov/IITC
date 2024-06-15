import axios from "axios";
import React, { useState, useRef } from "react";


function TodoItem ({todoItem, settodoList, todoList}){
    
    const [editTodo, setEditTodo] = useState(todoItem.title);
    const URL = 'http://localhost:8001/initialTodos/'
    const changingBar = useRef(null)

  
    async function deleteTodo(todoID){
        try{
            await axios.delete(URL + todoID)
            settodoList((prevTodos) => {
                return prevTodos.filter((todo) => todo.id !== todoID);})
        } catch(err){
            console.log(err);
            alert("Cant remove!");
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
            console.log(err);
            alert("Cant edit!");
        }
    }
  
    return (
      <>
        <li key={todoItem.id} className="todo-item">
            <input className="check-box" type="checkbox" checked={todoItem.isComplete} onChange={() => lineThroughTodo(todoItem)}/>
            <div className="task-container">
              <label style={{ textDecoration: todoItem.isComplete ? 'line-through' : 'none' }}>{todoItem.title}</label>
              <input type="text" placeholder="edit task here" id={todoItem.id} ref={changingBar} onChange={(ev) => setEditTodo(ev.target.value)} />
            </div>
            <div className="btn-container">
              <button onClick={() => updateTodo(todoItem)}>Update Task</button>
              <button onClick={() => deleteTodo(todoItem.id)}>Delete Task</button>
            </div>
        </li>
      </>
    )
  }

  export default TodoItem;