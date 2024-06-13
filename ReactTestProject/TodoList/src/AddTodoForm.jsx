import React, { useEffect, useRef } from "react";

function AddTodoForm({ todoList, settodoList, newTodo, setNewTodo }){

    function makeId(length) {
        let result = "";
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }

    function createTodo(ev){
      ev.preventDefault();
  
      const newTodoToAdd = {
        id: makeId(todoList.length),
        title: newTodo,
        isComplete: false
      };
  
      const newTodos = [...todoList];
      newTodos.push(newTodoToAdd);
      settodoList(newTodos);
  
    }
  
    const addingBar = useRef(null)
    useEffect(() => {addingBar.current.focus()}, [todoList])
    useEffect(() => {addingBar.current.value = ''}, [todoList])

    return (
      <>
      <form className="add-form" onSubmit={createTodo}>
          <input
            type="text"
            value={newTodo}
            onChange={(ev) => setNewTodo(ev.target.value)}
            ref={addingBar}
          />
          <button>Add</button>
        </form>
      </>
    )
  }

  export default AddTodoForm;