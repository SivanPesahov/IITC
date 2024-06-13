import React, { useEffect, useRef } from "react";
import axios from "axios";

function AddTodoForm(props){

    const addingBar = useRef(null)
    const URL = 'http://localhost:8001/initialTodos/'

    async function createTodo(ev){
        ev.preventDefault();
        try{
            const { data: newTodo } = await axios.post(URL, {
                title: addingBar.current.value,
                isComplete: false,
                })
            props.settodoList((prev) => {return [...prev, newTodo]})
            addingBar.current.value = ''
        }catch (err) {
            console.log(err);
            alert("Cant Create!");
            }
    }

    useEffect(() => {addingBar.current.focus()}, [props.todoList])

    return (
      <>
      <form className="add-form" onSubmit={createTodo} >
          <input
            type="text"
            value={props.newTodo}
            onChange={(ev) => props.setNewTodo(ev.target.value)}
            ref={addingBar}
            placeholder="add new task here"
          />
          <button>Add</button>
        </form>
      </>
    )
  }

  export default AddTodoForm;